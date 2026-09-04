# Single Database

In the **single database** variant of the SaaS module, every tenant on the platform shares **one database**. All merchants' records sit in the same tables and are separated by a tenant identifier, so each merchant only ever sees their own store data.

::: info What you'll learn
- How tenant data is separated inside one shared database
- When this variant is the right choice
- What it means for setup, backups, and upgrades
:::

## How it works

<svg viewBox="0 0 688 372" role="img" aria-label="Single shared database for all tenants" style="width:100%;height:auto;font-family:var(--vp-font-family-base)">
<title>Single shared database for all tenants</title><defs><marker id="arrow-single" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--vp-c-text-3)"/></marker></defs>
<rect x="16" y="16" width="152" height="48" rx="8" style="fill:var(--vp-c-bg-soft);stroke:var(--vp-c-divider);stroke-width:1"/>
<text x="92" y="45" text-anchor="middle" style="fill:var(--vp-c-text-1);font-size:12px;font-weight:600">Super admin panel</text>
<rect x="184" y="16" width="152" height="48" rx="8" style="fill:var(--vp-c-bg-soft);stroke:var(--vp-c-divider);stroke-width:1"/>
<text x="260" y="45" text-anchor="middle" style="fill:var(--vp-c-text-1);font-size:12px;font-weight:600">Tenant A store</text>
<rect x="352" y="16" width="152" height="48" rx="8" style="fill:var(--vp-c-bg-soft);stroke:var(--vp-c-divider);stroke-width:1"/>
<text x="428" y="45" text-anchor="middle" style="fill:var(--vp-c-text-1);font-size:12px;font-weight:600">Tenant B store</text>
<rect x="520" y="16" width="152" height="48" rx="8" style="fill:var(--vp-c-bg-soft);stroke:var(--vp-c-divider);stroke-width:1"/>
<text x="596" y="45" text-anchor="middle" style="fill:var(--vp-c-text-1);font-size:12px;font-weight:600">Tenant C store</text>
<line x1="92" y1="64" x2="92" y2="100" style="stroke:var(--vp-c-text-3);stroke-width:1.2" marker-end="url(#arrow-single)"/>
<line x1="260" y1="64" x2="260" y2="100" style="stroke:var(--vp-c-text-3);stroke-width:1.2" marker-end="url(#arrow-single)"/>
<line x1="428" y1="64" x2="428" y2="100" style="stroke:var(--vp-c-text-3);stroke-width:1.2" marker-end="url(#arrow-single)"/>
<line x1="596" y1="64" x2="596" y2="100" style="stroke:var(--vp-c-text-3);stroke-width:1.2" marker-end="url(#arrow-single)"/>
<rect x="16" y="104" width="656" height="56" rx="8" style="fill:var(--vp-c-brand-soft);stroke:var(--vp-c-brand-1);stroke-width:1"/>
<text x="344" y="128" text-anchor="middle" style="fill:var(--vp-c-text-1);font-size:13px;font-weight:600">Bagisto SaaS platform</text>
<text x="344" y="147" text-anchor="middle" style="fill:var(--vp-c-text-2);font-size:11px">detects the tenant from the domain and filters every query by tenant</text>
<line x1="344" y1="160" x2="344" y2="194" style="stroke:var(--vp-c-text-3);stroke-width:1.2" marker-end="url(#arrow-single)"/>
<path d="M 16 214 L 16 344 A 328.0 16 0 0 0 672 344 L 672 214" style="fill:var(--vp-c-bg-soft);stroke:var(--vp-c-brand-1);stroke-width:1.5"/><ellipse cx="344.0" cy="214" rx="328.0" ry="16" style="fill:var(--vp-c-bg-soft);stroke:var(--vp-c-brand-1);stroke-width:1.5"/>
<text x="344" y="248" text-anchor="middle" style="fill:var(--vp-c-text-1);font-size:13px;font-weight:600">One shared database</text>
<rect x="26" y="266" width="132" height="26" rx="13" style="fill:var(--vp-c-brand-soft);stroke:none"/>
<text x="92" y="283" text-anchor="middle" style="fill:var(--vp-c-text-2);font-size:11px">Platform data</text>
<rect x="194" y="266" width="132" height="26" rx="13" style="fill:var(--vp-c-brand-soft);stroke:none"/>
<text x="260" y="283" text-anchor="middle" style="fill:var(--vp-c-text-2);font-size:11px">Tenant A rows</text>
<rect x="362" y="266" width="132" height="26" rx="13" style="fill:var(--vp-c-brand-soft);stroke:none"/>
<text x="428" y="283" text-anchor="middle" style="fill:var(--vp-c-text-2);font-size:11px">Tenant B rows</text>
<rect x="530" y="266" width="132" height="26" rx="13" style="fill:var(--vp-c-brand-soft);stroke:none"/>
<text x="596" y="283" text-anchor="middle" style="fill:var(--vp-c-text-2);font-size:11px">Tenant C rows</text>
<text x="344" y="320" text-anchor="middle" style="fill:var(--vp-c-text-2);font-size:11px">same tables — every row carries its tenant id</text>
</svg>

- The platform runs on a single database connection for every tenant.
- Each record — products, categories, orders, customers — carries the tenant it belongs to.
- When a merchant opens their storefront or admin panel, the platform detects the tenant from the domain and automatically limits every query to that tenant's data.
- A new merchant is provisioned instantly: no new database is created, only their tenant record and store data.

## Advantages

- **Simple to set up and maintain** — one database to configure, migrate, back up, and monitor.
- **Lower infrastructure cost** — a single database server can host a large number of stores.
- **One-step upgrades** — migrations and module updates run once for the whole platform.
- **Fast onboarding** — tenants are ready to sell as soon as they register.
- **Platform-wide reporting** — the super admin's cross-tenant views (customers, products, orders) read from one place. See [Tenant Data](/super-admin/tenant-data).

## Things to keep in mind

- All tenants share the same database resources, so a very large store can affect others.
- Backing up or exporting a single tenant means extracting that tenant's rows rather than copying a whole database.
- Tenants cannot be moved onto their own database server individually.

::: tip Best for
A high volume of small and medium stores, where low cost and simple maintenance matter more than physical data separation. If tenants need strictly separated data or their own backups, use [Multiple Databases](/getting-started/multi-database) instead.
:::
