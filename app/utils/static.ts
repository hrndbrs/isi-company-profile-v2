import type { NavLink } from "~/types/static.type";

export const CAMPAIGN_ID_STORAGE_KEY = "campaign_id";

export const NAV_LINKS: NavLink[] = [
  {
    type: "link",
    label: "About Us",
    path: "/about",
  },
  {
    type: "group",
    label: "Services",
    items: [
      {
        type: "link",
        label: "Coaching",
        path: "/services/coaching",
      },
      {
        type: "link",
        label: "Training",
        path: "/services/training",
      },
    ],
  },
  {
    type: "link",
    label: "For Business",
    path: "/corporate",
  },
  {
    type: "link",
    label: "Resilience Academy",
    path: "/resilience-academy",
  },
  {
    type: "link",
    label: "Resources",
    path: "/resources",
  },
  {
    type: "link",
    label: "Our Writings",
    path: "/blogs",
  },
];
