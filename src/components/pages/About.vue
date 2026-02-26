<template>
  <section class="w-full">

    <!-- HERO SECTION -->
    <div class="relative w-full h-[50vh] md:h-[60vh]">
      <img
        src="/AboutHero2.png"
        alt="About Aqualina"
        class="w-full h-full object-cover"
      />
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black/40"></div>

      <!-- Hero Content -->
      <div class="absolute inset-0 flex items-center justify-center">
        <h1
          class="text-cyan-100 text-5xl md:text-7xl font-bold tracking-wide font-heading"
        >
          About Us
        </h1>
      </div>
    </div>

    <!-- OUR STORY SECTION -->
    <div class="container mx-auto px-6 py-20">
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        <!-- Text -->
        <div>
          <h2 class="text-3xl md:text-4xl font-bold text-cyan-900 mb-6 font-heading">
            Our Story
          </h2>

          <p class="text-cyan-800 leading-relaxed mb-4 font-body">
          Our journey began in 1992 when our founder returned to Kenya after completing further studies in the United States. During this time, he noticed a major gap in the local market: access to purified, safe, and portable drinking water was extremely limited. Clean bottled water was widely viewed as a luxury, accessible only to a few, while most households relied on traditional methods such as boiling to make water safe for consumption.

Motivated by the need to change this reality, the idea was born to produce, package, distribute, and supply purified drinking water that could be trusted by everyone. The vision was simple yet powerful — to make clean, safe drinking water easily available to homes and businesses, at the press of a tap, whether hot or cold.

The company started modestly, with a small purification plant, a compact vehicle, and a dedicated team of just five people. What was once a new and unfamiliar concept involved supplying premium purified water in 18.9-litre containers, paired with hot and cold water dispensers to ensure convenience and comfort for customers.<br>

From the very beginning, our focus has always been on the customer. By offering doorstep deliveries, reliable after-sales support, and professional servicing of water dispensers, we created a personalized experience that set us apart in the market.<br>

Headquartered in Nairobi's Industrial Area, with additional branches in Mombasa and Kisumu, the company has steadily grown its distribution network across the country. Supported by a dedicated fleet of delivery vehicles, we ensure timely and efficient service nationwide.<br>

Over the years, demand for our premium purified drinking water has grown consistently. Along the way, we have expanded our range to include world-class water solutions, all offered under one roof. Today, we are proud to serve thousands of customers from all walks of life across Kenya, and we continue to look ahead with plans to expand beyond our borders in the future.
          </p>
        </div>

        <!-- Image -->
        <div class="flex justify-center">
          <img
            src="/story.jpg"
            alt="Our Story"
            class="rounded-2xl shadow-xl w-full max-w-md object-cover"
          />
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
</script>