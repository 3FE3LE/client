# 17Suit: Integrated App Ecosystem for Modern Life

17Suit is an innovative monorepo project showcasing a suite of Next.js 14 applications, a shared internal package, and a React Native app. This ecosystem includes:

1. **Core Suite**: Central authentication hub
2. **One Plan Trip**: Intuitive travel planning app
3. **Blog Web**: Ecosystem news and updates platform
4. **Shared Component Library**: Reusable UI elements and configurations
5. **Mobile App**: React Native extension of the 17Suit experience

Built with clean architecture principles and BEMIT-structured SCSS for styling, 17Suit demonstrates the power of integrated, cross-platform development. It offers a seamless user experience across web and mobile, unifying various aspects of digital life into one cohesive ecosystem.

Explore 17Suit - where technology meets everyday simplicity.

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `native`: a [react-native](https://reactnative.dev/) app built with [expo](https://docs.expo.dev/)
- `web`: a [Next.js](https://nextjs.org/) app to see post & news [blog.17Suite.com](https://blog.17Suite.com)
- `suite`: a [Next.js](https://nextjs.org/) app to authentication [www.17Suite.com](https://www.17Suite.com)
- `opt`: a [Next.js](https://nextjs.org/) app to create plans [opt.17Suite.com](https://opt.17Suite.com)
- `@repo/ui`: a stub [react-native](https://reactnative.dev/) component library shared by both `web` and `native` applications
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Key Technologies and Libraries

17Suit leverages a robust set of modern technologies and libraries:

- [Expo](https://docs.expo.dev/): Simplified native development for React Native
- [TypeScript](https://www.typescriptlang.org/): Static type checking for enhanced code quality
- [Prettier](https://prettier.io): Consistent code formatting across the project
- [React](https://reactjs.org/) & [React Native](https://reactnative.dev/): Building user interfaces for web and mobile
- [Next.js](https://nextjs.org/): React framework for production-grade web applications
- [NextAuth.js](https://next-auth.js.org/): Authentication for Next.js applications
- [React Hook Form](https://react-hook-form.com/): Efficient, flexible and extensible forms
- [Yup](https://github.com/jquense/yup): Schema validation for form data
- [Axios](https://axios-http.com/): Promise-based HTTP client for API requests
- [i18next](https://www.i18next.com/): Internationalization framework
- [React i18next](https://react.i18next.com/): i18next for React applications
- [React Hot Toast](https://react-hot-toast.com/): Lightweight toast notifications
- [React Tooltip](https://react-tooltip.com/): Customizable tooltip component
- [React Cookie](https://github.com/reactivestack/cookies): Cookie management for React applications
