<template>
    <div id="view_employee">
        <ul class="collection with-header">
            <li class="collection-header">
                <h4>{{name}}</h4>
            </li>
            <li class="collection-item">E-ID: {{employeeid}}</li>
            <li class="collection-item">Dept: {{dept}}</li>
            <li class="collection-item">Position: {{position}}</li>
        </ul>
        <li class="collection-item">
        <button @click='deleteEmployee' class="btn red">
            Delete
        </button>
        </li>
        
    </div>
</template>

<script>
import db from '../backend/FirebaseInit'
export default {
    name: 'view_employee',
    data() {
        return {
            employeeid: null,
            name: null,
            dept: null,
            position: null
        }
    },
    // beforeRouteEnter (to, from, next) {
    //     console.log("BF");
    //     // db.collection('employees').where('employeeid', '==', to.params.employee_id).get()
    //     // .then(querySnapshot => {
    //     //     querySnapshot.forEach(doc => {
    //     //         next(vm => {
    //     //             vm.employeeid = doc.data().employeeid,
    //     //             vm.name = doc.data().name,
    //     //             vm.dept = doc.data().dept,
    //     //             vm.position = doc.data().position
    //     //         })
    //     //     })
    //     // })
    // },
    // watch: {
    //    '$route' : 'fetchData'
    // },
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
    methods: {
        // fetchData(){
        //     db.collection('employees').where('employeeid', '==', this.$route.params.employee_id).get()
        //     .then(querySnapshot => {
        //         querySnapshot.forEach(doc => {
        //             this.employeeid = doc.data().employeeid,
        //             this.name = doc.data().name,
        //             this.dept = doc.data().dept,
        //             this.position = doc.data().position
        //         })
        //     })
        // },
        deleteEmployee(){
            if(confirm("Are you sure?")){
                db.collection('employees').where('employeeid', '==', this.$route.params.employee_id).get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    doc.ref.delete(),
                    this.$router.push("/")
                })
            })
            }
        }
    }    

}
</script>