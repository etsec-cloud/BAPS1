<template>
  <view class="container">
    <text class="text-color-primary">My Vue Native App</text>
    <app-navigator></app-navigator>
  </view>
</template>

<script>
import AppNavigator from "./components/AppNavigator";
export default {
  components: {
    AppNavigator
  }
};
</script>

<style>
.container {
  background-color: white;
  align-items: center;
  justify-content: center;
  flex: 1;
}
.text-color-primary {
  color: blue;
}
</style>
