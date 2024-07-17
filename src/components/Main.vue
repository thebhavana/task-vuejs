<template>
  <div>
    <h1>Hello world!!!</h1>
    <h1>Student List</h1>
    <router-link to="/add">Add Student </router-link>   <!--Directly routing to path -->
    <router-view></router-view>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
          <th>Qualification</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in students" :key="student.id">
          <td>{{ student.name }}</td>
          <td>{{ student.age }}</td>
          <td>{{ student.address }}</td>
          <td>{{ student.qualification }}</td>
          <td>{{ student.email }}</td>
          <td>{{ student.phone }}</td>
          <td>
            <router-link :to="{ name: 'EditStudent', params: { id: student.id } }">
              <i class="fas fa-edit"></i> Edit
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
    <router-view></router-view>
</template>

<script>
export default {
  name: 'MainComponent',
  data() {
    return {
      students: []
    };
  },
  created() {
    this.fetchallStudents();
  },
  methods: {
    async fetchallStudents() {
      try {
        const response = await fetch('https://6679170318a459f6394def90.mockapi.io/people');
        const data = await response.json();
        this.students = data;
        
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    }
  }
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
}

th {
  background-color: #f2f2f2;
  text-align: left;
}

tr:nth-child(even) {
  background-color: #f9f9f9;
}

tr:hover {
  background-color: #ddd;
}

.active {
  background-color: green;
  color: white;
}

.inactive {
  background-color: gray;
  color: black;
}
</style>
