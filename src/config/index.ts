export default {
  BASE_URL:
    process.env.NODE_ENV === 'production'
      ? import.meta.env.VITE_BASE_URL
      : 'http://localhost:5000',
};
