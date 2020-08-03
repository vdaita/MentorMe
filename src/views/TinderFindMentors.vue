<template>
  <div class="columns">
      <div class="column">
          </div>
          <div class="column">
    <h1 class="title is-3">Find Mentors</h1>
    <br>
    <div v-if="dataLoaded">
        <!-- <b-field label="Search">
            <b-input placeholder="Search" type="search" v-model="searchTerm"></b-input>
            <b-button class="button is-primary" @click="search">Search</b-button>
        </b-field> -->
        </div>
        <!-- <card-swipe>
            <card-swipe-item v-for="card in cards" :key="card.key">
                    <div>
                        <h2>{{ card.name }}</h2>
                        <h3>{{ card.education }}</h3>
                        <b>{{ card.currPosition }}</b>
                        <b-button @click="email(card.contact)">Send An Email</b-button>
                        <p>{{ card.description }}</p>
                    </div>
            </card-swipe-item>
        </card-swipe> -->
        <card-swipe>
            <card-swipe-item>
                <div style="background-image: linear-gradient(to right, #fe686c 0%, #fe3c71 100%)">
                        <h2>{{ "Vijay Daita" }}</h2>
                        <h3>{{ "High School, Sophomore" }}</h3>
                        <b>{{ "Hackathon" }}</b>
                        <br>
                        <b-button @click="email('vdaita@gmail.com')">Send An Email</b-button>
                        <br>
                        <p>{{ "None" }}</p>

                </div>
            </card-swipe-item>
            <card-swipe-item>
                <div style="background-image: linear-gradient(to right, #add0f8 0%, #5ca2f8 100%);">
                        <h2>{{ "Vijay Daita 2" }}</h2>
                        <h3>{{ "A different person" }}</h3>
                        <b>{{ "Hackathon" }}</b>
                        <br>
                        <b-button @click="email('vdaita@gmail.com')">Send An Email</b-button>
                        <br>
                        <p>{{ "None" }}</p>

                </div>
            </card-swipe-item>
        </card-swipe>
    <!-- <div v-if="!dataLoaded">
        <b-progress></b-progress>
    </div> -->
    </div>
              <div class="column"></div>
            
  </div>
</template>

<script>
import firebase from 'firebase'
import { CardSwipe, CardSwipeItem } from '@eshengsky/vue-card-swipe';

export default {
  name: 'TinderFindMentors',
  components: {    CardSwipe,
    CardSwipeItem},
  data: () => ({
    searchTerm: "",
    mentors: [],
    cards: [],
    dataLoaded: false,
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
    firebase.initializeApp(firebaseConfig);
      
      
      firebase.firestore().collection("mentors").get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
              var data = doc.data();
              data.id = doc.id;
              this.mentors.push(data);
              console.log(data);
          });
          this.dataLoaded = true;
          this.cards = this.mentors;
          console.log("cards: ");
          console.log(this.cards)
      })
      console.log("data loaded");
  },
  methods: {
    search(){
        this.cards = this.mentors.filter(mentor => {
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