<script setup lang="ts">
import { NAV_ROUTE } from '@/utils/const'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import SwitchTranslateButton from '@/components/SwitchTranslateButton.vue'
import IconMenu from '@/components/icons/IconMenu.vue'

const navRoute = NAV_ROUTE

const menuBarOpen = ref(false)

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
const toggleMenuBar = () => {
  menuBarOpen.value = !menuBarOpen.value
  menuBarOpen.value
    ? document.body.classList.toggle('no-scroll', menuBarOpen.value)
    : document.body.classList.remove('no-scroll')
}

const handleResize = () => {
  if (window.innerWidth >= 768) {
    menuBarOpen.value = false
    document.body.classList.remove('no-scroll')
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
  handleResize()
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
  document.body.classList.remove('no-scroll')
})
</script>

<template>
  <header class="flex justify-between max_screen items-center py-6 px-6 relative z-30">
    <img alt="logo" class="h-12 object-cover" src="@/assets/logo.svg" />
    <div class="flex gap-8 items-center">
      <div class="md:flex hidden gap-8 items-center">
        <ul class="flex gap-8">
          <li
            v-for="route in navRoute"
            :key="route.key"
            class="text-white text-[14px] font-medium uppercase cursor-pointer"
            @click="scrollToSection(route.id)"
          >
            {{ $t(route.title) }}
          </li>
        </ul>

        <div v-if="!menuBarOpen">
          <SwitchTranslateButton />
        </div>
      </div>
      <button @click="toggleMenuBar" class="md:hidden flex">
        <IconMenu />
      </button>
    </div>

    <div
      v-if="menuBarOpen"
      class="absolute md:hidden h-screen inset-0 bg-white z-40 flex flex-col items-center justify-center"
    >
      <div class="absolute top-6 left-6">
        <SwitchTranslateButton />
      </div>
      <button @click="toggleMenuBar" class="absolute top-6 right-6 text-black text-5xl">×</button>
      <ul class="flex flex-col gap-6 text-black text-2xl font-medium items-center w-full px-8">
        <li
          v-for="route in navRoute"
          :key="route.key"
          class="cursor-pointer border-b-2 pb-4 w-full text-center font-semibold"
          @click="
            () => {
              scrollToSection(route.id)
              toggleMenuBar()
            }
          "
        >
          {{ $t(route.title) }}
        </li>
      </ul>
    </div>
  </header>
</template>

<style>
.no-scroll {
  overflow: hidden;
}
</style>
