<template>
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

export default {
  components: {
    baseBouton,
    headerImg
  },
  props: {
    navigation: { type: Object }
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




</style>
