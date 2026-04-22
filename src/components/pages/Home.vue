<template>
  <Hero />
  <!-- Our Story Section -->
  <section ref="sections" class="fade-section bg-cyan-50 py-20">
    <div
      class="max-w-6xl mx-auto px-6 md:grid md:grid-cols-2 gap-12 items-center flex flex-col-reverse"
    >
      <!-- LEFT IMAGE -->
      <div class="flex justify-center">
        <img
          src="/src/assets/image.webp"
          alt="Our Story"
          class="rounded-xl shadow-lg w-full max-w-md transition-opacity duration-1000 opacity-0"
          @load="$event.target.classList.remove('opacity-0')"
        />
      </div>
      <!-- RIGHT CONTENT -->
      <div>
        <h2
          class="text-3xl md:text-4xl font-bold text-cyan-900 mb-4 float-y font-heading"
        >
          Our Story
        </h2>
        <div class="w-20 h-1 bg-sky-600 mb-6"></div>

        <p class="text-cyan-900 leading-relaxed mb-4 font-body">
          Aqualina was founded with one simple mission: to provide safe, clean and
          refreshing drinking water to homes, offices and businesses. From humble
          beginnings, we have grown into a trusted water solutions provider committed to
          quality and reliability.
        </p>

        <p class="text-cyan-900 leading-relaxed mb-8 font-body">
          Through modern purification processes and strict quality control, we ensure that
          every bottle meets the highest standards of purity and taste.
        </p>

        <router-link
          to="/about"
          class="inline-block bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 rounded-full font-semibold transition font-body"
        >
          Read More
        </router-link>
      </div>
    </div>
  </section>

  <!-- Why Choose Us -->
  <section
    ref="sections"
    class="fade-section relative overflow-hidden py-20 bg-gradient-to-br from-cyan-200/45 via-white/25 to-cyan-100/10 backdrop-blur-3xl border-y border-white/40 shadow-xl"
  >
    <div class="max-w-6xl mx-auto px-6">
      <!-- SECTION HEADER -->
      <div class="text-center mb-14">
        <h2 class="text-3xl md:text-4xl font-bold text-cyan-900 mb-4 font-heading">
          Why Choose Us?
        </h2>
        <div class="w-20 h-1 bg-sky-600 mx-auto mb-6"></div>
        <p class="text-cyan-900 max-w-2xl mx-auto font-body">
          We go the extra mile to ensure you receive clean, safe and reliable drinking
          water every time.
        </p>
      </div>

      <!-- FEATURES GRID -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 font-body">
        <!-- CARD 1 -->
        <div
          class="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
        >
          <div
            class="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-sky-100"
          >
            <img src="/src/assets/quality.svg" class="w-8" alt="Quality" />
          </div>
          <h3 class="font-semibold text-lg text-cyan-900 mb-2">Premium Quality</h3>
          <p class="text-cyan-900 text-sm">
            Purified using modern filtration technology for superior taste and safety.
          </p>
        </div>

        <!-- CARD 2 -->
        <div
          class="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
        >
          <div
            class="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-sky-100"
          >
            <img src="/src/assets/delivery.svg" class="w-8" alt="Delivery" />
          </div>
          <h3 class="font-semibold text-lg mb-2 text-cyan-900">Fast Delivery</h3>
          <p class="text-cyan-900 text-sm">
            Reliable and timely deliveries to homes, offices and businesses.
          </p>
        </div>

        <!-- CARD 3 -->
        <div
          class="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
        >
          <div
            class="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-sky-100"
          >
            <img src="/src/assets/thumbsup.svg" class="w-8" alt="Support" />
          </div>
          <h3 class="font-semibold text-lg mb-2 text-cyan-900">Excellent Support</h3>
          <p class="text-cyan-900 text-sm">
            Friendly customer service always ready to assist you.
          </p>
        </div>

        <!-- CARD 4 -->
        <div
          class="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
        >
          <div
            class="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-sky-100"
          >
            <img src="/src/assets/pricing.svg" class="w-8" alt="Affordable" />
          </div>
          <h3 class="font-semibold text-lg mb-2 text-cyan-900">Affordable Pricing</h3>
          <p class="text-cyan-900 text-sm">
            High quality water at competitive and fair prices.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!--Our Products Section -->
  <section ref="sections" class="fade-section py-16 bg-gray-50">
    <div class="container mx-auto px-6">
      <!-- Section Title -->
      <h2 class="text-4xl font-bold text-center mb-12 text-cyan-900 font-heading">
        Our Products
      </h2>

      <!-- Products Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 font-body">
        <div
          class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
        >
          <img
            src="../../assets/dispencer.webp"
            class="transition-opacity duration-1000 opacity-0"
            @load="$event.target.classList.remove('opacity-0')"
            alt=""
          />
          <div class="p-6 flex flex-col flex-1">
            <h3 class="text-xl font-semibold mb-2 text-gray-800">Water Dispencing</h3>
            <p class="text-gray-600 mb-4 flex-1">
              High performance cooler suitable for any outdoor activity.
            </p>
            <a
              href="https://wa.me/254780818238"
              target="_blank"
              class="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600 transition mt-auto w-2/5 text-center"
            >
              <button>Order Now</button>
            </a>
          </div>
        </div>

        <div
          class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
        >
          <img
            src="../../assets/dispencer2.jpg"
            class="transition-opacity duration-1000 opacity-0"
            @load="$event.target.classList.remove('opacity-0')"
            alt="Dispencer"
          />
          <div class="p-6 flex flex-col flex-1">
            <h3 class="text-xl font-semibold mb-2 text-gray-800">Servicing</h3>
            <p class="text-gray-600 mb-4 flex-1">
              High performance cooler suitable for any outdoor activity.
            </p>
            <a
              href="https://wa.me/254780818238"
              target="_blank"
              class="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600 transition mt-auto w-2/5 text-center"
            >
              <button>Order Now</button>
            </a>
          </div>
        </div>

        <div
          class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
        >
          <img
            src="/src/assets/disposable.webp"
            class="transition-opacity duration-1000 opacity-0"
            @load="$event.target.classList.remove('opacity-0')"
            alt="Disposable Cups"
          />
          <div class="p-6 flex flex-col flex-1">
            <h3 class="text-xl font-semibold mb-2 text-gray-800">Disposable Glasses</h3>
            <p class="text-gray-600 mb-4 flex-1">
              High performance cooler suitable for any outdoor activity.
            </p>
            <a
              href="https://wa.me/254780818238"
              target="_blank"
              class="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600 transition mt-auto w-2/5 text-center"
            >
              <button>Order Now</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <StatsSection />
</template>

<script setup>
import { ref, onMounted } from "vue";
import Hero from "../Hero.vue";
import StatsSection from "../StatsSection.vue";

const sections = ref([]);

onMounted(() => {
  // SELECT ALL SECTIONS manually
  sections.value = document.querySelectorAll(".fade-section");

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

  sections.value.forEach((el) => observer.observe(el));
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

/* FLOAT ANIMATION IMPROVED */
@keyframes float-y {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-12px);
  }
}

.float-y {
  animation: float-y 6s ease-in-out infinite;
}
</style>
