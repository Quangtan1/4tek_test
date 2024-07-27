<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import IconAddress from '@/components/icons/IconAddress.vue'
import IconFile from '@/components/icons/IconFile.vue'
import IconArrow from '@/components/icons/IconArrow.vue'
import IconTwitter from '@/components/icons/IconTwitter.vue'
import IconFacebook from '@/components/icons/IconFacebook.vue'
import IconInsta from '@/components/icons/IconInsta.vue'
</script>

<template>
  <section class="bg_footer py-20 bg-no-repeat bg-cover max-md:px-10 px-6">
    <section class="max-w-6xl grid grid-cols-12 mx-auto gap-y-10" id="contact">
      <div
        class="col-span-12 md:col-span-5 flex max-md:items-center flex-col w-fit max-md:w-full gap-8"
      >
        <img alt="Vue logo" class="h-18 object-cover" src="@/assets/logo.svg" />
        <div class="flex gap-4">
          <IconTwitter />
          <IconFacebook />
          <IconInsta />
        </div>
      </div>
      <div class="col-span-12 md:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-10">
        <div class="flex flex-col gap-6">
          <h1 class="text-white text-xl font-bold">{{ $t('footer.address') }}</h1>
          <div class="flex gap-4 items-start">
            <IconAddress />
            <div class="flex flex-col gap-3">
              <p class="text-white text-sm">{{ $t('footer.address_us') }}</p>
              <p class="text-white text-sm">{{ $t('footer.address_vn') }}</p>
            </div>
          </div>
          <div class="flex gap-4 items-center">
            <IconFile />
            <div class="flex flex-col gap-3">
              <p class="text-white text-sm">{{ $t('footer.number') }}</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-6">
          <h1 class="text-white text-xl font-bold">{{ $t('footer.subscribe') }}</h1>
          <p class="text-white text-sm">{{ $t('footer.subscribe_des') }}</p>
          <div class="bg-transparent rounded-md flex p-3 border border-gray-400">
            <input
              :placeholder="$t('intro.input')"
              class="w-full focus-visible:outline-none bg-transparent text-white"
            />
            <IconArrow color="white" />
          </div>
        </div>
      </div>
    </section>
  </section>
  <h3 class="bg-black p-4 text-center text-white text-sm">2017 Copyright. Policy.</h3>
</template>

<style scoped>
.bg_footer {
  background-image: url('@/assets/images/bg_footer.png');
}
</style>
