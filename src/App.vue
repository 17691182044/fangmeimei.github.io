<template>
  <div id="app">
    <audio id="cake-music" :src="cake_mp3_url" loop="loop"></audio>
    <audio id="img-music" :src="img_mp3_url" loop="loop"></audio>
    <audio id="memory-music" :src="memory_mp3_url" loop="loop"></audio>
    <router-view></router-view>
  </div>
</template>

<script>
import memorymp3 from './assets/music/windyHill.mp3'
import cakemp3 from './assets/music/hyrz.mp3'
import imgmp3 from './assets/music/3.mp3'

export default {
  name: 'app',
  data () {
    return {
      cake_mp3_url: cakemp3,
      img_mp3_url: imgmp3,
      memory_mp3_url: memorymp3
    }
  }
}
</script>

<style lang="less">
#app{
  height: 100%;
}
</style>
