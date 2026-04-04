# GEMINI.md

## Project Overview

**Planthor Client FrontEnd WebApp** is a SvelteKit-powered web application for managing personal goals. It serves as the frontend client in the Planthor ecosystem, integrating with an Identity Server for authentication.

- **Framework:** SvelteKit (v2) with Svelte (v5)
- **Styling:** Tailwind CSS with PostCSS
- **Language:** TypeScript
- **State Management & Forms:** SvelteKit Superforms, Zod for validation
- **Authentication:** OAuth2/OIDC with PKCE (Proof Key for Code Exchange)
- **UI Components:** Modular component architecture, with UI primitives located in `src/lib/components/ui` (inspired by shadcn-svelte).
- **Testing:** Vitest for unit and component testing, JSDOM for environment.

## Project Structure

- `src/routes/`: SvelteKit's file-based routing.
  - `src/routes/api/auth/`: Authentication endpoints (login, callback, logout).
  - `src/routes/goals/`: Main goal management features.
- `src/lib/`: Shared logic and components.
  - `src/lib/components/`: Reusable Svelte components.
  - `src/lib/components/ui/`: Atomic UI primitives (Buttons, Cards, Inputs, etc.).
  - `src/lib/goals.ts`: Goal-related schemas (Zod) and mock database.
- `infrastructure/`: Docker and environment setup.
  - `infrastructure/compose.yaml`: Docker Compose for local development (including Identity Server integration).
  - `infrastructure/certificates/`: Scripts for generating development certificates.

## Building and Running

### Prerequisites
- Node.js and npm installed.
- (Optional) Docker for running the full Planthor stack.

### Key Commands

- **Development:** `npm run dev` starts the Vite development server.
- **Build:** 
  - `npm run build`: Standard build (defaults to Vercel adapter).
  - `npm run build:node`: Build using the Node.js adapter.
  - `npm run build:netlify`: Build using the Netlify adapter.
- **Testing:**
  - `npm run test`: Runs unit tests with Vitest.
  - `npm run test:ui`: Opens Vitest's interactive UI.
  - `npm run coverage`: Generates test coverage reports.
- **Linting:** `npm run lint` to run ESLint and automatically fix issues.
- **Type Check:** `npm run check` to run `svelte-check`.

### Authentication Setup
The application expects an Identity Server running (typically at `https://localhost:5001`). 
- Local development requires self-signed certificates (see `infrastructure/certificates`).
- Ensure `BASE_URL` is correctly set in your `.env` file for the redirect URI.

## Development Conventions

- **Aliases:** Use `$components` to reference `src/lib/components`.
- **Validation:** Define data schemas using **Zod** in `src/lib/` files.
- **Components:** Follow the modular structure for UI components in `src/lib/components/ui`. Use `index.ts` files within component directories to export related pieces.
- **Tests:** Place test files alongside the code they test (e.g., `ComponentName.test.ts` or `logic.test.ts`). Use `@testing-library/svelte` for component testing.
- **Environment Variables:** Use `$env/static/private` or `$env/static/public` for environment-specific configuration.
- **Git:** Adhere to conventional commit styles. Use `npm run release` to manage versions and changelogs.

## Deployment

The project is configured to be deployable on **Vercel**, **Netlify**, or as a standalone **Node.js** application. The adapter is selected at build time via the `SVELTE_ADAPTER` environment variable.
