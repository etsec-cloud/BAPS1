<template>
  <app-navigator></app-navigator>
</template>

<script>
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import AppNavbar from "./components/AppNavbar.vue";
import connexion from "./screens/connexion.vue";
import testa from "./screens/testa.vue";

const StackNavigator = createStackNavigator({
  Home: connexion,
  Test: testa
});

const AppNavigator = createAppContainer(StackNavigator);
export default {
  components: { AppNavigator }
};
</script>
