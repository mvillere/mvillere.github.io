# Dr3am Labs Cloud

## Overview

Dr3am Labs Cloud is an internal backend platform built to power NFT minting microsites and generative art projects.
It serves as a managed infrastructure layer — providing instant reveal, metadata APIs, asset delivery, and project
coordination — in cases where a fully on-chain or Art Blocks Engine approach would be too limiting.

**Status:** Internal / not yet open source
**Used by:** Cosmic Bloom by Leo Villareal (and others)

---

## Why It Exists

For generative art projects that require complex live rendering, artist curation, or multi-stage reveals, standard
platforms like Art Blocks Engine impose constraints. Dr3am Labs provides the flexibility of a custom backend while
preserving IPFS archival guarantees for the final assets.

---

## Service Architecture

- **Dual Service App Engine Architecture:** Default service (static content) + API service (RESTful endpoints)
- **Environment Variable:** `APP_ENGINE_MODE` differentiates service behavior (`api` vs `default`)
- **Domain Routing:** Custom `dispatch.yaml` routes `api.dr3amlabs.xyz/*` to the API service

---

## Technology Stack

| Layer | Technology |
|---|---|
| Runtime | Node.js 22+ with TypeScript |
| Web Framework | Fastify (plugin-based architecture) |
| Testing | Mocha + Chai + Supertest |
| Code Quality | Prettier, TypeScript strict mode |
| Cloud Platform | Google Cloud App Engine |
| Database | Firebase Firestore (multiple project databases) |
| Storage | Google Cloud Storage |

---

## Portfolio Nav / Site Placement

**Decision (2026-02-26):** Dr3am Labs Cloud moves to a new **Technology** nav tab alongside Testarossa and
Shakespeare. These are the platform-level things we built — frameworks, tools, and services that power multiple
projects — distinct from Open Source repos (which are publicly released community libraries).

### Proposed nav structure

```
About
Skills
─────
Projects
Open Source      ← publicly released libs and tools (nftc-contracts, Gas Refunder, etc.)
Technology       ← internal/proprietary platforms and frameworks (Testarossa, Shakespeare, Dr3am Labs)
─────
Content
Personal
```

### Open question

Dr3am Labs Cloud is not currently open source. It could be:
1. Documented here with "private / internal" status (simplest)
2. Open-sourced at some point and moved to Open Source tab
3. Given a dedicated page if the platform grows to warrant it

For now, treating it as a Technology entry (card in the Technology tab) is the right call.
