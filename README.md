# Planthor_ClientFrontEndWebApp

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Planthor_Planthor_ClientFrontEndWebApp&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Planthor_Planthor_ClientFrontEndWebApp)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=Planthor_Planthor_ClientFrontEndWebApp&metric=bugs)](https://sonarcloud.io/summary/new_code?id=Planthor_Planthor_ClientFrontEndWebApp)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=Planthor_Planthor_ClientFrontEndWebApp&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=Planthor_Planthor_ClientFrontEndWebApp)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=Planthor_Planthor_ClientFrontEndWebApp&metric=coverage)](https://sonarcloud.io/summary/new_code?id=Planthor_Planthor_ClientFrontEndWebApp)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=Planthor_Planthor_ClientFrontEndWebApp&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=Planthor_Planthor_ClientFrontEndWebApp)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=Planthor_Planthor_ClientFrontEndWebApp&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=Planthor_Planthor_ClientFrontEndWebApp)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=Planthor_Planthor_ClientFrontEndWebApp&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=Planthor_Planthor_ClientFrontEndWebApp)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=Planthor_Planthor_ClientFrontEndWebApp&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=Planthor_Planthor_ClientFrontEndWebApp)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=Planthor_Planthor_ClientFrontEndWebApp&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=Planthor_Planthor_ClientFrontEndWebApp)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=Planthor_Planthor_ClientFrontEndWebApp&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=Planthor_Planthor_ClientFrontEndWebApp)
[![Svelte CI](https://github.com/Planthor/PlanthorWebApp/actions/workflows/svetle-ci.yml/badge.svg?branch=main)](https://github.com/Planthor/PlanthorWebApp/actions/workflows/svetle-ci.yml)

## create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.


## Work with Identity Server

- For run with docker-compose
- Generate self-certificates from ./infrastructure/certificates.
- Use Docker compose file in ./infrastructure folder.
- For seeding data base need to `exec` to Identity container execute 

```bash
dotnet Planthor.IdentityServerAspNetIdentity.dll /seed  
```