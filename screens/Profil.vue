<template>
  <view class="bgGreen">
    <view class="flexContainer">
      <view class="leftContainer">
        <image :source="require('../assets/img/profil.png')" />
      </view>
      <image :source="require('../assets/img/logoBAP.png')" />
    </view>
    <image
      class="poseAbso botpse"
      :source="require('../assets/img/vertBgTop.png')"
    />
    <view class="bgBlue">
      <view class="flexCoco">
        <view>
          <text> PRENOM NOM</text>
        </view>
        <view class="flexColo">
          <view class="flexRoro">
            <image :source="require('../assets/img/pen.png')" />
            <text>
              Mon compte
            </text>
          </view>
          <view class="flexRoro">
            <image :source="require('../assets/img/fav.png')" />
            <text>
              Mes vidéos et écoutes favorites
            </text>
          </view>
          <view class="flexRoro">
            <image :source="require('../assets/img/acti.png')" />
            <text>
              Mes dernières activités
            </text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {};
</script>

<style>
.flexContainer {
  margin: 20px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  z-index: 3;
}
.leftContainer {
  padding-top: 20px;
  padding-bottom: 20px;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
.bgGreen {
  background-color: #2c87ad;
  position: relative;

  height: 100%;
}
.bgBlue {
  background-color: #2c87ad;
}
.poseAbso {
  position: absolute;
  z-index: 1;
}
.botpse {
  top: 0;
}
.flexCoco {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20;
}
.flexRoro {
  display: flex;
  flex-direction: row;
  width: 90%;
  justify-content: space-around;
  text-align: left;
}
</style>
