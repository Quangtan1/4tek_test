<script setup lang="ts">
import IconCalender from '@/components/icons/IconCalender.vue'
import IconPen from '@/components/icons/IconPen.vue'
import IconTeam from '@/components/icons/IconTeam.vue'
import AboutItem from '@/components/AboutItem.vue'
</script>

<template>
  <section class="max-w-5xl mx-auto py-28 max-md:mt-52">
    <section class="grid md:grid-cols-2 grid-cols-1 gap-8" id="about">
      <div class="flex flex-col gap-8 max-md:px-6 px-4">
        <h1 class="font-fair text-3xl font-[900]">{{ $t('nav.about') }}</h1>
        <p class="text-[#757575] font-fair text-sm">{{ $t('about.description') }}</p>

        <div class="flex max-md:justify-center md:flex-col gap-10 mt-4">
          <div class="flex flex-col gap-2">
            <p class="text-[#079BEE] text-5xl font-bold relative">
              600 <span class="absolute text-lg font-bold left-20 pl-1 bottom-[-2px]">M</span>
              <span class="pl-1 font-bold">+</span>
            </p>
            <p class="font-bold">{{ $t('about.user') }}</p>
          </div>

          <div class="flex flex-col gap-2">
            <p class="text-[#079BEE] text-5xl font-bold">300+</p>
            <p class="font-bold">{{ $t('about.game') }}</p>
          </div>
        </div>
      </div>
      <div
        class="bg-[#EEEEEE] p-12 flex flex-col justify-center items-center gap-12 max-md:px-6 px-4"
      >
        <AboutItem>
          <template #icon>
            <IconCalender />
          </template>
          <template #title>{{ $t('about.24_hour') }}</template>
          <template #des>{{ $t('about.24_hour_des') }}</template></AboutItem
        >
        <AboutItem>
          <template #icon>
            <IconPen />
          </template>
          <template #title>{{ $t('about.design') }}</template>
          <template #des>{{ $t('about.design_des') }}</template></AboutItem
        >
        <AboutItem>
          <template #icon>
            <IconTeam />
          </template>
          <template #title>{{ $t('about.team') }}</template>
          <template #des>{{ $t('about.team_des') }}</template></AboutItem
        >
      </div>
    </section>
    <div class="w-full flex flex-col items-center justify-center mx-auto mt-20">
      <img
        alt="illustrator"
        class="mb-[-100px] animate-bounce-up-down"
        src="@/assets/images/Illustrator.png"
      />
      <img alt="map" class="w-full" src="@/assets/images/map.png" />
    </div>
  </section>
</template>
