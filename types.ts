import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface PricingPlan {
  name: string;
  price: string;
  originalPrice?: string; // Added for discount display
  features: string[];
  isPopular?: boolean;
  highlight?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TestimonialItem {
  name: string;
  company: string;
  content: string;
  avatar: string;
}