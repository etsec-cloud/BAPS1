<template>
  <view>
    <view class="hautdepage">
      <headerImg></headerImg>
      <view class="flex">
        <image :source="require('../assets/img/profil.png')" class="ima" />
        <text class="Nom"> Prénom Nom </text>
        <view class="menu">
          <text class="oui" @press="goToMesInfoScreen">Mes informations</text>
          <text class="oui">Notifications Push</text>
          <text class="oui" @press="goToParametreScreen"
            >Paramètre du compte</text
          >
        </view>
      </view>
    </view>
    <view class="basdepage">
      <text class="h1">Notif</text>
    </view>
  </view>
</template>

<script>
import Vue from "vue-native-core";
import baseBouton from "../components/base/baseBouton";
import headerImg from "../components/base/headerImg";
import paramètrecompte from "./paramètrecompte.vue";
import mesinfoscreen from "./mesinfoscreen.vue";

export default {
  components: {
    baseBouton,
    headerImg
  },
  data: function() {
    return {};
  },
  props: {
    navigation: {
      type: Object
    }
  },
  methods: {
    goToParametreScreen() {
      console.log("oui");
      this.navigation.navigate("paramètrecompte");
    },
    goToMesInfoScreen() {
      console.log("non");
      this.navigation.navigate("mesinfoscreen");
    },
    handleChange: function(val) {
      this.value = val;
    }
  }
};
</script>

<style scoped>
.flex {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.flexe {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
}
.menu {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.Nom {
  padding-top: 40px;
}
.ima {
}
.hautdepage {
  background-color: #b7dbc3;
}
.oui {
  margin-top: 20px;
  margin-left: 15px;
  margin-right: 15px;
  width: 21%;
  text-align: center;
}
.basdepage {
  padding-top: 10px;
  padding-left: 25px;
  padding-right: 25px;
}
.h1 {
  font-size: 25px;
  margin-top: 30px;
}
.h2 {
  font-size: 16px;
}
.h3 {
  font-size: 16px;
  margin-top: 10px;
}
</style>
