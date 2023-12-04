<!-- ChatHistoryPage.vue -->
<template>
    <NavComponent/>
    <div class="chat-history-page">
      <h2>Chat History with {{ ngoName }}</h2>
      <chat-history />
    </div>
  </template>
  
  <script>
  import ChatHistory from '@/components/ChatHistory.vue';
  import NavComponent from '@/components/NavComponent.vue'

  export default {
    components: {
      ChatHistory,NavComponent
    },
    data() {
      return {
        ngoName: '', // The name of the NGO will be passed from the ChatPage
      };
    },
    created() {
      // Fetch the NGO name from the route params
      this.ngoName = this.$route.params.ngoName;
    },
  };
  </script>
  
  <style scoped>
  /* Add styles for the ChatHistoryPage component as needed */
  .chat-history-page {
    max-width: 600px;
    margin: auto;
    padding: 20px;
  }
  
  h2 {
    margin-bottom: 20px;
  }
  </style>
  