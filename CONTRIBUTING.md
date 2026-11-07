# Contributing to Decidr

Thank you for helping shape the Decidr foundation. The repository is early; prefer small, explicit changes that strengthen a real boundary over speculative product behavior.

## Development setup

1. Install Node.js 22+ and pnpm 10+.
2. Run `corepack enable`, then `pnpm install` from the repository root.
3. Copy `.env.example` to `.env` if you want to customize local ports.
4. Start the applications with `pnpm dev` or run one with `pnpm --filter <workspace-name> dev`.
5. Run `pnpm format:check`, `pnpm lint`, `pnpm typecheck`, `pnpm test`, and `pnpm build` before opening a pull request.

The API health endpoint is `/health`. The runner only provides a bootstrap and health endpoint; arbitrary code execution is intentionally absent.

## Repository conventions

- Use TypeScript and ESM. Keep strict compiler settings enabled.
- Use kebab-case for package and directory names and `@decidr/<name>` workspace package names.
- Give packages explicit `exports` and keep dependencies pointed toward `@decidr/core`.
- Keep core framework-independent. Put framework, graph, and chain-specific types in adapters.
- Keep shared utilities small and add them only when more than one package needs them.
- Validate environment input at the process boundary. Never commit secrets or real `.env` files.
- Document present behavior separately from planned behavior.

## Branches and commits

Use descriptive branches such as `feat/node-adapter-contract`, `fix/api-health-port`, or `docs/architecture-boundaries`. Use conventional commit subjects where practical: `feat:`, `fix:`, `docs:`, `refactor:`, `test:`, `build:`, and `chore:`.

## Tests and pull requests

Add or update focused tests when behavior changes. Run formatting, lint, type checking, tests, and builds locally. Keep pull requests focused; explain the problem, the design choice, and any follow-up work. Link related issues, note any configuration changes, and include screenshots for visible web changes when useful.

Maintainers should review CI and request changes where contracts, security boundaries, or docs are unclear. Do not claim CI success until the workflow has completed successfully.

## Documentation

Update the README or architecture docs when a package boundary, setup step, command, or supported behavior changes. Do not describe planned functionality as implemented. New package entry points should explain their responsibility and what they deliberately do not implement yet.

## Proposing an integration

Open an issue describing the ecosystem, the capability to expose, the registration and instrumentation needs, and any external runtime dependency. Explain why the integration belongs in an adapter and which neutral concepts (if any) should be proposed for core. Consider how the same core contracts could support a different framework or chain.

## First contribution workflow

```sh
git switch -c docs/clarify-package-boundaries
# Make a focused change and update the relevant docs or tests.
pnpm format:check
pnpm lint
pnpm typecheck
pnpm test
pnpm build
git add <files>
git commit -m "docs: clarify package boundaries"
git push -u origin docs/clarify-package-boundaries
```

Then open a pull request using the repository template and summarize the change and verification performed.
