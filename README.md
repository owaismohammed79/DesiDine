# 🍔 DesiDine - Food Delivery Application

A feature-rich, highly responsive food delivery web application replicating the core functionalities of platforms like Swiggy. It offers real-time restaurant listing, dynamic menus, robust state management for cart operations, and a seamless user experience.

## ✨ Key Features

- **Real-time Restaurant Listing & Search:** Browse restaurants with an optimized, debounced search functionality.
- **Dynamic Menus:** Accordion-style menu categories fetching live data.
- **Intelligent Global State:** Shopping cart operations (add, remove, clear, subtotal calculations) powered by Redux Toolkit.
- **Advanced Data Fetching & Caching:** Utilizes RTK Query for efficient API calls, request deduplication, and loading states.
- **Offline Detection:** Custom hooks to detect network status and alert the user when offline.
- **Performance Optimizations:** Code-splitting and lazy loading of components (e.g., About, RestaurantMenu) using React `Suspense`.
- **Shimmer UI:** Skeleton loading screens for a perceived performance boost while fetching data.
- **Higher-Order Components (HOC):** Dynamic UI label injection (e.g., Promoted Restaurant tags) using the HOC pattern.

## 🛠 Tech Stack

- **Frontend Library:** React 19 (Hooks, Suspense, Lazy Loading)
- **Routing:** React Router v7
- **State Management:** Redux Toolkit (RTK), RTK Query, React Context API
- **Styling:** Tailwind CSS v4
- **Bundler:** Parcel v2
- **Language:** TypeScript
- **Testing:** Jest, React Testing Library (RTL)
- **Animation:** Motion (Framer Motion)

## 🏗 Architecture Overview

The application follows a **Component-Based Architecture** with strict separation of concerns:

- **State Management Pattern:** Uses a hybrid approach. Global cart data and API caching are handled by Redux Toolkit / RTK Query, while localized user session data (like authentication mocks) is provided via the Context API.
- **Custom Hooks:** Business logic and side-effects are decoupled into custom hooks (`useDebounce`, `useOnlineStatus`) to keep components pure and focused on the UI.
- **Component Modularity:** Atomic design principles are used for smaller UI elements (`Shimmer`, `RestaurantCard`), combined into complex layout components (`Body`, `Header`).
- **HOC Pattern:** Reusable component logic is injected using Higher-Order Components (e.g., `withPromotedLabel`).

## 📂 Directory Structure

```text
├── src/
│   ├── __tests__/       # Jest/RTL unit and integration test suites
│   ├── components/      # Reusable React components (Header, Body, CartItems, etc.)
│   ├── context/         # React Context definitions (UserContext)
│   ├── hooks/           # Custom React hooks
│   ├── mocks/           # Mock JSON data for isolated testing
│   ├── store/           # Redux store configuration, slices, and RTK Query APIs
│   ├── types/           # TypeScript interfaces and type definitions
│   ├── App.tsx          # Root application layout and routing configuration
│   ├── index.html       # HTML template for Parcel bundler
│   ├── setupTests.ts    # Jest environment setup file
│   └── styles.css       # Global CSS and Tailwind CSS entry point
├── .npmrc               # NPM/pnpm configuration (hoisted node-linker)
├── .parcelrc            # Parcel bundler specific configuration
├── jest.config.cjs      # Jest test runner configuration
├── package.json         # Project metadata and dependencies
├── pnpm-workspace.yaml  # pnpm workspace definition
└── tsconfig.json        # TypeScript compiler options
```

## 📋 Prerequisites

- **Node.js**: v18.0.0 or higher
- **Package Manager**: `pnpm` is highly recommended (as defined in the workspace config)

## 🚀 Installation & Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd food-delivery-app
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start the development server**
   ```bash
   pnpm run start
   ```
   The application will be running at `http://localhost:1234`.

## 📜 Available Scripts

| Script          | Command               | Description                                                                                                |
| :-------------- | :-------------------- | :--------------------------------------------------------------------------------------------------------- |
| **Start**       | `pnpm run start`      | Spins up the Parcel development server with Hot Module Replacement (HMR).                                  |
| **Build**       | `pnpm run build`      | Bundles the application for production into the `dist/` directory and copies `_redirects` for SPA routing. |
| **Test**        | `pnpm run test`       | Executes the Jest test runner across the `__tests__` directory.                                            |
| **Watch Tests** | `pnpm run watch-test` | Runs the test suite in interactive watch mode for active TDD.                                              |

---

_Developed with ❤️ by Mohammed Owais._
