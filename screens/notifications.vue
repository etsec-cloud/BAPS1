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

      <text class="title-notifs">Notifications</text>

      <view class="container-main">

        <view class="blue">
          <image :source="require('../assets/img/new.png')" />
          <text class="txt-notifs">Michel B. a répondu à votre commentaire</text>
          <text class="suspens-points">...</text>
          <text class="date">21h</text>
        </view>

        <view class="white">
          <image :source="require('../assets/img/new-vid.png')" />
          <text class="txt-notifs">Nouvelle vidéo !
            "Hypnose contre la douleur : Combattre le stress et l'anxiété."..
          </text>
          <text class="suspens-points">...</text>
          <text class="date">2j</text>
        </view>

        <view class="blue">
          <image :source="require('../assets/img/like.png')" />
          <text class="txt-notifs">Anna a aimé votre commentaire.</text>
          <text class="suspens-points">...</text>
          <text class="date">4j</text>
        </view>

        <view class="white">
          <image :source="require('../assets/img/new-audio.png')" />
          <text class="txt-notifs">Nouvel audio disponible !
            "Calmer ses douleurs chroniques"
          </text>
          <text class="suspens-points">...</text>
          <text class="date">2j</text>
        </view>

        <view class="white">
          <image :source="require('../assets/img/new.png')" />
          <text class="txt-notifs">Michel B. a répondu à votre commentaire</text>
          <text class="suspens-points">...</text>
          <text class="date">2j</text>
        </view>

        <view class="white">
          <image :source="require('../assets/img/new-vid.png')" />
          <text class="txt-notifs">Nouvelle vidéo !
            "Hypnose contre la douleur : Combattre le stress et l'anxiété."..
          </text>
          <text class="suspens-points">...</text>
          <text class="date">2j</text>
        </view>

      </view>
    </view>
  </scroll-view>
</template>

<script>
export default {
  props: {
    navigation: {
      type: Object
    }
  },

  methods: {
    goToRegister() {
      this.navigation.navigate("notifications");
    },
    goToMesInfoScreen() {
      this.navigation.navigate("mesinfoscreen");
    },
    handleChange: function(val) {
      this.value = val;
    }
  },
}
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

.title-notifs{
  font-size: 30px;
  text-align: center;
  color: #616161;
  margin-top: 30px;
  margin-bottom: 30px;
}

.blue{
  background-color: #78C0E0;
  border-width: 1px;
  border-color: #989695;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 25px;
  padding-bottom: 25px;
  padding-left: 50px;
  padding-right: 50px;
  margin: 0.2px;
  position: relative;

}

.txt-notifs{
  color: #757575;
  margin-left: 10px;
  width: 60%;

}

.white{
  background-color: #FFF7F2;
  border-width: 1px;
  border-color: #989695;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 25px;
  padding-bottom: 25px;
  padding-left: 50px;
  padding-right: 50px;
  margin: 0.2px;
}

.suspens-points{
  position: absolute;
  color: #757575;
  font-weight: bold;
  font-size: 25px;
  transform: rotate(-90deg);
  right: 10;
  top:2;
}

.date{
  position: absolute;
  color: #757575;
  font-size: 8px;
  right: 9;
  top:40;
}
</style>