<template>
  <div class="about">
    <h1 v-html="article"></h1>
  </div>
</template>
<script>
export default {
  name: 'about',
  data () {
    return{
      article: ''
    }
  },
  created () {
    this.init()
  },
  activated () {
    this.article = ''
    this.init()
  },
  methods: {
    init () {
      const id = this.$route.params.id
      this.$http.get(`/topic/${id}`).then((data) => {
        this.article = data.data.data.content
      })
    } 
  }
}
</script>
