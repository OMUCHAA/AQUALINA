<template>
  <section class="w-full">
    <!-- HERO SECTION -->
    <div class="relative h-[45vh] md:h-[55vh]">
      <img
        src="/productsHero.jpg"
        alt="Our Products"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/40"></div>
      <div class="absolute inset-0 flex items-center justify-center">
        <h1 class="text-cyan-100 text-5xl md:text-7xl font-bold">
          Our Products
        </h1>
      </div>
    </div>

    <!-- PRODUCTS GRID -->
    <div class="container mx-auto px-6 py-20">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <!-- GRID 1 -->
        <div
          class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
        >
          <!-- Image -->
          <img src="../../assets/dispencer.png" alt="" />

          <!-- Content -->
          <div class="p-6 flex flex-col h-full">
            <h3 class="text-xl font-semibold text-gray-800 mb-3">
              Water Dispensers
            </h3>

            <p class="text-gray-600 mb-6 flex-1">
              High-quality hot and cold water dispensers designed for homes,
              offices, and commercial use.
            </p>
            <button
              class="mt-auto bg-cyan-500 text-white py-2 px-5 rounded-lg hover:bg-cyan-600 transition"
            >
              Order Now
            </button>
          </div>
        </div>

        <!-- GRID 2 -->
        <div
          class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
        >
          <!-- Image -->
          <img src="../../assets/dispencer2.jpg" alt="" />

          <!-- Content -->
          <div class="p-6 flex flex-col h-full">
            <h3 class="text-xl font-semibold text-gray-800 mb-3">
              Bulk Purified Water
            </h3>

            <p class="text-gray-600 mb-6 flex-1">
              Premium purified drinking water supplied in 18.9-litre bottles for reliable daily use.
            </p>

            <button
              class="mt-auto bg-cyan-500 text-white py-2 px-5 rounded-lg hover:bg-cyan-600 transition"
            >
              Order Now
            </button>
          </div>
        </div>

        <!-- GRID 3 -->
        <div
          class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
        >
          <!-- Image -->
          <img src="/servicing.png" alt="" />

          <!-- Content -->
          <div class="p-6 flex flex-col h-full">
            <h3 class="text-xl font-semibold text-gray-800 mb-3">
              Cooler Servicing
            </h3>

            <p class="text-gray-600 mb-6 flex-1">
              Professional servicing and maintenance to ensure your water dispensers remain hygienic and efficient.
            </p>

            <button
              class="mt-auto bg-cyan-500 text-white py-2 px-5 rounded-lg hover:bg-cyan-600 transition"
            >
              Order Now
            </button>
          </div>
        </div>

        <!-- GRID 4 -->
        <div
          class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
        >
          <!-- Image -->
          <img src="/public/disposable.jpg" alt="" />

          <!-- Content -->
          <div class="p-6 flex flex-col h-full">
            <h3 class="text-xl font-semibold text-gray-800 mb-3">
              Disposable Cups
            </h3>

            <p class="text-gray-600 mb-6 flex-1">
              Safe and hygienic disposable cups suitable for offices, events, and commercial environments.
            </p>

            <button
              class="mt-auto bg-cyan-500 text-white py-2 px-5 rounded-lg hover:bg-cyan-600 transition"
            >
              Order Now
            </button>
          </div>
        </div>

        <!-- GRID 5 -->
        <div
          class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
        >
          <!-- Image -->
          <img src="../../assets/dispencer.png" alt="" />

          <!-- Content -->
          <div class="p-6 flex flex-col h-full">
            <h3 class="text-xl font-semibold text-gray-800 mb-3">
              Office Water Solutions
            </h3>

            <p class="text-gray-600 mb-6 flex-1">
             Tailored water supply solutions for corporate offices and institutions.
            </p>

            <button
              class="mt-auto bg-cyan-500 text-white py-2 px-5 rounded-lg hover:bg-cyan-600 transition"
            >
              Order Now
            </button>
          </div>
        </div>

        <!-- GRID 6 -->
        <div
          class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
        >
          <!-- Image -->
          <img src="../../assets/dispencer.png" alt="" />

          <!-- Content -->
          <div class="p-6 flex flex-col h-full">
            <h3 class="text-xl font-semibold text-gray-800 mb-3">
              Home Water Solutions
            </h3>

            <p class="text-gray-600 mb-6 flex-1">
              Convenient and affordable water solutions designed for everyday household use.
            </p>

            <button
              class="mt-auto bg-cyan-500 text-white py-2 px-5 rounded-lg hover:bg-cyan-600 transition"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <div class="bg-gray-100 py-16">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold text-gray-800 mb-4">
          Need Help Choosing the Right Product?
        </h2>
        <p class="text-gray-600 mb-6">
          Our team is ready to help you find the perfect water solution.
        </p>
        <button
          class="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition"
        >
          Contact Us
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
