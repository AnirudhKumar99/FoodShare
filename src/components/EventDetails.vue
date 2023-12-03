<template>
    <div class="event-details">
        <img :src="invitation.image || placeholderImage" alt="Event Image" class="event-image" />
        <div class="event-info">
            <h2>{{ invitation.title }}</h2>
            <p>{{ invitation.description }}</p>
            <p><strong>Date:</strong> {{ invitation.date }}</p>
            <p><strong>Time:</strong> {{ invitation.time }}</p>
            <p><strong>Place:</strong> {{ invitation.place }}</p>
        </div>
        <div class="event-actions">
            <button @click="acceptEvent">Accept</button>
            <button @click="rejectEvent">Reject</button>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        invitation: {
            type: Object,
            required: true,
        },
    },
    data() {
        console.log(this.invitation);
        return {
            placeholderImage: 'url_to_placeholder_image.jpg', // Provide the URL to your placeholder image
            // invitation: this.$route.params.invite,
        };
    },
    methods: {
        acceptEvent() {
            // Add logic for accepting the event
        },
        rejectEvent() {
            // Add logic for rejecting the event
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
  