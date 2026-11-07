# Decidr

Decidr is an open-source developer platform for exploring, executing, testing, and observing backend services, AI workflows, and smart contracts.

## Vision and status

Backend capabilities are often fragmented across application frameworks, workflow tools, and blockchain environments. Decidr aims to give developers a consistent way to discover and work with those capabilities while allowing each ecosystem to keep its own integration boundary.

This repository is an **early foundation**. It contains workspace tooling, minimal application entry points, and initial package contracts. It does not yet provide authentication, persistence, service discovery, execution, workflow orchestration, or blockchain indexing.

Longer term, Decidr is intended to support capability registration and instrumentation, interactive exploration and testing, coordinated execution, and observability across services, AI workflows, and smart contracts. Integrations for Spring Boot and other runtimes or chains can be added without making the core SDK depend on a specific framework.

## Architecture

```text
Applications: web studio | control-plane API | isolated runner
                         ↓
SDK and ecosystem adapters → framework-independent core
                         ↓
                 database boundary
```

The arrows represent intended dependency direction, not implemented runtime calls. See [Architecture](docs/architecture/overview.md) for package responsibilities and future execution boundaries.

## Repository structure

```text
apps/                  Next.js web studio, NestJS API, runner bootstrap
packages/core/          Framework-independent domain contracts
packages/sdk/           Public capability registration facade
packages/adapters/      Node, LangGraph, and EVM integration boundaries
packages/database/      Persistence configuration boundary
packages/shared/        Small cross-package utilities
infrastructure/docker/  Container infrastructure (currently empty)
docs/                   Architecture and contributor guidance
.github/                CI and contribution templates
```

## Technology

- pnpm workspaces and Turborepo
- TypeScript with strict checks and ESM package exports
- Next.js for the web studio and NestJS for the API
- Vitest for package-level tests
- Prettier and ESLint for formatting and lint checks

## Prerequisites

- Node.js 22 or newer
- pnpm 10 or newer (the repository is pinned to pnpm 12.15.0)

## Install and configure

```sh
corepack enable
pnpm install
cp .env.example .env
# Load the optional local settings into this shell before starting apps.
set -a && . ./.env && set +a
```

The example environment file documents local ports and loopback hosts. Source it into the shell as shown above before starting apps; no secrets or database credentials are required for the foundation. The API and runner validate their port values at startup; the web uses `WEB_PORT`.

## Development

Start all long-running application entry points:

```sh
pnpm dev
```

Web runs at `http://127.0.0.1:3000` (`PORT`), API health at `http://127.0.0.1:4000/health`, and runner health at `http://127.0.0.1:4100/health`. The runner does not execute submitted code; other routes return HTTP 501.

Run an application or package independently:

```sh
pnpm --filter @decidr/web dev
pnpm --filter @decidr/api dev
pnpm --filter @decidr/runner dev
pnpm --filter @decidr/sdk build
```

Root commands operate across workspaces:

```sh
pnpm format:check
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

## Add a package or adapter

Create the package under `packages/` (or `packages/adapters/<ecosystem>/` for an ecosystem integration), add it to the pnpm workspace through the existing glob, and define a package name, ESM export map, and standard scripts. Keep shared domain types in `@decidr/core`; adapters may depend on core, while core must not depend on adapters or application frameworks. Add only real consumers to `@decidr/shared`, and avoid coupling the SDK to the web application. Include focused tests for behavior that exists and document boundaries that remain future work.

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md) for local setup, conventions, testing, and the pull request process. Before proposing a new integration, describe the capability surface, ecosystem-specific needs, and how the integration can remain independent of core runtime dependencies.

## Roadmap

1. Stabilize core capability and registration contracts.
2. Decide persistence requirements and own the first database schema.
3. Add project metadata and registration endpoints to the API.
4. Develop explicit integration contracts for Node and graph workflows.
5. Design a threat model and isolation architecture before adding execution.
6. Add observability and further framework and chain integrations.

## License

No license has been established yet. Until one is selected, this repository does not grant permissions beyond applicable law. Contributions and redistribution terms should be clarified before public releases.
