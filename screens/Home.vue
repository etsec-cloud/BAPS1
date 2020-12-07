<template>
  <view class="page">
    <view class="form">
      <text class="h1">Home page</text>
      <text class="under_h1">La Home fonctionne !</text>
      <button title="Start" @press="goToAndroidTabNavigator"></button>
    </view>
    <view class="bottom"> </view>
  </view>
</template>

<script>
export default {
  props: {
    navigation: { type: Object }
  },
  methods: {
    goToAndroidTabNavigator() {
      this.navigation.navigate("IOSTabs");
    }
  }
};
</script>

<style scoped>
.page {
  width: 100%;
  height: 90%;
  background-color: #4d181873;
}

.h1 {
  font-size: 25px;
  text-align: center;
  margin-bottom: 10%;
}
.under_h1 {
  font-size: 16px;
  text-align: center;
}
</style>
