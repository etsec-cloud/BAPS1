<template>
  <app-navigator></app-navigator>
</template>

<script>
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import AppNavbar from "./components/AppNavbar.vue";
import connexion from "./screens/connexion.vue";
import testa from "./screens/testa.vue";
import administration from './screens/administration.vue';

const StackNavigator = createStackNavigator({
  Home: administration,
  Test: testa
});

const AppNavigator = createAppContainer(StackNavigator);
export default {
  components: { AppNavigator }
};
</script>
