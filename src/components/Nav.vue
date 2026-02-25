<template>
  <nav
    class="sticky top-0 z-50 backdrop-blur-lg bg-white/30 border-b border-white/20 shadow-lg"
  >
    <div
      class="max-w-7xl mx-auto px-4 md:py-6 py-3 flex justify-between items-center relative"
    >
      <!-- Logo -->
      <div class="flex items-center gap-2 ml-10 cursor-pointer">
        <a href="/"
          ><!-- <img src="/logo.png" alt="Logo" class="h-10 w-auto" /> -->
          <span class="lg:text-4xl text-2xl font-bold text-cyan-700 logo">
            AQUALINA
          </span></a
        >
      </div>

      <!-- Desktop Menu -->
      <ul
        class="hidden md:flex lg:gap-8 md:gap-4 text-cyan-900 font-medium -mb-8"
      >
        <li>
          <router-link to="/" class="hover:text-sky-600">HOME</router-link>
        </li>
        <li>
          <router-link to="/about" class="hover:text-sky-600"
            >ABOUT</router-link
          >
        </li>
        <li>
          <router-link to="/products" class="hover:text-sky-600"
            >PRODUCTS</router-link
          >
        </li>
        <li>
          <router-link to="/faqs" class="hover:text-sky-600">FAQS</router-link>
        </li>
        <li>
          <router-link to="/blog" class="hover:text-sky-600">BLOG</router-link>
        </li>
        <li>
          <router-link to="/contact" class="hover:text-sky-600"
            >CONTACT</router-link
          >
        </li>
        <!-- <li>
          <router-link to="/order" class="hover:text-sky-600"
            >ORDER</router-link
          >
        </li> -->
      </ul>

      <!-- CTA Button -->
      <router-link
        to="/contact"
        class="hidden md:inline-block bg-cyan-600/80 backdrop-blur-md text-white px-4 py-1 rounded-full hover:bg-cyan-500 transition border border-white/30 shadow-md -mb-7"
      >
        Get Quote
      </router-link>

      <!-- Mobile Menu Button -->
      <button
        @click="isOpen = !isOpen"
        class="md:hidden text-cyan-800 text-4xl mr-16"
      >
        <i v-if="!isOpen" class="fa-solid fa-bars"></i>
        <i v-if="isOpen" class="fa-solid fa-xmark text-cyan-800"></i>
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition name="dropdown">
      <div
        v-if="isOpen"
        class="md:hidden absolute top-full left-0 w-full bg-cyan-700 border-t shadow-lg"
      >
        <ul class="flex flex-col text-cyan-900 font-medium">
          <router-link @click="closeMenu" to="/">
            <li class="p-4 border-b text-cyan-200">HOME</li>
          </router-link>
          <router-link @click="closeMenu" to="/about">
            <li class="p-4 border-b text-cyan-200">ABOUT</li>
          </router-link>
          <router-link @click="closeMenu" to="/products">
            <li class="p-4 border-b text-cyan-200">PRODUCTS</li>
          </router-link>
          <router-link @click="closeMenu" to="/faqs">
            <li class="p-4 border-b text-cyan-200">FAQS</li>
          </router-link>
          <router-link @click="closeMenu" to="/blog">
            <li class="p-4 border-b text-cyan-200">BLOG</li>
          </router-link>
          <router-link @click="closeMenu" to="/contact">
            <li class="p-4 border-b text-cyan-200">CONTACTS</li>
          </router-link>
          <!-- <router-link @click="closeMenu" to="/order">
          <li class="p-4 border-b text-cyan-200">
            ORDER NOW
          </li>
        </router-link> -->
        </ul>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);

const closeMenu = () => {
  isOpen.value = false;
};
</script>

<style scoped>
nav {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.25),
    rgba(255, 255, 255, 0.05)
  );
}
.logo {
  font-family: "Patrick Hand";
}
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.3s ease;
}

.dropdown-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
