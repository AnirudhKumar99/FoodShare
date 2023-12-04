<template>
    <NavComponent/>
    <div style="margin-top: 5%;" class="add-event">
      <h2>Add Event</h2>
      <form @submit.prevent="submitEvent">
        <!-- <label for="title">Title:</label> -->
        <input type="text" id="title" placeholder="Event name" v-model="event.title" required />
  
        <!-- <label for="description">Description:</label> -->
        <textarea id="description" placeholder="Description" v-model="event.description" required></textarea>
  
        <!-- <label for="date">Date:</label> -->
        <input type="date" id="date" placeholder="" v-model="event.date" required />
  
        <!-- <label for="time">Time:</label> -->
        <input type="time" id="time" v-model="event.time" required />
  
        <!-- <label for="place">Place:</label> -->
        <input type="text" id="place" placeholder="Location" v-model="event.place" required />
  
        <button @click="submitEvent" type="submit">Add Event</button>
      </form>
    </div>
  </template>
  
  <script>
  import NavComponent from '@/components/NavComponent.vue'
  export default {
    components:{
        NavComponent
    },
    data() {
      return {
        event: {
          title: '',
          description: '',
          date: '',
          time: '',
          place: '',
        },
      };
    },
    methods: {
      submitEvent() {
        alert ("Event added successfully");
        this.$router.push("/home")
      },
    },
  };
  </script>
  <style scoped>
  /* Add styles for the AddEvent component as needed */
  .add-event {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  label {
    font-weight: bold;
  }
  
  input,
  textarea {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    width: 95%;
  }
  
  button {
    background-color: #28a745;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 50%;
    margin: auto;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #218838;
  }
  
  </style>