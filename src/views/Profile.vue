<template>
  <div class="container">
    <header class="jumbotron">
      <h3>
        <strong>{{ currentUser.user.name }}</strong> Profile
      </h3>
    </header>
    <div class="col-md-12">
    <p class="card">
      <strong>Token: </strong>
      {{ currentUser.access_token }}
    </p>
    <p>
      <strong>Id: </strong>
      {{ currentUser.user.id }}
    </p>
    <p>
      <strong>Email: </strong>
      {{ currentUser.user.email }}
    </p>
    </div>
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
