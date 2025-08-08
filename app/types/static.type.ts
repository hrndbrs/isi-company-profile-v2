export type NavLink = { label: string } & (
  | {
    type: "link";
    path: string;
  }
  | {
    type: "group";
    items: NavLink[];
  }
);
