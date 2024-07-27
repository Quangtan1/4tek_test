<script setup lang="ts">
import IntroView from '@/views/IntroView.vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import ScrollButton from '@/components/ScrollButton.vue'
import AboutView from '@/views/AboutView.vue'
import OurGamesView from '@/views/OurGamesView.vue'
import OurPartnersView from '@/views/OurPartnersView.vue'
</script>

<template>
  <main class="block w-screen overflow-x-hidden relative overflow-hidden">
    <section class="relative">
      <img
        alt="bg_intro"
        class="z-0 absolute h-full w-full max-md:object-cover"
        src="@/assets/images/bg_intro.png"
      />
      <section class="relative z-10">
        <NavBar />
        <IntroView />
      </section>
    </section>
    <AboutView />
    <OurGamesView />
    <OurPartnersView />
    <Footer />
    <ScrollButton />
  </main>
</template>
