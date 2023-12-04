<template>
    <div class="ngo-card">
      <div class="ngo-content">
        <img :src="ngo.image || placeholderImage" alt="NGO Image" class="ngo-image" />
        <div class="ngo-details">
          <h3>{{ ngo.name }}</h3>
          <table style="margin-left: 4%; text-align: left;">
            <tr>
                <td>
                  <p>{{ ngo.description }}</p>
                </td>
            </tr><tr>
                <td>
                  <p><strong>Email:</strong> {{ ngo.email }}</p>
                </td>
            </tr><tr>
                <td>
                  <p><strong>Phone:</strong> {{ ngo.phone }}</p>
                </td>
            </tr>
        </table>
        <button @click="openChatHistory(ngo.name)" class="view-chat-history-button"> Chat</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      ngo: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        placeholderImage: 'url_to_placeholder_image.jpg', // Provide the URL to your placeholder image
      };
    },
    methods:{
      openChatHistory(ngoName) {
      this.$router.push({ name: 'ChatHistoryPage', params: { ngoName } });
    },
    }
  };
  </script>
  
  <style scoped>
  /* Add styles for the NGO card as needed */
  .ngo-card {
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 10px;
    margin: 10px 0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .ngo-content {
    display: flex;
    align-items: center;
  }
  
  .ngo-image {
    width: 80px; /* Adjust the image width as needed */
    height: 80px; /* Adjust the image height as needed */
    border-radius: 8px;
    margin-right: 10px;
  }
  
  .ngo-details {
    flex: 1;
  }
  
  .ngo-details h3 {
    margin: 0;
  }
  
  .ngo-details p {
    margin: 5px 0;
    color: #666;
  }
  
  .ngo-details p strong {
    margin-right: 5px;
  }
  .view-chat-history-button {
  padding: 10px;
  background-color: #00ffb7;
  color: black;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
  </style>
  