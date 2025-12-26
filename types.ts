import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  command: string;
}

export interface Solution {
  id: string;
  name: string;
  version: string;
  description: string;
  specs: string[];
  image: string; // URL placeholder
}

export interface ProcessStep {
  id: number;
  title: string;
  status: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  company: string;
  quote: string;
  project: string;
  rating: number;
}
