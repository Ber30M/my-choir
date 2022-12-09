<template>
  <ion-page>
    <div class="container">
      <div class="centered">
        <ion-item>
          <IonLabel>username</IonLabel>
          <Ion-Input type="text" />
        </ion-item>
        <ion-item>
          <IonLabel>password</IonLabel>
          <Ion-input type="password" />
        </ion-item>
      </div>
    </div>
  </ion-page>
</template>

<script>
export default {};
</script>
<style scoped>
.container{
  display: flex;
  justify-content: center;
  background: rgb(44, 22, 63);
}
.centered {
  margin-top: 30%;
  width: 30%;
}
</style>
