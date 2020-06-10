<template>
    <div class="container">
        <div class="row center">
            <div class="col s10 m6 offset-m3">
                <div class="login card-panel green-text center">
                    <h3>Login</h3>
                    <form>
                        <div class="input-field">
                            <i class="material-icons prefix">
                                email
                            </i>
                            <input type="text" v-model="email" id="email">
                            <label for="email">Email</label>
                        </div>
                        <div class="input-field">
                            <i class="material-icons prefix">
                                lock
                            </i>
                            <input type="password" v-model="password" id="password">
                            <label for="password">Password</label>
                        </div>
                        <div class="right-align">
                            <button @click="login" class="btn green white-text">
                            Login
                            </button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import firebase from 'firebase'
export default {
    name: 'login',
        data(){
        return{
            email: '',
            password: ''
        };
    },
    methods:{
        login(e){
            
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then(user => {alert('Logged In')
                this.$router.push('/');
            })
            .catch(err => alert('error: '+err.message))
            console.log("LOGGED IN")
            
            e.preventDefault();
            
        }
    }
}
</script>