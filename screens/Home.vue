<template>
  <scroll-view
    :content-container-style="{
      contentContainer: {
        paddingVertical: 20
      }
    }"
  >
    <view class="home-fond">
      <headerImg></headerImg>
      <view class="flex">
        <text class="text"
          >Hypnofine, Votre anti-douleur. Venez constater votre progression
          après une écoute . On commence ?</text
        >
        <image :source="require('../assets/img/homepagefond.png')" />
        <view class="boutonnade">
          <text class="text-bouton" @press="action"> Start</text>
        </view>
      </view>
    </view>
    <AbsoluteLayout backgroundColor="#3c495e">
      <Label
        text="10,10"
        left="10"
        top="10"
        width="100"
        height="100"
        backgroundColor="#289062"
      />
      <Label
        text="30,40"
        left="30"
        top="40"
        width="100"
        height="100"
        backgroundColor="#43b883"
      />
    </AbsoluteLayout>
  </scroll-view>
</template>

<script>
import Vue from "vue-native-core";
import baseBouton from "../components/base/baseBouton";
import headerImg from "../components/base/headerImg";
import axios from "axios";
import backgroundUrl from "../assets/img/homepagefond.png";
export default {
  components: {
    baseBouton,
    headerImg
  },
  props: {
    navigation: { type: Object }
  },
  data: function() {
    return {
      info: null,
      backgroundUrl
    };
  },
  mounted() {
    return axios
      .get("http://192.168.1.57:3000/users")
      .then(response => {
        this.info = response.data;
        return response.data;
      })
      .catch(e => {
        console.log("Error", e);
      });
  },
  methods: {
    action() {
      this.navigation.navigate("IOSTabs");
    },
    test() {
      console.log("zou");
    }
  }
};
</script>

<style scoped>
@import url("https://use.typekit.net/kzn4ozu.css");

.home-fond {
  position: relative;
}

.boutonnade {
  display: flex;
  background-color: #2e86ab;
  width: 140px;
  height: 40px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
}
.text-bouton {
  text-align: center;
  color: white;
  font-size: 18px;
  width: 140px;
}

.flex {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.text {
  padding: 0 20px;
  max-width: 300px;
  font-size: 18px;
  text-align: center;
}
.btn {
  background-color: transparent;
  border-color: transparent;
  border-width: 1;
  z-index: 0;
}
button {
  z-index: 0;
}
.buttou {
  background-color: #2e86ab;
  width: 140px;
  height: 40px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
}
</style>
