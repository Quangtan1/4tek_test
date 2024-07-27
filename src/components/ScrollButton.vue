<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const scrollingDown = ref(false)

const handleScroll = () => {
  scrollingDown.value = window.scrollY > 0
}

const scrollToPosition = () => {
  if (scrollingDown.value) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  } else {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <button
    @click="scrollToPosition"
    class="fixed z-10 bottom-10 right-6 bg-white text-black p-4 rounded-full shadow-md transition-transform duration-300 ease-in-out"
  >
    <svg
      :class="{ 'rotate-180': !scrollingDown }"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      class="w-6 h-6 transition-transform duration-300 ease-in-out relative z-0"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
    </svg>
  </button>
</template>
