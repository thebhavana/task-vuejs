<template>
  <div class="edit-student-container">
    <h1>Edit Student: {{ studentId }}</h1>
    <div v-if="student">
      <form @submit.prevent="updateStudent" class="student-form">
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
          <button type="submit" class="update-button">Update</button>
          <button type="button" @click="confirmDelete" class="delete-button">Delete</button>
        </div>
      </form>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script>
// Import SweetAlert
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      studentId: this.$route.params.id,
      student: null
    };
  },
  created() {
    this.fetchStudentDetails();
  },
  methods: {
    async fetchStudentDetails() {
      try {
        const response = await fetch(`https://6679170318a459f6394def90.mockapi.io/people/${this.studentId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        this.student = await response.json();
      } catch (error) {
        console.error('Error fetching student details:', error);
      }
    },
    async updateStudent() {
      try {
        const response = await fetch(`https://6679170318a459f6394def90.mockapi.io/people/${this.studentId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.student)
        });
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        Swal.fire('Success', 'Student updated successfully!', 'success');
      } catch (error) {
        console.error('Error updating student details:', error);
        Swal.fire('Error', 'Failed to update student.', 'error');
      }
    },
    confirmDelete() {
      Swal.fire({
        title: 'Are you sure?',
        text: 'You will not be able to recover this student!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it'
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteStudent();
        }
      });
    },
    async deleteStudent() {
      try {
        const response = await fetch(`https://6679170318a459f6394def90.mockapi.io/people/${this.studentId}`, {
          method: 'DELETE'
        });
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        Swal.fire('Deleted!', 'The student has been deleted.', 'success');
        this.$router.push('/');
      } catch (error) {
        console.error('Error deleting student:', error);
        Swal.fire('Error', 'Failed to delete student.', 'error');
      }
    }
  }
};
</script>

<style scoped>
/* Your scoped styles */
.edit-student-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
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
  justify-content: space-between;
}

.update-button {
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

.update-button:hover {
  background-color: #45a049;
}

.delete-button {
  background-color: #f44336;
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

.delete-button:hover {
  background-color: #e53935;
}
</style>
