<template>
  <div class="container articleList">
    <div class="field">
      <label class="label">Title</label>
      <p class="control">
        <input class="input" type="text" placeholder="Title" v-model="title">
      </p>
    </div>

    <div class="field">
      <label class="label">Content</label>
      <p class="control">
        <textarea class="textarea" placeholder="Content" v-model="content"></textarea>
      </p>
    </div>

    <div class="field">
      <label class="label">Tags</label>
      <div class="field has-addons">
        <p class="control">
          <input class="input" type="text" placeholder="Tag Name" v-model="newTag" @keyup.enter="addTag()">
        </p>
        <p class="control">
          <a class="button" @click="addTag()">
            Add
          </a>
        </p>
      </div>
    </div>

    <div class="field">
      <p>
        <span v-for="tag in tags" class="tag is-warning is-medium">
          #{{ tag }}
          <button class="delete is-small" @click="removeTag(tag)"></button>
        </span>
      </p>
    </div>

    <div class="field is-grouped">
      <p class="control">
        <button class="button is-primary" @click="submitForm()">Submit</button>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    layout: 'header',

    data () {
      return {
        title: '',
        content: '',
        newTag: '',
        tags: []
      }
    },

    methods: {
      addTag () {
        this.tags.push(this.newTag)
        this.newTag = ''
      },
      removeTag (tag) {
        var index = this.tags.indexOf(tag)
        this.tags.splice(index, 1)
      },
      submitForm () {
        var send = {
          title: this.title,
          content: this.content,
          tags: this.tags
        }
        this.$post('/api/posts', send)
        .then((response) => {
          this.showLoginSuccess()
          this.$router.replace({ path: '/' })
        })
        .catch((error) => {
          if (error.response.status === 401) {
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.headers)
            this.showSubmitError({message: error.response.data.message})
          }
        })
      }
    },

    notifications: {
      showSubmitError: {
        title: '送出失敗',
        message: '',
        type: 'error'
      },
      showLoginSuccess: {
        title: '送出成功',
        message: '',
        type: 'success'
      }
    },

    mounted () {
      this.$store.commit('changePage', 'add')
    }
  }
</script>
