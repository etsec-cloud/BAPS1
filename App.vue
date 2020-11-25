<template>
  <app-navigator></app-navigator>
</template>

<script>
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import connexion from "./screens/connexion.vue";
const StackNavigator = createStackNavigator({
  Home: connexion
});
const AppNavigator = createAppContainer(StackNavigator);
export default {
  components: { AppNavigator }
};
</script>
