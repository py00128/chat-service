<template>
    <div id="chat-container">
      <div id="chat-content">
        <div v-for="(message, index) in messages" :key="index" :class="{ 'sent-message': message.sender === 'me', 'received-message': message.sender !== 'me' }">
          <p>{{ message.message }}</p>
        </div>
      </div>
      <div id="chat-input">
        <input type="text" placeholder="Send a message..." v-model="inputMessage">
        <font-awesome-icon id="sendButton" :icon="['fas', 'paper-plane']" @click="sendMessage" />
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'ChatContainer',
    data() {
      return {
        messages: [],
        inputMessage: ''
      }
    },
    props: {
      conversationID: String
    },
    watch: {
      conversationID: function (){
        this.getMessages();
      },
      inputMessage: function (){
        console.log(this.inputMessage);
      }
    },
    methods : {
      async getMessages(){
        const currentConversation = this.conversationID;
        const APICall = 'http://localhost:3000/inbox/' + currentConversation;
        axios.get(APICall)
        .then(response => {
          this.messages = response.data.messages;
        })
        .catch(error => {
          console.log(error);
        });
      },
    async sendMessage() {
    const currentMessage = this.inputMessage;
    const currentConversationId = this.conversationID;
    const requestBody = {
      message: currentMessage,
      conversationID: currentConversationId
    };

    try {
      const APICall = 'http://localhost:3000/userConversations/sendMessage';
      const response = await axios.post(APICall, requestBody);
      // Handle the response as needed
      console.log(response);

      // Clear the input field after sending the message
      this.inputMessage = '';
      
      //refresh chat
      const currentConversation = this.conversationID;
      const refreshChat = 'http://localhost:3000/inbox/' + currentConversation;
      // Make the API call to retrieve the messages
      const response2 = axios.get(refreshChat)
      this.messages = response2.data.messages;
      console.log(response2.data.messages)
    } catch (error) {
      console.error(error);
    }
  },
    },
    mounted() {
      const currentConversation = this.conversationID;
      const APICall = 'http://localhost:3000/inbox/' + currentConversation;
      // Make the API call to retrieve the messages
      axios.get(APICall)
        .then(response => {
          this.messages = response.data.messages;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
  </script>
  
  <style scoped>
  #chat-container {
    width: 75%;
    height: 100%;
    margin: 10px;
    background-color: white;
    border-radius: 5px;
    overflow: hidden;
  }
  
  #chat-input {
    width: 100%;
    height: 100%;
    background-color: black;
    height: 50px;
    display: flex;
    position: relative;
  }
  
  #chat-input input {
    width: 100%;
    border-radius: 50px;
    margin: 10px;
    padding-left: 10px;
    padding-right: 30px;
  }
  
  #chat-input input:focus {
    outline: none;
  }
  
  #chat-input svg {
    position: absolute;
    color: white;
    background-color: black;
    padding: 5px;
    border-radius: 20px;
    top: 27%;
    right: 1%;
    transition: color 0.2s;
  }
  
  #chat-input svg:hover {
    cursor: pointer;
    color: rgb(39, 126, 240);
  }
  
  #chat-content {
    height: 75vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  
  .sent-message {
    margin: 5px 10px;
    padding: 10px;
    border-radius: 10px;
    background-color: #dcf8c6;
    align-self: flex-end;
  }
  
  .received-message {
    margin: 5px 10px;
    padding: 10px;
    border-radius: 10px;
    background-color: #f4f4f4;
    align-self: flex-start;
  }
  </style>
  