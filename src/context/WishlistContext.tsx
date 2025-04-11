"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Property } from "@/types/property";
import { getFromLocalStorage, saveToLocalStorage } from "@/lib/clientStorage";

// Keys for local storage
const WISHLIST_STORAGE_KEY = "property-wishlist-ids";

// Context type definitions
interface WishlistContextType {
  wishlist: string[];
  addToWishlist: (propertyId: string) => void;
  removeFromWishlist: (propertyId: string) => void;
  isInWishlist: (propertyId: string) => boolean;
  clearWishlist: () => void;
}

// Create context with default values
const WishlistContext = createContext<WishlistContextType>({
  wishlist: [],
  addToWishlist: () => {},
  removeFromWishlist: () => {},
  isInWishlist: () => false,
  clearWishlist: () => {},
});

// Custom hook to use the wishlist context
export const useWishlist = () => useContext(WishlistContext);

// Props for the WishlistProvider component
interface WishlistProviderProps {
  children: ReactNode;
}

// WishlistProvider component
export function WishlistProvider({ children }: WishlistProviderProps) {
  // State to store the wishlist
  const [wishlist, setWishlist] = useState<string[]>([]);
  
  // Load wishlist from localStorage on mount
  useEffect(() => {
    const savedWishlist = getFromLocalStorage<string[]>(WISHLIST_STORAGE_KEY, []);
    setWishlist(savedWishlist);
  }, []);
  
  // Save wishlist to localStorage when it changes
  useEffect(() => {
    if (wishlist.length > 0 || wishlist.length === 0) {
      saveToLocalStorage(WISHLIST_STORAGE_KEY, wishlist);
    }
  }, [wishlist]);
  
  // Add a property to the wishlist
  const addToWishlist = (propertyId: string) => {
    if (!wishlist.includes(propertyId)) {
      setWishlist((prev) => [...prev, propertyId]);
    }
  };
  
  // Remove a property from the wishlist
  const removeFromWishlist = (propertyId: string) => {
    setWishlist((prev) => prev.filter((id) => id !== propertyId));
  };
  
  // Check if a property is in the wishlist
  const isInWishlist = (propertyId: string) => {
    return wishlist.includes(propertyId);
  };
  
  // Clear the wishlist
  const clearWishlist = () => {
    setWishlist([]);
  };
  
  // Context value
  const value = {
    wishlist,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    clearWishlist,
  };
  
  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
} 