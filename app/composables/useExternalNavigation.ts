type NavigationOptions = Omit<
  NonNullable<Parameters<typeof navigateTo>[1]>,
  "external"
>;

export default function useNavigation() {
  const config = useRuntimeConfig();
  const urls = {
    dashboard: `${config.public.dashboardUrl}/login`,
    whatsapp: `https://wa.me/${config.public.whatsapp}`,
    discordGroupInvite: `https://discord.gg/${config.public.discordGroup}`,
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
