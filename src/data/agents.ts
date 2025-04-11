import { Agent } from "@/types/agent";

export const agents: Agent[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    phone: "+1 (555) 123-4567",
    profileImage: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Sarah has over 15 years of experience in luxury real estate markets across the country. Her attention to detail and dedication to her clients has earned her a reputation as one of the top agents in the region.",
    title: "Senior Luxury Real Estate Specialist",
    specialties: ["Luxury Homes", "Waterfront Properties", "Investment Properties"],
    socialMedia: {
      facebook: "https://facebook.com/sarah.johnson",
      twitter: "https://twitter.com/sarahjohnson",
      instagram: "https://instagram.com/sarahjohnsonrealty",
      linkedin: "https://linkedin.com/in/sarahjohnsonrealestate"
    },
    rating: 4.9,
    reviewCount: 127,
    createdAt: new Date("2022-01-10"),
    updatedAt: new Date("2023-03-15")
  },
  {
    id: "2",
    name: "Michael Rodriguez",
    email: "michael.rodriguez@example.com",
    phone: "+1 (555) 987-6543",
    profileImage: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Michael specializes in urban properties and has helped hundreds of clients find their perfect city home. His knowledge of market trends and neighborhood insights is unmatched.",
    title: "Urban Property Specialist",
    specialties: ["City Apartments", "Condos", "First-time Buyers"],
    socialMedia: {
      facebook: "https://facebook.com/michael.rodriguez",
      instagram: "https://instagram.com/michaelrodriguezrealty",
      linkedin: "https://linkedin.com/in/michaelrodriguezrealestate"
    },
    rating: 4.7,
    reviewCount: 98,
    createdAt: new Date("2022-03-22"),
    updatedAt: new Date("2023-02-28")
  },
  {
    id: "3",
    name: "Emily Chang",
    email: "emily.chang@example.com",
    phone: "+1 (555) 456-7890",
    profileImage: "https://randomuser.me/api/portraits/women/63.jpg",
    bio: "Emily brings a fresh perspective to real estate with her background in interior design. She helps clients see the potential in every property and specializes in suburban family homes.",
    title: "Residential Property Expert",
    specialties: ["Family Homes", "Suburban Properties", "Property Staging"],
    socialMedia: {
      facebook: "https://facebook.com/emily.chang",
      twitter: "https://twitter.com/emilychang",
      instagram: "https://instagram.com/emilychangrealty",
      linkedin: "https://linkedin.com/in/emilychangrealestate"
    },
    rating: 4.8,
    reviewCount: 76,
    createdAt: new Date("2022-05-15"),
    updatedAt: new Date("2023-03-10")
  }
]; 