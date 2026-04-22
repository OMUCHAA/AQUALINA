<template>
  <section class="w-full">
    <!-- HERO -->
    <div class="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
      <img
        :src="hero"
        alt="Blog"
        class="w-full h-full object-cover transition-opacity duration-1000 opacity-0"
        @load="$event.target.classList.remove('opacity-0')"
      />

      <div class="absolute inset-0 bg-black/40"></div>

      <div class="absolute inset-0 flex items-center justify-center">
        <h1
          class="text-cyan-100 text-5xl md:text-7xl font-bold font-heading transition-all duration-1000"
          :class="loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
        >
          Our Latest News
        </h1>
      </div>
    </div>

    <!-- BLOG SECTION -->
    <section class="bg-gray-50 py-20 px-6 md:px-16 fade-section">
      <div class="max-w-6xl mx-auto">
        <!-- TITLE -->
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-cyan-900 mb-4 font-heading">
            Blog & Updates
          </h2>
          <p class="text-cyan-800 max-w-2xl mx-auto font-body">
            Stay updated with the latest news, tips, and insights about clean water and
            our services.
          </p>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import hero from "/src/assets/AboutHero2.webp";

// STATE
const loaded = ref(false);

// ANIMATIONS
onMounted(() => {
  setTimeout(() => {
    loaded.value = true;
  }, 200);

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
/* SCROLL ANIMATION */
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
  margin-bottom: 0.5rem;
  color: #0f172a;
}

.desc {
  color: #4b5563;
  margin-bottom: 1rem;
}

/* BUTTON */
.read-btn {
  color: #06b6d4;
  font-weight: 600;
  transition: all 0.3s;
}

.read-btn:hover {
  letter-spacing: 1px;
}
</style>
