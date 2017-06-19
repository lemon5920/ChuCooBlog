<template>
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
        </div>
      </div>
    </section>

    <div class="container articleList">
      <div class="card" v-for="item in list">
        <header class="card-header">
          <p class="card-header-title">
            {{ item.title }}
          </p>
        </header>
        <div class="card-content">
          <div class="content">
            {{ item.content }}
            <br>
            <small><span class="author-name">{{ item.author.name }}</span> - {{ item.updated_at }}</small>
            <br>
            <span class="tag is-warning" v-for="tag in item.tags">#{{ tag }}</span>
          </div>
        </div>
        <footer class="card-footer">
          <a class="card-footer-item">More...</a>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: ''
    }
  },
  async asyncData ({ app }) {
    const {data} = await app.$axios.get('posts')
    return {
      list: data
    }
  }
}
</script>

<style>
.articleList {
  padding-top: 20px;
}

.author-name {
  font-size: 15px;
  font-style: italic;
}

.card {
  margin-top: 20px;
}

.content {
  white-space: nowrap; 
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis; 
}

.tag {
  margin-top: 10px;
  margin-right: 5px;
}
</style>
