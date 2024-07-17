import {createWebHistory, createRouter} from 'vue-router'
import Main from './components/Main.vue'
import EditStudent from './components/EditStudent.vue'
import AddStudent from './components/AddStudent.vue'

//Adding imports for  task - add, view, update 


const routes = [
    {
        name: 'Main',
        path:'/',
        component: Main
    },
    {
        
        name:'EditStudent',
        path:'/edit/:id',
        component: EditStudent
    } ,
    {
        path:'/add',
        component: AddStudent
    },
    {
        path:'/view',
        component:Main
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;




