export const environment = {
  appName: import.meta.env.VITE_APP_NAME || 'CORTEX',
  appEnv: import.meta.env.VITE_APP_ENV || 'development',
  apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  isDev: import.meta.env.DEV,
  isProd: import.meta.env.PROD,
};
