<template>
  <scroll-view :content-container-style="{contentContainer: {
        paddingVertical: 20
    }}">
    <view class="page-a-propos">
      <headerImg></headerImg>
      <view class="header-a-propos">
        <text class="h1">Lorem Ipsum</text>
        <text class="under_h1"
        >Lorem ipsum dolor sit amet, consectetur adipiscin elit , sed do
          eiusmod tempor</text>

      </view>
      <view class="main-a-propos">

        <view class="container">
          <image class="img" :source="require('../assets/img/exempleimg.png')" />
          <text class="txt-main"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..
          </text>

        </view>
        <view class="container">

          <text class="txt-main"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..
          </text>
          <image class="img" :source="require('../assets/img/exempleimg.png')" />
        </view>
        <text class="h2">Lorem Ipsum</text>
        <image class="img2" :source="require('../assets/img/exempleimg.png')" />
        <text class="h3">Lorem Ipsum</text>
        <text class="txt-bas"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</text>
      </view>
    </view>

  </scroll-view>
</template>

<script>

import HeaderImg from "../components/base/headerImg";



export default {
name: "apropos",
  components: {HeaderImg},
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



.header-a-propos{

  padding-top: 50px;
  margin-bottom: 100px;

}

.h1{
  text-align: center;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;


}

.under_h1{
  text-align: center;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
}
.main-a-propos{
  margin-left: auto;
  margin-right: auto;
}

.container{
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  margin-bottom: 80px;


}
.img{
  width: 35%;

}

.txt-main{
  font-size: 14px;
  text-align: center;
  width: 63%;
}

.h2{
  font-size: 18px;
  font-weight: 500;
  margin-left: 13%;
  text-transform: uppercase;
}

.img2{
  margin-top: 30px;
  margin-left: 13%;
}

.h3{
  font-size: 14px;
  margin-left: 13%;
  margin-top: 20px;
  text-transform: uppercase;
}
.txt-bas{
  margin-top: 30px;
  margin-left: 35%;


}
.nav {
  background-color: red;
}


</style>