
export function getApiBaseUrl(): string {
  const apiBaseUrl = process.env.API_BASE_URL;
  if (!apiBaseUrl) {
    console.error('API_BASE_URL is not configured in environment variables');
    throw new Error('API_BASE_URL is not configured');
  }

  try {
    new URL(apiBaseUrl);
    return apiBaseUrl;
  } catch (error) {
    console.error('Invalid API_BASE_URL format:', error);
    throw new Error('Invalid API_BASE_URL format');
  }
}
