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
          <text class="oui" @press="goToMesInfoScreen">Mes informations</text>
          <text class="oui">Notifications Push</text>
          <text class="oui" @press="goToParametreScreen"
            >Paramètre du compte</text
          >
        </view>
      </view>
    </view>
    <view class="flexe2">
      <image :source="require('../assets/img/notif.png')" class="icon"/>
      <text class="h1">Activer les notifications</text>
      <switch v-model="notifon" class="switch"/>
    </view>
     <view class="flexe">
       <view style="{styles.container}">
          <switch v-model="value1" />
        </view>
        <text class="h2">Malentendant</text>
        
        </view>
        <view class="flexe">
          <view style="{styles.container}">
          <switch v-model="value1" />
        </view> 
          <text class="h2">Daltonisme</text>
          </view>
        <view class="flexe">
          <view style="{styles.container}">
          <switch v-model="value1" />
        </view>
          <text class="h2">Mode nuit</text>
        </view>
      <view class="enregistrer"> 
      <text class="enr">Enregitrer</text>
    </view>
        
    </view>
</template>

<script>
import Vue from "vue-native-core";
import paramètrecompte from "./paramètrecompte.vue";
import mesinfoscreen from "./mesinfoscreen.vue";

export default {
  data: function() {
    return {
      notifon: false
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
    goToMesInfoScreen() {
      this.navigation.navigate("mesinfoscreen");
    },
    handleChange: function(val) {
      this.value = val;
    }
  }
};
</script>

<style scoped>
.icon{
  position: relative;
  top :15px;
}
.enregistrer{
  margin-top: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  width: 27%;
  position: relative;
  left: 69%;
  border-width: 1px;
  border-color: #17759D;

}
.enr{
  color: #17759D;
}
.click{
  opacity: 0;
  position: absolute;
  top:20px;
  right: 10px;
  font-size: 30px;
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
  padding-left: 20%;
  border-bottom-width: 1px;
  border-color: #b7dbc3;
}
.flexe2 {
  display: flex;
  border-bottom-width: 5px;
  padding-left: 35px;
  border-color: #b7dbc3;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  width: 100%;
}
.menu {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.Nom {
  padding-top: 40px;
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
  font-size: 20px;
  margin-top: 30px;
  padding-left: 26px;
  padding-right: 26px;
}
.h2 {
  font-size: 26px;
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
.switch{
  position: relative;
  top :17px;
}
</style>
