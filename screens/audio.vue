<template> <button :on-press="onPressPlayButton"></button></template>

<script>
import SoundPlayer from "react-native-sound-player";

export default {
  methods: {
    playSong() {
      try {
        // play the file tone.mp3
        SoundPlayer.playSoundFile("tone.mp3");
        // or play from url
      } catch (e) {
        console.log(`cannot play the sound file`, e);
      }
    },
    async getInfo() {
      // You need the keyword `async`
      try {
        const info = await SoundPlayer.getInfo(); // Also, you need to await this because it is async
        console.log("getInfo", info); // {duration: 12.416, currentTime: 7.691}
      } catch (e) {
        console.log("There is no song playing", e);
      }
    },
    onPressPlayButton() {
      this.playSong();
      this.getInfo();
    }
  }
};
</script>

<style></style>
