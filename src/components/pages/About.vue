<template>
  <section class="w-full">
    <!-- HERO SECTION -->
    <div class="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
      <img
        :src="aboutHero"
        alt="About Aqualina"
        class="w-full h-full object-cover transition-opacity duration-1000 opacity-0"
        @load="$event.target.classList.remove('opacity-0')"
      />

      <!-- Overlay -->
      <div class="absolute inset-0 bg-black/40"></div>

      <!-- Hero Content -->
      <div class="absolute inset-0 flex items-center justify-center">
        <h1
          class="text-cyan-100 text-5xl md:text-7xl font-bold tracking-wide font-heading transition-all duration-1000"
          :class="loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
        >
          About Us
        </h1>
      </div>
    </div>

    <!-- OUR STORY SECTION -->
    <div ref="section" class="container mx-auto px-6 py-20 fade-section">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- TEXT -->
        <div>
          <h2 class="text-3xl md:text-4xl font-bold text-cyan-900 mb-6 font-heading">
            Our Story
          </h2>

          <p class="text-cyan-800 leading-relaxed mb-4 font-body space-y-4">
            At Aqualina, we are dedicated to providing pure, refreshing, and high-quality
            bottled water that supports healthier lifestyles and meets the everyday needs
            of our customers. From the very beginning, our vision has been to become a
            trusted household and business name by consistently delivering safe drinking
            water produced to the highest standards of hygiene, quality, and reliability.
            We understand that water is one of life's most essential resources, and we
            take great pride in ensuring that every bottle we produce reflects our
            commitment to excellence, purity, and customer satisfaction. Through modern
            purification systems, advanced filtration technology, and strict quality
            assurance procedures, we carefully process our water to maintain freshness,
            clarity, and great taste in every sip. Our company is built on the values of
            trust, integrity, consistency, and service. We work hard to create products
            that individuals, families, offices, hotels, restaurants, schools, and
            organizations can depend on every day. Each bottle is hygienically packaged
            and handled with care throughout every stage of production and distribution,
            ensuring that our customers receive water they can confidently enjoy. <br />
            We continuously invest in improving our operations, embracing innovation, and
            maintaining efficient systems that allow us to serve growing communities with
            speed and dependability. At Aqualina, customer satisfaction remains at the
            center of everything we do. We believe that excellent service goes hand in
            hand with excellent products, which is why we focus on building strong
            relationships with our customers through professionalism, responsiveness, and
            consistent delivery. Whether supplying homes, workplaces, retail outlets, or
            large-scale events, we strive to meet every demand with reliability and
            flexibility. Our team is passionate about maintaining the reputation we have
            built and exceeding expectations whenever possible. We are also committed to
            operating responsibly and contributing positively to the environment and the
            communities we serve. Through sustainable practices, efficient resource
            management, and a focus on continuous improvement, we aim to reduce our
            environmental impact while creating long-term value for society. <br />
            As we continue to grow, our mission remains clear: to deliver clean, safe, and
            refreshing water while setting the standard for quality, trust, and innovation
            in the bottled water industry. At Aqualina, every bottle represents our
            promise of purity, care, and excellence.
          </p>

          <!-- Optional: split text for readability -->
        </div>

        <!-- IMAGE -->
        <div class="flex justify-center">
          <img
            :src="storyImg"
            alt="Our Story"
            class="rounded-2xl shadow-xl w-full max-w-md object-cover transition-all duration-1000 opacity-0 lg:translate-x-10"
            :class="show ? 'opacity-100 translate-x-0' : ''"
          />
        </div>
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
</template>

<script setup>
import { ref, onMounted } from "vue";
import aboutHero from "/src/assets/AboutHero2.webp";
import storyImg from "/src/assets/aqualina-product.webp";

const loaded = ref(false);
const show = ref(false);

onMounted(() => {
  // Hero title animation
  setTimeout(() => {
    loaded.value = true;
  }, 200);

  // Scroll animation
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          show.value = true;
        }
      });
    },
    { threshold: 0.2 }
  );

  const section = document.querySelector(".fade-section");
  if (section) observer.observe(section);
});

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
