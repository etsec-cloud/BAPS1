<template>
  <view class="container">
    <connexion></connexion>
  </view>
</template>

<script>

import connexion from './components/connexion.vue';

export default {
  name: 'App',
  components: {
    connexion
  }
}

</script>

<style>
.container {
  background-color: white;
  align-items: center;
  justify-content: center;
  flex: 1;
}

</style>
