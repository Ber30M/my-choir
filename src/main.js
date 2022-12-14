import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  IonApp, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonicVue,
  IonRouterOutlet , IonItem, IonLabel, IonInput, IonButton, IonSelect, IonSelectOption, IonList, IonFab, IonIcon
} from '@ionic/vue';
import '@ionic/core/css/ionic.bundle.css'

const app = createApp(App).use(IonicVue).use(router).use(store);

app.component("IonRouterOutlet", IonRouterOutlet)
app.component("IonApp", IonApp)
app.component("IonPage", IonPage)
app.component("IonHeader", IonHeader)
app.component("IonToolbar", IonToolbar)
app.component("IonTitle", IonTitle)
app.component("IonContent", IonContent)
app.component("IonItem", IonItem)
app.component("IonLabel", IonLabel)
app.component("IonInput", IonInput)
app.component("IonButton", IonButton)
app.component("IonSelect", IonSelect)
app.component("IonSelectOption", IonSelectOption)
app.component("IonList", IonList)
app.component("IonFab", IonFab)
app.component("IonIcon", IonIcon)

app.mount('#app');