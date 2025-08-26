<script setup lang="ts">
const route = useRoute();

onBeforeMount(() => {
  registerGSAPPlugin();
  setCampaignId(route.query[CAMPAIGN_ID_STORAGE_KEY] as string);
});

onMounted(() => {
  preventFOUC();
});

watch(
  () => route.query,
  () => {
    setCampaignId(route.query[CAMPAIGN_ID_STORAGE_KEY] as string);
  },
);
</script>

<template>
  <NuxtLayout>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </NuxtLayout>
  <LoadingPageIndicator />
</template>
