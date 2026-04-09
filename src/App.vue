<template>
  <Telbar />
  <Nav />
  <RouterView />
  <a
    href="https://wa.me/254780818238"
    target="_blank"
    class="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-cyan-600 text-white p-4 rounded-full shadow-xl transition-all duration-300"
  >
    <i class="fa-brands fa-whatsapp text-3xl"></i>
  </a>
  <Footer />
</template>
<script setup>
import Nav from "./components/Nav.vue";
import Telbar from "./components/Telbar.vue";
import Footer from "./components/Footer.vue";
</script>
