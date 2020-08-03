<template>
  <div class="main">
    <h1>Find Mentors</h1>
    <div v-if="dataLoaded">
        <div class="block">
        <b-field label="Search">
            <b-input placeholder="Search" type="search"></b-input>
            <b-button class="button is-primary" @click="Search">Search</b-button>
        </b-field>
        </div>
        <div>
            <div v-for="mentor in mentors" :key="mentor.key">
                <h2 class="subtitle">{{ mentor.name }}</h2>
                <h3 class="title is-7">{{ mentor.education }}</h3>
                <b>{{ mentor.currPosition }}</b>
                <p>{{ mentor.contact }}</p>
                <p>{{ mentor.description }}</p>
            </div>
        </div>
    </div>
    <div v-if="!dataLoaded">
        <b-progress></b-progress>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/firestore'

export default {
  name: 'Incidents',
  data: () => ({
    search: "",
    mentors: [],
    dataLoaded: false
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
    firebase.initializeApp(firebaseConfig);
  },
  methods: {
    search(){
        
    }
  }
}
</script>