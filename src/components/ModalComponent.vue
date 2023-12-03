<template>
    <div v-if="isVisible " class="modal-container">
        <div class="modal-content">
            <p>{{ message }}</p>
            <button @click="closeModal">Close</button>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "ModalComponent",
    props: {
        message: {
            type: String,
            required: true,
        },
        isVisible: {
            type: Boolean,
            required: true,
        },
    },
    methods: {
        closeModal() {
            console.log("close")
            this.$props.isVisible=false;
            // this.onClose();
        },
        showModal(){
            this.$props.isVisible=true;
        }
    },
};
</script>
  
<style scoped>
/* Add styles for the Modal component as needed */
.modal-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
}

button {
    padding: 10px 15px;
    margin-top: 10px;
    cursor: pointer;
}
</style>
  