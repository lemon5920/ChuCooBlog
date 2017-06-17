<template>
<div class="login-container">
  <div class="login-content">
    <h1 class="title is-2 has-text-centered">Login</h1>
    <div class="field">
      <p class="control has-icons-left">
        <input class="input" type="text" placeholder="user" v-model="loginData.username">
        <span class="icon is-small is-left">
          <i class="fa fa-user"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <p class="control has-icons-left">
        <input class="input" type="password" placeholder="Password" v-model="loginData.password">
        <span class="icon is-small is-left">
          <i class="fa fa-lock"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <p class="control">
        <button class="button is-success login-button" @click="login()">
          Login
        </button>
        <button class="button is-success login-button" @click="status()">
          status
        </button>
      </p>
    </div>
  </div>
</div>
</template>

<script>
// import axios from 'axios'

export default {
  data () {
    return {
      loginData: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      this.$post('/api/login', this.loginData)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
        }
      })
    },

    status () {
      this.$get('/api/authors').then((response) => {
        console.log(response)
      })
    }
  }
}
</script>

<style>
  .login-container {
    position: absolute;
    top: 50%;
    margin-top: -110px;
    left: 0;
    width: 100%;
  }

  .login-content {
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    height: 220px;
  }

  .login-button {
    width: 100%;
    margin-top: 15px;
  }
</style>
