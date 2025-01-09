// Main API Endpoint
export const mainAPI = import.meta.env.VITE_APP_API;
// For User
export const register = `${mainAPI}/user/register`;
export const profile = `${mainAPI}/user/profile`; // Append user ID for a specific profile

// For GrowSphere
export const company = `${mainAPI}/company`;
