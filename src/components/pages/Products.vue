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
          Services
        </h1>
      </div>
    </div>

    <!--Our Products Section -->
    <section ref="sections" class="fade-section py-16 bg-gray-50">
      <div class="container mx-auto px-6">
        <!-- Products Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 font-body">
          <div
            class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
          >
            <img
              src="../../assets/premium.png"
              class="transition-opacity duration-1000 opacity-0"
              @load="$event.target.classList.remove('opacity-0')"
              alt=""
            />
            <div class="p-6 flex flex-col flex-1">
              <h3 class="text-xl font-semibold mb-2 text-gray-800">
                Premium Fresh water Supply
              </h3>
              <p class="text-gray-600 mb-4 flex-1">
                Classic water aqualina branded bottled water supply. We package and sell
                high-end water as a lifestyle and consumer product.
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
          <!-- Refills -->
          <div
            class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
          >
            <img
              src="../../assets/Refills.png"
              class="transition-opacity duration-1000 opacity-0"
              @load="$event.target.classList.remove('opacity-0')"
              alt="Dispencer"
            />
            <div class="p-6 flex flex-col flex-1">
              <h3 class="text-xl font-semibold mb-2 text-gray-800">
                Fresh Water Refills
              </h3>
              <p class="text-gray-600 mb-4 flex-1">
                We sell this clean drinking water to customers and local businesses who
                bring their own reusable containers, like 20-liter jerrycans or 10-liter
                bottles, often using automated dispensers
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

          <!-- Empty Bottles -->
          <div
            class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
          >
            <img
              src="/src/assets/empty.png"
              class="transition-opacity duration-1000 opacity-0"
              @load="$event.target.classList.remove('opacity-0')"
              alt="Disposable Cups"
            />
            <div class="p-6 flex flex-col flex-1">
              <h3 class="text-xl font-semibold mb-2 text-gray-800">
                Empty Water Bottles
              </h3>
              <p class="text-gray-600 mb-4 flex-1">
                Single-Use Small Scale PET Bottles: These range from small 300ml, 500ml,
                and 1.5-litre sizes up to larger 5-litre and 10-litre kitchen dispenser
                jars. These are generally sold in huge bulk quantities to packaging lines.
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
          <!-- plain bottled water -->
          <div
            class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
          >
            <img
              src="/src/assets/plains.png"
              class="transition-opacity duration-1000 opacity-0"
              @load="$event.target.classList.remove('opacity-0')"
              alt="Disposable Cups"
            />
            <div class="p-6 flex flex-col flex-1">
              <h3 class="text-xl font-semibold mb-2 text-gray-800">
                Plain bottled Fresh water
              </h3>
              <p class="text-gray-600 mb-4 flex-1">
                A plain bottled fresh water service bridges the gap between affordable
                local refill stations and high-end luxury waters
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
