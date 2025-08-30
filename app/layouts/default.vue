<template>
  <NavigationBar />
  <NuxtErrorBoundary>
    <main>
      <slot />
    </main>

    <template #error="{ error, clearError }">
      <ErrorView :error="error" :clearError />
    </template>
  </NuxtErrorBoundary>
  <Footer />
</template>
