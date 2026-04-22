<template>
  <section class="w-full">
    <!-- HERO SECTION -->
    <div class="relative h-[45vh] md:h-[55vh] overflow-hidden">
      <img
        :src="bg"
        alt="Our Products"
        class="w-full h-full object-cover transition-opacity duration-1000 opacity-0"
        @load="$event.target.classList.remove('opacity-0')"
      />

      <div class="absolute inset-0 bg-black/40"></div>

      <div class="absolute inset-0 flex items-center justify-center">
        <h1
          class="text-cyan-100 text-5xl md:text-7xl font-bold font-heading transition-all duration-1000"
          :class="loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
        >
          Our Products
        </h1>
      </div>
    </div>

    <!-- PRODUCTS GRID -->
    <div ref="section" class="container mx-auto px-6 py-20 font-body fade-section">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <!-- CARD -->
        <div v-for="(item, index) in products" :key="index" class="card">
          <img
            :src="item.image"
            class="img opacity-0"
            @load="$event.target.classList.remove('opacity-0')"
          />

          <div class="content">
            <h3 class="title">{{ item.title }}</h3>
            <p class="desc">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ORDER BUTTON -->
    <div class="flex justify-center mb-6">
      <a
        href="https://wa.me/254780818238"
        target="_blank"
        class="bg-cyan-500 text-white py-3 px-6 rounded-lg hover:bg-cyan-600 transition transform hover:scale-105 font-body"
      >
        Order Now
      </a>
    </div>

    <!-- CTA -->
    <div class="bg-gray-100 py-16 fade-section" ref="cta">
      <div class="container mx-auto px-6 text-center font-body">
        <h2 class="text-3xl font-bold text-cyan-900 mb-4">
          Need Help Choosing the Right Product?
        </h2>
        <p class="text-cyan-900 mb-6">
          Our team is ready to help you find the perfect water solution.
        </p>
        <router-link
          to="/contact"
          class="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition transform hover:scale-105"
        >
          Contact Us
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

// IMAGES
import bg from "/src/assets/bg.webp";
import bottle from "/src/assets/aqualina-bottle1.webp";
import bulk from "/src/assets/image.webp";
import disposable from "/src/assets/disposable.webp";
import dispenser2 from "/src/assets/dispencer2.jpg";
import servicing from "/src/assets/servicing.png";
import dispenser from "/src/assets/dispencer.webp";

// STATE
const loaded = ref(false);

// PRODUCTS DATA (cleaner than repeating HTML)
const products = [
  {
    image: bottle,
    title: "Home Water Solutions",
    desc:
      "Convenient and affordable water solutions designed for everyday household use.",
  },
  {
    image: bulk,
    title: "Bulk Purified Water",
    desc: "Premium purified drinking water supplied in 18.9-litre bottles.",
  },
  {
    image: disposable,
    title: "Disposable Cups",
    desc: "Safe and hygienic disposable cups for offices and events.",
  },
  {
    image: dispenser2,
    title: "Water Dispensers",
    desc: "High-quality hot and cold dispensers for homes and offices.",
  },
  {
    image: servicing,
    title: "Cooler Servicing",
    desc: "Professional maintenance for hygienic and efficient dispensers.",
  },
  {
    image: dispenser,
    title: "Office Water Solutions",
    desc: "Reliable water supply solutions for corporate environments.",
  },
];

onMounted(() => {
  // HERO ANIMATION
  setTimeout(() => {
    loaded.value = true;
  }, 200);

  // SCROLL ANIMATION
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll(".fade-section").forEach((el) => {
    observer.observe(el);
  });
});
</script>

<style scoped>
/* SECTION ANIMATION */
.fade-section {
  opacity: 0;
  transform: translateY(50px);
  transition: all 1s ease;
}

.fade-section.show {
  opacity: 1;
  transform: translateY(0);
}

/* CARD */
.card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

/* IMAGE */
.img {
  width: 100%;
  transition: all 0.7s ease;
}

.card:hover .img {
  transform: scale(1.05);
}

/* CONTENT */
.content {
  padding: 1.5rem;
}

.title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #1f2937;
}

.desc {
  color: #4b5563;
}
</style>
