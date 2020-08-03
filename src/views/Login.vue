<template>
  <div class="main columns">
    <div class="column"></div>
    <div class="column">
    <h1 class="title is-3">Login or Sign Up as a Mentor</h1>
    <b-field label="Email">
      <b-input v-model="email"></b-input>
    </b-field>
    <b-field label="Password">
      <b-input type="password" v-model="password" password-reveal></b-input>
    </b-field>
    <p>{{errMessage}}</p>
    <div class="level">
    <b-button @click="login">Login</b-button>
    <b-button @click="signup">Signup</b-button>
    </div>
    </div>
    <div class="column"></div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Login',
  data: () => ({
    email: "",
    password: "",
    errMessage: ""
  }),
  methods: {
    login(){
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch(error => {
                       const notif = this.$buefy.notification.open({
                    duration: 5000,
                    message: error.message,
                    position: 'is-bottom-right',
                    type: 'is-danger',
                    hasIcon: true
                })
      });
      this.$router.push("/me");
    },
    signup(){
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).catch(error => {
        this.errMessage = error.message;
      });
      firebase.firestore().collection("mentors").doc(firebase.auth().currentUser.uid).set({});
      this.$router.push("/me");
    }
  }
}
</script>