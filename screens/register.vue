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
        <headerImg class="bgcolor"></headerImg>
        <!-- <view class="header-register">
          <image
            class="logo-register"
            :source="require('../assets/img/logoBAP.png')"
          />
        </view> -->
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
        <BaseBouton text="Register"></BaseBouton>
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
.page-register {
  width: 100%;
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
</style>
