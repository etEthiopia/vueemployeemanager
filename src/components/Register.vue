<template>
    <div class="container">
        <div class="row center">
            <div class="col s10 m6 offset-m3">
                <div class="login card-panel green-text center">
                    <h3>Register</h3>
                    <form action="">
                        <div class="input-field">
                            <i class="material-icons prefix">
                                email
                            </i>
                            <input type="text" id="email">
                            <label for="email">Email</label>
                        </div>
                        <div class="input-field">
                            <i class="material-icons prefix">
                                lock
                            </i>
                            <input type="password" id="password">
                            <label for="password">Password</label>
                        </div>
                        <div class="right-align">
                            <button class="btn green white-text">
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
export default {
    name: 'register',
    data(){
        return{};
    }
}
</script>