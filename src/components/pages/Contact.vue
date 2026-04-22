<template>
  <section class="w-full">
    <!-- HERO SECTION -->
    <div class="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
      <img
        :src="hero"
        alt="Contact Aqualina"
        class="w-full h-full object-cover transition-opacity duration-1000 opacity-0"
        @load="$event.target.classList.remove('opacity-0')"
      />

      <!-- Overlay -->
      <div class="absolute inset-0 bg-black/40"></div>

      <!-- Title -->
      <div class="absolute inset-0 flex items-center justify-center">
        <h1
          class="text-cyan-100 text-5xl md:text-7xl font-bold font-heading transition-all duration-1000"
          :class="loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
        >
          Contact Us
        </h1>
      </div>
    </div>

    <!-- CONTACT SECTION -->
    <section class="bg-gray-50 py-20 px-6 md:px-16 fade-section">
      <div class="max-w-6xl mx-auto">
        <!-- Title -->
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-cyan-900 mb-4 font-heading">Get In Touch</h2>
          <p class="text-cyan-800 max-w-2xl mx-auto font-body">
            We are always ready to serve you with premium purified water and exceptional
            customer support.
          </p>
        </div>

        <!-- CARDS -->
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 font-body">
          <!-- CARD -->
          <div class="card delay-100">
            <i class="fa-solid fa-location-dot icon"></i>
            <h3 class="title">Our Location</h3>
            <p class="desc">Serving Clients across<br />Kenya</p>
          </div>

          <div class="card delay-200">
            <i class="fa-solid fa-phone icon"></i>
            <h3 class="title">Call Us</h3>
            <a href="tel:+254780818238" class="link"> +254 780 818 238 </a>
            <br />
            <a href="tel:+254780818238" class="link"> +254 780 818 238 </a>
          </div>

          <div class="card delay-300">
            <i class="fa-solid fa-envelope icon"></i>
            <h3 class="title">Email</h3>
            <a href="mailto:info@aqualina.co.ke" class="link"> info@aqualina.co.ke </a>
            <br />
            <a href="mailto:support@aqualina.co.ke" class="link">
              support@aqualina.co.ke
            </a>
          </div>

          <div class="card delay-500">
            <i class="fa-solid fa-clock icon"></i>
            <h3 class="title">Working Hours</h3>
            <p class="desc">
              Mon - Sat: 8:00AM - 6:00PM<br />
              Sunday: Closed
            </p>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import hero from "/src/assets/AboutHero2.webp";

const loaded = ref(false);

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

/* CARD DESIGN */
.card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  transition: all 0.4s ease;
  opacity: 0;
  transform: translateY(30px);
}

.fade-section.show .card {
  opacity: 1;
  transform: translateY(0);
}

/* HOVER EFFECT */
.card:hover {
  transform: translateY(-10px) scale(1.03);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

/* ICON */
.icon {
  font-size: 2.5rem;
  color: #06b6d4;
  margin-bottom: 1rem;
}

/* TEXT */
.title {
  font-weight: 600;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #0f172a;
}

.desc {
  color: #334155;
}

.link {
  color: #0f172a;
  transition: color 0.3s;
}

.link:hover {
  color: #06b6d4;
}
</style>
