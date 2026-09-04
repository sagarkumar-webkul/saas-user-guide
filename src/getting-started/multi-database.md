# Multiple Databases

In the **multiple databases** variant of the SaaS module, every tenant gets its **own dedicated database**. Nothing is shared between merchants at the data level — each store's tables live in a database of its own.

::: info What you'll learn
- How a database is created for each tenant
- When this variant is the right choice
- What it means for setup, backups, and upgrades
:::

## How it works

<svg viewBox="0 0 688 344" role="img" aria-label="A separate database for each tenant" style="width:100%;height:auto;font-family:var(--vp-font-family-base)">
<title>A separate database for each tenant</title><defs><marker id="arrow-multi" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--vp-c-text-3)"/></marker></defs>
<rect x="16" y="16" width="152" height="48" rx="8" style="fill:var(--vp-c-bg-soft);stroke:var(--vp-c-divider);stroke-width:1"/>
<text x="92" y="45" text-anchor="middle" style="fill:var(--vp-c-text-1);font-size:12px;font-weight:600">Super admin panel</text>
<rect x="184" y="16" width="152" height="48" rx="8" style="fill:var(--vp-c-bg-soft);stroke:var(--vp-c-divider);stroke-width:1"/>
<text x="260" y="45" text-anchor="middle" style="fill:var(--vp-c-text-1);font-size:12px;font-weight:600">Tenant A store</text>
<rect x="352" y="16" width="152" height="48" rx="8" style="fill:var(--vp-c-bg-soft);stroke:var(--vp-c-divider);stroke-width:1"/>
<text x="428" y="45" text-anchor="middle" style="fill:var(--vp-c-text-1);font-size:12px;font-weight:600">Tenant B store</text>
<rect x="520" y="16" width="152" height="48" rx="8" style="fill:var(--vp-c-bg-soft);stroke:var(--vp-c-divider);stroke-width:1"/>
<text x="596" y="45" text-anchor="middle" style="fill:var(--vp-c-text-1);font-size:12px;font-weight:600">Tenant C store</text>
<line x1="92" y1="64" x2="92" y2="100" style="stroke:var(--vp-c-text-3);stroke-width:1.2" marker-end="url(#arrow-multi)"/>
<line x1="260" y1="64" x2="260" y2="100" style="stroke:var(--vp-c-text-3);stroke-width:1.2" marker-end="url(#arrow-multi)"/>
<line x1="428" y1="64" x2="428" y2="100" style="stroke:var(--vp-c-text-3);stroke-width:1.2" marker-end="url(#arrow-multi)"/>
<line x1="596" y1="64" x2="596" y2="100" style="stroke:var(--vp-c-text-3);stroke-width:1.2" marker-end="url(#arrow-multi)"/>
<rect x="16" y="104" width="656" height="56" rx="8" style="fill:var(--vp-c-brand-soft);stroke:var(--vp-c-brand-1);stroke-width:1"/>
<text x="344" y="128" text-anchor="middle" style="fill:var(--vp-c-text-1);font-size:13px;font-weight:600">Bagisto SaaS platform</text>
<text x="344" y="147" text-anchor="middle" style="fill:var(--vp-c-text-2);font-size:11px">detects the tenant from the domain and switches the database connection</text>
<line x1="92" y1="160" x2="92" y2="194" style="stroke:var(--vp-c-text-3);stroke-width:1.2" marker-end="url(#arrow-multi)"/>
<line x1="260" y1="160" x2="260" y2="194" style="stroke:var(--vp-c-text-3);stroke-width:1.2" marker-end="url(#arrow-multi)"/>
<line x1="428" y1="160" x2="428" y2="194" style="stroke:var(--vp-c-text-3);stroke-width:1.2" marker-end="url(#arrow-multi)"/>
<line x1="596" y1="160" x2="596" y2="194" style="stroke:var(--vp-c-text-3);stroke-width:1.2" marker-end="url(#arrow-multi)"/>
<path d="M 16 214 L 16 312 A 76.0 13 0 0 0 168 312 L 168 214" style="fill:var(--vp-c-bg-soft);stroke:var(--vp-c-brand-1);stroke-width:1.5"/><ellipse cx="92.0" cy="214" rx="76.0" ry="13" style="fill:var(--vp-c-bg-soft);stroke:var(--vp-c-brand-1);stroke-width:1.5"/>
<text x="92" y="248" text-anchor="middle" style="fill:var(--vp-c-text-1);font-size:12px;font-weight:600">Central database</text>
<text x="92" y="268" text-anchor="middle" style="fill:var(--vp-c-text-2);font-size:11px">tenants · plans</text>
<text x="92" y="284" text-anchor="middle" style="fill:var(--vp-c-text-2);font-size:11px">invoices · settings</text>
<path d="M 184 214 L 184 312 A 76.0 13 0 0 0 336 312 L 336 214" style="fill:var(--vp-c-bg-soft);stroke:var(--vp-c-brand-1);stroke-width:1.5"/><ellipse cx="260.0" cy="214" rx="76.0" ry="13" style="fill:var(--vp-c-bg-soft);stroke:var(--vp-c-brand-1);stroke-width:1.5"/>
<text x="260" y="248" text-anchor="middle" style="fill:var(--vp-c-text-1);font-size:12px;font-weight:600">Tenant A database</text>
<text x="260" y="268" text-anchor="middle" style="fill:var(--vp-c-text-2);font-size:11px">products · orders</text>
<text x="260" y="284" text-anchor="middle" style="fill:var(--vp-c-text-2);font-size:11px">customers</text>
<path d="M 352 214 L 352 312 A 76.0 13 0 0 0 504 312 L 504 214" style="fill:var(--vp-c-bg-soft);stroke:var(--vp-c-brand-1);stroke-width:1.5"/><ellipse cx="428.0" cy="214" rx="76.0" ry="13" style="fill:var(--vp-c-bg-soft);stroke:var(--vp-c-brand-1);stroke-width:1.5"/>
<text x="428" y="248" text-anchor="middle" style="fill:var(--vp-c-text-1);font-size:12px;font-weight:600">Tenant B database</text>
<text x="428" y="268" text-anchor="middle" style="fill:var(--vp-c-text-2);font-size:11px">products · orders</text>
<text x="428" y="284" text-anchor="middle" style="fill:var(--vp-c-text-2);font-size:11px">customers</text>
<path d="M 520 214 L 520 312 A 76.0 13 0 0 0 672 312 L 672 214" style="fill:var(--vp-c-bg-soft);stroke:var(--vp-c-brand-1);stroke-width:1.5"/><ellipse cx="596.0" cy="214" rx="76.0" ry="13" style="fill:var(--vp-c-bg-soft);stroke:var(--vp-c-brand-1);stroke-width:1.5"/>
<text x="596" y="248" text-anchor="middle" style="fill:var(--vp-c-text-1);font-size:12px;font-weight:600">Tenant C database</text>
<text x="596" y="268" text-anchor="middle" style="fill:var(--vp-c-text-2);font-size:11px">products · orders</text>
<text x="596" y="284" text-anchor="middle" style="fill:var(--vp-c-text-2);font-size:11px">customers</text>
</svg>

