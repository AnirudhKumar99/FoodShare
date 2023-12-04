<!-- ChatHistory.vue -->
<template>
    <div class="chat-history">
        <div class="message-list">
            <div v-for="message in messages" :key="message.id" class="message">
                <!-- style="text-align: {{ message.type === 'user'?left:right }};" -->
                <!-- <p> -->
                <p style="padding-left: 5px;"
                    :class="{ 'user-message': message.type === 'user', 'ngo-message': message.type === 'ngo' }">
                    <strong>

                        {{ message.type }}:
                    </strong>
                    {{ message.content }}
                </p>
                <!-- </p> -->
            </div>
        </div>
        <div class="input-container">
            <textarea v-model="newMessage" placeholder="Type your message..."></textarea>
            <button @click="sendMessage">Send</button>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            messages: [
                //   { id: 1, content: 'Hello!', type: 'user' },
                { id: 2, content: 'Hi there!', type: 'ngo' },
                // Add more messages as needed
            ],
            newMessage: '',
        };
    },
    methods: {
        sendMessage() {
            if (this.newMessage.trim() !== '') {
                let newMessageObject = { id: this.messages.length + 1, content: this.newMessage.trim(), type: 'user' };
                this.messages.push(newMessageObject);
                newMessageObject = { id: this.messages.length + 1, content: "reply from NGO", type: 'ngo' };
                this.messages.push(newMessageObject);
                this.newMessage = ''; // Clear the input box after sending a message
            }
        },
    },
};
</script>
  
<style scoped>
/* Add styles for the ChatHistory component as needed */
.chat-history {
    max-width: 600px;
    margin: auto;
    padding: 20px;
}

.message-list {
    margin-bottom: 20px;
}

.message {
    /* padding: 10px; */
    /* margin-bottom: 10px; */
    border-radius: 8px;
    max-width: 95%;
}

.user-message {
    background-color: #85b8ee;
    color: black;
    /* align-self: flex-start; */
    text-align: left;
    width: 90%;
    height: 2em;
    border-radius: 10px;
    vertical-align: center;
}

.ngo-message {
    background-color: #7ac48b;
    width: 90%;
    color: black;
    /* align-self: flex-end; */
    text-align: left;

    width: 90%;
    height: 2em;
    border-radius: 10px;
    vertical-align: center;
}

.input-container {
    display: flex;
    position: fixed;
    width: 80%;
    bottom: 5%;
}

textarea {
    flex-grow: 1;
    padding: 10px;
    margin-right: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
}

button {
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
</style>
  