<template>
  <section
    ref="statsSection"
    class="bg-cyan-600 py-20 overflow-hidden"
  >
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-10 text-center text-white">

        <div
          v-for="stat in stats"
          :key="stat.label"
          class="transition-all duration-700 ease-out"
          :class="{
            'opacity-100 translate-y-0': visible,
            'opacity-0 translate-y-10': !visible
          }"
        >
          <!-- ICON -->
          <div class="flex justify-center mb-4 cursor-pointer hover:text-cyan-950">
            <i :class="stat.icon" class="text-4xl"></i>
          </div>

          <!-- NUMBER -->
          <h3 class="text-4xl md:text-5xl font-bold">
            {{ stat.current }}+
          </h3>

          <!-- LABEL -->
          <p class="mt-2 text-lg opacity-90">
            {{ stat.label }}
          </p>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const statsSection = ref(null);
const visible = ref(false);
const hasAnimated = ref(false);

const stats = ref([
  {
    label: "Happy Customers",
    target: 1200,
    current: 0,
    icon: "fa-solid fa-users"
  },
  {
    label: "Referrals",
    target: 850,
    current: 0,
    icon: "fa-solid fa-link"
  },
  {
    label: "Orders",
    target: 3200,
    current: 0,
    icon: "fa-solid fa-cart-shopping"
  },
  {
    label: "Deliveries",
    target: 3000,
    current: 0,
    icon: "fa-solid fa-truck"
  }
]);

function animateCount() {
  stats.value.forEach(stat => {
    const increment = Math.ceil(stat.target / 100);

    const timer = setInterval(() => {
      stat.current += increment;

      if (stat.current >= stat.target) {
        stat.current = stat.target;
        clearInterval(timer);
      }
    }, 20);
  });
}

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && !hasAnimated.value) {
        visible.value = true;
        hasAnimated.value = true;
        animateCount();
      }
    },
    { threshold: 0.4 }
  );

  observer.observe(statsSection.value);
});
</script>