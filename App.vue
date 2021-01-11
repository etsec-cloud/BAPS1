<template>
  <app-navigator> </app-navigator>
</template>

<script>
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator
} from "vue-native-router";

import register from "./screens/register.vue";
import connexion from "./screens/connexion.vue";
import testa from "./screens/testa.vue";
import Home from "./screens/Home.vue";
import administration from "./screens/administration.vue";
import recomandation from "./screens/recomandation.vue";
import apropos from "./screens/apropos.vue";

import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

const BottomTabNavigator = createBottomTabNavigator({
  Inscription: register,
  Connexion: connexion,
  Administration: administration,
  Recomandation: recomandation,
  apropos: apropos
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
<style></style>
