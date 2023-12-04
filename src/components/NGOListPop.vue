<!-- NGOList.vue -->
<template>
    <div class="ngo-list">
      <input v-model="searchQuery" placeholder="Search NGOs" />
      <ul>
        <li v-for="ngo in filteredNGOs" :key="ngo.id" @click="toggleSelection(ngo)">
          <label class="ngo-item">
            <input type="checkbox" v-model="selectedNGOs" :value="ngo" class="checkbox" />
            <div class="info">
              <span class="name">{{ ngo.name }}</span>
            </div>
          </label>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchQuery: '',
        NGOs: [
          { id: 1, name: 'NGO A' },
          { id: 2, name: 'NGO B' },
          { id: 3, name: 'NGO C' },
          // Add more NGOs as needed
        ],
        selectedNGOs: [],
      };
    },
    computed: {
      filteredNGOs() {
        // Filter NGOs based on the search query
        return this.NGOs.filter(ngo =>
          ngo.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      },
    },
    methods: {
      toggleSelection(ngo) {
        // Toggle the selection state of the NGO
        if (this.isSelected(ngo)) {
          this.selectedNGOs = this.selectedNGOs.filter(selectedNGO => selectedNGO.id !== ngo.id);
        } else {
          this.selectedNGOs.push(ngo);
        }
      },
      isSelected(ngo) {
        // Check if the NGO is selected
        return this.selectedNGOs.some(selectedNGO => selectedNGO.id === ngo.id);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add styles for the NGOList component as needed */
  .ngo-list {
    max-width: 400px;
    margin: auto;
    padding: 20px;
  }
  
  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .ngo-item {
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: #f8f9fa;
    margin-bottom: 5px;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s;
  }
  
  .ngo-item:hover {
    background-color: #e2e6ea;
  }
  
  .checkbox {
    margin-right: 5px; /* Reduced space for checkbox */
    width: 25px; /* Set width for checkbox */
    height: 25px; /* Set height for checkbox */
  }
  
  .info {
    flex-grow: 1;
    display: flex;
    align-items: center;
  }
  
  .name {
    font-size: 18px;
    font-weight: bold;
  }
  </style>
  