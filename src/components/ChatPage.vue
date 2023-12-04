<!-- ChatPage.vue -->
<template>
    <NavComponent />
    <div class="chat-page">
        <h2>Chats</h2>
        <div v-for="ngo in ngos" :key="ngo.id" @click="openChatHistory(ngo.name)" >
            <chat-card :ngoName="ngo.name" />
        </div>

        <div v-if="showChatHistory" class="modal">
            <div class="modal-content">
                <button @click="closeChatHistory" class="close-button">Close</button>
                <chat-history />
            </div>
        </div>

    </div>
</template>
  
<script>
import ChatCard from '@/components/ChatCard.vue';
import NavComponent from '@/components/NavComponent.vue'
import ChatHistory from '@/components/ChatHistory.vue';
export default {
    components: {
        ChatCard, NavComponent, ChatHistory
    },
    data() {
        return {
            ngos: [
                { id: 1, name: 'NGO_A' },
                { id: 2, name: 'NGO_B' },
                { id: 3, name: 'NGO_C' },
                // Add more NGOs as needed
            ],showChatHistory: false,
        };
    }, methods: {
        // openChatHistory() {
        //     this.showChatHistory = true;
        // },
        openChatHistory(ngoName) {
      this.$router.push({ name: 'ChatHistoryPage', params: { ngoName } });
    },
        closeChatHistory() {
            this.showChatHistory = false;
        },
    },
};
</script>
  
<style scoped>
/* Add styles for the ChatPage component as needed */
.chat-page {
    max-width: 600px;
    margin: auto;
    padding: 20px;
}

h2 {
    margin-bottom: 20px;
}
</style>
  