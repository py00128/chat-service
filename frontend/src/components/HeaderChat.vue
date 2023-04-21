<template>
    <div>
      <header>
        <h3>{{ otherUser }}</h3>
      </header>
      <div class="chat-container">
        <div id="chat-conversation">
          <ul>
            <li v-for="(message, index) in messages" :key="index" :class="message.sender">
              <p>{{ message.content }}</p>
            </li>
          </ul>
        </div>
        <div id="chat-input">
          <input v-model="newMessage" placeholder="Send a message..." />
          <button class="send-button" @click="sendMessage">Send</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "HeaderChat",
    props: {
      otherUser: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        messages: [
          { content: "Hello!", sender: "otherUser" },
          { content: "Hi there!", sender: "currentUser" },
        ],
        newMessage: "",
      };
    },
    methods: {
      sendMessage() {
        if (this.newMessage) {
          this.messages.push({ content: this.newMessage, sender: "currentUser" });
          this.newMessage = "";
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .chat-container {
    width: 80%;
    height: 85vh;
    margin: 10px auto;
    padding: 0px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-radius: 10px;
    background-color: #f5f5f5;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  }
  
  .chat-container div {
    border-style: solid;
    border-width: 1px;
    padding: 0px;
  }
  
  .chat-container #header {
    padding: 0px;
    border-style: solid;
    border-width: 1px;
    height: 4rem;
    align-items: center;
    vertical-align: middle;
    background-color: #ffffff;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  }
  
  .chat-container #header h3 {
    align-self: center;
    vertical-align: middle;
    padding-top: 10px;
    padding-left: 15px;
    padding-right: 15px;
    font-weight: 500;
    font-size: 20px;
    margin: 0;
  }
  
  .chat-container #chat-conversation {
    flex-grow: 1;
    padding: 10px;
    overflow-y: scroll;
  }
  
  .chat-container #chat-conversation ul {
    padding-left: 0;
    margin: 0;
    list-style: none;
  }
  
  .chat-container #chat-conversation li {
    display: flex;
    flex-direction: column;
    margin: 10px 0;
  }
  
  .chat-container #chat-conversation li p:first-child {
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  .chat-container #chat-conversation li.currentUser {
    justify-content: flex-end;
  }
  
  .chat-container #chat-conversation li.currentUser p {
    background-color: #708ca7;
    color: white;
  }
  
  .chat-container #chat-input {
    display: flex;
    align-items: center;
    border-color: rgb(236, 236, 236);
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    width: 100%;
    padding: 2px 5px;
    margin: 1px;
  }
  
  .chat-container #chat-input input {
    flex-grow: 1;
    margin: 0;
    border-radius: 30px;
    border-style: solid;
    padding-left: 20px;
    padding-right: 20px;
  }
  
  .chat-container #chat-input .send-button {
    margin-right: 10px;
    background-color: rgb(0, 120, 212);
    color: white;
  }
  </style>
  
  