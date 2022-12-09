<template>
    <IonPage>
        <IonHeader>
            <ion-toolbar>
                <IonTitle>{{ PageTitle}}</IonTitle>
            </ion-toolbar>
        </IonHeader>
        <IonContent>
            <slot/>
        </IonContent>
    </IonPage>
</template>
<script>
import {IonPage, 
        IonContent,
        IonHeader,
        IonTitle,
        iontoolbar
    } from '@ionic/vue';

export default {
    components: {
        IonPage,
        IonHeader,
        IonTitle,
        IonContent,
        ionToolbar
    },
}
</script>