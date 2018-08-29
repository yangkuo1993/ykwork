<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="test">test</button>
    <button @click="action">action</button>
    <div ref="msg">{{message | dataFormat}}</div>
    <button @click="click">click</button>
    <div>{{number}}</div>
    <button @click="numberAdd">numberAdd</button>
    <input v-focus placeholder="测测测">
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data () {
    return {
      message: 'begin',
      number: 0
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    test () {
      this.$store.commit('INCREASE')
      this.$http.get('/topics').then((data) => {
        console.log(data)
      })
    },
    action () {
      this.$store.dispatch('increment')
    },
    click () {
      this.message = 'end'
      this.$nextTick(() => {
        console.log(this.$refs.msg.innerText)
      })
    },
    numberAdd () {
      for (let i = 0; i < 10; i++) {
        this.number++
        console.log(this.number)
      }
    }
  }
}
</script>
