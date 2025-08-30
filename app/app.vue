<script setup lang="ts">
const route = useRoute();

onBeforeMount(() => {
  registerGSAPPlugin();
  setCampaignId(route.query[CAMPAIGN_ID_STORAGE_KEY] as string);
});

watch(
  () => route.query,
  () => {
    setCampaignId(route.query[CAMPAIGN_ID_STORAGE_KEY] as string);
  }
);
</script>

<template>
  <NuxtLayout>
    <NuxtRouteAnnouncer />
    <NuxtPage />
    <SharedSocialSidebar />
  </NuxtLayout>
  <LoadingPageIndicator />
</template>
