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
        <headerImg class="bgcolor"></headerImg>
        <view class="form">
          <text class="h1">LOREM IPSUM</text>
          <text class="under_h1"
            >Lorem ipsum dolor sit amet, consectetur adipiscin elit , sed do
            eiusmod tempor</text
          >
          <text-input class="input" placeholder="Votre mail" v-model="text" />
          <text-input
            class="input"
            placeholder="Entrez votre mot de passe"
            v-model="text"
          />
          <text class="mdp_lost">Mot de passe oublié</text>
          <button class="bttn" title="login" type="submit">Login</button>
        </view>
      </view>

      <view class="bottom-connexion">
        <BaseBouton></BaseBouton>
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
      text: ""
    };
  },
  methods: {
    goToTestScreen() {
      this.navigation.navigate("Page");
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.page {
  width: 100%;
  background-color: #166180;
}

.fond-form {
  background-color: #fff7f2;
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
.bottom {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
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
</style>
