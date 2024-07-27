<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { OUR_PARTNER } from '@/utils/const'

const our_partners = OUR_PARTNER

const itemsToShow = ref(5)

const updateItemsToShow = () => {
  const width = window.innerWidth
  if (width < 576) {
    itemsToShow.value = 1.5
  } else if (width < 768) {
    itemsToShow.value = 3
  } else {
    itemsToShow.value = 5
  }
}

onMounted(() => {
  updateItemsToShow()
  window.addEventListener('resize', updateItemsToShow)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateItemsToShow)
})
</script>

<template>
  <section class="py-20 bg-[#F6F6F6] mt-16">
    <section id="partner" class="max_screen mx-auto text-center flex flex-col gap-10">
      <h1 class="font-bold text-4xl">{{ $t('our_partner') }}</h1>
      <Carousel :items-to-show="itemsToShow" :wrap-around="true" :transition="500">
        <Slide v-for="(our_partner, index) in our_partners" :key="index">
          <div><img :src="our_partner" /></div>
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </section>
  </section>
</template>

<style>
.carousel__prev,
.carousel__next {
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
