# Rushstack / Cypress React Unit Test Integration

This repo exists in order to reproduce an issue where `cypress-react-unit-test`
breaks when being used within the `Rush`/`Heft`/`TS`/`webpack` ecosystem.

## Initial Set-up

1. Ensure you have node 12 installed. 
2. Ensure you have `rush` installed if not install it [globally](https://rushjs.io/pages/intro/get_started/) 
```bash
npm install -g @microsoft/rush
```
3. Install the repo's dependencies by with rush (we do not use `npm install` or
   `yarn add` on a rush managed repo)
```bash
rush update
```

## Running the unit tests (Cypress)
1. Ensure you completed the steps under "Initial Set-up"
2. Build one of the packages with: 
```bash
rush build --to component-1
```
3. Run cypress with 
```bash
npm run test:open
```

## Running a dev server 
1. Ensure you completed the steps under "Initial Set-up"
2. Build one of the packages with: 
```bash
rush build --to component-1
```
3. Move in the project 
```bash
cd components/component-1
```
4. Start the dev server 
```bash
npm run start
```