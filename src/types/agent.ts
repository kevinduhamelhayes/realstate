export type Agent = {
  id: string;
  name: string;
  email: string;
  phone: string;
  profileImage?: string;
  bio?: string;
  title?: string;
  specialties?: string[];
  socialMedia?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
  rating?: number;
  reviewCount?: number;
  createdAt: Date;
  updatedAt: Date;
}; 