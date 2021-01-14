<template>
  <view class="flexContainer">
    <view class="leftContainer">
      <image :source="require('../../assets/img/profil.png')" />
    </view>
    <image :source="require('../../assets/img/logoBAP.png')" />
  </view>
</template>

<script>
export default {
  name: "headerImg",

  methods: {
    goToMesInfoScreen() {
      this.navigation.navigate("mesinfoscreen.vue");
    }
  }
};
</script>

<style scoped>
.flexContainer {
  margin: 20px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.leftContainer {
  padding-top: 20px;
  padding-bottom: 20px;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
</style>
