# Module Federation Test Runtime

This is a pnpm workspace containing various Module Federation implementations.

## Setup

```bash
# Install dependencies for all packages
pnpm install
```

## Development

To run the development servers for all packages:

```bash
pnpm dev
```

## Building

To build all packages:

```bash
pnpm build
```

## Individual Package Commands

You can also run commands for specific packages:

```bash
# Run dev for a specific package
pnpm --filter <package-name> dev

# Build a specific package
pnpm --filter <package-name> build
```

## Workspace Structure

- `vite-remote`: Remote application built with Vite
- `vue-cli-host`: Host application built with Vue CLI
- `rspack-remote`: Remote application built with Rspack 