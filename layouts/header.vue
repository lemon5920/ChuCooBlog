<template>
  <transition name="layout" mode="out-in">
    <div>
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              ChuCooBlog
            </h1>
            <h2 class="subtitle">
              戳戳你的 Blog
            </h2>
            <button @click="change()">asd</button>
          </div>
        </div>
        <div class="hero-footer">
          <div class="container">
            <div class="tabs is-boxed">
              <ul>
                <li :class="{ 'is-active': $store.state.currentPage == 'list'}">
                  <nuxt-link to="/">
                    <span class="icon is-small"><i class="fa fa-list-alt"></i></span>
                    <span>List</span>
                  </nuxt-link>
                </li>
                <li :class="{ 'is-active': $store.state.currentPage == 'add'}">
                  <nuxt-link to="/add">
                    <span class="icon is-small"><i class="fa fa-plus"></i></span>
                    <span>Add</span>
                  </nuxt-link>
                </li>
                <li :class="{ 'is-active': $store.state.currentPage == 'user'}">
                  <nuxt-link to="/user">
                    <span class="icon is-small"><i class="fa fa-user-circle"></i></span>
                    <span>User</span>
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <nuxt/>
    </div>
  </transition>
</template>

<script>
  export default {
    mounted () {
      console.log('sdf')
    },
    methods: {
      change () {
        this.$router.replace({ path: '/login' })
      }
    }
  }
</script>
