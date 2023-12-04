<template>
    <div class="auth-container">
      
      <img src="../assets/icon.png" style="margin-top: 20%;" width="200" height="200">
      <div class="auth-form">
        <h2>Food Share</h2>
  
        <!-- Login Form -->
        <form v-if="!isRegister" @submit.prevent="login">
          <input type="email" placeholder="Email" v-model="loginEmail" required>
          <input type="password" placeholder="Password" v-model="loginPassword" required>
          <button type="submit" style="width:50%">Login</button>
        </form>
  
        <!-- Registration Form -->
        <form v-else @submit.prevent="register">
          <input type="text" placeholder="Name" v-model="name" required>
          <input type="email" placeholder="Email" v-model="registerEmail" required>
          <input type="password" placeholder="Password" v-model="registerPassword" required>
  
          <div class="user-type-buttons">
            <button type="button" :class="{ active: userType === 'user' }" @click="setUserType('user')">User</button>
            <button type="button" :class="{ active: userType === 'ngo' }" @click="setUserType('ngo')">NGO</button>
          </div>
  
          <button type="submit" style="width:50%">Register</button>
        </form>
  
        <!-- Toggle Buttons -->
        <div class="toggle-container">
          <button @click="toggleFormType('login')" :class="{ active: !isRegister }">Login</button>
          <button @click="toggleFormType('register')" :class="{ active: isRegister }">Register</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
// import { faImage } from '@fortawesome/free-solid-svg-icons';

  export default {
    name: 'AuthComponent',
    data() {
        return {
            isRegister: false,
            loginEmail: '',
            loginPassword: '',
            name: '',
            registerEmail: '',
            registerPassword: '',
            userType: 'user', // Default to 'user'
        };
    },
    methods: {
        login() {
            // Add your login logic here
            console.log('Logging in with email:', this.loginEmail, 'and password:', this.loginPassword);
            // Redirect to home page after successful login
            this.$router.push('/home');
        },
        register() {
            // Add your registration logic here
            console.log('Registering with name:', this.name, 'email:', this.registerEmail, 'password:', this.registerPassword, 'userType:', this.userType);
            // Redirect to home page after successful registration
            this.$router.push('/home');
        },
        setUserType(type) {
            this.userType = type;
        },
        toggleFormType(type) {
            this.isRegister = type === 'register';
        },
    },
    // components: { faImage }
};
  </script>
  
  <style scoped>
  /* Your component-specific styles go here */
  input{
    padding:1em;
  }
  .auth-form {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 10px;
    background: white;
    /* box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); */
  }
  h2 {
    color: #333;
    text-align: center;
  }
  
  input {
    width: calc(100% - 20px);
    padding: 8px;
    margin-top: 5px;
    box-sizing: border-box;
  }
  
  button {
    width: 100%;
    padding: 10px;
    margin-top: 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .user-type-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
  
  .user-type-buttons button {
    flex: 1;
  }
  
  .toggle-container {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
  }
  
  .toggle-container button {
    flex: 1;
  }
  
  /* Active style for buttons */
  button{
    border-radius: 10px;
  }
  button.active {
    background-color: #4caf50;
    color: white;
  }
  </style>
  