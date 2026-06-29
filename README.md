# React + TypeScript + Vite + Vitest + jsdom + React Testing Library

This is an application developed to demonstrate technical proficiency in building and testing a React application.

## How to run it?

- Run `pnpm dev` to run the application.

## How to test it?

- Run `pnpm vitest` to run the unit tests.

## Aplication stack

### pnpm

- I choose `pnpm` as the package manager because its fast and disk-efficient. Instead of duplication dependencies in every project's `node_modules` folder, it downloads packages to a single global store and creates hard links to them.

### Vite

- `Vite` is a fast frontend build tool that makes the development environment very fast and optimize the code for production.

### React + Typescritp

- I didn't choose it, it's the required lib of the challenge. But it's curently my main stack so I can talk a little bit about it.
  `React` is one of the most used technologies of the world, it's very popular because of its ecosystem(community, libraries, tutorials and job opportunities), and versatility on creating applications as SPA's.
- Talking about `Typescript`, it's an open-source, statically typed superset of `JavaScript` developed by Microsoft that makes our loved `JavaScript` get typed strongly improving the code development experience.

### Vitest + jsdom + React Testing Library

- `Vitest` was created to make testing just work for `Vite` apps. By building on top of `Vite`, `Vitest` natively understands your `Vite` config and is able to reuse the same resolve and transform pipelines.
- To simulate a browser and create an environment to test the application I choose `jsdom`, that is a library recommended by the `vitest` documentation.
- Testing `JavaScript` programs in simulated environments such as `jsdom` or `happy-dom` has simplified the test setup and provided an easy-to-use API, making them suitable for many projects and increasing confidence in test results.
- The last one but no less important, `React Testing Library` that was not a choice as well but its the most complete and common tool for testing `React` applications, providing tons of functions for manipulate and get `TSX` elements.
