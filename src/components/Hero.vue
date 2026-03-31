<template>
  <section
    class="relative md:min-h-[85vh] flex items-center overflow-hidden py-8"
  >
    <!-- Background Image -->
    <div
      class="absolute inset-0 bg-cover bg-center scale-110"
      :style="{ backgroundImage: `url(${bg})` }"
    ></div>

    <!-- Dark Overlay -->
    <div class="absolute inset-0 bg-black/40"></div>

    <!-- Content Wrapper -->
    <div
      class="relative z-10 max-w-6xl mx-auto px-6 text-cyan-50 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
    >
      <!-- LEFT: Text Content -->
      <div class="text-center md:text-left">
        <h1
          class="text-6xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6 float pt-7 font-heading"
        >
          Pure, Safe <br />
          <span class="text-5xl font-extrabold">AND</span><br />
          Refreshing Water
        </h1>

        <p
          class="text-2xl md:text-2xl text-gray-200 mb-8 font-body"
        >
          Premium bottled drinking water for homes, offices and businesses.
        </p>

        <div
          class="flex justify-center md:justify-start gap-4 flex-wrap"
        >
          <router-link
            to="/products"
            class="bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-full font-semibold transition"
          >
            Our Products
          </router-link>

          <router-link
            to="/contact"
            class="border-2 border-white hover:bg-white hover:text-black px-8 py-4 rounded-full font-semibold transition"
          >
            Get Quote
          </router-link>
        </div>
      </div>

      <!-- RIGHT: Image -->
      <div
        class="flex justify-center items-center"
      >
        <img
          :src="aqualina"
          alt="Water Bottle"
          class="w-[380px] sm:w-[450px] md:w-[590px] drop-shadow-2xl"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import bg from "../assets/productsHero.jpg";
import aqualina from "../assets/aqualina-bottle1.png";
</script>

<style scoped>
/* in style.css */
@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-50px);
  }
}

.float {
  animation: float 16s ease-in-out infinite;
}

/* float X axis */
@keyframes float-x {
  0%,
  100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-75px);
  }
}

.float-x {
  animation: float-x 4s ease-in-out infinite;
}

.hero-title {
  font-family: 'Montserrat', sans-serif;
}
</style>
