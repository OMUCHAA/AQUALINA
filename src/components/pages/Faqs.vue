<template>
  <section class="w-full">
    <!-- HERO SECTION -->
    <div class="relative h-[45vh] md:h-[55vh] overflow-hidden">
      <img
        :src="bg"
        alt="FAQs"
        class="w-full h-full object-cover transition-opacity duration-1000 opacity-0"
        @load="$event.target.classList.remove('opacity-0')"
      />

      <div class="absolute inset-0 bg-black/40"></div>

      <div class="absolute inset-0 flex items-center justify-center">
        <h1
          class="text-cyan-100 text-5xl md:text-7xl font-bold font-heading transition-all duration-1000"
          :class="loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
        >
          FAQs
        </h1>
      </div>
    </div>

    <!-- FAQ SECTION -->
    <section ref="section" class="bg-white py-20 px-6 md:px-16 font-body fade-section">
      <div class="max-w-4xl mx-auto">
        <!-- Title -->
        <div class="text-center mb-14">
          <h2 class="text-4xl font-bold text-cyan-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p class="text-cyan-800">
            Find answers to common questions about our products and services.
          </p>
        </div>

        <!-- FAQ LIST -->
        <div class="space-y-4">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="border rounded-lg overflow-hidden shadow-sm transition"
          >
            <!-- QUESTION -->
            <button
              @click="toggleFAQ(index)"
              class="w-full flex justify-between items-center p-5 text-left bg-gray-50 hover:bg-gray-100 transition"
            >
              <span class="font-medium text-cyan-800">
                {{ faq.question }}
              </span>

              <i
                class="fa-solid fa-chevron-down transition-transform duration-300"
                :class="activeIndex === index ? 'rotate-180 text-cyan-500' : ''"
              ></i>
            </button>

            <!-- ANSWER -->
            <div
              class="overflow-hidden transition-all duration-300"
              :style="{
                maxHeight: activeIndex === index ? '200px' : '0px',
                opacity: activeIndex === index ? 1 : 0,
              }"
            >
              <div class="px-5 pb-5 text-cyan-800 bg-white">
                {{ faq.answer }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section ref="cta" class="bg-cyan-600 py-20 fade-section">
      <div class="container mx-auto px-6 text-center text-cyan-100">
        <h1 class="md:text-6xl text-3xl font-medium mb-5 font-heading">
          Is your query not answered?
        </h1>
        <p class="text-2xl font-body text-cyan-50">
          Mail your question to support@aqualina.co.ke
        </p>
      </div>
    </section>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import bg from "/src/assets/productsHero.webp";

// STATE
const activeIndex = ref(null);
const loaded = ref(false);

// FAQ DATA
const faqs = ref([
  {
    question: "What areas do you deliver to?",
    answer:
      "We deliver purified water across Nairobi and surrounding areas, with plans to expand nationwide.",
  },
  {
    question: "How often should dispensers be serviced?",
    answer: "We recommend servicing every 3-6 months for hygiene and performance.",
  },
  {
    question: "Do you offer bulk water supply for offices?",
    answer: "Yes, we provide tailored solutions for offices and institutions.",
  },
  {
    question: "How do I place an order?",
    answer:
      "You can contact our support team or use our official communication channels.",
  },
  {
    question: "Is your water certified and safe?",
    answer: "Yes, our water meets all required health and safety standards.",
  },
]);

// TOGGLE LOGIC
const toggleFAQ = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};

// ANIMATIONS
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
/* SCROLL FADE */
.fade-section {
  opacity: 0;
  transform: translateY(50px);
  transition: all 1s ease;
}

.fade-section.show {
  opacity: 1;
  transform: translateY(0);
}
</style>
