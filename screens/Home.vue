<template>
  <scroll-view
    :content-container-style="{
      contentContainer: {
        paddingVertical: 20
      }
    }"
  >
    <view class="home-fond">
      <view class="flexContainer">
        <view class="leftContainer">
      <image :source="require('../assets/img/profil.png')"/>
      <text class="click" @press="goToMesInfoScreen">A</text>
        </view>
        <image :source="require('../assets/img/logoBAP.png')" />
      </view>
      <view class="flex">
        <text class="text"
          >Hypnofine, Votre anti-douleur. Venez constater votre progression
          après une écoute . On commence ?</text
        >
        <image :source="require('../assets/img/homepagefond.png')" />

        <view class="boutonnade">
          <text class="text-bouton" @press="action"> ÉCOUTER</text>
        </view>

        <view class="boutonnade postionAbso">
          <text class="text-bouton" @press="action"> VOIR</text>
        </view>
      </view>
    </view>
  </scroll-view>
</template>

<script>
import Vue from "vue-native-core";
import baseBouton from "../components/base/baseBouton";
import headerImg from "../components/base/headerImg";
import axios from "axios";
import backgroundUrl from "../assets/img/homepagefond.png";
export default {
  components: {
    headerImg
  },
  props: {
    navigation: { type: Object }
  },
  data: function() {
    return {
      info: null,
      backgroundUrl
    };
  },
  mounted() {
    return axios
      .get("http://192.168.1.57:3000/users")
      .then(response => {
        this.info = response.data;
        return response.data;
      })
      .catch(e => {
        console.log("Error", e);
      });
  },
  methods: {
    action() {
      this.navigation.navigate("IOSTabs");
    },
    goToMesInfoScreen() {
      this.navigation.navigate("mesinfoscreen");
    }
  }
};
</script>

<style scoped>
@import url("https://use.typekit.net/kzn4ozu.css");

.home-fond {
  position: relative;
  margin-bottom: 30;
}
.click{
  opacity: 0;
  position: absolute;
  top:20px;
  right: 10px;
  font-size: 30px;
}
.boutonnade {
  position: absolute;
  bottom: 60;
  display: flex;
  background-color: #fff7f2;
  width: 140px;
  height: 40px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  border-width: 2;
  border-color: #17759d;
}
.postionAbso {
  bottom: -10;
}
.text-bouton {
  text-align: center;
  color: #17759d;
  font-size: 18px;
  width: 140px;
}

.flex {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.text {
  padding: 0 20px;
  max-width: 300px;
  font-size: 18px;
  text-align: center;
  color: #616161;
  line-height: 24px;
}
.btn {
  background-color: transparent;
  border-color: transparent;
  border-width: 1;
  z-index: 0;
}
button {
  z-index: 0;
}
.buttou {
  background-color: #2e86ab;
  width: 140px;
  height: 40px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
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
