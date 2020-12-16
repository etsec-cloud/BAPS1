<template>
  <view class="page">
    <headerImg></headerImg>
    <view>
        <text class="h1">Lorem Ipsum</text>
        <view class="flex">
          <image :source="require('../assets/img/exempleimg.png')" class="img"/>
          <text class="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</text>
      </view>
    </view>
    <view>
        <text class="h1">Lorem Ipsum</text>
      <view class="flexe">
          <image :source="require('../assets/img/exempleimg.png')" class="img"/>
          <text class="p2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</text>
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
.flex{
    margin-left: 10px;
    display: flex;
    flex-direction: row;
    width: 60%;

}
.flexe{
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    width: 60%;

}
.h1{
    font-size: 30px;
    margin-bottom: 20px;
    margin-top: 10px;
}
.p{
    padding-top: 10px;
    padding-left: 5px;
    padding-right: 25px;
    color: #707070;
    font-size: 15px;
}

.p2{
    padding-top: 10px;
    padding-left: 25px;
    padding-right: 5px;
    color: #707070;
    font-size: 15px;
}
</style>