<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'
import Tr from '@/i18n/translation'
import IconSelected from '@/components/icons/IconSelected.vue'
import IconVietNam from '@/components/icons/IconVietNam.vue'
import IconEnglish from '@/components/icons/IconEnglish.vue'

const { t, locale } = useI18n()
const supportedLocales = Tr.supportedLocales

const dropdownOpen = ref(false)
const selectedLocale = ref(locale)
const dropdownRef = ref<HTMLElement | null>(null)

const localeIcons = {
  vn: IconVietNam,
  en: IconEnglish
}

const switchLanguage = async (newLocale: string) => {
  await Tr.switchLanguage(newLocale)
  selectedLocale.value = newLocale
  dropdownOpen.value = false
}

const handleClickOutside = (event: MouseEvent) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    dropdownOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('mousedown', handleClickOutside)
})
</script>

<template>
  <div ref="dropdownRef" class="relative inline-block text-left">
    <button
      type="button"
      @click="dropdownOpen = !dropdownOpen"
      class="inline-flex w-full md:text-white justify-center max-md:bg-[#F6F6F6] max-md:ring-1 ring-slate-400 items-center gap-2 rounded-md border-transparent border hover:border-gray-300 md:bg-transparent px-2 py-1 text-sm font-medium text-gray-700 shadow-sm focus:outline-none"
    >
      <component :is="localeIcons[selectedLocale]" />
      <svg
        width="10"
        height="5"
        viewBox="0 0 10 5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        :class="{ 'rotate-180': dropdownOpen, 'transition-transform duration-200': true }"
      >
        <path d="M0 0L5 5L10 0H0Z" class="fill-black md:fill-white" />
      </svg>
    </button>

    <div
      v-show="dropdownOpen"
      class="absolute z-10 mt-2 origin-top-left max-md:left-0 md:right-0 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
    >
      <div class="p-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        <div
          v-for="sLocale in supportedLocales"
          :key="`locale-${sLocale}`"
          class="cursor-pointer select-none px-4 py-2 text-gray-700 hover:bg-gray-100 flex gap-2 items-center justify-end"
          @click="switchLanguage(sLocale)"
        >
          <span v-if="sLocale === selectedLocale">
            <IconSelected />
          </span>

          <div class="flex gap-2 items-center min-w-[120px]">
            <component :is="localeIcons[sLocale]" />
            <p class="font-medium text-black">
              {{ t(`locale.${sLocale}`) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
