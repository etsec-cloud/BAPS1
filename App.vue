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
import Icon from "react-native-vector-icons/FontAwesome";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import register from "./screens/register.vue";
import connexion from "./screens/connexion.vue";
import Home from "./screens/Home.vue";
import administration from "./screens/administration.vue";
import recomandation from "./screens/recomandation.vue";
import apropos from "./screens/apropos.vue";
import paremètrecompte from "./screens/paramètrecompte";
import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Text, View } from "react-native";

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
        <Icon name="users" size={30} color={tintColor} />
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

  Administration: {
    screen: administration,
    navigationOptions: ({ navigation }) => ({
      title: ``,
      tabBarIcon: ({ tintColor, activeTintColor }) => (
        <MaterialCommunityIcons
          name="database-settings"
          size={30}
          color={tintColor}
        />
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

  paremètrecompte: paremètrecompte
});

const StackNavigator = createStackNavigator(
  {
    Home: Home,
    IOSTabs: BottomTabNavigator
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
export default {
  components: { AppNavigator }
};
</script>
<style>
.nav {
  background-color: #2c87ad;
}
</style>
