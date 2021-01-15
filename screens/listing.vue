<template>
  <scroll-view
      :content-container-style="{
      contentContainer: {
        paddingVertical: 20
      }
    }"
  >

    <view>
      <view class="flexContainer">
        <view class="leftContainer">
          <image :source="require('../assets/img/profil.png')"/>
          <text class="click" @press="goToMesInfoScreen">A</text>
        </view>
        <image :source="require('../assets/img/logoBAP.png')" />
      </view>

      <view class="filtre">
        <view class="top-filtre">
          <image :source="require('../assets/img/filter.png')" />
          <text class="txt-top-filtre">Filtre</text>
        </view>

        <view class="bttm-filtre">
          <view class="type">
            <text class="titre-filtre">Type</text>
            <view class="bleu"></view>
            <CheckBox
                title='Click Here'
                checked={this.state.checked}
            />

          </view>
          <view class="visionnage">

          </view>
          <view class="trier-par">

          </view>
        </view>
      </view>
    </view>
  </scroll-view>
</template>

<script>
import React from "react";
import { CheckBox } from 'react-native-elements'

export default {
  props: {
    navigation: {
      type: Object
    }
  },

  methods: {
    goToRegister() {
      this.navigation.navigate("Listing");
    },
    goToMesInfoScreen() {
      this.navigation.navigate("mesinfoscreen");
    },

  },


  data: function() {
    return {

    };
  },
};
</script>

<style scoped>
.click{
  opacity: 0;
  position: absolute;
  top:20px;
  right: 10px;
  font-size: 30px;
}
.flexContainer {
  margin: 20px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.leftContainer {
  padding-top: 20px;
  padding-bottom: 20px;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.filtre{
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;


}

.top-filtre{
  display: flex;
  flex-direction: row;

}

.txt-top-filtre{
  font-size: 12px;
  margin-left: 6px;
}

</style>
