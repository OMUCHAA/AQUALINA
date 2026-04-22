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
