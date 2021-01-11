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
import AsyncStorage from "@react-native-community/async-storage";
import keys from ".react-native-expo/constants/Keys";
import Parse from "parse/react-native.js";

Parse.setAsyncStorage(AsyncStorage);
Parse.initialize(keys.applicationId, keys.javascriptKey);
Parse.serverURL = keys.serverURL;

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
  components: { AppNavigator },
  methods: {
    fetchAllData: function() {
      axios
        .post("action.php", {
          action: "fetchall"
        })
        .then(function(response) {
          application.allData = response.data;
        });
    },
    openModel: function() {
      application.first_name = "";
      application.last_name = "";
      application.actionButton = "Insert";
      application.dynamicTitle = "Add Data";
      application.myModel = true;
    },
    submitData: function() {
      if (application.first_name != "" && application.last_name != "") {
        if (application.actionButton == "Insert") {
          axios
            .post("action.php", {
              action: "insert",
              firstName: application.first_name,
              lastName: application.last_name
            })
            .then(function(response) {
              application.myModel = false;
              application.fetchAllData();
              application.first_name = "";
              application.last_name = "";
              alert(response.data.message);
            });
        }
        if (application.actionButton == "Update") {
          axios
            .post("action.php", {
              action: "update",
              firstName: application.first_name,
              lastName: application.last_name,
              hiddenId: application.hiddenId
            })
            .then(function(response) {
              application.myModel = false;
              application.fetchAllData();
              application.first_name = "";
              application.last_name = "";
              application.hiddenId = "";
              alert(response.data.message);
            });
        }
      } else {
        alert("Fill All Field");
      }
    },
    fetchData: function(id) {
      axios
        .post("action.php", {
          action: "fetchSingle",
          id: id
        })
        .then(function(response) {
          application.first_name = response.data.first_name;
          application.last_name = response.data.last_name;
          application.hiddenId = response.data.id;
          application.myModel = true;
          application.actionButton = "Update";
          application.dynamicTitle = "Edit Data";
        });
    },
    deleteData: function(id) {
      if (confirm("Are you sure you want to remove this data?")) {
        axios
          .post("action.php", {
            action: "delete",
            id: id
          })
          .then(function(response) {
            application.fetchAllData();
            alert(response.data.message);
          });
      }
    }
  },
  created: function() {
    this.fetchAllData();
  }
};
</script>
<style></style>
