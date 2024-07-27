<template>
  <div class="flex gap-6 items-center">
    <div class="h-full">
      <div class="p-4 rounded-full bg-[#E3FCFF]">
        <slot name="icon"></slot>
      </div>
    </div>

    <div class="flex flex-col">
      <h2 class="font-bold text-lg text-black">
        <slot name="title"></slot>
      </h2>
      <p class="text-[#757575] text-sm"><slot name="des"></slot></p>
    </div>
  </div>
</template>
