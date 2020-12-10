<template>
  <view class="page">
    <view class="header">
      <image class="logo" :source="require('../img/logo.png')" />
      <view class="mise-en-ligne">
      <text>Mettre une vidéo en ligne</text>
      </view>
      <view class="mise-en-ligne">
      <text>Mettre un audio en ligne</text>
      </view>
    </view>
    <view class="bottom">
      <text class="h1">Lorem Ipsum</text>
    <view class="">

    </view>
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

.h1 {
  font-size: 25px;
  text-align: center;
  margin-bottom: 10%;
}
.header{
    display: flex;
    align-items: center;
    margin-bottom:40px ;
}
.mise-en-ligne{
    border-width: 1px ;
    border-radius: 30px;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-right:60px ;
    padding-left:60px ;
    margin-bottom:20px ;
}
hr{
    width: 50vw;
    color: black;
}
</style>