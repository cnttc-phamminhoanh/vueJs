<template>
    <div class="top-menu">
        <b-navbar toggleable="lg" type = "dark" variant="success" class="navbar-horizontal">
            <b-navbar-brand href="#">MakeUpSeNo</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/user">User</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/useredit">UserEdit</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="">Contact</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="">Hobby</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link class="nav-link" to="/products">Products</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link class="nav-link" to="/employees">Employees</router-link>
                    </li>
                    
                </b-navbar-nav>

                <div class="input">
                    <b-form-input v-model="text" :value="text" placeholder="Enter name to search"></b-form-input>
                </div>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
// import 'bootstrap/js/dist/dropdown';

export default {
    name: 'TopMenu',
    // props: {
    //     msg: String,
    // },

    // đoạn comment dưới cho bus event
    data() {
        return {
            text: '',
        }
    },
    watch: {
        text: function(value) {
            this.$root.$emit("searchChanged",value);
        }
    },
    // mounted() {
    //     this.$root.$on("messageChanged", (msg) => {
    //         this.message = msg;
    //     })
    // },
}
</script>
<style scoped>
    .top-menu > nav > a {
        margin-left: 30px;
    }
    .input {
        width: 70%;
        margin: 0 80px;
    }
    .in-but button {
        margin-left: 5px;
    }
    .w {
        display: flex;
        margin-left: 180px;
    }
</style>