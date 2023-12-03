<template>
    <div>
      <NavComponent /> <!-- Include the navigation bar component -->
  
      <div class="toggle-container">
        <label>
          <input type="checkbox" v-model="showAccepted" /> Show Responded Invitations
        </label>
      </div>
  
      <div class="invitation-list">
        <InvitationCard v-for="invitation in filteredInvitations" :key="invitation.id" :invitation="invitation" />
      </div>
    </div>
  </template>
  
  <script>
  import NavComponent from '@/components/NavComponent.vue'; // Import the Nav component
  import InvitationCard from '@/components/InvitationCard.vue'; // Adjust the path based on your project structure
  
  export default {
    name:"InvitationComponent",
    components: {
        NavComponent,
      InvitationCard,
    },
    data() {
      return {
        showAccepted: false,
        invitations: [
          { id: 1,image:"https://www.kasandbox.org/programming-images/avatars/duskpin-seed.png", date:'01/01/2024',time:'11:00AM', title: 'Invitation 1', description: 'Description 1', status: 'pending' },
          { id: 2,image:"https://www.kasandbox.org/programming-images/avatars/duskpin-seed.png", date:'01/01/2024',time:'11:00AM',title: 'Invitation 2', description: 'Description 2', status: 'accepted' },
          { id: 3,image:"https://www.kasandbox.org/programming-images/avatars/duskpin-seed.png", date:'01/01/2024',time:'11:00AM',title: 'Invitation 3', description: 'Description 2', status: 'pending' },
          { id: 4,image:"https://www.kasandbox.org/programming-images/avatars/duskpin-seed.png", date:'01/01/2024',time:'11:00AM',title: 'Invitation 4', description: 'Description 2', status: 'accepted' },
          { id: 5,image:"https://www.kasandbox.org/programming-images/avatars/duskpin-seed.png", date:'01/01/2024',time:'11:00AM',title: 'Invitation 5', description: 'Description 2', status: 'pending' },
          { id: 6,image:"https://www.kasandbox.org/programming-images/avatars/duskpin-seed.png", date:'01/01/2024',time:'11:00AM',title: 'Invitation 6', description: 'Description 2', status: 'rejected' },
          { id: 6,image:"https://www.kasandbox.org/programming-images/avatars/duskpin-seed.png", date:'01/01/2024',time:'11:00AM',title: 'Invitation 7', description: 'Description 2', status: 'rejected' },
          // Add more invitations as needed
        ],
      };
    },
    computed: {
      filteredInvitations() {
        return this.showAccepted
          ? this.invitations.filter(invitation => invitation.status !== 'pending')
          : this.invitations.filter(invitation => invitation.status === 'pending');
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add styles for the Invitations component as needed */
  .toggle-container {
    margin: 20px;
  }
  
  .invitation-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  
  /* You can reuse the card styles from the NGO card component */
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
  </style>
  