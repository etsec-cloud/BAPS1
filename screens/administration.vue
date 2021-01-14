<template>
  <view class="page">
      <view class="flexContainer">
    <view class="leftContainer">
      <image :source="require('../assets/img/profil.png')"/>
      <text class="click" @press="goToMesInfoScreen">A</text>
    </view>
    <image :source="require('../assets/img/logoBAP.png')" />
  </view>
    <view class="header">
      <view class="mise-en-ligne">
        <text>Mettre une vidéo en ligne</text>
      </view>
      <view class="mise-en-ligne">
        <text>Mettre un audio en ligne</text>
      </view>
    </view>
    <view class="bottom">
      <text class="h1">Lorem Ipsum</text>
      <view class=""> </view>
    </view>
  </view>
</template>

<script>
import headerImg from "../components/base/headerImg";
import mesinfoscreen from "./mesinfoscreen.vue";

export default {
  data: function() {
    return {
      text: ""
    };
  },
    props: {
    navigation: {
      type: Object,
    },
  },
  methods: {
    goToMesInfoScreen() {
      this.navigation.navigate("mesinfoscreen");
    },
  }
 };
</script>

<style scoped>
.click{
  opacity: 0;
  position: absolute;
  top:20px;
  right: 10px;
  font-size: 30px;
}
.page {
  width: 100%;
  background-color: #ececec;
}

.h1 {
  font-size: 25px;
  text-align: center;
  margin-bottom: 10%;
}
.header {
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  padding-top: 60px;
}
.mise-en-ligne {
  border-width: 1px;
  border-radius: 30px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-right: 60px;
  padding-left: 60px;
  margin-bottom: 20px;
  margin-top: 20px;
}
hr {
  width: 50vw;
  color: black;
}
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
