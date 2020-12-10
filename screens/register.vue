<template>
  <scroll-view :content-container-style="{contentContainer: {
        paddingVertical: 20
    }}">
    <view class="page-register">
      <view class="fond-form-register">
        <view class="header-register">

          <image class="logo-register" :source="require('../assets/img/logoBAP.png')" />
        </view>
        <view class="form-register">
          <text-input class="input" placeholder="Votre mail" v-model="text" />
          <text-input
              class="input"
              placeholder="Entrez votre mot de passe"
              v-model="text"
          />
          <text-input
              class="input"
              placeholder="Confirmez votre mot de passe"
              v-model="text"
          />


        </view>
      </view>

      <view class="bottom-register">
        <BaseBouton></BaseBouton>
      </view>
    </view>
  </scroll-view>
</template>

<script>

import BaseBouton from "../components/base/baseBouton";

export default {
  props: {
    navigation: {
      type: Object
    }
  },
  components: { BaseBouton },
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
.page-register {
  width: 100%;
  background-color: #166180;
}

.fond-form-register {
  background-color: #fff7f2;
  padding-bottom: 50px;
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

.nav {
  background-color: red;
}
</style>