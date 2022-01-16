<template>
  <div class="col-md-12">
    <div class="card card-container">
      <img
        id="profile-img"
        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
        alt="profileimage"
        class="profile-img-card"
      />
      <form name="form" @submit.prevent="handleRegister">
        <div v-if="!successfull">
          <div class="form-group">
            <label for="name">Name</label>
            <input
              v-model="user.name"
              v-validate="'required|min:3|max:20'"
              type="text"
              class="form-control"
              name="name"
              id="name"
            >
            <div v-if="submitted && errors.has('username')" class="alert alert-danger">
              {{errors.first('name')}}
            </div>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              v-model="user.email"
              v-validate="'required|email|max:150'"
              type="email"
              class="form-control"
              name="email"
              id="email"
            >
            <div
              v-if="submitted && errors.has('email')"
              class="alert-danger"
            >{{errors.first('email')}}</div>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              v-model="user.password"
              v-validate="'required|min:8|max:20'"
              type="password"
              class="form-control"
              name="password"
              id="password"
            >
            <div
              v-if="submitted && errors.has('password')"
              class="alert-danger"
            >{{errors.first('password')}}</div>
          </div>
          <div class="form-group">
            <label for="password_confirmation">Password Confirmation</label>
            <input
              v-model="user.password_confirmation"
              v-validate="'required|min:8|max:20'"
              type="password"
              class="form-control"
              name="password_confirmation"
              id="password_confirmation"
            >
            <div
              v-if="submitted && errors.has('password')"
              class="alert-danger"
            >{{errors.first('password_confirmation')}}</div>
          </div>
          <div class="form-group">
            <button class="btn btn-primary btn-block">Sign Up</button>
          </div>
        </div>
      </form>
      <div
        v-if="message"
        class="alert"
        :class="successful ? 'alert-success' : 'alert-danger'"
      >{{message}}</div>
    </div>
    </div>
</template>

<script>
import User from '../models/user.js';

export default {
name: 'Register',
  data () {
    return {
      user: new User('', '', '', ''),
      submitted: false,
      successful: false,
      message: '',
    };
},
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
    mounted() {
      if(this.loggedIn) {
          this.$router.push('/profile')
      }
  },
  methods: {
    handleRegister() {
      this.message= '';
      this.submitted = true;
      this.$validator.validate().then(isValid => {
        if(isValid) {
          this.$store.dispatch('auth/register', this.user).then(
            data => {
              this.message = data.message;
              this.successful = true;
            },
            error => {
              this.message = (error.response && error.response.data.message) || error.message || error.toString();
              this.successful = false;
            }
          );
        }
      });
    }
  }
};
</script>

<style scoped>
label {
  display: block;
  margin-top: 10px;
}

.card-container.card {
  max-width: 350px !important;
  padding: 40px 40px;
}

.card {
  background-color: #f7f7f7;
  padding: 20px 25px 30px;
  margin: 0 auto 25px;
  margin-top: 50px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}

.profile-img-card {
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}
</style>
