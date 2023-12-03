<template>
  <div>
    <NavComponent />
    <h2>Welcome to Food Share</h2>
    <router-link to="/view-ngos"
      ><button class="action-button">View NGOs</button></router-link
    >
    <router-link to="/add-events"
      ><button class="action-button">Add Events</button></router-link
    >
    <router-link to="/invitations"
      ><button class="action-button">Invitations</button></router-link
    >
  </div>
</template>

<script>
import NavComponent from "@/components/NavComponent.vue";

export default {
  name: "HomeComponent",
  components:{
    NavComponent
  }
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
