export const navbarLinks = [
  { title: "Home", href: "/" },
  { title: "Products", href: "/products" },
  { title: "Features", href: "/#features" },
  { title: "Pricing", href: "/#pricing" },
  { title: "FAQ", href: "/#faq" },
];

export interface PricingDetail {
  title: string;
  type?: string;
  description: string;
  price: string;
  currency: string;
  monthly: string;
  features: string[];
}

export const allFeatures = [
  "Feature 1",
  "Feature 2",
  "Feature 3",
  "Feature 4",
  "Feature 5",
];

export const PricingDetails: PricingDetail[] = [
  {
    title: "Basic Plan",
    description: "Description for Basic Plan",
    price: "0",
    currency: "€",
    monthly: "/month",
    features: ["Feature 1", "Feature 2"],
  },
  {
    title: "Standard Plan",
    type: "popular",
    description: "Description for Standard Plan",
    price: "49.99",
    currency: "€",
    monthly: "/month",
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
  {
    title: "Premium Plan",
    description: "Description for Premium Plan",
    price: "99.99",
    currency: "€",
    monthly: "/month",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"],
  },
];

export interface FAQItemProps {
  question: string;
  answer: string;
}

export const faqDetail: FAQItemProps[] = [
  { question: "Question 1", answer: "Answer 1" },
  { question: "Question 2", answer: "Answer 2" },
  { question: "Question 3", answer: "Answer 3" },
  { question: "Question 4", answer: "Answer 4" },
  { question: "Question 5", answer: "Answer 5" },
];
