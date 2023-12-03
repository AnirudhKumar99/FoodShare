<template>
<NavComponent/>
<div style="margin:1em">
    <div class="search-bar">
      <input type="text" v-model="searchQuery" placeholder="Search NGOs by Name" />
      <!-- <button @click="search" class="search-button">Search</button> -->
    </div>
    <div class="ngo-list">
      <NgoCard v-for="ngo in filteredNgos" :key="ngo.id" :ngo="ngo" />
    </div>
  </div>
</template>

<script>
import NgoCard from '@/components/NgoCard.vue'; // Adjust the path based on your project structure
import NavComponent from '@/components/NavComponent.vue'
export default {
  components: {
    NgoCard,NavComponent
  },
  data() {
    return {
      searchQuery: '',
      ngos: [
        { id: 1, name: 'test', description: 'Description 1',email:'n1@mail.com',phone:'+91 9876698766', image: 'https://www.gstatic.com/webp/gallery3/1.sm.png' },
        { id: 2, name: 'NGO 2', description: 'Description 2',email:'n1@mail.com',phone:'+91 9876698766',  image: 'https://www.kasandbox.org/programming-images/avatars/marcimus.png' },
        // Add more NGOs as needed
      ],
    };
  },
  computed: {
    filteredNgos() {
      return this.ngos.filter(ngo =>
        ngo.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {
    search() {
      // Update the filteredNgos based on the search query
      this.filteredNgos = this.ngos.filter(ngo =>
        ngo.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
};
</script>

<style scoped>
/* Add styles for the NGO list as needed */
.search-bar {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

input {
  flex: 1;
  padding: 10px;
  font-size: 16px;
}

.search-button {
  background-color: #ffc107; /* Change this to the color that matches your theme */
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-left: 10px;
}

.ngo-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
