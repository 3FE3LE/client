export const isProduction = process.env.NODE_ENV === 'production';

export const SSS_URI = isProduction
  ? 'https://www.17suit.com'
  : 'http://localhost:3001';

export const OPT_URI = isProduction
  ? 'https://www.oneplantrip.com'
  : 'http://localhost:3002';

export const OPT_MENU_ITEMS = [
  {
    name: 'login',
    href: SSS_URI + '/login',
    protected: false,
  },
  {
    name: 'register',
    href: OPT_URI + '/register',
    protected: false,
  },
  {
    name: 'dashboard',
    href: '/dashboard',
    protected: true,
  },
  {
    name: 'profile',
    href: '/profile',
    protected: true,
  },
];

export const SSS_MENU_ITEMS = [
  {
    name: 'login',
    href: '/login',
    protected: false,
  },
  {
    name: 'register',
    href: '/register',
    protected: false,
  },
  {
    name: 'dashboard',
    href: '/dashboard',
    protected: true,
  },
  {
    name: 'profile',
    href: '/profile',
    protected: true,
  },
];
