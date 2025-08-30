<script lang="ts" setup>
const { urls } = useExternalNavigation();

const socialLinks = [
  {
    label: "WhatsApp",
    icon: "social:whatsapp",
    url: urls.whatsapp,
  },
  {
    label: "Instagram",
    icon: "social:instagram",
    url: urls.instagram,
  },
  {
    label: "Discord",
    icon: "social:discord",
    url: urls.discordGroupInvite,
  },
  {
    label: "LinkedIn",
    icon: "social:linkedin",
    url: urls.linkedin,
  },
];
</script>

<template>
  <nav class="fixed top-1/3 right-8 z-1 flex flex-col gap-2.5">
    <NuxtLink
      v-for="item in socialLinks"
      :key="item.icon"
      external
      target="_blank"
      :to="item.url"
      class="rounded-full border-2 border-brand-500 opacity-32 duration-200 hover:opacity-100"
      aria-label="Social links"
    >
      <Icon :name="item.icon" class="m-3 size-8 text-brand-500" />
      <span class="sr-only">{{ item.label }}</span>
    </NuxtLink>
  </nav>
</template>
