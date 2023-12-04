<!-- UserList.vue -->
<template>
    <div class="user-list">
      <input v-model="newUser" placeholder="Enter a new Invitee email" />
      <button @click="addUser">Add</button>
      <ul>
        <li v-for="user in users" :key="user.id">{{ user.name }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name:"InviteeList",
    data() {
      return {
        newUser: '',
        users: [
        //   { id: 1, name: 'u1 },
        //   { id: 2, name: 'User B' },
        //   { id: 3, name: 'User C' },
          // Add more users as needed
        ],
      };
    },
    methods: {
      addUser() {
        if (this.newUser.trim() !== '') {
          const newUserObject = { id: this.users.length + 1, name: this.newUser.trim() };
          this.users.push(newUserObject);
          this.newUser = ''; // Clear the input box after adding a user
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add styles for the UserList component as needed */
  .user-list {
    max-width: 400px;
    margin: auto;
    padding: 20px;
  }
  
  input {
    width: 60%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  button {
    width: 28%;
    padding: 10px;
    margin-bottom: 10px;
    border: none;
    background-color: #007bff;
    color: white;
    border-radius: 4px;
    cursor: pointer;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  li {
    padding: 10px;
    background-color: #f8f9fa;
    margin-bottom: 5px;
    border-radius: 4px;
  }
  </style>
  