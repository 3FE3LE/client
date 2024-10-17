export const isProduction = process.env.NODE_ENV === 'production';

export const SSS_URI = isProduction
  ? 'https://www.17suit.com'
  : 'http://localhost:3001';

export const OPT_URI = isProduction
  ? 'https://www.oneplantrip.com'
  : 'http://localhost:3002';
