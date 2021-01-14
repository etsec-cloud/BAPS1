<template>
  <view id="app">
    <h1>Vue.js Audio/Video Player</h1>

    <view class="container">
      <vue-player audio theater :sources="audioSources" />
      <vue-player video theater :sources="videoSources" />
    </view>
  </view>
</template>

<script>

export default {
  name: 'demo',
  components: {

  },
  data() {
    return {
      audioSources: {
        'audio/mp3': '../assets/audio/track1.mp3'
      },
      videoSources: {
        'video/mp4': '',
        'video/webm':''
      }
    }
  }
}
</script>

<style scoped>

</style>