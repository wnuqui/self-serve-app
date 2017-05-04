# `self-serve-app`
A universal JavaScript app to enable anyone in the business to perform common tasks like:
  1. Lookup information about a marketplace
  2. Change seller fees
  3. Update users

## Technologies
  1. React
  2. Redux
  3. Yarn
  4. GraphQL (c/o Jesse)
  5. All the cool things

## Usage
  1. Create `.env` with `URL` and `AUTH`
  ```
  URL=localhost:3000
  AUTH=Basic Blabla
  ```
  2. Run application
  ```
  $ yarn install
  $ yarn start
  ```

## Contribute
  1. Add new task folder in `shared/components/Task`
  2. Update and connect to the rest of the app
    - `shared/actions/Task.js`
    - `shared/components/Task/index.js`
    - `shared/components/TaskSelector.js`
    - `shared/containers/Task.js`
    - `server.js`
  3. Send a PR
