<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="test">test</button>
    <button @click="action">action</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
    test () {
      this.$store.commit('INCREASE')
    },
    action () {
      this.$store.dispatch('increment')
    }
  }
}
</script>
