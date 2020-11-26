<template>
  <view class="page">
    <view class="form">
      <text class="h1">testaa</text>
      <text class="under_h1">le test du navigateur</text>
    </view>
    <view class="bottom"> </view>
  </view>
</template>

<script>
export default {
  data: function() {
    return {
      text: ""
    };
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
</style>
