<template>
  <Telbar />
  <Nav />
  <router-view v-slot="{ Component, route }">
    <transition name="fade-slide">
      <component :is="Component" :key="route.fullPath" />
    </transition>
  </router-view>
  <Footer />
</template>
<script setup>
import Nav from "./components/Nav.vue";
import Telbar from "./components/Telbar.vue";
import Footer from "./components/Footer.vue";
</script>

<style>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.5s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
