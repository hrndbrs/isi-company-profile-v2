export function setCampaignId(campaignId?: string) {
  if (!campaignId) return;
  localStorage.setItem(CAMPAIGN_ID_STORAGE_KEY, campaignId);
}

export function getCampaignId() {
  return localStorage.getItem(CAMPAIGN_ID_STORAGE_KEY);
}

export function removeCampaignId() {
  localStorage.removeItem(CAMPAIGN_ID_STORAGE_KEY);
}
