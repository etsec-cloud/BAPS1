<template>
  <scroll-view
    :content-container-style="{
      contentContainer: {
        paddingVertical: 20
      }
    }"
  >
      <view class="flexContainer">
    <view class="leftContainer">
      <image :source="require('../assets/img/profil.png')"/>
      <text @press="goToMesInfoScreen">goToMesInfoScreen</text>
    </view>
    <image :source="require('../assets/img/logoBAP.png')" />
  </view>
    <image :source="require('../assets/img/homepagefond.png')" />
    <view class="main-container">
      <view class="mini-container">
        <text class="titre">À propos</text>
        <text class="text">
          Hypnophine est un nouveau site d’hypnose médicale gratuit qui sert à
          vous apaiser ou à vous soulager de vos maux divers et variés (Douleur
          après une opération, Mal de Dos, Arrêter la cigarette)
        </text>
      </view>

      <view class="mini-container">
        <text class="titre">Nous contacter</text>
        <view class="flexRow m-b">
          <image :source="require('../assets/img/email.png')" />
          <text class="text"> : Hypnophine@Hypnophine.com </text>
        </view>
        <view class="flexRow">
          <image :source="require('../assets/img/fb.png')" />
          <text class="text"> : Hypnophine </text>
        </view>
      </view>

      <view class="mini-container">
        <text class="titre">Podcast</text>
        <text class="text m-b">
          Podcast gratuits, de manière illimité, facile d’utilisation et sans
          effet secondaire !
          <text class="m-b"
            >Vous trouverez ici différents audios afin de soigner votre douleur.
            Sans douleur, sans effet secondaire, sans dépendance, gratuit et
            illimité. Voici un podcast né durant le confinement pour apporter au
            quotidien les bienfaits de l'hypnose. Pour ceux qui sont déjà venu
            me voir lors d'une séance d'hypnose, sentez-vous libre de commencer
            par l'épisode que vous souhaitez. Si vous n'avez jamais fait
            d'hypnose auparavant avec moi, je vous conseille de commencer par
            l'épisode "Intro : les bases" puis "Evasion" et "Voyage au dedans".
          </text>

          <text>Evidemment à écouter les yeux fermés !</text>
        </text>
      </view>
      <view class="mini-container">
        <text class="titre">Services</text>
        <text class="text">
          Gestion de la douleur, troubles du sommeil, arrêt du tabac, gestion du
          stress, perte de poids, prise de parole, performance.
        </text>
      </view>

      <view class="mini-container flexColCenter">
        <text class="titre">Qui suis-je ?</text>
        <image :source="require('../assets/img/bannierexemple.png')" />
        <text class="alignText text">
          Diplomé de HEC, Hypnothérapeute certifié depuis 2013, fondateur en
          2015 d’HypnoHome et membre de l’Institut Parisien du Dos depuis 2016.
        </text>
      </view>
    </view>
  </scroll-view>
</template>

<script>
import HeaderImg from "../components/base/headerImg";

export default {
  name: "apropos",
  components: { HeaderImg },
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
.main-container {
  color: #757575;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.titre {
  font-weight: bold;
  color: #616161;
  margin-bottom: 10;
}
.mini-container {
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 30;
}
.flexRow {
  display: flex;
  flex-direction: row;
}
.flexColCenter {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.alignText {
  text-align: center;
}
.m-b {
  margin-bottom: 10px;
}
.text {
  line-height: 20px;
  color: #757575;
}
</style>
