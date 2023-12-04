<!-- UpcomingEvents.vue -->
<template>
    <NavComponent/>
    <div class="upcoming-events">
      <h2>Upcoming Events</h2>
      <div v-if="events.length === 0">No upcoming events</div>
      <div v-else>
        <EventCard v-for="event in events" :key="event.id" :event="event" />
      </div>
      <router-link to="/add-event" class="add-event-button">
      <span class="plus-icon">+</span>
    </router-link>
    </div>
  </template>
  
  <script>
  import EventCard from '@/components/EventCard.vue'; // Import the EventCard component
  import NavComponent from '@/components/NavComponent.vue'
  export default {
    data() {
      return {
        events: [
          // Replace this array with actual event data
          {
            id: 1,
            title: 'Event 1',
            date: '2023-12-31',
            time: '18:00',
            place: 'Event Place 1',
            description: 'Description for Event 1',
            image: 'https://placekitten.com/150/150', // Placeholder image URL
          },{
          id: 2,
          title: 'Tech Conference',
          date: '2024-01-10',
          time: '09:00',
          place: 'Tech Center',
          description: 'Explore the latest in technology trends.',
          image: 'https://placekitten.com/151/151',
          email: 'tech@example.com',
          phone: '987-654-3210',
        },
        {
          id: 3,
          title: 'Community Cleanup',
          date: '2024-02-05',
          time: '10:30',
          place: 'Local Park',
          description: 'Join us in making our community cleaner and greener!',
          image: 'https://placekitten.com/152/152',
          email: 'community@example.com',
          phone: '555-123-4567',
        },
        {
          id: 3,
          title: 'Community Cleanup',
          date: '2024-02-05',
          time: '10:30',
          place: 'Local Park',
          description: 'Join us in making our community cleaner and greener!',
          image: 'https://placekitten.com/152/152',
          email: 'community@example.com',
          phone: '555-123-4567',
        },
        {
          id: 3,
          title: 'Community Cleanup',
          date: '2024-02-05',
          time: '10:30',
          place: 'Local Park',
          description: 'Join us in making our community cleaner and greener!',
          image: 'https://placekitten.com/152/152',
          email: 'community@example.com',
          phone: '555-123-4567',
        },
          // Add more events as needed
        ],
      };
    },
    components: {
      EventCard,NavComponent
    },
  };
  </script>
  
  <style scoped>
  /* Add styles for the UpcomingEvents component as needed */
  .upcoming-events {
    position: relative;
    max-width: 800px;
    margin: auto;
    padding: 20px;
  }
  
  h2 {
    text-align: center;
  }
  
  .add-event-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    height: 1em;
    width: 1em;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 50%;
    padding: 15px;
    font-size: 24px;
    text-align: center;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-decoration: none;
  }
  
  .add-event-button:hover {
    background-color: #218838;
  }
  
  .plus-icon {
    display: inline-block;
    transform: translateY(2px);
  }
  </style>
  