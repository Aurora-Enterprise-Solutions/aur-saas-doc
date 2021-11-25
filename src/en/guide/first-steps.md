# First steps

## Architecture

As a first instance and before starting with the cloning of projects, it is extremely important to be clear about how the system is set up. Knowing the applications and how they interact with each other is key to be able to develop conscientiously from the point of view in which we find ourselves.

[comment]: <> (TODO: needs to be completed with information and a diagram.)

## Cloning repositories

In order to start working, the projects with which we are going to interact must be cloned.

- **aur-saas**: main application built based on the [Nuxt.js](https://nuxtjs.org/) framework.
- **aur-design**: component library to build the system UI. It is built with the [Vue.js](https://vuejs.org/) framework.
- **aur-saas-api**: API Rest and GraphQL queries that have the business logic. It is built with the [NestJS](https://nestjs.com/) framework.
- **aur-saas-infra**: repository that stores all the scripts for raising the infrastructure.
- **aur-saas-doc**: documentation generated with [VuePress](https://vuepress.vuejs.org/).

::: warning Important
In order to clone the repositories you must have access to the organization [Aurora Enterprise Solutions GitHub](https://github.com/Aurora-Enterprise-Solutions).
:::