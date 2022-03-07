import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"



const firebaseConfig ={
  apiKey: "AIzaSyCQ0zIMDJc9-fTDt5FxD_wIcg1EOzyZp64",
  authDomain: "auth-dev-4f69a.firebaseapp.com",
  projectId: "auth-dev-4f69a",
  storageBucket: "auth-dev-4f69a.appspot.com",
  messagingSenderId: "1022105048759",
  appId: "1:1022105048759:web:7a7f701c9d6ef8f198df32"


}
const app= initializeApp(firebaseConfig)
const auth = getAuth(app)


export { auth }