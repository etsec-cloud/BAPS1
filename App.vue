<template>
  <app-navigator class="nav"> </app-navigator>
</template>

<script>
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator
} from "vue-native-router";

import * as React from "react";
import { View, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import register from "./screens/register.vue";
import connexion from "./screens/connexion.vue";
import Home from "./screens/Home.vue";
import administration from "./screens/administration.vue";
import recomandation from "./screens/recomandation.vue";
import apropos from "./screens/apropos.vue";
import paramètrecompte from "./screens/paramètrecompte.vue";
import notifscreen from "./screens/notifscreen.vue";
import mesinfoscreen from "./screens/mesinfoscreen.vue";

import aproposIcon from "./assets/img/profil.png";

const BottomTabNavigator = createBottomTabNavigator({
  Register: {
    screen: register,
    navigationOptions: {
      title: "",
      tabBarIcon: ({ tintColor, activeTintColor }) => (
        <Icon name="plus" size={30} color={tintColor} />
      ),
      tabBarOptions: {
        activeTintColor: "#7BBC8A",
        inactiveTintColor: "#FFF7F2",
        showIcon: true,
        style: {
          backgroundColor: "#2C87AD",
          borderTopWidth: 0.5,
          borderTopColor: "#7BBC8A"
        },
        labelStyle: {
          display: "none"
        }
      }
    }
  },
  Connexion: {
    screen: connexion,
    navigationOptions: ({ navigation }) => ({
      title: ``,
      tabBarIcon: ({ tintColor, activeTintColor }) => (
        <Image style={styles.icon2} source={require("./assets/img/ico8.png")} />
      ),
      tabBarOptions: {
        activeTintColor: "#7BBC8A",
        inactiveTintColor: "#FFF7F2",
        showIcon: true,
        style: {
          backgroundColor: "#2C87AD",
          borderTopWidth: 0.5,
          borderTopColor: "#7BBC8A"
        },
        labelStyle: {
          display: "none"
        }
      }
    })
  },
  Apropos: {
    screen: apropos,
    navigationOptions: {
      title: "",
      tabBarIcon: ({ tintColor, activeTintColor }) => (
        <Image style={styles.icon} source={require("./assets/img/ico10.png")} />
      ),
      tabBarOptions: {
        activeTintColor: "#7BBC8A",
        inactiveTintColor: "#FFF7F2",
        showIcon: true,
        style: {
          backgroundColor: "#2C87AD",
          borderTopWidth: 0.5,
          borderTopColor: "#7BBC8A"
        },
        labelStyle: {
          display: "none"
        }
      }
    }
  },

  Administration: {
    screen: administration,
    navigationOptions: ({ navigation }) => ({
      title: ``,
      tabBarIcon: ({ tintColor, activeTintColor }) => (
        <Image style={styles.icon3} source={require("./assets/img/ico9.png")} />
      ),
      tabBarOptions: {
        activeTintColor: "#7BBC8A",
        inactiveTintColor: "#FFF7F2",
        showIcon: true,
        style: {
          backgroundColor: "#2C87AD",
          borderTopWidth: 0.5,
          borderTopColor: "#7BBC8A"
        },
        labelStyle: {
          display: "none"
        }
      }
    })
  }
});

const StackNavigator = createStackNavigator(
  {
    Home: Home,
    IOSTabs: BottomTabNavigator,
    apropos: apropos,
    notifscreen: notifscreen
  },
  {
    initialRouteName: "Home",

    defaultNavigationOptions: {
      headerStyle: {
        display: "none"
      }
    }
  }
);

const AppNavigator = createAppContainer(StackNavigator);
const styles = StyleSheet.create({
  icon: {
    flex: 1,
    width: 40,
    height: 40,
    resizeMode: "contain"
  },
  icon2: {
    flex: 1,
    width: 50,
    height: 50,
    resizeMode: "contain"
  },
  icon3: {
    flex: 1,
    width: 30,
    height: 30,
    resizeMode: "contain"
  }
});
export default {
  components: { AppNavigator }
};
</script>
<style>
.nav {
  background-color: #2c87ad;
}
.icon {
  width: 10px;
}
</style>
