<!-- EventCard.vue -->
<template>
    <div class="event-card">
      <img :src="event.image" alt="Event Image" />
      <div class="event-details">
        <h3>{{ event.title }}</h3>
        <p>{{ event.date }} at {{ event.time }}</p>
        <p>{{ event.place }}</p>
        <p>{{ event.description }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      event: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add styles for the EventCard component as needed */
  .event-card {
    display: flex;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 15px;
  }
  
  img {
    width: 150px;
    object-fit: cover;
    border-radius: 8px 0 0 8px;
  }
  
  .event-details {
    padding: 15px;
  }
  
  h3 {
    margin: 0 0 10px;
  }
  
  p {
    margin: 0;
  }
  
  </style>
  
