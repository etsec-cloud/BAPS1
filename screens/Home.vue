<template>
  <view>
    <headerImg></headerImg>
    <view class="flex">
      <text class="text"
        >Hypnofine, Votre anti-douleur. Venez constater votre progression après
        une écoute . On commence ?</text
      >
      <baseBouton text="Start" :on-press="action"> </baseBouton>
      <view class="buttou">
        <button
          class="btn"
          color="transparent"
          title="start"
          :on-press="action"
        ></button>
      </view>
      
  <scroll-view :content-container-style="{contentContainer: {
        paddingVertical: 20
    }}">
    <view class="home-page">
      <headerImg></headerImg>
      <view class="flex">
        <text class="text"
          >Hypnofine, Votre anti-douleur. Venez constater votre progression après
          une écoute . On commence ?</text
        >
        <image class="home-fond" :source="require('../assets/img/homepagefond.png')" />
        <baseBouton text="Start" :on-press="action"> </baseBouton>
        <button title="start" :on-press="action"></button>
      </view>
    </view>
  </scroll-view>
</template>

<script>
import Vue from "vue-native-core";
import baseBouton from "../components/base/baseBouton";
import headerImg from "../components/base/headerImg";
import axios from "axios";

export default {
  components: {
    baseBouton,
    headerImg
  },
  props: {
    navigation: { type: Object }
  },
  data: function() {
    return {
      info: null
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
    }
  }
};
</script>

<style scoped>
@import url("https://use.typekit.net/kzn4ozu.css");

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
</style>

