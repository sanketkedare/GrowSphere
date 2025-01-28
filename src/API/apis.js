// Main API Endpoint
export const mainAPI = import.meta.env.VITE_APP_API;
// For User
export const register = `${mainAPI}/user/register`;
export const profile = `${mainAPI}/user/profile`;
export const validate_password = `${mainAPI}/validate-password`
export const posts = `${mainAPI}/posts/`;
export const community = `${mainAPI}/community/`

// For GrowSphere
export const company = `${mainAPI}/company/`;
export const invester = `${mainAPI}/invester/`;
export const employee = `${mainAPI}/employee/`;
export const investments = `${mainAPI}/investments/`

// Search
export const search = `${mainAPI}/search/`

