<template>
    <div  class="container"  id="edit_employee">
        <h2>Edit employee</h2>
        <div class="row">
            <form @submit.prevent="updateEmployee" class="col s12">
                <div class="row">
                    <div class="input-field col s6">
                        <input disabled name="employeeid" type="text" v-model="employeeid" required/>
                        
                    </div>
                    <div class="input-field col s6">
                       <input name="name" type="text" v-model="name" required/>
                        
                    </div>
                    <div class="input-field col s6">
                        <input name="dept" type="text" v-model="dept" required/>
                        
                    </div>
                    <div class="input-field col s6">
                         <input name="position" type="text" v-model="position" required/>
                       
                    </div>
                    <div style="float:right">
                    <router-link to="/" class="btn grey">
                        Cancel
                    </router-link>
                    <button class="btn" type="submit">
                        Submit
                    </button>
                    </div>
                    
                     
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import db from '../backend/FirebaseInit'
export default {
    name: 'edit_employee',
    data() {
        return {
            employeeid: null,
            name: null,
            dept: null,
            position: null
        }
    },
    created(){
            db.collection('employees').where('employeeid', '==', this.$route.params.employee_id).get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    this.employeeid = doc.data().employeeid,
                    this.name = doc.data().name,
                    this.dept = doc.data().dept,
                    this.position = doc.data().position
                })
            })
        
    },
    methods:{
        updateEmployee(){
            db.collection('employees').where('employeeid', '==', this.$route.params.employee_id).get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    doc.ref.update({
                        name : this.name,
                        dept : this.dept,
                        position : this.position
                    }).then(() => {
                        this.$router.push({
                           name: 'view_employee', params: {
                               employee_id : this.employeeid
                           } 
                        })
                    })
                    
                })
            })
        }
    }
}
</script>