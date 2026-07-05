import { LucideIcon } from "lucide-react";

export type SidebarMenu = {
  id: number;
  name: string;
  image: string;
  activeImage: string;
  link: string;
  alt: string;
};

export type AdminSidebarMenu = {
  id: number;
  name: string;
  image: LucideIcon;
  activeImage: LucideIcon;
  link: string;
  alt: string;
};
