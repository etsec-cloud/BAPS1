<template>
  <scroll-view
    :content-container-style="{
      contentContainer: {
        paddingVertical: 20
      }
    }"
  >
    <view class="page">
        <view class="flexContainer">
    <view class="leftContainer">
      <image :source="require('../assets/img/profil.png')"  @press="goToMesInfoScreen"/>
    </view>
    <image :source="require('../assets/img/logoBAP.png')" />
  </view>
      <view>
        <text class="h1">Lorem Ipsum</text>
        <view class="flex">
          <image :source="require('../assets/img/exempleimg.png')" class="img"/>
          <view>  
            <text class="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</text>
            <button class="button" title="Bouton" type="submit" id="button" color="#7EBC89"></button>
          </view>
      </view>
      <view>
        <text class="h1">Lorem Ipsum</text>
      <view class="flexe">
          <image :source="require('../assets/img/exempleimg.png')" class="img"/>
          <view>
            <text class="p2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</text>
            <button class="button" title="Bouton" type="submit" id="button" color="#7EBC89"></button>
          </view>
      </view>
    </view>
    <view class="slider">
      <text class="sh1">Lorem Ipsum</text>
    </view>
  </scroll-view>
</template>

<script>
import headerImg from "../components/base/headerImg";

export default {
  data: function() {
    return {
      text: ""
    };
  },
  components: {
    headerImg,
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
.flex {
  margin-left: 10px;
  display: flex;
  flex-direction: row;
  width: 60%;
}
.flexe {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  width: 60%;
}
.h1 {
  font-size: 30px;
  margin-bottom: 20px;
  margin-top: 10px;
}
.p {
  padding-top: 10px;
  padding-left: 5px;
  padding-right: 25px;
  color: #707070;
  font-size: 15px;
}

.p2 {
  padding-top: 10px;
  padding-left: 25px;
  padding-right: 5px;
  color: #707070;
  font-size: 15px;
}
.slider{
  margin-top: 40px;
}
.sh1{
  text-align: center;
  font-size: 30px;
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
