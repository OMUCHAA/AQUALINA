<template>
  <section class="relative flex items-center overflow-hidden">
    <!-- Background Image -->
    <div
      class="absolute inset-0 bg-cover bg-center scale-110 transition-opacity duration-1000"
      :class="bgLoaded ? 'opacity-100' : 'opacity-0'"
      :style="{ backgroundImage: `url(${bg})` }"
    ></div>

    <!-- Dark Overlay -->
    <div class="absolute inset-0 bg-black/40"></div>

    <!-- Content Wrapper -->
    <div
      class="relative z-10 max-w-6xl mx-auto px-6 text-cyan-50 grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
    >
      <!-- LEFT: Text -->
      <div
        class="text-center lg:-mt-20 md:text-left transition-all duration-1000"
        :class="loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
      >
        <h1
          class="text-6xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6 pt-7 font-heading float"
        >
          Pure, Safe <br />
          <span class="text-5xl font-extrabold">AND</span><br />
          Refreshing Water
        </h1>

        <p class="text-2xl md:text-2xl text-gray-200 mb-8">
          Premium bottled drinking water for homes, offices and businesses.
        </p>

        <div class="flex justify-center md:justify-start gap-4 flex-wrap">
          <router-link
            to="/products"
            class="bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-full font-semibold transition transform hover:scale-105"
          >
            Our Products
          </router-link>

          <router-link
            to="/contact"
            class="border-2 border-white hover:bg-white hover:text-black px-8 py-4 rounded-full font-semibold transition transform hover:scale-105"
          >
            Get Quote
          </router-link>
        </div>
      </div>

      <!-- RIGHT: Bottle -->
      <div
        class="flex justify-center lg:-mt-28 items-center transition-all duration-1000"
        :class="
          bottleLoaded
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-95 translate-y-6'
        "
      >
        <img
          v-if="bottleLoaded"
          :src="aqualina"
          alt="Water Bottle"
          class="w-[380px] sm:w-[450px] md:w-[590px] drop-shadow-2xl"
          loading="eager"
          decoding="async"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

import bg from "../assets/productsHero.webp";
import aqualina from "../assets/hero-bottle.webp";

const loaded = ref(false);
const bgLoaded = ref(false);
const bottleLoaded = ref(false);

onMounted(() => {
  // Animate text
  setTimeout(() => {
    loaded.value = true;
  }, 400);

  // Preload Background
  const bgImg = new Image();
  bgImg.src = bg;
  bgImg.onload = () => {
    bgLoaded.value = true;
  };

  // Preload Bottle
  const bottle = new Image();
  bottle.src = aqualina;

  bottle
    .decode?.()
    .then(() => {
      bottleLoaded.value = true;
    })
    .catch(() => {
      bottle.onload = () => {
        bottleLoaded.value = true;
      };
    });
});
</script>

<style scoped>
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-20px);
  }
}

.float {
  animation: float 6s ease-in-out infinite;
}

.bottle {
  animation: float 6s ease-in-out infinite;
  will-change: transform, opacity;
  backface-visibility: hidden;
  transform: translateZ(0);
}

.hero-title {
  font-family: "Montserrat", sans-serif;
}
</style>
