<script lang="ts" setup>
const { urls } = useExternalNavigation();

const socialLinks = [
  {
    icon: "social:whatsapp",
    url: urls.whatsapp,
  },
  {
    icon: "social:instagram",
    url: urls.instagram,
  },
  {
    icon: "social:discord",
    url: urls.discordGroupInvite,
  },
  {
    icon: "social:linkedin",
    url: urls.linkedin,
  },
];
</script>

<template>
  <section class="flex flex-col right-8 gap-2.5 fixed top-1/3">
    <NuxtLink
      v-for="item in socialLinks"
      :key="item.icon"
      external
      target="_blank"
      :to="item.url"
      class="border-brand-500 rounded-full border-2 opacity-32 hover:opacity-100 duration-200"
    >
      <Icon :name="item.icon" class="size-8 m-3 text-brand-500" />
    </NuxtLink>
  </section>
</template>
