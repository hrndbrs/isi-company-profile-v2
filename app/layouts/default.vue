<template>
  <NavigationBar />
  <NuxtErrorBoundary>
    <main>
      <slot />
    </main>

    <template #error>
      <ErrorView />
    </template>
  </NuxtErrorBoundary>
  <Footer />
</template>
