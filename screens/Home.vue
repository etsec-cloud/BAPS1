<template>
  <view>
    <headerImg></headerImg>
    <view class="flex">
      <text class="text"
        >Hypnofine, Votre anti-douleur. Venez constater votre progression après
        une écoute . On commence ?</text
      >
      <baseBouton text="Start" :on-press="action"> </baseBouton>
      <button title="start" :on-press="action"></button>
    </view>
  </view>
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

<style>
.flex {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.text {
  padding: 0 20px;
  max-width: 300px;
}
</style>
