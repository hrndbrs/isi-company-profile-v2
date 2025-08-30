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
  <nav class="flex flex-col right-8 gap-2.5 fixed top-1/3 z-500">
    <NuxtLink
      v-for="item in socialLinks"
      :key="item.icon"
      external
      target="_blank"
      :to="item.url"
      class="border-brand-500 rounded-full border-2 opacity-32 hover:opacity-100 duration-200"
      aria-label="Social links"
    >
      <Icon :name="item.icon" class="size-8 m-3 text-brand-500" />
      <span class="sr-only">{{ item.label }}</span>
    </NuxtLink>
  </nav>
</template>
