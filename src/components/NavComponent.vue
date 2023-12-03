<template>
    <nav class="navbar">
      <div class="nav-left">
        <router-link to="/home">
          <div class="nav-button">
            <font-awesome-icon icon="home" class="nav-icon" />
          </div>
        </router-link>
      </div>
  
      <div class="nav-right">
        <router-link to="/profile">
          <div class="profile-circle">
            <!-- You can customize the profile circle content (e.g., user initials, image, etc.) -->
            <!-- <span>US</span> -->
            <font-awesome-icon icon="user"  class="nav-icon" />
          </div>
        </router-link>
      </div>
    </nav>
  </template>
  
  <script>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { faHome } from '@fortawesome/free-solid-svg-icons';
  
  export default {
    components: {
      FontAwesomeIcon,
    },
    data() {
      return {
        faHome,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Your component-specific styles go here */
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3vw;
    border-radius: 5vw;
    background-color: lightgreen; /* Adjust this color to match your theme */
    color: white;
  }
  
  .nav-left {
    display: flex;
    align-items: center;
  }
  
  .nav-right {
    display: flex;
    align-items: center;
  }
  
  .nav-button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #fff; /* Change this to the color that matches your theme */
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  
  .nav-icon {
    font-size: 18px;
    color: black;
  }
  
  .profile-circle {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #333;
    font-weight: bold;
    cursor: pointer;
  }
  
  .profile-circle:hover {
    background-color: #ddd;
  }
  </style>
  