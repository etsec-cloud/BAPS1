<template>
<scroll-view
    :content-container-style="{
      contentContainer: {
        paddingVertical: 20
      }
    }"
  >
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
          <view class="flexe2">
          <image :source="require('../assets/img/edit.png')" />
          <text-input class="input" placeholder="Mon nom" v-model="Nom" />
          </view>
          <view class="flexe2">
          <image :source="require('../assets/img/edit.png')" />
          <text-input class="input" placeholder="Mon prénom" v-model="Prenom"/>
          </view>
          <view class="flexe2">
          <image :source="require('../assets/img/edit.png')" />
          <text-input class="input" placeholder="Mon adresse mail" v-model="Mail"/>
          </view>
          <view class="flexe2">
          <image :source="require('../assets/img/edit.png')" />
          <text-input class="input" placeholder="Mon mot de passe" v-model="mdp"/>
          </view>
        <view class="enregistrer"> 
      <text class="enr">Enregitrer</text>
    </view>
        </view>
        <text class="h2">Pour nous aider à vous proposer un contenu personalisé</text>
      <view class="flexe">
      <view class="flex2">
        <view class="flexe2">
          <switch v-model="doulchr" />
          <text class="h3">Chroniques</text>
        </view>
        <view class="flexe2">
          <switch v-model="doulomb" />
          <text class="h3">Lombaires</text>
        </view>
        <view class="flexe2">
          <switch v-model="doulest" />
          <text class="h3">Estomac</text>
        </view>
        <view class="flexe2">
          <switch v-model="doulmig" />
          <text class="h3">Migraine</text>
        </view>
        <view class="flexe2">
          <switch v-model="deptab" />
          <text class="h3">Dépendance tabac</text>
        </view>
        
      </view>
    
      <view class="flex2">
        <view class="flexe2">
          <switch v-model="doulmusc" />
          <text class="h3">Douleur musculaires</text>
        </view>
        <view class="flexe2">
          <switch v-model="doulintes" />
          <text class="h3">Intestins</text>
        </view>
        <view class="flexe2">
          <switch v-model="doulpostopé" />
          <text class="h3">Post-opératoire</text>
        </view>
        <view class="flexe2">
          <switch v-model="stress" />
          <text class="h3">Stess et anxiété</text>
        </view>
        <view class="flexe2">
          <switch v-model="priseparole" />
          <text class="h3">Prise de la parole</text>
        </view>
      </view>
    </view>
    <view class="enregistrer"> 
      <text class="enr">Enregitrer</text>
    </view>
    <view class="rouge">
      <text class="supr">Déconnexion</text>
      <text class="supr">Supprimer mon compte</text>
    </view>
    </view> 
</view>
</scroll-view>
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
      doulchr: false,
      doulomb: true,
      doulest: false,
      doulmig:false,
      deptab:false,
      doulmusc : false,
      doulintes : false,
      doulpostopé : true,
      stress: false,
      priseparole: true,
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
.flex2 {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
}
.flexe {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
}
.flexe2 {
  display: flex;
  flex-direction: row;
  align-items: center;
  
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
  font-size: 25px;
  margin-top: 30px;
}
.h2 {
  margin-top: 30px;
}
.h3 {
  font-size: 12px;
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
.supr{
  color: red;
}
.rouge{
  margin-top: 30px ;
}
.enregistrer{
  margin-top: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  width: 31%;
  position: relative;
  left: 69%;
  border-width: 1px;
  border-color: #17759D;

}
.enr{
  color: #17759D;
}
</style>
