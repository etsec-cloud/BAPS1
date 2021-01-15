<template>
  <view class="home" style="margin-top: 150px;">
    <view
      v-for="(item, index) in urlArray"
      :key="index"
      :class="'demo-' + index"
    >
      <vue-audio-native
        size="default"
        :url="index == 0 ? url : item"
        :showCurrentTime="showCurrentTime"
        :showControls="showControls"
        :showVolume="showVolume"
        :showDownload="showDownload"
        :autoplay="autoplay"
        :hint="hint"
        :waitBuffer="waitBuffer"
        :downloadName="downloadName"
        @on-change="change"
        @on-timeupdate="timeupdate"
        @on-metadata="metadata"
        @on-audioId="audioId"
      >
      </vue-audio-native>

      <template v-if="index == 0">
        <button @click="swtichSrc(0)">1</button>
        <button @click="swtichSrc(1)">2</button>
        <button @click="swtichSrc(2)">3</button>
      </template>

      <button @click="play(index)">play</button>
      <button @click="pause(index)">pause</button>
    </view>
  </view>
</template>

<script>
import Vue from "vue";

export default {
  props: {
    navigation: {
      type: Object
    }
  },

  methods: {
    goToTestScreen() {
      this.navigation.navigate("Page");
    },

    change(event) {
      console.log("当前播放状态：", event);
    },
    timeupdate(event) {
      console.log("当前播放时间：", event);
    },
    metadata(event) {
      console.log(event, "音频长度：", event.target.duration);
    },

    swtichSrc(index) {
      let t = this;
      t.url = t.urlArray[index];
    },

    audioId(event) {
      console.log(event, 9999999);
      this.currentAudioId.push(event);
    },

    play(index) {
      document.getElementById(this.currentAudioId[index]).play();
    },
    pause(index) {
      document.getElementById(this.currentAudioId[index]).pause();
    }
  },

  data() {
    return {
      urlArray: [
        require("../assets/audio/track1.mp3"),
        require("../assets/audio/track1.mp3")
      ], //演示路径
      url: require("../assets/audio/track1.mp3"),
      showCurrentTime: true,
      showControls: false,
      showVolume: true,
      showDownload: true,
      autoplay: false,
      waitBuffer: true,
      downloadName: "下载音频",
      hint: "音频正在上传中，请稍等…",
      currentAudioId: []
    };
  }
};
</script>

<style scoped></style>
