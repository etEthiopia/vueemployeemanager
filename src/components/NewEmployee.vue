<template>
    <div id="new_employee" class="container">
        <h2>New employee</h2>
        <div class="row">
            <form @submit.prevent="saveEmployee" class="col s12">
                <div class="row">
                    <div class="input-field col s6">
                        <input name="employeeid" type="text" v-model="employeeid" required/>
                        <label for="employeeid">Employee ID</label>
                    </div>
                    <div class="input-field col s6">
                       <input name="name" type="text" v-model="name" required/>
                        <label for="name">Name</label>
                    </div>
                    <div class="input-field col s6">
                        <input name="dept" type="text" v-model="dept" required/>
                        <label for="dept">Dept.</label>
                    </div>
                    <div class="input-field col s6">
                         <input name="position" type="text" v-model="position" required/>
                        <label for="position">Position</label>
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
    name: 'new_employee',
    data() {
        return {
            employeeid: null,
            name: null,
            dept: null,
            position: null
        }
    },
    methods: {
        saveEmployee(){
            db.collection('employees').add({
                employeeid: this.employeeid,
                name: this.name,
                dept: this.dept,
                position: this.position
            }).then(docRef => {
                this.$router.push('/')
            })
        }
    }
}
</script>