<script setup>
const lottieSize = 128;
</script>

<template>
  <SectionWrapper class="py-23">
    <!-- text message -->
    <div class="flex flex-col gap-3 relative">
      <h2 class="text-h3 text-error-500 font-bold">ERROR!</h2>
      <h1 class="text-h1 font-bold text-error-200">
        Don’t worry, this page is on the <br class="lg:block hidden" /><em
          class="font-normal"
          >work!</em
        >
      </h1>
      <p class="text-error-500">
        Change is coming soon—stay tuned for something amazing!
      </p>
      <p class="text-error-500">Try to refresh the page or</p>
      <Lottie
        animation-link="/assets/lotties/face-in-clouds.json"
        class="absolute top-0 right-0"
        :height="lottieSize"
        :width="lottieSize"
      />
    </div>

    <NuxtLink to="/">
      <ButtonWithWave class="w-fit mt-12">Take me home</ButtonWithWave>
    </NuxtLink>
  </SectionWrapper>
</template>
