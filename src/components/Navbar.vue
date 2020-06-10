<template>
    <nav>
        <div class="nav-wrapper green">
            <div class="container">
                <router-link to="/" class="brand-logo left">Employee Manager</router-link>
                <ul class="right">
                    <li><router-link to="/login">Login</router-link></li>
                    <li><router-link to="/register">Register</router-link></li>
                    <li><router-link to="" @click.native="logout">Logout</router-link></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import firebase from 'firebase'
export default {
    data(){
        return {
            isLogged: false,
            currentUser: false
        };
    },
    methods:{
        logout(e){
            firebase.auth().signOut()
            .then(()=>this.$router.push('/login'))
            e.preventDefault();
            
        }
    }
}
</script>