<template>
  <Telbar/>
  <Nav/>
  <RouterView />
  <Footer />
</template>
<script setup>
import Nav from './components/Nav.vue';
import Telbar from './components/Telbar.vue';
import Footer from './components/Footer.vue';
</script>