<!-- ChatCard.vue -->
<template>
    <div class="chat-card">
      <h3>{{ ngoName }}</h3>
      <!-- Additional chat card details can be added here -->
    </div>
  </template>
  
  <script>
  export default {
    props: {
      ngoName: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add styles for the ChatCard component as needed */
  .chat-card {
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 8px;
    margin-bottom: 10px;
  }
  </style>
  