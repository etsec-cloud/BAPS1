<template>
  <view class="flex-row-top">
    <image :source="require('../assets/img/profil.png')" />
    <image :source="require('../assets/img/logoBAP.png')" />

    <text class=""
      >Hypnofine, Votre anti-douleur. Venez constater votre progression après
      une écoute . On commence ?</text
    >
    <button title="start" @press="goToAndroidTabNavigator"></button>
  </view>
</template>

<script>
import Vue from "vue-native-core";
import baseBouton from "../components/base/baseBouton";

export default {
  components: {
    baseBouton
  },
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

<style>
.flex-row-top {
  margin-top: 20px;
  display: flex;
  background-color: red;
}
</style>
