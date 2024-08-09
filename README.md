# Welcome to example app with TMDB search 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

# Get started

### What is needed to run the project?

#### Node.js

You need node.js installed. If you don't have it you can download it [here](https://nodejs.org/en).

#### Yarn

```bash
   npm install --global yarn
```

We will use yarn to manage packages. If you don't have it you can download it [here](https://nodejs.org/en).

#### Expo-cli

You need expo-cli installed. If you don't have it you can download it with:

```bash
   yarn global add expo-cli
```

#### Expo Go app

To run this project you need the [Expo Go app](https://expo.dev/go)

#### TMDB api key

In order to have the app fully functional you need to generate your api key for your [TMDB](https://www.themoviedb.org/) account. You can find it [here](https://www.themoviedb.org/settings/api) after registering.

When you successfully generate your API_KEY you need to replace 'YOUR_API_KEY' in network/axiosConfigsTMDB.ts with your personal key. You can do it manually or with prepared script using command:

```bash
   yarn replace-api-key <YOUR_API_KEY>
```

## With setup ready you are good to go :)

1. Install dependencies

   ```bash
   yarn install
   ```

2. Run the app

   ```bash
    yarn run [ios/android]
   ```
