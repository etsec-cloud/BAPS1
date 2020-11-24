<template>
  <view class="container">
    <text class="text-color-primary">My Vue Native App</text>
    <app-navigator></app-navigator>
    <connexion></connexion>
  </view>
</template>

<script>
import AppNavigator from "./components/AppNavigator";
import connexion from "./components/connexion.vue";

export default {
  name: "App",
  components: {
    connexion,
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
</style>
