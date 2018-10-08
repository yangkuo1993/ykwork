<template>
  <div class="tabs">
    <div ref="wrap">
      <div ref="nav">
        <div ref="tabs">
          <span v-for="(item, index) in tabs" :key="index">{{index + 1}}</span>
        </div>
      </div>
    </div>
    <div ref="content" class="content">
        <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'y-tabs',
  props: {
    color: String,
    sticky: Boolean,
    lineWidth: Number,
    swipeable: Boolean,
    active: {
      type: [Number, String],
      default: 0
    },
    type: {
      type: String,
      default: 'line'
    },
    duration: {
      type: Number,
      default: 0.2
    },
    swipeThreshold: {
      type: Number,
      default: 4
    },
    offsetTop: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      tabs: [],
      position: '',
      curActive: null,
      lineStyle: {},
      events: {
        resize: false,
        sticky: false,
        swipeable: false
      }
    }
  },
  mounted () {
    console.log(this.$refs)
    this.childCount = this.$refs.content.childElementCount
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.tabs{
    .content{}
}
</style>
