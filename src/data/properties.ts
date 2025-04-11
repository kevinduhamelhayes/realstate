import { Property } from "@/types/property";

export const properties: Property[] = [
  {
    id: "1",
    title: "Luxury Waterfront Villa",
    description: "Beautiful waterfront villa with panoramic views of the ocean. This spectacular property offers 5 bedrooms, a private pool, and direct beach access.",
    price: 1200000,
    address: {
      street: "123 Oceanview Drive",
      city: "Malibu",
      state: "California",
      zipCode: "90265",
      country: "USA",
      latitude: 34.025922,
      longitude: -118.779757,
    },
    bedrooms: 5,
    bathrooms: 4,
    area: 350, // square meters
    propertyType: "house",
    listingType: "sale",
    images: [
      {
        id: "img1",
        url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1475&q=80",
        alt: "Front view of luxury villa",
        isPrimary: true
      },
      {
        id: "img2",
        url: "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
        alt: "Swimming pool"
      },
      {
        id: "img3",
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        alt: "Living room with ocean view"
      }
    ],
    amenities: [
      { id: "a1", name: "Swimming Pool", icon: "pool" },
      { id: "a2", name: "Beach Access", icon: "beach" },
      { id: "a3", name: "Garden", icon: "garden" },
      { id: "a4", name: "Air Conditioning", icon: "ac" },
      { id: "a5", name: "Home Security", icon: "security" }
    ],
    featured: true,
    isNew: false,
    yearBuilt: 2018,
    garage: 2,
    agentId: "1",
    createdAt: new Date("2023-01-15"),
    updatedAt: new Date("2023-02-20")
  },
  {
    id: "2",
    title: "Modern Downtown Apartment",
    description: "Stunning modern apartment in the heart of the city with open floor plan, high ceilings, and floor-to-ceiling windows offering spectacular city views.",
    price: 450000,
    address: {
      street: "456 Urban Avenue",
      city: "New York",
      state: "New York",
      zipCode: "10001",
      country: "USA",
      latitude: 40.7128,
      longitude: -74.0060,
    },
    bedrooms: 2,
    bathrooms: 2,
    area: 120, // square meters
    propertyType: "apartment",
    listingType: "sale",
    images: [
      {
        id: "img4",
        url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        alt: "Modern apartment living room",
        isPrimary: true
      },
      {
        id: "img5",
        url: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        alt: "Kitchen view"
      },
      {
        id: "img6",
        url: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        alt: "Bathroom"
      }
    ],
    amenities: [
      { id: "a6", name: "Elevator", icon: "elevator" },
      { id: "a7", name: "Gym", icon: "gym" },
      { id: "a8", name: "Parking", icon: "parking" },
      { id: "a9", name: "Doorman", icon: "doorman" }
    ],
    featured: false,
    isNew: true,
    yearBuilt: 2021,
    garage: 1,
    agentId: "2",
    createdAt: new Date("2023-03-10"),
    updatedAt: new Date("2023-03-10")
  },
  {
    id: "3",
    title: "Charming Suburban Home",
    description: "Beautiful family home in a quiet suburban neighborhood with a large backyard, updated kitchen, and finished basement.",
    price: 550000,
    address: {
      street: "789 Maple Street",
      city: "Chicago",
      state: "Illinois",
      zipCode: "60007",
      country: "USA",
      latitude: 41.8781,
      longitude: -87.6298,
    },
    bedrooms: 4,
    bathrooms: 3,
    area: 220, // square meters
    propertyType: "house",
    listingType: "sale",
    images: [
      {
        id: "img7",
        url: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        alt: "Suburban home exterior",
        isPrimary: true
      },
      {
        id: "img8",
        url: "https://images.unsplash.com/photo-1560184897-ae75f418493e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        alt: "Backyard with patio"
      },
      {
        id: "img9",
        url: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        alt: "Kitchen"
      }
    ],
    amenities: [
      { id: "a10", name: "Finished Basement", icon: "basement" },
      { id: "a11", name: "Backyard", icon: "backyard" },
      { id: "a12", name: "Fireplace", icon: "fireplace" },
      { id: "a13", name: "Central Heating", icon: "heating" }
    ],
    featured: true,
    isNew: false,
    yearBuilt: 2010,
    garage: 2,
    agentId: "3",
    createdAt: new Date("2023-02-05"),
    updatedAt: new Date("2023-02-28")
  },
  {
    id: "4",
    title: "Luxury Penthouse with Rooftop Terrace",
    description: "Exclusive penthouse apartment with a private rooftop terrace offering 360-degree views of the city skyline.",
    price: 1800000,
    address: {
      street: "101 Skyline Blvd",
      city: "Miami",
      state: "Florida",
      zipCode: "33101",
      country: "USA",
      latitude: 25.7617,
      longitude: -80.1918,
    },
    bedrooms: 3,
    bathrooms: 3.5,
    area: 280, // square meters
    propertyType: "apartment",
    listingType: "sale",
    images: [
      {
        id: "img10",
        url: "https://images.unsplash.com/photo-1567684014761-b65e2e59b9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        alt: "Penthouse living area",
        isPrimary: true
      },
      {
        id: "img11",
        url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
        alt: "Rooftop terrace with city view"
      },
      {
        id: "img12",
        url: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        alt: "Master bedroom"
      }
    ],
    amenities: [
      { id: "a14", name: "Private Rooftop", icon: "rooftop" },
      { id: "a15", name: "Floor-to-ceiling Windows", icon: "windows" },
      { id: "a16", name: "Smart Home System", icon: "smart" },
      { id: "a17", name: "Wine Cellar", icon: "wine" },
      { id: "a18", name: "Private Elevator", icon: "elevator" }
    ],
    featured: true,
    isNew: true,
    yearBuilt: 2022,
    garage: 2,
    agentId: "1",
    createdAt: new Date("2023-03-01"),
    updatedAt: new Date("2023-03-15")
  },
  {
    id: "5",
    title: "Cozy Studio in Historic District",
    description: "Charming studio apartment in the historic district, walking distance to cafes, restaurants, and cultural attractions.",
    price: 1500,
    previousPrice: 1700,
    address: {
      street: "202 Heritage Lane",
      city: "Boston",
      state: "Massachusetts",
      zipCode: "02108",
      country: "USA",
      latitude: 42.3601,
      longitude: -71.0589,
    },
    bedrooms: 0,
    bathrooms: 1,
    area: 45, // square meters
    propertyType: "apartment",
    listingType: "rent",
    images: [
      {
        id: "img13",
        url: "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        alt: "Studio apartment",
        isPrimary: true
      },
      {
        id: "img14",
        url: "https://images.unsplash.com/photo-1489171078254-c3365d6e359f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
        alt: "Kitchen area"
      },
      {
        id: "img15",
        url: "https://images.unsplash.com/photo-1586105251261-72a756497a11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1558&q=80",
        alt: "Bathroom"
      }
    ],
    amenities: [
      { id: "a19", name: "Hardwood Floors", icon: "floor" },
      { id: "a20", name: "Laundry in Building", icon: "laundry" },
      { id: "a21", name: "Cable Ready", icon: "cable" }
    ],
    featured: false,
    isNew: false,
    yearBuilt: 1910,
    garage: 0,
    agentId: "2",
    createdAt: new Date("2023-01-20"),
    updatedAt: new Date("2023-02-15")
  },
  {
    id: "6",
    title: "Modern Townhouse with Garage",
    description: "Contemporary townhouse with modern finishes, an attached garage, and a rooftop deck perfect for entertaining.",
    price: 750000,
    address: {
      street: "303 Urban Way",
      city: "Seattle",
      state: "Washington",
      zipCode: "98101",
      country: "USA",
      latitude: 47.6062,
      longitude: -122.3321,
    },
    bedrooms: 3,
    bathrooms: 2.5,
    area: 185, // square meters
    propertyType: "townhouse",
    listingType: "sale",
    images: [
      {
        id: "img16",
        url: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1484&q=80",
        alt: "Modern townhouse exterior",
        isPrimary: true
      },
      {
        id: "img17",
        url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        alt: "Living room"
      },
      {
        id: "img18",
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1453&q=80",
        alt: "Kitchen"
      }
    ],
    amenities: [
      { id: "a22", name: "Rooftop Deck", icon: "deck" },
      { id: "a23", name: "Garage", icon: "garage" },
      { id: "a24", name: "Energy Efficient", icon: "energy" },
      { id: "a25", name: "Washer/Dryer", icon: "washer" }
    ],
    featured: true,
    isNew: false,
    yearBuilt: 2019,
    garage: 1,
    agentId: "3",
    createdAt: new Date("2023-02-10"),
    updatedAt: new Date("2023-03-05")
  }
]; 