import { database, messaging } from "./firebase";

export default function(user) {
  messaging.requestPermission()
  .then(() => messaging.getToken())
  .then((token) => {
    database.ref('users')
            .child('users.uid')
            .child('token')
  })
  .catch(console.error());
}