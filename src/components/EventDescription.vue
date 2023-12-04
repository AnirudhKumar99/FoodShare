<!-- EventDescription.vue -->
<template>
    <NavComponent/>
    <div class="event-description">
        <h2>{{ eventData.title }}</h2>
        <img :src="eventData.image" alt="Event Image" />
        <!-- ... other details ... -->
        <p>{{ eventData.description }}</p>
        <p><strong>Date:</strong> {{ eventData.date }}</p>
        <p><strong>Time:</strong> {{ eventData.time }}</p>
        <p><strong>Place:</strong> {{ eventData.place }}</p>

        <h3>Dashboard</h3>
        <p> No of Invitations Sent: 30</p>
        <p> No of Responses: 30</p>
        <p> Expected No of People: 30</p>
        <div class="buttons">
            <button @click="openNGOList">Add NGO</button>
            <button @click="openUserList">Add Invitees</button>
            <!-- <router-link :to="{ name: 'AddInvitee', params: { eventId: event.id } }" class="add-invitee-button">
          Add Invitee
        </router-link> -->
        </div>

        <!-- Modal for NGOList -->
        <!-- <div v-if="showNGOList" class="modal">
        <div class="modal-content">
          <button @click="closeNGOList" class="close-button">Close</button>
          <NGOListPop @ngo-selected="handleNGOSelected" />
        </div>
      </div> -->
        <div v-if="showNGOList" class="modal">
            <div class="modal-content">
                <button style="margin-bottom: 5px;" @click="closeNGOList" class="close-button">X</button>
                <NGOListPop @ngo-selected="handleNGOSelected" />
                <!-- <button @click="sendData" class="send-button">Send</button> -->
                <div class="button-container">
                    <button @click="sendData('NGO')" class="send-button">Send</button>
                    <!-- Close button moved to the side -->
                    <!-- <button @click="closeNGOList" class="close-button">Close</button> -->
                </div>
                <!-- </div> -->
            </div>
        </div>

        <div v-if="showUserList" class="modal">
            <div class="modal-content">
                <button @click="closeUserList" class="close-button">X</button>
                <InviteeList @user-selected="handleUserSelected" />
                <div class="button-container">
                    <button @click="sendData('User')" class="send-button">Send</button>
                    <!-- <button @click="closeUserList" class="close-button">
                        x</button> -->
                </div>
            </div>
        </div>
        <!-- </div> -->
    </div>
</template>
  
<script>
import NGOListPop from '@/components/NGOListPop.vue'; // Import the NGOList component
import InviteeList from '@/components/UserList.vue'
import NavComponent from '@/components/NavComponent.vue'
export default {
    props: {
        event: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            eventData: {},
            showNGOList: false,
            showUserList: false,
            selectedNGOs: [],
            selectedUsers: [],
        };
    },
    components: {
        NGOListPop, InviteeList,NavComponent
    },
    mounted() {
        // console.log(this.event)
        this.eventData = JSON.parse(this.event);
    },
    methods: {
        openNGOList() {
            this.showNGOList = true;
        },
        closeNGOList() {
            this.showNGOList = false;
        },
        // sendData() {
        //     alert("Invitation sent to selected NGOs");
        //     this.closeNGOList();
        // },
        handleNGOSelected(ngo) {
            // Handle the selected NGO (e.g., add it to the event)
            console.log('Selected NGO:', ngo);
            // Close the NGOList modal
            this.closeNGOList();
        },
        //     openNGOList() {
        //   this.showNGOList = true;
        // },
        // closeNGOList() {
        //   this.showNGOList = false;
        // },
        openUserList() {
            this.showUserList = true;
        },
        closeUserList() {
            this.showUserList = false;
        },
        // handleNGOSelected(selectedNGOs) {
        //   this.selectedNGOs = selectedNGOs;
        // },
        handleUserSelected(selectedUsers) {
            this.selectedUsers = selectedUsers;
        },
        sendData(type) {
            if (type === 'NGO') {
                alert('Invitation Sent to NGOS');
            } else if (type === 'User') {
                alert('Invitation Sent to Invitees');
            }
            this.closeNGOList();
            this.closeUserList();
        },
    },
};
</script>
  
<style scoped>
/* Add styles for the EventDescription component as needed */
.event-description {
    /* ... existing styles ... */
    text-align: center;
}

.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    max-width: 600px;
    width: 100%;
    position: relative;
    overflow: hidden;
    /* display: flex; */
    /* Ensure content overflow is hidden */
}

.close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: #dc3545;
    color: white;
    border: none;
    margin: auto;
    padding: 4px;
    border-radius: 4px;
    cursor: pointer;
}

.close-button:hover {
    background-color: #c82333;
}

.send-button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 10px;
    width: 50%;
    /* Make the button full width */
}

.send-button:hover {
    background-color: #0056b3;
}

</style>
  