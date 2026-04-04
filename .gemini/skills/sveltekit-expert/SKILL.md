---
name: sveltekit-expert
description: Expert guidance for SvelteKit projects using TypeScript and Vite. Use when building UI components, handling form validation with Superforms/Zod, or configuring Vite plugins.
---

# SvelteKit Expert

This skill provides expert patterns for building modern web applications with SvelteKit, TypeScript, and Vite.

## Core Workflows

### 1. Creating New Routes
- Use `src/routes/[name]/+page.svelte` for frontend components.
- Use `src/routes/[name]/+page.server.ts` for server-side logic (load/actions).
- Detailed patterns in [routing.md](references/routing.md).

### 2. Form Handling
- All forms should use **SvelteKit Superforms** and **Zod** for validation.
- Define schemas in `src/lib/`.
- Implementation guide in [forms.md](references/forms.md).

### 3. UI Components
- Follow the project's modular atomic UI pattern in `src/lib/components/ui/`.
- Use the `$components` alias for clean imports.
- Reusable patterns in [ui-components.md](references/ui-components.md).

### 4. TypeScript & Vite
- Ensure all components use `<script lang="ts">`.
- Use `vite-preprocess` for Svelte files.
- Configuration resides in `vite.config.ts` and `svelte.config.js`.

## Reference Materials
- [Routing Patterns](references/routing.md)
- [Form & Validation Patterns](references/forms.md)
- [UI Component Standards](references/ui-components.md)
