<template>
    <IonPage>
        <IonHeader>
            <ion-toolbar>
                <IonTitle>All chorists</IonTitle>
            </ion-toolbar>
        </IonHeader>
        <IonContent>
            <ion-list>
                <ion-item>MAKOBERO Bertrad</ion-item>
                <ion-item>ISHIMWE Christ</ion-item>
            </ion-list>
        </IonContent>
    </IonPage>
</template>
<script>
import {IonPage, IonContent, IonHeader, IonTitle,  } from '@ionic/vue';
export default {
    components: {
        IonPage,
        IonHeader,
        IonTitle,
        IonContent
    },
}
</script>