<template>
  <div class="main columns">
      <div class="column"></div>
      <div class="column">
    <h1 class="title is-3">Email Mentor</h1>
    <b-field label="Your Email Address">
      <b-input v-model="email"></b-input>
    </b-field>
    <b-field label="Your Message">
      <b-input  v-model="message"></b-input>
    </b-field>
    <p>{{errMessage}}</p>
    <b-button @click="send()">Send</b-button>
    </div>
    <div class="column"></div>
  </div>
</template>

<script>
import firebase from 'firebase'
import axios from 'axios'

export default {
  name: 'Mail',
  data: () => ({
    to: "",
    email: "",
    message: "",
    errMessage: ""
  }),
  created(){
    this.to = this.$route.params.email;
  },
  methods: {
    send(){
      axios.post('http://127.0.0.1:5000/email', {
        email: this.email,
        to: this.to,
        message: this.message
      })
      .then((response) => this.errMessage = "Email sent!")
    }
  }
}
</script>