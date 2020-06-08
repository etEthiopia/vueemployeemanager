<template>
    <div id="dashboard">
        <h2>Dashboard</h2>
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
               
            })
        })
    }
}
</script>