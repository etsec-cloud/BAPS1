<template>
  <view class="page">
    <headerImg></headerImg>
    <view class="header">
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
  </view>
</template>

<script>
import headerImg from "../components/base/headerImg";
export default {
  data: function() {
    return {
      text: ""
    };
  },
  components: {
    headerImg
  },
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
    padding-top: 60px;
}
.mise-en-ligne{
    border-width: 1px ;
    border-radius: 30px;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-right:60px ;
    padding-left:60px ;
    margin-bottom:20px ;
    margin-top:20px;
}
hr{
    width: 50vw;
    color: black;
}
</style>