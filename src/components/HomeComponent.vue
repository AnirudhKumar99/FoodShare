<template>
  <div>
    <NavComponent />
    <h2>Welcome to Food Share</h2>
    <router-link to="/view-ngos"
      ><button class="action-button">View NGOs</button></router-link
    >
    <router-link to="/upcoming-events"
      ><button class="action-button">Events</button></router-link
    >
    <router-link to="/invitations"
      ><button class="action-button">Invitations</button></router-link
    ><router-link to="/chats"
      ><button class="action-button">Chats</button></router-link
    >
    <!-- <AddEvent @add-event="handleAddEvent" /> -->
  </div>
</template>

<script>
import NavComponent from "@/components/NavComponent.vue";
// import AddEvent from '@/components/AddEvent.vue'; // Adjust the path based on your project structure

export default {
  name: "HomeComponent",
  methods: {
    handleAddEvent(newEvent) {
      // Handle the new event data, for example, add it to a list of events
      console.log('New Event:', newEvent);
    },
  },
  components: {
    // AddEvent,
    NavComponent
  },
};
</script>
<style scoped>
/* Your component-specific styles go here */
h2 {
  color: #333;
  text-align: center;
}

.action-button {
  width: 100%;
  padding: 15px;
  margin-top: 15px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  background-color: #4caf50;
  color: white;
  font-size: 18px;
  width:75%;
  transition: background-color 0.3s ease;
}

.action-button:hover {
  background-color: #45a049;
}
</style>
