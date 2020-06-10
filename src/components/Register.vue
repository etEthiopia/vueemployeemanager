<template>
    <div class="container">
        <div class="row">
            <div class="col s12 m8 offset-m2">
                <div class="login card-panel green-text center">
                    <h3>Register</h3>
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
                        <div class="input-field">
                            <i class="material-icons prefix">
                                lock
                            </i>
                            <input type="password" v-model="cpassword" id="cpassword">
                            <label for="cpassword">Confirm Password</label>
                        </div>
                        <div class="right-align">
                            <button @click="register" class="btn green white-text">
                            Register
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
    name: 'register',
    data(){
        return{
            email: '',
            password: '',
            cpassword: ''
        };
    },
    methods:{
        register(e){
            
            if(this.password == this.cpassword){
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then(user => {alert('Account Created')
                this.$router.push('/');
            })
            .catch(err => alert('error: '+err.message))
            console.log("REGISTER")
            }
            else{
                alert("Passwords don't match")
            }
            e.preventDefault();
            
        }
    }
}
</script>