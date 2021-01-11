<template>
  <app-navigator class="nav"> </app-navigator>
</template>

<script>
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator
} from "vue-native-router";

import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import register from "./screens/register.vue";
import connexion from "./screens/connexion.vue";
import testa from "./screens/testa.vue";
import Home from "./screens/Home.vue";
import administration from "./screens/administration.vue";
import recomandation from "./screens/recomandation.vue";
import apropos from "./screens/apropos.vue";



const BottomTabNavigator = createBottomTabNavigator({
  Register: {
    screen: register,
    navigationOptions: {
      tabBarLabel: '',
      tabBarIcon: ({tintColor, activeTintColor}) => (
          <Icon name="profil" size={30} color={tintColor} />
      )
    },
  },
  Connexion: {
    screen: connexion,
    navigationOptions: {
      tabBarLabel: 'connexion',
      tabBarIcon: ({tintColor, activeTintColor}) => (
          <Icon name="plus" size={30} color={tintColor} />
      )
    },
  },
  Page: testa,
  Administration: administration,
  Recomandation : recomandation,
  apropos: apropos,

});

const StackNavigator = createStackNavigator(
  {
    Home: Home,
    IOSTabs: BottomTabNavigator
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {

      tabBarOptions: {
        activeTintColor: '#7BBC8A',
        inactiveTintColor: '#FFF7F2',
        showIcon: true,
        style: {height: 54, backgroundColor: '#7BBC8A', borderTopWidth: 0.5, borderTopColor: '#7BBC8A'},
        showLabel: false,
        labelStyle: {
          fontSize: 10,

        }
      },

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
.nav{
  background-color: #2C87AD;
}
</style>
