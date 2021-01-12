<template>
<view>
  <view class="hautdepage">
    <headerImg></headerImg>
    <view class="flex">
    <image :source="require('../assets/img/profil.png')" class="ima"/>
    <text class="Nom"> Prénom Nom </text>
        <view class="menu">
            <text class="oui">Mes information</text>
            <text class="oui">Notifications Push</text>
            <text class="oui">Paramètre du compte</text>
        </view>
    </view>
  </view>
    <view class="basdepage">
        <text class="h1">Accessibilités</text>
        <view class="flexe">
        <text class="h2">Malentendant</text>
            <view style = {styles.container}>
                <switch
                v-model="value1"/>
                
            </view>
        </view>
        <view class="flexe"> 
        <!-- <view style = {styles.container}>
            <vue-slider v-model="value"/>
        </view> -->
        </view>
        <view class="flexe">
        <text class="h2">Mode nuit</text>
            <view style = {styles.container}>
                <switch
                v-model="value2"/>
                
            </view>
        </view>
  </view>
</view>
</template>

<script>
import Vue from "vue-native-core";
import baseBouton from "../components/base/baseBouton";
import headerImg from "../components/base/headerImg";
// import VueSlider from "vue-slider-component";


export default {
  components: {
    baseBouton,
    headerImg,
    // VueSlider
  },
  data : function(){
      return {
          value1: true,
          value2: false,
        //   value: 0,
      }
  },
  methods: {
      handleChange: function(val) {
          this.value =val;
      }
  }
};

</script>

<style>
.flex {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.flexe {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
}
.menu{
    display: flex;
    flex-direction: row;
    justify-content: center;
    
    
}
.Nom {
  padding-top:  40px;
}
.ima{

}
.hautdepage{
    background-color: #b7dbc3;
}
.oui{
    margin-top: 20px;
    margin-left: 15px;
    margin-right: 15px;
    width: 21%;
    text-align: center;
}
.basdepage{
    padding-top: 40px;
    padding-left: 25px;
    padding-right: 25px;
}
.h1{
    font-size: 25px;
}
.h2{
    font-size: 16px;
}
</style>
