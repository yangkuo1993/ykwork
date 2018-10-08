<template>
  <div class="home">
    <van-tabs v-model="active" swipeable sticky>
      <van-tab v-for="(item) in topics" :title="item.name" :key="item.id">
         <van-list
            v-model="loading"
            :finished="finished"
            @load="onLoad"
          >
            <van-cell
            v-for="news in item.list"
            :key="news.id"
              :title="news.title"
              @click="details(news.id)"
            />
          </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import mianMix from '@/mixins/'
export default {
  name: 'home',
  mixins: [mianMix],
  data () {
    return {
      active: 0,
      list: [],
      loading: false,
      finished: false,
      topics: [
        {
          name: '全部',
          id: 'all',
          page: 0,
          limit: 20,
          mdrender: true,
          list: []
        },
        {
          name: '精华',
          id: 'good',
          page: 0,
          limit: 20,
          mdrender: true,
          list: []
        },
        {
          name: '分享',
          id: 'share',
          page: 0,
          limit: 20,
          mdrender: true,
          list: []
        },
        {
          name: '问答',
          id: 'ask',
          page: 0,
          limit: 20,
          mdrender: true,
          list: []
        },
        {
          name: '招聘',
          id: 'job',
          page: 0,
          limit: 20,
          mdrender: true,
          list: []
        }
      ]
    }
  },
  components: {
  },
  methods: {
    onLoad() {
      this.topics[this.active].page += 1
      const param = `?page=${this.topics[this.active].page}&limit=${this.topics[this.active].limit}&mdrender=${this.topics[this.active].mdrender}&tab=${this.topics[this.active].id}`
      this.$http.get(`/topics${param}`).then((data) => {
        this.topics[this.active].list = this.topics[this.active].list.concat(data.data.data)
        this.loading = false
      })
    },
    details (id) {
      console.log(id)
      this.$router.push({name: `about`, params: {id: id}})
    }
  }
}
</script>
<style>
.van-cell:not(:last-child):after{
  content: '' !important
}
</style>

