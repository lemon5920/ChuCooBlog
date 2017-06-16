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
      list: [
        {
          'id': 1,
          'title': '我來我見我吃飯',
          'content': '此地共至也推門中特感子那位？決絕自時感，著到驗從背教成食、長雨為，連爸令的源，招風入在洋成青希，樹魚美，體海親雲，地價面南。受變時的類人了高落；件前綠果什大求身院，難每品供感候坐我家語熱體近落一發。過也完省情無東品這近的受論，差象提美英那。香水來組戰香不！教海到保，立委明呢！快到只本難前議發圖如何化笑次過部放大師就雙看過望小：說受子電子考建學於三。',
          'created_at': '2017-06-16T06:25:08+00:00',
          'updated_at': '2017-06-16T06:25:08+00:00',
          'author': {
            'username': 'lemon',
            'name': 'lemon liao',
            'gender': 'm',
            'address': '南投縣埔里鎮大學路1號'
          },
          'tags': ['至理名言', '短文集']
        },
        {
          'id': 2,
          'title': 'hehe',
          'content': '我餓了',
          'created_at': '2017-06-17T06:25:08+00:00',
          'updated_at': '2017-06-18T06:25:08+00:00',
          'author': {
            'username': 'lemon',
            'name': 'lemon casa',
            'gender': 'f',
            'address': '南投縣埔里鎮大學路100號'
          },
          'tags': ['至理名言', '廢文集']
        }
      ]
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
