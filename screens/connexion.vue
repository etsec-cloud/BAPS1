<template>
  <view class="page">
    <view class="form">
      <text class="h1">LOREM IPSUM</text>
      <text class="under_h1"
        >Lorem ipsum dolor sit amet, consectetur adipiscin elit , sed do eiusmod
        tempor</text
      >
      <text-input class="input" placeholder="Votre mail" v-model="text" />
      <text-input
        class="input"
        placeholder="Entrez votre mot de passe"
        v-model="text"
      />
      <text class="mdp_lost">Mot de passe oublié</text>
    </view>
    <view class="bottom"> </view>
  </view>
</template>

<script>
export default {
  props: {
    navigation: {
      type: Object
    }
  },
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
.page {
  width: 100%;
  background-color: #ececec;
}

.form {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}

.h1 {
  font-size: 25px;
  text-align: center;
  margin-bottom: 10%;
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
  margin-top: 18%;
  margin-left: auto;
  margin-right: auto;
  height: 40px;
  width: 90%;
  text-align: center;
}

.mdp_lost {
  margin-top: 5%;
  font-size: 11px;
  text-align: center;
}
.nav {
  background-color: red;
}
</style>
