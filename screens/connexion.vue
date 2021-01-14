<template>
  <scroll-view
    :content-container-style="{
      contentContainer: {
        paddingVertical: 20
      }
    }"
  >
    <view class="page">
      <view class="fond-form">
          <view class="flexContainer">
    <view class="leftContainer">
      <image :source="require('../assets/img/profil.png')"/>
      <text @press="goToMesInfoScreen">goToMesInfoScreen</text>
    </view>
    <image :source="require('../assets/img/logoBAP.png')" />
  </view>
        <view class="form">
          <text class="h1">LOREM IPSUM</text>
          <text class="under_h1"
            >Lorem ipsum dolor sit amet, consectetur adipiscin elit , sed do
            eiusmod tempor</text
          >
          <text-input class="input" placeholder="Votre mail" v-model="email" />
          <text-input
            class="input"
            placeholder="Entrez votre mot de passe"
            v-model="password"
          />
          <text class="mdp_lost">Mot de passe oublié</text>
          <!-- <button
            class="button"
            title="Bouton"
            type="submit"
            id="button"
            color="#7EBC89"
          ></button> -->
          <view class="boutonnade postionAbso">
            <text class="text-bouton" @press="action"> VALIDER</text>
          </view>
        </view>
      </view>

      <view class="bottom-connexion">
        <view class="boutonnade">
          <text class="text-bouton" @press="goToRegister"> CREER</text>
        </view>
      </view>
    </view>
  </scroll-view>
</template>

<script>
import BaseBouton from "../components/base/baseBouton";
import headerImg from "../components/base/headerImg";

export default {
  props: {
    navigation: {
      type: Object
    }
  },
  components: { BaseBouton, headerImg },
  data: function() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    goToRegister() {
      console.log("ouai");
      this.navigation.navigate("Register");
    }
  }
};
</script>

<style scoped>
@import url("https://use.typekit.net/kzn4ozu.css");

* {
  box-sizing: border-box;
}
.page {
  width: 100%;
  background-color: #166180;
}
.boutonnade {
  display: flex;
  background-color: #fff7f2;
  width: 140px;
  height: 40px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  border-width: 2;
  border-color: #17759d;
  margin-bottom: 10;
}
.postionAbso {
  position: absolute;
  bottom: -60;
  right: 0;
}
.fond-form {
  background-color: #fff7f2;
  border-bottom-right-radius: 54px;
  border-bottom-left-radius: 54px;
  position: relative;
  padding-bottom: 30;
  margin-bottom: 20;
}

.form {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}
.profil {
}

.logo {
  margin-top: 30%;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  height: 50px;
  margin-bottom: 50px;
}

.h1,
.under_h1 {
}

.h1 {
  font-size: 30px;
  text-align: center;
  margin-bottom: 10%;
  color: #616161;
}
.under_h1 {
  font-size: 16px;
  text-align: center;
}

#button {
  width: 2px;
}
.bottom-connexion {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 35px;
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

.mdp_lost {
  margin-top: 5%;
  font-size: 12px;
  text-align: center;
  padding-bottom: 30px;
}

.bttn {
}
.nav {
  background-color: red;
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
