# Architecture overview

## Current foundation

Decidr separates applications, public client contracts, neutral domain contracts, and ecosystem integrations. The current code is intentionally small: only the SDK registration facade, a few type boundaries, application entry points, and a health endpoint have behavior.

## Package responsibilities

| Area                          | Responsibility                      | Current scope                                              |
| ----------------------------- | ----------------------------------- | ---------------------------------------------------------- |
| `apps/web`                    | Developer-facing studio             | Static landing page                                        |
| `apps/api`                    | Control-plane HTTP API              | NestJS health endpoint                                     |
| `apps/runner`                 | Future isolated execution runtime   | HTTP bootstrap and health response; no execution           |
| `packages/sdk`                | Developer-facing registration API   | Forwards typed registrations to a caller-supplied registry |
| `packages/core`               | Framework-independent domain types  | Capability kinds, registration shape, registry interface   |
| `packages/adapters/node`      | Node application integration        | Compile-safe capability option boundary                    |
| `packages/adapters/langgraph` | Graph workflow integration          | Compile-safe type boundary, no LangGraph dependency        |
| `packages/adapters/evm`       | EVM contracts and event integration | Compile-safe type boundary, no chain client                |
| `packages/database`           | Persistence and schema ownership    | Configuration boundary only                                |
| `packages/shared`             | Reusable low-level utilities        | One minimal type utility; extend only with real consumers  |

## Dependency direction

```text
Node / LangGraph / EVM adapters ─┐
SDK ─────────────────────────────┼──> core
                                 └──> (neutral contracts only)
Applications ──> only packages they actually consume
Database boundary ──> selected persistence implementation (future)
```

Core does not import adapters, apps, or framework libraries. The SDK does not depend on the web application. Apps should consume SDK or adapters only when they need them. This allows future Spring Boot, other backend frameworks, and additional chain ecosystems to integrate at their own boundaries.

## Intended execution architecture

The API is intended to own project metadata, capability registrations, and coordination. The runner is intended to host isolated execution in the future. No execution protocol, sandbox, or trust model exists yet; those must be designed and threat-modeled before any user-provided code is accepted. The web studio will be a client of control-plane APIs as those contracts are implemented.

Persistence technology and schema are intentionally undecided. The database package owns that future choice; it should not leak database-specific objects into core contracts.

## Configuration

Environment variables are read at application boundaries. Local hosts bind to loopback by default. `.env.example` lists supported local ports and leaves database credentials unset. Do not store secrets in source control.
