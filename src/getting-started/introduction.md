# Introduction

[Multi-Tenant eCommerce](https://bagisto.com/en/laravel-multi-tenant-saas/) in Bagisto lets you run a SaaS platform where many merchants create and manage their own individual stores under a single system. Each merchant — a **tenant** — gets a dedicated storefront and admin panel, while you, the platform owner, manage the infrastructure, subscription plans, and revenue from one place.

::: info What you'll learn
- Who the two audiences of the platform are
- What a super admin controls and what a tenant controls
- Where to go next for each task
:::

## Two panels, two audiences

The platform is run from two separate panels.

- The **Super Admin panel** is where you oversee every tenant, subscription plan, and platform-wide setting.
- The **Tenant Admin panel** is a Bagisto-like backend each merchant uses to run their own store.

<ImagePopup src="/images/introduction/multi-tenant.webp" alt="Multi-tenant SaaS platform overview" />

## What the super admin does

The super admin is the top authority on the platform. From the Super Admin panel you can:

- **Manage tenants** — register merchants, view their store insights, edit them, and sign in as any tenant. See [Tenant Management](/super-admin/tenant-management).
- **Sell subscriptions** — create plans, track purchased plans, and review invoices. See [Plan Management](/subscriptions/plan-management).
- **Run the platform** — manage agents and roles, currencies, exchange rates, webhooks, and themes. See [Agents & Roles](/settings/agents-and-roles).
- **Publish content** — manage CMS pages and platform-wide configuration. See [CMS Pages](/content/cms-pages).

## What a tenant does

A tenant signs up, gets a storefront and admin panel provisioned automatically, and starts selling. A merchant manages products, categories, orders, and customers, chooses a storefront theme allowed by their plan, and reviews their own subscription and invoices. See [Registration & Sign-in](/tenants/registration).

::: tip
New to the platform? If you run the SaaS, start with the [Super Admin Dashboard](/super-admin/dashboard). If you're a merchant setting up a store, start with [Registration & Sign-in](/tenants/registration).
:::
