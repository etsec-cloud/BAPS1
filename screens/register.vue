<template>
  <scroll-view
    :content-container-style="{
      contentContainer: {
        paddingVertical: 20
      }
    }"
  >
    <view class="page-register">
      <view class="fond-form-register">
        <view class="flexContainer">
          <view class="leftContainer">
            <image :source="require('../assets/img/profil.png')" />
            <text class="click" @press="goToMesInfoScreen">A</text>
          </view>
          <image :source="require('../assets/img/logoBAP.png')" />
        </view>
        <!-- <view class="header-register">
          <image
            class="logo-register"
            :source="require('../assets/img/logoBAP.png')"
          />
        </view> -->
        <text class="h1">Inscription</text>
        <view class="form-register">
          <text-input class="input" placeholder="Votre mail" v-model="email" />
          <text-input
            class="input"
            placeholder="Entrez votre mot de passe"
            v-model="password"
          />
          <text-input
            class="input"
            placeholder="Confirmez votre mot de passe"
            v-model="confirm_password"
          />
        </view>
      </view>

      <view class="bottom-register">
        <!-- <BaseBouton text="Register"></BaseBouton> -->
        <view class="boutonnade">
          <text class="text-bouton" @press="postNow"> VALIDER</text>
        </view>
      </view>
    </view>
  </scroll-view>
</template>

<script>
import Vue from "vue-native-core";
import { VueNativeBase } from "native-base";
import BaseBouton from "../components/base/baseBouton";
import headerImg from "../components/base/headerImg";
import axios from "axios";

export default {
  props: {
    navigation: {
      type: Object
    }
  },
  components: { headerImg },
  data: function() {
    return {
      email: "",
      password: "",
      confirm_password: ""
    };
  },
  methods: {
    goToTestScreen() {
      this.navigation.navigate("Page");
    },
    goToMesInfoScreen() {
      this.navigation.navigate("mesinfoscreen");
    },
    postNow() {
      axios.post("http://192.168.1.57:3000/users", {
        body: {
          user: {
            mdp: "100931",
            email: "john@example.com"
          }
        }
      });
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.click {
  opacity: 0;
  position: absolute;
  top: 20px;
  right: 10px;
  font-size: 30px;
}
.page-register {
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
.fond-form-register {
  background-color: #fff7f2;
  padding-bottom: 50px;
  border-bottom-right-radius: 45px;
  border-bottom-left-radius: 45px;
}
.bgcolor {
  background-color: #fff7f2;
}

.form-register {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}

.logo-register {
  margin-top: 30%;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  height: 50px;
  margin-bottom: 50px;
}

.bottom-register {
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
.h1 {
  font-size: 30px;
  text-align: center;
  margin-bottom: 10%;
  color: #616161;
}
</style>
