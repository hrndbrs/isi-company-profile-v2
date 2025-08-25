<script setup lang="ts">
const lottieSize = 128;
</script>

<template>
  <NuxtLayout name="default">
    <SectionWrapper
      class="bg-error-500 h-full py-23 w-full"
      style="visibility: visible"
      :inner-container-props="{
        class: 'relative',
      }"
    >
      <Lottie
        animation-link="/assets/lotties/face-in-clouds.json"
        class="absolute top-0 right-0"
        :height="lottieSize"
        :width="lottieSize"
      />
      <h3 class="text-white text-h3 font-bold">ERROR!</h3>
      <div class="text-error-200 text-h1 break-words">
        <p>Oops!</p>
        <p>Something went</p>
        <p class="italic font-normal">wrong...</p>
      </div>
      <div class="text-white flex flex-col gap-3 pt-3">
        <p>
          “Change is inevitable, but this error was not what we had in mind.
          Let's get back on track!”
        </p>
        <p>Try to refresh the page or</p>
      </div>
      <Button class="w-fit px-4 mt-8">Take me home</Button>
    </SectionWrapper>
  </NuxtLayout>
</template>
