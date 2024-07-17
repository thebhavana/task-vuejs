<template>
    <div class="add-student-container">
      <h1>Add Student</h1>
      <form @submit.prevent="addStudent" class="student-form">
        <div class="form-group">
          <label for="name">Name:</label>
          <input v-model="student.name" id="name" type="text" required>
        </div>
        <div class="form-group">
          <label for="age">Age:</label>
          <input v-model="student.age" id="age" type="number" required>
        </div>
        <div class="form-group">
          <label for="address">Address:</label>
          <input v-model="student.address" id="address" type="text" required>
        </div>
        <div class="form-group">
          <label for="qualification">Qualification:</label>
          <input v-model="student.qualification" id="qualification" type="text" required>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input v-model="student.email" id="email" type="email" required>
        </div>
        <div class="form-group">
          <label for="phone">Phone:</label>
          <input v-model="student.phone" id="phone" type="text" required>
        </div>
        <div class="form-actions">
          <button type="submit" class="add-button">Add</button>
        </div>
      </form>
    </div>
    <div>
        <router-link to="/view">Display All</router-link>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        student: {
          name: '',
          age: null,
          address: '',
          qualification: '',
          email: '',
          phone: ''
        }
      };
    },
    methods: {
    
    async addStudent() {
     try {
    const response = await fetch('https://6679170318a459f6394def90.mockapi.io/people', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.student)
    });
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    await response.json(); // No need to assign the result to a variable if not used
    this.$router.push('/');
    alert('Student added successfully!');
  } catch (error) {
    console.error('Error adding student:', error);
    alert('Error adding student');
  }
}

    }
  };
  </script>
  
  <style scoped>
  .add-student-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ddd; 
    background-color: #f9f9f9;
  }
  
  .student-form {
    display: flex;
    flex-direction: column;
  }
  
  .form-group {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }
  
  .form-group label {
    flex: 1;
    margin-right: 10px;
    font-weight: bold;
  }
  
  .form-group input {
    flex: 2;
    padding: 8px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .form-actions {
    display: flex;
    justify-content: flex-end;
  }
  
  .add-button {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 4px;
  }
  
  .add-button:hover {
    background-color: #45a049;
  }
  </style>
  