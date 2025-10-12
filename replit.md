# 21 Days of Prayer Sales Page

## Overview

This is a single-page application for selling a spiritual eBook product called "21 Dias de Oração para Prosperidade" (21 Days of Prayer for Prosperity). The application is built as a sales/landing page designed to convert visitors into customers through emotional connection, clear value proposition, and trust-building elements. The page is written in Portuguese (Brazilian) and follows a warm, faith-based design approach inspired by successful spiritual product marketing.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18+ with TypeScript using Vite as the build tool and development server.

**Routing**: Client-side routing implemented using Wouter, a lightweight React router. The application currently has a single main route ("/") serving the sales page, with a 404 fallback for undefined routes.

**UI Component Library**: Built on shadcn/ui (New York style variant), which provides a comprehensive set of pre-built, accessible React components built on top of Radix UI primitives. Components are styled using Tailwind CSS with custom design tokens.

**State Management**: React Query (@tanstack/react-query) is configured for server state management, though the current implementation doesn't fetch external data. The query client is configured with disabled refetching to prevent unnecessary network calls.

**Styling System**: 
- Tailwind CSS with custom configuration extending the default theme
- Custom CSS variables for theming (light mode focus with warm gold color palette)
- Design system based on HSL color values for easy theme manipulation
- Custom utility classes for hover/active states (hover-elevate, active-elevate-2)
- Poppins font family loaded from Google Fonts

### Design System

**Color Palette**: Warm, trust-building colors centered around gold tones:
- Background: Cream/off-white (HSL: 48 100% 97%)
- Primary gold: Rich gold (HSL: 43 86% 38%)
- Accent colors: Various gold shades for gradients and highlights
- Text: Dark gray for primary, medium gray for secondary

**Component Structure**: Modular component design with reusable pieces:
- `Hero`: Main header with gradient background, product image, pricing, and CTA
- `ContentCard`: Reusable card component for content sections
- `TestimonialCard`: Testimonial display component
- `PriceDisplay`: Price comparison component (strikethrough old price, emphasized new price)
- `SalesFooter`: Simple copyright footer

### Backend Architecture

**Server Framework**: Express.js with TypeScript running on Node.js.

**Build Process**: 
- Client built with Vite
- Server bundled with esbuild for production
- Separate development and production modes

**Development Setup**: Custom Vite integration with Express middleware mode, allowing hot module replacement (HMR) during development while serving the application through Express.

**API Structure**: Currently minimal - the routes file is prepared for API endpoints (prefixed with `/api`) but no actual endpoints are implemented yet. The storage interface is defined with user CRUD operations using an in-memory storage implementation.

**Request Logging**: Custom middleware logs all API requests with timing information, truncating long responses to 80 characters for readability.

### Data Storage

**ORM**: Drizzle ORM configured for PostgreSQL with Neon Database serverless driver.

**Database Schema**: Basic user schema defined:
- `users` table with id (UUID), username (unique text), and password (text)
- Zod validation schemas generated from Drizzle schema

**Storage Interface**: Abstracted storage layer (`IStorage`) with in-memory implementation (`MemStorage`). This allows easy swapping between development (in-memory) and production (database) storage without changing business logic.

**Migration Strategy**: Drizzle Kit configured for schema migrations with migrations stored in `./migrations` directory.

### External Dependencies

**UI & Styling**:
- Radix UI components (accordion, dialog, dropdown, toast, etc.) for accessible primitives
- Tailwind CSS for utility-first styling
- class-variance-authority (CVA) for variant-based component styling
- clsx and tailwind-merge for conditional class merging

**Form Handling**:
- React Hook Form with Hookform Resolvers for form validation
- Zod for schema validation (integrated with Drizzle)

**Database**:
- Neon Database (@neondatabase/serverless) for PostgreSQL connection
- Drizzle ORM for type-safe database operations
- connect-pg-simple for potential session storage (currently unused)

**Development Tools**:
- Replit-specific plugins for development experience (cartographer, dev banner, runtime error overlay)
- TypeScript with strict mode enabled
- Path aliases configured (@/, @shared/, @assets/)

**Icons & Visuals**:
- Lucide React for icon components
- Custom hero image stored in attached_assets directory

**Date Handling**:
- date-fns for date manipulation (included but currently unused)

**UI Enhancement Libraries**:
- cmdk for command palette/search interfaces (included but not currently used)
- embla-carousel-react for carousels (included but not currently used)
- vaul for drawer components (included but not currently used)
- input-otp for OTP input fields (included but not currently used)
- react-day-picker for calendar/date picker (included but not currently used)
- react-resizable-panels for resizable layouts (included but not currently used)

### Build & Deployment

**Development**: `npm run dev` runs tsx with NODE_ENV=development, starting Express server with Vite middleware.

**Production Build**: 
1. Vite builds client to `dist/public`
2. esbuild bundles server to `dist/index.js`

**Production Start**: `npm start` runs the bundled server with NODE_ENV=production.

**Type Checking**: `npm run check` runs TypeScript compiler in no-emit mode for type validation.

**Database Operations**: `npm run db:push` executes Drizzle Kit schema push to sync database.