<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import IconArrow from '@/components/icons/IconArrow.vue'
dayjs.extend(duration)

const day = ref(30)
const hour = ref(0)
const minute = ref(0)
const second = ref(0)

let endDate = dayjs()
  .add(day.value, 'day')
  .add(hour.value, 'hour')
  .add(minute.value, 'minute')
  .add(second.value, 'second')
let interval: number | undefined

const updateCountdown = () => {
  const now = dayjs()
  const remaining = dayjs.duration(endDate.diff(now))

  if (remaining.asSeconds() <= 0) {
    clearInterval(interval)
  } else {
    day.value = remaining.days()
    hour.value = remaining.hours()
    minute.value = remaining.minutes()
    second.value = remaining.seconds()
  }
}

const startCountdown = () => {
  updateCountdown()
  interval = setInterval(updateCountdown, 1000)
}

onMounted(() => {
  startCountdown()
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<template>
  <section
    class="relative z-0 flex justify-center items-center h-[80vh] max-md:px-6 max-md:flex-col"
  >
    <div class="relative z-20 max-w-xl flex flex-col gap-4">
      <h1 class="text-white font-extrabold text-5xl text-center pb-2">{{ $t('intro.ready') }}</h1>
      <section class="bg-white rounded-2xl flex justify-around items-center p-5">
        <div class="text-center">
          <p class="text-5xl font-bold">{{ day }}</p>
          <span class="font-semibold">{{ $t('intro.day') }}</span>
        </div>
        <span class="text-4xl pb-6">:</span>
        <div>
          <p class="text-5xl font-bold">{{ hour }}</p>
          <span class="font-semibold">{{ $t('intro.hour') }}</span>
        </div>
        <span class="text-4xl pb-6">:</span>
        <div>
          <p class="text-5xl font-bold">{{ minute }}</p>
          <span class="font-semibold">{{ $t('intro.minute') }}</span>
        </div>
        <span class="text-4xl pb-6">:</span>
        <div>
          <p class="text-5xl font-bold">{{ second }}</p>
          <span class="font-semibold">{{ $t('intro.second') }}</span>
        </div>
      </section>
      <section class="relative z-20 max-w-[400px] mx-auto text-center mt-10">
        <p class="text-white mb-4">{{ $t('intro.description') }}</p>
        <div class="bg-white rounded-md flex p-3">
          <input :placeholder="$t('intro.input')" class="w-full focus-visible:outline-none" />
          <IconArrow />
        </div>
      </section>
    </div>
    <div
      class="absolute z-10 md:left-0 md:bottom-[-50px] bottom-[-300px] flex justify-center max-md:w-full left-[50px]"
    >
      <img alt="Ong tien" class="md:h-[650px] h-[450px]" src="@/assets/images/ong_tien.png" />
    </div>
  </section>
</template>
