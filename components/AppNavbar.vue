<template>
  <view class="nav">
    <button title="Go to home screen" @press="goToHomeScreen"></button>
    <button title="Go to test screen" @press="goToTestScreen"></button>
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
    goToHomeScreen() {
      this.navigation.navigate("Home");
    },
    goToTestScreen() {
      this.navigation.navigate("Test");
    }
  }
};
</script>

<style></style>
