<script setup lang="ts">
import { GAME_DATA } from '@/utils/const'
import GameItem from '@/components/GameItem.vue'

const games = GAME_DATA
</script>

<template>
  <section class="max_screen max-md:px-6 px-4" id="game">
    <div class="text-center flex flex-col gap-6 max-w-2xl mx-auto pb-20">
      <h1 class="font-fair text-4xl font-[900]">{{ $t('our_game') }}</h1>
      <p class="text-[#757575] font-fair text-sm">{{ $t('our_game_des') }}</p>
    </div>
    <div class="grid md:grid-cols-4 grid-cols-2 gap-x-6">
      <div
        v-for="(game, index) in games"
        :key="game.id"
        :class="[
          `col-${(index % 4) + 1}`,
          { 'mt-10': (index % 4) % 2 === 1, 'mt-0': (index % 4) % 2 === 0 }
        ]"
      >
        <GameItem :game="game" />
      </div>
    </div>
  </section>
</template>
