<template>
  <div class="container">
    <header class="jumbotron">
      <h3>
        <strong>{{currentUser.name}}</strong> Profile
      </h3>
    </header>
    <p>
      <strong>Token: </strong>
      {{currentUser.accessToken}}
    </p>
    <p>
      <strong>Id: </strong>
      {{currentUser.id}}
    </p>
    <p>
      <strong>Email: </strong>
      {{currentUser.email}}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  computed: {
    currentUser(){
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    if(!this.currentUser) {
      this.$router.push('/');
    }
  }
};
</script>
