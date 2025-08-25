<template>
  <NavigationBar />
  <NuxtErrorBoundary>
    <main class="invisible">
      <slot />
    </main>

    <template #error>
      <ErrorView />
    </template>
  </NuxtErrorBoundary>
  <Footer />
</template>
