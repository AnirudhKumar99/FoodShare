<template>
    
    <div class="invitation-card" @click="viewEventDetails">
        <div class="invitation-content">
            <img :src="invitation.image || placeholderImage" alt="Invitation Image" class="invitation-image" />
            <div class="invitation-details">
                <h3>{{ invitation.title }}</h3>
                <p>{{ invitation.description }}</p>
            </div>
            <div class="invitation-status">
                <span v-if="invitation.status === 'pending'" class="pending-status">Pending</span>
                <span v-else-if="invitation.status === 'accepted'" class="accepted-status">Accepted</span>
                <span v-else class="rejected-status">Rejected</span>
            </div>
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
        return {
            placeholderImage: 'url_to_placeholder_image.jpg', // Provide the URL to your placeholder image
        };
    }, methods: {
        viewEventDetails() {
            // console.log(this.invitation)
            localStorage.setItem("invite",JSON.stringify(this.invitation))
            this.$router.push({ name: 'EventDetails' });
            // this.$router.push({ name: 'EventDetails', params: { invitation: this.invitation } });
        },
    },
};
</script>
  
<style scoped>
/* Add styles for the InvitationCard component as needed */
.invitation-card {
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 10px;
    margin: 10px 0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.invitation-content {
    display: flex;
    align-items: center;
}

.invitation-image {
    width: 80px;
    /* Adjust the image width as needed */
    height: 80px;
    /* Adjust the image height as needed */
    border-radius: 8px;
    margin-right: 10px;
}

.invitation-details {
    flex: 1;
}

.invitation-details h3 {
    margin: 0;
}

.invitation-details p {
    margin: 5px 0;
    color: #666;
}

.invitation-status {
    text-align: center;
    padding: 5px 10px;
    border-radius: 5px;

}

.pending-status {
    background-color: #ffc107;
    /* Adjust color for pending status */
    color: white;
    width: 2em;
    height: 5em;
    padding: 0.5em;
    border-radius: 1em;
}

.accepted-status {
    background-color: #28a745;
    /* Adjust color for accepted status */
    color: white;
    width: 2em;
    height: 5em;
    padding: 0.5em;
    border-radius: 1em;
}
.rejected-status {
    background-color: #a72828;
    /* Adjust color for accepted status */
    color: white;
    width: 2em;
    height: 5em;
    padding: 0.5em;
    border-radius: 1em;
}
</style>
  