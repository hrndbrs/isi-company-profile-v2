type NavigationOptions = Omit<
  NonNullable<Parameters<typeof navigateTo>[1]>,
  "external"
>;

export default function useNavigation() {
  const config = useRuntimeConfig();
  const urls = {
    dashboard: `${config.public.dashboardUrl}/login`,
    whatsapp: config.public.whatsapp
      ? `https://wa.me/${config.public.whatsapp}`
      : null,
    discordGroupInvite: config.public.discordGroup
      ? `https://discord.gg/${config.public.discordGroup}`
      : null,
    linkedin: config.public.linkedIn
      ? `https://www.linkedin.com/company/${config.public.linkedIn}`
      : null,
    instagram: config.public.instagram
      ? `https://www.instagram.com/${config.public.instagram}`
      : null,
  };

  async function toDashboard(opts: NavigationOptions = {}) {
    const campaignId = getCampaignId();
    const url = campaignId
      ? `${urls.dashboard}?${CAMPAIGN_ID_STORAGE_KEY}=${campaignId}`
      : urls.dashboard;

    removeCampaignId();

    await navigateTo(url, {
      ...opts,
      open: {
        target: "_blank",
        ...opts.open,
      },
      external: true,
    });
  }

  return { toDashboard, urls };
}
