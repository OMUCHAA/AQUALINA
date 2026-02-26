<template>
  <!-- HERO SECTION -->
  <div class="relative h-[45vh] md:h-[55vh]">
    <img
      src="/src/assets/productsHero.jpg"
      alt="Our Products"
      class="w-full h-full object-cover"
    />
    <div class="absolute inset-0 bg-black/40"></div>
    <div class="absolute inset-0 flex items-center justify-center">
      <h1 class="text-cyan-100 text-5xl md:text-7xl font-bold font-heading">FAQs</h1>
    </div>
  </div>
  <section class="bg-white py-20 px-6 md:px-16 font-body">
    <div class="max-w-4xl mx-auto">
      <!-- Section Title -->
      <div class="text-center mb-14">
        <h2 class="text-4xl font-bold text-cyan-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p class="text-cyan-800">
          Find answers to common questions about our products and services.
        </p>
      </div>
      <!-- FAQ Accordion -->
      <div class="space-y-4">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="border rounded-lg overflow-hidden shadow-sm"
        >
          <!-- Question -->
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

          <!-- Answer -->
          <transition
            enter-active-class="transition-all duration-300 ease-out"
            leave-active-class="transition-all duration-200 ease-in"
            enter-from-class="opacity-0 max-h-0"
            enter-to-class="opacity-100 max-h-40"
            leave-from-class="opacity-100 max-h-40"
            leave-to-class="opacity-0 max-h-0"
          >
            <div
              v-if="activeIndex === index"
              class="px-5 pb-5 text-cyan-800 bg-white"
            >
              {{ faq.answer }}
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>

  <section
    class="bg-cyan-600 py-20 overflow-hidden"
  >
    <div class="container mx-auto px-6">
      <div class="grid text-center text-white">
       <h1 class="md:text-6xl text-4xl font-medium mb-5 font-heading">Is your query not answered?</h1>
       <p class="text-2xl font-body">Mail your question to support@aqualina.co.ke</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const activeIndex = ref(null);

const faqs = ref([
  {
    question: "What areas do you deliver to?",
    answer:
      "We deliver purified water across Nairobi and its surrounding areas, with plans to expand nationwide.",
  },
  {
    question: "How often should dispensers be serviced?",
    answer:
      "We recommend servicing your dispenser every 3–6 months to maintain hygiene and optimal performance.",
  },
  {
    question: "Do you offer bulk water supply for offices?",
    answer:
      "Yes, we provide tailored water supply solutions for offices, institutions, and commercial facilities.",
  },
  {
    question: "How do I place an order?",
    answer:
      "You can place an order by calling our customer support team or contacting us via our official communication channels.",
  },
  {
    question: "Is your water certified and safe?",
    answer:
      "Absolutely. Our water undergoes strict purification processes and meets all required health and safety standards.",
  },
]);

const toggleFAQ = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>
