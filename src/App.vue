<template>
  <Telbar/>
  <Nav/>
  <RouterView/>
</template>
<script setup>
import Nav from './components/Nav.vue';
import Telbar from './components/Telbar.vue';
</script>