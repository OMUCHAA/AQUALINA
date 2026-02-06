<template>
  <section class="relative min-h-[85vh] flex items-center">

    <!-- Background Image -->
    <div
      class="absolute inset-0 bg-cover bg-center"
      style="background-image: url('/public/bg.jpg');"
    ></div>

    <!-- Dark Overlay -->
    <div class="absolute inset-0 bg-black/40"></div>

    <!-- Content Wrapper -->
    <div
      class="relative z-10 max-w-6xl mx-auto px-6 text-white grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
    >

      <!-- LEFT: Text Content -->
      <div class="text-center md:text-left">
        <h1
          class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
        >
          Pure. Safe. Refreshing Water
        </h1>

        <p
          class="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8"
        >
          Premium bottled drinking water for homes, offices and businesses.
        </p>

        <div class="flex justify-center md:justify-start gap-4 flex-wrap">
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
      <div class="flex justify-center">
        <img
          src="/public/hero.png"
          alt="Water Bottle"
          class="w-[280px] sm:w-[350px] md:w-[420px] drop-shadow-2xl"
        />
      </div>

    </div>

  </section>
</template>