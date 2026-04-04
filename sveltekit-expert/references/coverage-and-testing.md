# Coverage and Testing Guidelines

As a SvelteKit expert, ensuring structural robustness via tests and strict coverage is essential. We use **Vitest** for our test runner and the **v8** provider for code coverage.

## Project Testing Standards

1. **Test Proximity**: Test files must reside alongside the code they test (e.g., `utils.ts` -> `utils.test.ts`, `Header.svelte` -> `Header.test.ts`).
2. **UI Component Testing**:
   - Use `@testing-library/svelte` for all rendering and interactions.
   - Utilize the local `src/lib/test-utils.ts` helper to guarantee consistency and cut down on boilerplate when testing sub-components.
3. **Vitest DOM Environment**:
   - We run tests under the `jsdom` environment. Setup files (`setupTest.ts`) mock core `$app/*` modules to provide navigation, stores, and environment variables seamlessly.

## Coverage Strategy 

We enforce a strict **80% global threshold** on `statements`, `branches`, `functions`, and `lines`. This threshold acts as an automated CI/CD safeguard.

### Included Scope

Only the explicit application logic located in `src/lib/**` should be included in coverage targets. Route components (`src/routes/**`) often rely heavily on E2E testing (e.g., via Playwright) rather than Vitest unit testing, so they are intentionally excluded to keep the unit test metrics precise and actionable.

### Explicit Exclusions

The following patterns are omitted from the Vitest coverage report via `vite.config.ts`:

- **Generated/Vendor UI Primitives**: Complex external primitives embedded in `src/lib/components/ui/` (such as `calendar`, `popover`, `select`, `sonner`, `textarea`, `form`, `input`, and `label`). These are standard *shadcn-svelte* elements which have their own upstream tests. Covering them locally adds false negatives.
- **Barrel Index Files**: Files like `**/ui/*/index.ts` that strictly re-export modules. 
- **Infrastructure**: Configs (`vite.config.ts`, `tailwind.config.js`), environment setups (`setupTest.ts`), and static assets (`src/lib/images/**`).
- **Test Utilities**: The internal `src/lib/test-utils.ts` itself.

### Coverage Execution

To generate or verify coverage:

```bash
# Run tests and generate the coverage report
npm run coverage

# Output format
# The report will output to the console and generate HTML/lcov summaries inside the `/coverage` directory.
```
