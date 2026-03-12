<template>
  <section>
    <!-- HERO SECTION -->
    <div class="relative w-full h-[50vh] md:h-[60vh]">
      <img
        src="/src/assets/AboutHero2.png"
        alt="About Aqualina"
        class="w-full h-full object-cover"
      />
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black/40"></div>

      <!-- Hero Content -->
      <div class="absolute inset-0 flex items-center justify-center">
        <h1
          class="text-cyan-100 text-5xl md:text-7xl font-bold tracking-wide font-heading"
        >
          Contact Us
        </h1>
      </div>
    </div>
  </section>

  <section class="bg-gray-50 py-20 px-6 md:px-16">
    <div class="max-w-6xl mx-auto">
      <!-- Section Title -->
      <div
        :class="[
          'text-center mb-16 transition-all duration-700',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
        ]"
      >
        <h2 class="text-4xl font-bold text-cyan-900 mb-4 font-heading">
          Get In Touch
        </h2>
        <p class="text-cyan-800 max-w-2xl mx-auto font-body">
          We are always ready to serve you with premium purified water and
          exceptional customer support.
        </p>
      </div>

      <!-- Contact Cards -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 font-body">
        <!-- Location -->
        <div
          :class="[
            'bg-white p-8 rounded-xl shadow-lg text-center transition-all duration-700 delay-100 cursor-pointer',
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10',
          ]"
        >
          <i class="fa-solid fa-location-dot text-4xl text-cyan-500 mb-4"></i>
          <h3 class="font-semibold text-xl mb-2">Our Location</h3>
          <p class="text-cyan-900">
            Serving Clients across<br />
            Kenya
          </p>
        </div>

        <!-- Phone -->
        <div
          :class="[
            'bg-white p-8 rounded-xl shadow-lg text-center transition-all duration-700 delay-200 cursor-pointer',
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10',
          ]"
        >
          <i class="fa-solid fa-phone text-4xl text-cyan-500 mb-4"></i>
          <h3 class="font-semibold text-xl mb-2 text-cyan-900">Call Us</h3>
          <p class="text-cyan-900">
            +254 780 818 238<br />
            +254 780 818 238
          </p>
        </div>

        <!-- Email -->
        <div
          :class="[
            'bg-white p-8 rounded-xl shadow-lg text-center transition-all duration-700 delay-300 cursor-pointer',
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10',
          ]"
        >
          <i class="fa-solid fa-envelope text-4xl text-cyan-500 mb-4"></i>
          <h3 class="font-semibold text-xl mb-2 text-cyan-900">Email</h3>
          <p class="text-cyan-900">
            info@aqualina.co.ke<br />
            sales@aqualina.co.ke
          </p>
        </div>

        <!-- Working Hours -->
        <div
          :class="[
            'bg-white p-8 rounded-xl shadow-lg text-center transition-all duration-700 delay-500 cursor-pointer',
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10',
          ]"
        >
          <i class="fa-solid fa-clock text-4xl text-cyan-500 mb-4"></i>
          <h3 class="font-semibold text-xl mb-2 text-cyan-900">
            Working Hours
          </h3>
          <p class="text-cyan-900">
            Mon - Sat: 8:00AM - 6:00PM<br />
            Sunday: Closed
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";

const isVisible = ref(false);

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 200);
});
</script>
