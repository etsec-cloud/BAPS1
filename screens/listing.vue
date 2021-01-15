<template>
  <scroll-view
      :content-container-style="{
      contentContainer: {
        paddingVertical: 20
      }
    }"
  >

    <view class="page">
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
            <view class="checkboxes">
              <CheckBox
                  checkedColor='blue'
                  size='2'
                  checked={this.state.checked}
              />
              <text class="txt-checkbox">Vidéos</text>
            </view>

            <view class="checkboxes">
              <CheckBox
                  checkedColor='blue'
                  checked={this.state.checked}
              />
              <text class="txt-checkbox">Audios</text>
            </view>


          </view>
          <view class="visionnage">
            <text class="titre-filtre">Visionnage</text>
            <view class="bleu"></view>
            <view class="checkboxes">
              <CheckBox
                  checkedColor='blue'
                  checked={this.state.checked}
              />
              <text class="txt-checkbox">Jamais visionné</text>
            </view>
          </view>
          <view class="trier-par">
            <text class="titre-filtre">Trier par</text>
            <view class="bleu"></view>
            <view class="checkboxes">
              <CheckBox
                  checkedColor='blue'
                  checked={this.state.checked}
              />
              <text class="txt-checkbox">Ordre alphabétique</text>
            </view>
            <view class="checkboxes">
              <CheckBox
                  checkedColor='blue'
                  checked={this.state.checked}
              />
              <text class="txt-checkbox">Nombre de vues</text>
            </view>
            <view class="checkboxes">
              <CheckBox
                  checkedColor='blue'
                  checked={this.state.checked}
              />
              <text class="txt-checkbox">Avis</text>
            </view>
          </view>
        </view>
      </view>
      <view class="main-container">
        <image :source="require('../assets/img/listingImg1.png')" class="img1" />
        <view class="bleuXL"></view>
        <view class="audio-player">
          <view class="profil">
            <image :source="require('../assets/img/profilPhoto.png')" />
            <text class="txt-profil">Lorem ipsum dolor sit amet, consectetur adipiscin elit , sed do eiusmod tempor</text>
          </view>
          <view class="audio">
            <image :source="require('../assets/img/play.png')" class="play"/>
          </view>
        </view>
        <view class="bleuXL"></view>
        <image :source="require('../assets/img/listingImg2.png')" class="img2"/>
        <text class="detail-vid">Écoute contre la douleur N°2 - Douleurs chroniques</text>
        <text class="date-vid">250 vues - 13 Janv. 2021</text>
        <view class="bleuXL"></view>
        <view class="audio-player">
          <view class="profil">
            <image :source="require('../assets/img/profilPhoto.png')" />
            <text class="txt-profil">Lorem ipsum dolor sit amet, consectetur adipiscin elit , sed do eiusmod tempor</text>
          </view>
          <view class="audio">
            <image :source="require('../assets/img/pause.png')" class="play"/>
          </view>
        </view>

      </view>
    </view>
  </scroll-view>
</template>

<script>

import { CheckBox } from 'react-native-elements';



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



};
</script>

<style scoped>
.page{
  background-color: #FFF7F2;
}

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

.bttm-filtre{
  display: flex;
  flex-direction: row;
}

.titre-filtre{
  margin-top: 15px;
  margin-bottom: 4px;
}

.bleu{
  background-color: #166180;
  width: 50%;
  height: 1px;
  margin-bottom: 10px;
}

.checkboxes{
  display: flex;
  flex-direction: row;
}

.main-container{
  margin-top: 20px;
}

.bleuXL{
  background-color: #166180;
  width: 50%;
  height: 1.5px;
  margin-left: auto;
  margin-right: auto;

}

.img1{
  margin-bottom: 100px;
}

.audio-player{
  width:95%;
  background-color: #ffffff;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  padding-top:5px;
  border-radius:20px;
  padding-bottom: 5px;
}

.profil{
  width:90%;
  display: flex;
  flex-direction: row;
  margin-left:auto;
  margin-right:auto;
}

.txt-profil{
  width:65%;
  margin-top: 2px;
  margin-left:10px;
  font-size: 10px;
}

.play{
  margin-top: 5px;
  width: 88%;
  margin-left: auto;
  margin-right: auto;
}

.img2{
  margin-top: 50px;
}
.detail-vid{
  width: 85%;
  font-size: 14px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;

}

.date-vid{
  font-size: 8px;
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5px;
  margin-bottom: 20px;
}
</style>
