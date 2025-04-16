
export interface User {
  id?: string; // Optional if using email as primary key
  email: string;
  passwordHash: string; // Renamed to clarify it's never plain text
  createdAt?: Date;
  updatedAt?: Date;
}

// Validation types
export type Email = `${string}@${string}.${string}`; // Basic email pattern
export type PasswordHash = string; // Special type for hashed passwords

// Strongly-typed version
export interface StrictUser {
  id: string;
  email: Email;
  passwordHash: PasswordHash;
  createdAt: Date;
  updatedAt: Date;
}