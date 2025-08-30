<script setup lang="ts">
const lottieSize = 128;

const { global = false } = defineProps<{
  error?: Error;
  global?: boolean;
  clearError?: () => void;
}>();

async function handleNavigate() {
  if (global) return await clearError({ redirect: "/" });
  await navigateTo("/", { replace: true });
}
</script>

<template>
  <SectionWrapper
    aria-labelledby="errorPageTitle"
    class="h-full w-full bg-error-500 py-23"
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
    <h1 id="errorPageTitle" class="text-h3 font-bold text-white">ERROR!</h1>
    <h2 class="text-h1 break-words text-error-200">
      Oops! <br />
      Something went <br />
      <em class="font-normal">wrong...</em>
    </h2>
    <div class="flex flex-col gap-3 pt-3 text-white">
      <p>
        “Change is inevitable, but this error was not what we had in mind. Let's
        get back on track!”
      </p>
      <p>Try to refresh the page or</p>
    </div>

    <ButtonWithWave class="mt-8 w-fit px-4" @click="handleNavigate()"
      >Take me home
    </ButtonWithWave>
  </SectionWrapper>
</template>
