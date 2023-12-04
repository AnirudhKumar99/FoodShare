<template>
    <NavComponent />
    <div class="event-details">
        <img :src="invitaion.image || placeholderImage" alt="Event Image" class="event-image" />
        <div class="event-info">
            <h2>{{ invitaion.title }}</h2>
            <p>{{ invitaion.description }}</p>
            <p><strong>Date:</strong> {{ invitaion.date }}</p>
            <p><strong>Time:</strong> {{ invitaion.time }}</p>
            <p><strong>Place:</strong> {{ invitaion.place }}</p>
        </div>

        <div v-if="invitaion.status === 'pending'" class="event-actions">
            <button @click="acceptEvent">Accept</button>
            <button @click="rejectEvent">Reject</button>
        </div>
        <div v-else class="event-actions">
            
            <button v-if="invitaion.status==='accepted'">Accepted</button>
            <button style="background-color: #dc3545;" v-else>Rejected</button>
        </div>
        <ModalComponent :message="modalMessage" :isVisible="visible"/>
    </div>
</template>
  
<script>
import NavComponent from '@/components/NavComponent.vue'
import ModalComponent from '@/components/ModalComponent.vue'

export default {
    components: {
        NavComponent, ModalComponent
    },
    // props:['invitation'],
    data() {
        return {
            invitaion: {},
            placeholderImage: "", // Provide the URL to your placeholder image
            // invitation: this.$route.params.invite,
            modalMessage: '',
            visible:false
        };
    },
    mounted() {
        console.log('here')
        // this.invitaion = 
        this.invitaion = JSON.parse(localStorage.getItem("invite"))
        console.log(this.invitaion)
    },
    methods: {
        acceptEvent() {
            this.modalMessage = 'Event Accepted! 🎉';
            // this.visible=true;
            // this.invitation.status = 'accepted';
            // console.log(this.$refs)
            // this.$refs.modal.isVisible = true;
            // ModalComponent.isVisible=true;
            // ModalComponent.isVisible=true;
            // Additional logic or API calls can be added here
            // ...
            this.showPopup()
            this.$router.push('/home')
        },
        rejectEvent() {
            this.modalMessage = 'Event Rejected! 😞';
            // this.visible=true;
            // this.$refs.modal.isVisible = true;
            // console.log(ModalComponent)
            // ModalComponent.isVisible=true;
            // this.$refs.modal.isVisible=true;
            // Additional logic or API calls can be added here
            // ...
            this.showPopup()
            this.$router.push('/home')
        },
        showPopup() {
            window.alert(this.modalMessage);
        },
    },
};
</script>
  
<style scoped>
/* Add styles for the EventDetails component as needed */
.event-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    height: 50vh;
}

.event-image {
    width: 50%;
    /* Adjust the image width as needed */
    height: auto;
    border-radius: 8px;
    margin-bottom: 20px;
}

.event-info {
    text-align: center;
}

.event-info h2 {
    margin: 0;
}

.event-info p {
    margin: 5px 0;
    color: #666;
}

.event-actions {
    margin-top: 20px;
}

button {
    padding: 10px 15px;
    margin: 0 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}

/* Customize button styles as needed */
button:nth-child(1) {
    background-color: #28a745;
    /* Accept button color */
    color: white;
}

button:nth-child(2) {
    background-color: #dc3545;
    /* Reject button color */
    color: white;
}
</style>
  