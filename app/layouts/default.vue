<template>
  <NavigationBar />

  <NuxtErrorBoundary>
    <SocialLinksContainer />
    <main>
      <slot />
    </main>
    <template #error="{ error }">
      {{ showError(error) }}
    </template>
  </NuxtErrorBoundary>

  <Footer />
</template>
