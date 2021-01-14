<template>
  <view>
    <view class="hautdepage">
        <view class="flexContainer">
    <view class="leftContainer">
            <image :source="require('../assets/img/profil.png')"/>
      <text class="click" @press="goToMesInfoScreen">A</text>
    </view>
    <image :source="require('../assets/img/logoBAP.png')" />
  </view>
      <view class="flex">
        <image :source="require('../assets/img/profil.png')" class="ima" />
        <text class="Nom"> Prénom Nom </text>
        <view class="menu">
          <text class="oui">Mes informations</text>
          <text class="oui" @press="goToNotifScreen">Notifications Push</text>
          <text class="oui" @press="goToParametreScreen"
            >Paramètre du compte</text
          >
        </view>
      </view>
    </view>
    <view class="basdepage">
      <text class="h1">Mes informations</text>
        <view class="form-profil">
          <text-input class="input" placeholder="Mon nom" v-model="Nom" />
          <text-input
            class="input"
            placeholder="Mon prénom"
            v-model="Prenom"
          />
          <text-input
            class="input"
            placeholder="Mon adresse mail"
            v-model="Mail"
          />
          <text-input
            class="input"
            placeholder="Mon mot de passe"
            v-model="mdp"
          />
        </view>
    </view>
    <view>
      <text class="h1">Concernant Hypnofine</text>
      <text class="h3">Lire le règlement</text>
      <text class="h3">Lire les conditions générales d'utilisateur</text>

</view>
    <view class="footer">
      
    </view>
</template>

<script>
import Vue from "vue-native-core";
import paramètrecompte from "./paramètrecompte.vue";
import notifscreen from "./notifscreen.vue";

export default {
  data: function() {
    return {
      Nom: "",
      Prenom: "",
      Mail: "",
      mdp: "",
    };
  },
  props: {
    navigation: {
      type: Object
    }
  },
  methods: {
    goToParametreScreen() {
      this.navigation.navigate("paramètrecompte");
    },
    goToNotifScreen() {
      this.navigation.navigate("notifscreen");
    },
    handleChange: function(val) {
      this.value = val;
    }
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
.input {
  font-size: 14px;
  margin-top: 18%;
  margin-left: auto;
  margin-right: auto;
  height: 40px;
  width: 90%;
  text-align: center;
  border-bottom-width: 1px;
}
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
