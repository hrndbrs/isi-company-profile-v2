export type NavLink = { label: string } & (
  | {
      type: "link";
      path: string;
      items?: never;
    }
  | {
      type: "group";
      path?: never;
      items: NavLink[];
    }
);

export type ServiceActivity = {
  icon: string;
  title: string;
  description: string;
};
