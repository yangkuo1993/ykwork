<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>
<script>
export default {
  data () {
    return{
      routeName: ''
    }
  },
  watch: {
    '$route' (item) {
      this.routeName = item.name
    }
  }
}
</script>
<style lang="scss">
</style>
