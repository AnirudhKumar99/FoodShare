<!-- AddEventPage.vue -->
<template>
    <div>
      <!-- <h2>Add Event</h2> -->
      <AddEvent @add-event="handleAddEvent" />
    </div>
  </template>
  
  <script>
  import AddEvent from '@/components/AddEvent.vue';
  
  export default {
    methods: {
      handleAddEvent(newEvent) {
        // Handle the new event data, for example, add it to a list of events
        console.log('New Event:', newEvent);
      },
    },
    components: {
      AddEvent,
    },
  };
  </script>
  
  <style scoped>
  /* Add styles for the AddEventPage component as needed */
  </style>
  