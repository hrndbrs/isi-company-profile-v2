<script setup>
const lottieSize = 128;
</script>

<template>
  <SectionWrapper class="py-23">
    <!-- text message -->
    <div class="relative flex flex-col gap-3">
      <h2 class="text-h3 font-bold text-error-500">ERROR!</h2>
      <h1 class="text-h1 font-bold text-error-200">
        Don’t worry, this page is in the <br class="hidden lg:block" />
        <em class="font-normal">works!</em>
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
      <ButtonWithWave class="mt-12 w-fit">Take me home</ButtonWithWave>
    </NuxtLink>
  </SectionWrapper>
</template>
