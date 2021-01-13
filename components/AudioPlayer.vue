<template>
  <view>
    <text>
      {{ track.title }}
    </text>
    <button title="Play" :on-press="TrackPlayer.play"></button>
  </view>
</template>

<script>
import TrackPlayer from "react-native-track-player";

export default {
  data: function() {
    return {
      track: {
        id: "1",
        url: require("../assets/audio/track1.mp3"),
        title: "Intro"
      }
    };
  },
  async start() {
    // Set up the player
    await TrackPlayer.setupPlayer();

    // Add a track to the queue
    await TrackPlayer.add({
      id: "1",
      url: require("../assets/audio/track1.mp3"),
      title: "Intro"
    });

    // Start playing it
    await TrackPlayer.play();
  }
};
</script>

<style></style>
