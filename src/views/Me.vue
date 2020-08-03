<template>
  <div class="main columns">
    <div class="column"></div>
    <div class="column">
    <h1 class="title is-3">Update Information About Yourself</h1>
    <b-field label="Name">
      <b-input v-model="name"></b-input>
    </b-field>
    <b-field label="Preferred Email Address">
        <b-input v-model="contact"></b-input>
    </b-field>
    <b-field label="Education Level (current grade, school or degree)">
      <b-input v-model="eduLevel"></b-input>
    </b-field>
    <b-field label="Current Position">
      <b-input v-model="currPosition"></b-input>
    </b-field>
    <b-field label="Description (skills, experience, etc.)">
        <b-input v-model="description"></b-input>
    </b-field>
    <b-checkbox v-model="available"> I am available to have more students reach out to me. </b-checkbox> <br>
    <b-button @click="save">Save</b-button>
    </div>
    <div class="column"></div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Me',
  data: () => ({
    name: "",
    eduLevel: "",
    description: "",
    contact: "",
    currPosition: "",
    available: true,
  }),
  created(){
          const firebaseConfig = {
      apiKey: "AIzaSyD2HZX8KeYTbeNMA9G4Q79jT2fvWTnRjM8",
      authDomain: "mentorme-896c4.firebaseapp.com",
      databaseURL: "https://mentorme-896c4.firebaseio.com",
      projectId: "mentorme-896c4",
      storageBucket: "mentorme-896c4.appspot.com",
      messagingSenderId: "877888191358",
      appId: "1:877888191358:web:403a86f068e94d2a00512f",
      measurementId: "G-P7M2C1M8DQ"
    };
    if(firebase.apps.length === 0){
          firebase.initializeApp(firebaseConfig);
    }
    if(!firebase.auth().currentUser){
      this.$router.push("/login");
    }

    firebase.firestore().collection("mentors").doc(firebase.auth().currentUser.uid).get().then((doc) => {
      console.log(doc);
      var d = doc.data();
          this.name = d.name;
          this.eduLevel = d.education;
          this.description = d.description;
          this.currPosition = d.currPosition;
          this.available = d.available;
          this.contact = d.contact;
      })


  },
  methods: {
    save(){
        firebase.firestore().collection("mentors").doc(firebase.auth().currentUser.uid).update({
            name: this.name,
            education: this.eduLevel,
            description: this.description,
            currPosition: this.currPosition,
            available: this.available,
            contact: this.contact,
            total: this.eduLevel + " " + this.description + " " + this.currPosition + " " + this.name
        });
    }
  }
}
</script>