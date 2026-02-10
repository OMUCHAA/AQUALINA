<template>
  <footer class="bg-cyan-950 text-gray-300">
  <!-- Thids  -->
    <!-- Top Footer -->
    <div class="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10 justify-center text-center">
      
      <!-- Brand -->
      <div>
        <h2 class="text-2xl font-bold text-white mb-4">
          AQUALINA
        </h2>
        <p class="text-sm leading-relaxed">
          Delivering clean, safe, and reliable water solutions for homes,
          offices, and businesses.
        </p>
      </div>

      <!-- Quick Links -->
      <div>
        <h3 class="text-lg font-semibold text-white mb-4">Quick Links</h3>
        <ul class="space-y-2 text-sm">
          <li><a href="#" class="hover:text-cyan-400">Home</a></li>
          <li><a href="#" class="hover:text-cyan-400">Our Story</a></li>
          <li><a href="#" class="hover:text-cyan-400">Products</a></li>
          <li><a href="#" class="hover:text-cyan-400">Contact</a></li>
        </ul>
      </div>

      <!-- Services -->
      <div>
        <h3 class="text-lg font-semibold text-white mb-4">Services</h3>
        <ul class="space-y-2 text-sm">
          <li>Water Dispensing</li>
          <li>Cooler Servicing</li>
          <li>Bulk Water Supply</li>
          <li>Disposable Cups</li>
        </ul>
      </div>

      <!-- Contact -->
      <div>
        <h3 class="text-lg font-semibold text-white mb-4">Contact Us</h3>
        <ul class="space-y-3 text-sm">
          <li>
            <i class="fa-solid fa-phone mr-2 text-cyan-400"></i>
            +254 780 818238
          </li>
          <li>
            <i class="fa-solid fa-envelope mr-2 text-cyan-400 ml-4"></i>
            info@aqualina.co.ke
          </li>
          <li>
            <i class="fa-solid fa-location-dot mr-2 text-cyan-400 -ml-4"></i>
            Nairobi, Kenya
          </li>
        </ul>

        <!-- Social Icons -->
        <div class="flex space-x-4 mt-6 justify-center">
          <a href="#" class="hover:text-cyan-400">
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a href="#" class="hover:text-cyan-400">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="#" class="hover:text-cyan-400">
            <i class="fa-brands fa-x-twitter"></i>
          </a>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-gray-700 py-4 text-center text-sm">
      © {{ year }} AQUALINA. All rights reserved.
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear();
</script>