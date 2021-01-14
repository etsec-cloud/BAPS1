<template>
  <view>


    <view>
      <audio controls>
        <source src="../assets/audio/track1.mp3" type="audio/mp3">

      </audio>

    </view>
  </view>
</template>

<script>
export default {


  props: {
    navigation: {
      type: Object
    }
  },


  methods: {
    goToTestScreen() {
      this.navigation.navigate("Page");
    }
  }

}
</script>

<style scoped>

</style>