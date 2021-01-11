<template>
  <view>
    <headerImg></headerImg>
    <view class="flex">
      <text class="text"
        >Hypnofine, Votre anti-douleur. Venez constater votre progression après
        une écoute . On commence ?</text
      >

      <baseBouton text="Start" :on-press="action"> </baseBouton>
      <view class="buttou">
        <button
          class="btn"
          color="transparent"
          title="start"
          :on-press="action"
        ></button>
      </view>
    </view>

    <view>
      <view v-for="(row, index) in allData" :key="index">
        <text>{{ row.first_name }}</text>
        <text>{{ row.last_name }}</text>
      </view>
    </view>

    <view>
      <text-input
        type="text"
        class="form-control"
        v-model="first_name"
        placeholder="Enter First Name"
      />
    </view>

    <view>
      <text-input
        type="text"
        class="form-control"
        v-model="last_name"
        placeholder="Enter Last Name"
      />
    </view>
    <view>
      <button
        class="btn btn-success btn-xs"
        :on-press="fetchAllData"
        title="go"
      />
    </view>
  </view>
</template>

<script>
import Vue from "vue-native-core";
import baseBouton from "../components/base/baseBouton";
import headerImg from "../components/base/headerImg";
import axios from "axios";

export default {
  data() {
    return {
      last_name: "",
      first_name: "",
      allData: "",
      myModel: false,
      actionButton: "Insert",
      dynamicTitle: "Add Data"
    };
  },
  components: {
    baseBouton,
    headerImg
  },
  props: {
    navigation: { type: Object }
  },
  methods: {
    action() {
      this.navigation.navigate("IOSTabs");
    },
    fetchAllData() {
      axios
        .post("../assets/script/action.php", {
          action: "fetchall"
        })
        .then(function(response) {
          allData = response.data;
        });
      console.log("loge");
    },
    openModel: function() {
      first_name = "";
      last_name = "";
      actionButton = "Insert";
      dynamicTitle = "Add Data";
      myModel = true;
    },
    submitData: function() {
      if (first_name != "" && last_name != "") {
        if (actionButton == "Insert") {
          axios
            .post("http://10.0.0.2:8888/cours/BAPS1/assets/script/action.php", {
              action: "insert",
              firstName: first_name,
              lastName: last_name
            })
            .then(function(response) {
              myModel = false;
              fetchAllData();
              first_name = "";
              last_name = "";
              alert(response.data.message);
            });
        }
        if (actionButton == "Update") {
          axios
            .post("http://10.0.0.2:8888/cours/BAPS1/assets/script/action.php", {
              action: "update",
              firstName: first_name,
              lastName: last_name,
              hiddenId: hiddenId
            })
            .then(function(response) {
              myModel = false;
              fetchAllData();
              first_name = "";
              last_name = "";
              hiddenId = "";
              alert(response.data.message);
            });
        }
      } else {
        alert("Fill All Field");
      }
    },
    fetchData: function(id) {
      axios
        .post("http://10.0.0.2:8888/cours/BAPS1/assets/script/action.php", {
          action: "fetchSingle",
          id: id
        })
        .then(function(response) {
          first_name = response.data.first_name;
          last_name = response.data.last_name;
          hiddenId = response.data.id;
          myModel = true;
          actionButton = "Update";
          dynamicTitle = "Edit Data";
        });
    },
    deleteData: function(id) {
      if (confirm("Are you sure you want to remove this data?")) {
        axios
          .post("http://10.0.0.2:8888/cours/BAPS1/assets/script/action.php", {
            action: "delete",
            id: id
          })
          .then(function(response) {
            fetchAllData();
            alert(response.data.message);
          });
      }
    }
  },
  created() {
    this.fetchAllData();
    console.log("start");
  }
};
</script>

<style>
.flex {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.text {
  padding: 0 20px;
  max-width: 300px;
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
