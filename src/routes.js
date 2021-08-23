import Home from './components/Home.vue';
import User from './components/user/User.vue';
import UserEdit from './components/user/UserEdit.vue';
import Employees from './components/Employees.vue';
export const routes = [
    { path: '/',name: 'homepage', component: Home },
    { path: '/user',name: 'userpage', component: User },
    { path: '/useredit',name: 'usereditpage', component: UserEdit },
    { path: '/employees',name: 'employeespage', component: Employees },
]