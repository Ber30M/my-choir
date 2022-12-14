<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>CHORIST REGISTRATION</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-list>
        <ion-item>
          <ion-label position="floating">chorist's name</ion-label>
          <ion-input clear-input="true"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">chorist's surname</ion-label>
          <ion-input clear-input="true"></ion-input>
        </ion-item>
        <ion-item>
          <ion-select :multiple="false" position="floating" placeholder="Select voice">
            <ion-select-option value="Soprano">Soprano</ion-select-option>
            <ion-select-option value="Alto">Alto</ion-select-option>
            <ion-select-option value="Tenor">Tenor</ion-select-option>
            <ion-select-option value="Bass">Bass</ion-select-option>
          </ion-select>
        </ion-item>
      </ion-list>
      <ion-button>submit</ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
export default {
  data() {
    return {
      hello: "yes",
    };
  },
};
</script>
