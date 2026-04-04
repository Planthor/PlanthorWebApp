# Planthor Client FrontEnd WebApp

Planthor is a personal goal management system. This repository contains the SvelteKit-based frontend web application.

## 🚀 Features

- **Goal Management**: Create, view, update, and delete personal goals.
- **Form Validation**: Robust client and server-side validation using SvelteKit Superforms and Zod.
- **Modern UI**: Clean, responsive interface built with Tailwind CSS and modular UI components.
- **Authentication**: Integrated with OAuth2/OIDC for secure user sessions.

## 🛠️ Tech Stack

- **Framework**: [SvelteKit](https://kit.svelte.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Validation**: [Zod](https://zod.dev/) & [Superforms](https://superforms.rocks/)
- **Icons**: [Lucide Svelte](https://lucide.dev/guide/svelte)
- **Testing**: [Vitest](https://vitest.dev/)

## 🏃 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or pnpm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   Create a `.env` file in the root directory and add the necessary configuration (see `.env.example` if available).

### Running Locally

```bash
npm run dev
```

### Identity Server Integration

For full functionality including authentication, you need the Planthor Identity Server running.
1. Navigate to `infrastructure/`
2. Follow the instructions in `infrastructure/README.md` to set up development certificates and start the containers using Docker Compose.

## 🏗️ Project Structure

- `src/lib/components/ui/`: Atomic UI primitives.
- `src/lib/constants.ts`: Shared constants and configuration.
- `src/lib/goals.ts`: Goal schemas and mock database logic.
- `src/routes/`: Application pages and API endpoints.

## 🧪 Testing

```bash
npm run test        # Run unit tests
npm run coverage    # View test coverage
```

## 🚢 Deployment

The project supports multiple deployment targets via SvelteKit adapters:
- **Vercel**: `npm run build`
- **Node.js**: `npm run build:node`
- **Netlify**: `npm run build:netlify`
