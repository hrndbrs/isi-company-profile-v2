<script setup lang="ts">
const lottieSize = 128;
</script>

<template>
  <NuxtLayout name="default">
    <SectionWrapper
      aria-labelledby="errorPageTitle"
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
      <h1 id="errorPageTitle" class="text-white text-h3 font-bold">ERROR!</h1>
      <h2 class="text-error-200 text-h1 break-words">
        Oops! <br />
        Something went <br />
        <em class="font-normal">wrong...</em>
      </h2>
      <div class="text-white flex flex-col gap-3 pt-3">
        <p>
          “Change is inevitable, but this error was not what we had in mind.
          Let's get back on track!”
        </p>
        <p>Try to refresh the page or</p>
      </div>
      <NuxtLink to="/" class="w-fit">
        <ButtonWithWave class="px-4 mt-8">Take me home</ButtonWithWave>
      </NuxtLink>
    </SectionWrapper>
  </NuxtLayout>
</template>
