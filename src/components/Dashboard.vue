<template>
    <div class="container" id="dashboard">
        <ul class="collection with-header">
            <li class="collection-header">
                <h4>Employees</h4>
            </li>
            <li class="collection-item" v-for="employee in employees" v-bind:key="employee.id">
                
                {{employee.employeeid}} : {{employee.name}}
            <div class="chip">
                    {{employee.dept}}
                </div>
                <router-link class="secondary-content" v-bind:to="{name: 'view_employee', params: {employee_id: employee.employeeid}}">
                    <li class="fa fa-eye"></li>
                </router-link>
            </li>
        </ul>
        <div class="fixed-action-btn">
            <router-link to ="/new" class="btn-floating btn-large red">
                <i class="fa fa-plus"></i>
            </router-link>
        </div>
    </div>
</template>

<script>
import db from '../backend/FirebaseInit'
export default {
    name: 'dashboard',
    data() {
        return {
            employees: []
        }
    },
    created(){
        db.collection('employees').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                const data = {
                    'id': doc.id,
                    'employeeid': doc.data().employeeid,
                    'name': doc.data().name,
                    'dept': doc.data().dept,
                    'position': doc.data().position
                }
               this.employees.push(data);
            })
        })
    }
}
</script>