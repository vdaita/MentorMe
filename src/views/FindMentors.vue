<template>
  <div class="main columns">
    <div class="column"></div>
    <div class="column">
      <h1 class="title is-3">Find Mentors</h1>
      <br>
      <div v-if="dataLoaded">
          <div class="level">
                
              <b-input placeholder="Search" type="search" v-model="searchTerm"></b-input>
              <b-button class="button is-primary" @click="search">Search</b-button>
          </div>
          <br>
          <div class="card">
              <div v-for="mentor in filteredMentors" :key="mentor.key">
                  <h2 class="subtitle">{{ mentor.name }}</h2>
                  <h3 class="title is-7">{{ mentor.education }}</h3>
                  <b>{{ mentor.currPosition }}</b>
                  <br>
                  <b-button @click="email(mentor.contact)">Send An Email</b-button>
                  <p>{{ mentor.description }}</p>
                  <br>
              </div>
        </div>
      </div>
      <div v-if="!dataLoaded">
          <b-progress></b-progress>
      </div>
    </div>
    <div class="column"></div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'FindMentors',
  data: () => ({
    searchTerm: "",
    mentors: [],
    filteredMentors: [],
    dataLoaded: false
  }),
  created (){
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
      
      firebase.firestore().collection("mentors").get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
              var data = doc.data();
              data.id = doc.id;
              if(data.available){
                  this.mentors.push(data);
              }
              console.log(data);
          });
          this.dataLoaded = true;
          this.filteredMentors = this.mentors;
      })
      console.log("data loaded");
  },
  methods: {
    search(){
        this.filteredMentors = this.mentors.filter(mentor => {
          return mentor.total.toLowerCase().includes(this.searchTerm.toLowerCase())
        })
    },
    email(address){
      this.$router.push({name:'Mail', params:{email: address}});
    }
  },
  computed: {
    filteredList() {
      return this.mentors.filter(mentor => {
        return mentor.total.toLowerCase().includes(this.searchTerm.toLowerCase())
      })
    }
  }
}
</script>