- The platform keeps a **central database** for platform-level records — tenants, subscription plans, invoices, and super admin settings.
- When a merchant registers, a **new database is created and provisioned** for that tenant, with its own tables and seed data.
- On every request, the platform identifies the tenant from the domain and switches the connection to that tenant's database before serving the storefront or admin panel.
- A tenant's products, categories, orders, and customers never leave their own database.

## Advantages

- **Strongest isolation** — one tenant's data never shares tables with another's.
- **Per-tenant backup and restore** — a single store can be backed up, restored, exported, or cloned on its own.
- **Independent scaling** — a large tenant can be moved to its own database server without affecting anyone else.
- **Compliance friendly** — suits merchants with strict data-residency or data-separation requirements.
- **Contained risk** — a problem in one tenant's database does not touch the rest of the platform.

## Things to keep in mind

- Migrations and module upgrades run **per tenant**, so maintenance grows with the number of stores.
- Higher infrastructure cost — more databases to host, back up, and monitor.
- Registration takes slightly longer, since a database has to be created and seeded for the new tenant.
- The database user configured for the platform must have permission to create databases.

::: tip Best for
Platforms with fewer but larger tenants, or merchants that require strict data isolation, their own backups, or the ability to scale on dedicated infrastructure. For many smaller stores at a lower cost, use [Single Database](/getting-started/single-database) instead.
:::
