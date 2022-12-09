<template>
  <ion-page>
    <div class="container">
      <div class="centered">
        <ion-item>
          <ion-label position="floating">username</ion-label>
          <Ion-Input type="text" />
        </ion-item>
        <ion-item>
          <Ion-label position="floating">password</Ion-label>
          <Ion-input type="password" />
        </ion-item>
        <ion-button expand="block" @click="seConnecter">connexion</ion-button>
      </div>
    </div>
  </ion-page>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    seConnecter() {
      let logins = {
        username: this.username,
        password: this.password,
      }
      this.$store.state.user = logins
    },
  },
};
</script>
<style scoped>
.container {
  display: flex;
  justify-content: center;
  background: rgb(44, 22, 63);
}
.centered {
  margin-top: 30%;
  width: 50%;
}
</style>
