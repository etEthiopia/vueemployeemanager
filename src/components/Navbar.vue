<template>
    <nav>
        <div class="nav-wrapper green">
            <div class="container">
                <router-link to="/" class="brand-logo left">Employee Manager</router-link>
                <ul class="right">
                    <li v-if="!isLogged"><router-link to="/login">Login</router-link></li>
                    <li v-if="!isLogged"><router-link to="/register">Register</router-link></li>
                    <li v-if="isLogged"><router-link @click.native="logout"  to="" >Logout</router-link> </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import firebase, { auth } from 'firebase'
export default {
    data(){
        return {
            isLogged: false,
            currentUser: false
        };
    },
    created(){
        if(firebase.auth().currentUser){
            this.isLogged = true;
            this.currentUser = firebase.auth().currentUser.email;
        }
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