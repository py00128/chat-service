<template>
    <div class="inbox">
      <ul>
        <li class="header">
          <p>Inbox</p>
        </li>
        <li v-for="user in users" :key="user.id" class="user" @click="onUserClicked(user)">
          <div class="avatar">{{ user.initials }}</div>
          <div class="details">
            <p class="name">{{ user.name }}</p>
            <p class="last-message">{{ user.lastMessage }}</p>
          </div>
        </li>
      </ul>
    </div>
  </template>
  <script>
  export default {
    name: "HeaderInbox",
    data() {
      return {
        users: [
          { id: 1, name: "John Doe", initials: "JD", lastMessage: "Hi there!" },
          { id: 2, name: "Jane Smith", initials: "JS", lastMessage: "How's it going?" },
          { id: 3, name: "Bob Johnson", initials: "BJ", lastMessage: "See you soon!" },
        ],
      };
    },
    methods: {
      onUserClicked(user) {
        this.$emit("userClicked", user);
      },
    },
  };
  </script>
  <style scoped>
  .inbox {
    width: 20%;
    height: 85vh;
    border-style: solid;
    border-width: 1px;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 5rem;
    margin-right: 0.5rem;
    background-color: rgb(236, 236, 236);
    border-radius: 10px;
  }
  
  .inbox ul {
    padding-left: 0px;
  }
  
  .inbox li {
    list-style: none;
    display: flex;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
  }
  
  .inbox .header {
    display: flex;
    justify-content: space-between;
    border-bottom-style: solid;
    border-bottom-width: 2px;
    border-bottom-color: rgb(236, 236, 236);
    height: 4rem;
    align-items: center;
    vertical-align: middle;
  }
  
  .inbox .header p {
    align-self: center;
    vertical-align: middle;
    padding-top: 5px;
    padding-left: 15px;
    padding-right: 15px;
    font-weight: 500;
    font-size: 20px;
  }
  
  .inbox .avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    margin-right: 10px;
    border-radius: 50%;
    background-color: #ccc;
    color: white;
    font-weight: bold;
  }
  
  .inbox .details {
    display: flex;
    flex-direction: column;
  }
  
  .inbox .name {
    font-weight: bold;
  }
  
  .inbox .last-message {
    font-size: 14px;
    color: #888;
  }
  </style>