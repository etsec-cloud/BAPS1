<template>
  <view class="bouton">
    <text class="centerText"> {{ text }}</text>
  </view>
</template>

<script>
export default {
  name: "baseBouton",
  props: ["text"]
};
</script>

<style scoped>
.bouton {
  display: flex;
  background-color: #2e86ab;
  width: 140px;
  height: 40px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
}
.centerText {
  color: white;
  font-size: 20px;
}
</style>
