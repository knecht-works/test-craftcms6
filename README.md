<div align="center">

  <img src="https://knecht.works/styleguide/favicon/favicon.svg" alt="Knecht" width="112" height="112">

# test-craftcms6

<p>
  <img src="https://img.shields.io/badge/Craft%20CMS-6-e5422b?logo=craftcms&logoColor=white" alt="Craft CMS 6">
  <img src="https://img.shields.io/badge/Laravel-13-FF2D20?logo=laravel&logoColor=white" alt="Laravel 13">
  <img src="https://img.shields.io/badge/PHP-8.5-777BB4?logo=php&logoColor=white" alt="PHP 8.5">
  <img src="https://img.shields.io/badge/DDEV-nginx--fpm-02A8E2?logo=docker&logoColor=white" alt="DDEV · nginx-fpm">
  <img src="https://img.shields.io/badge/Knecht-e2e%20fixture-b7f8a2?labelColor=09090b" alt="Knecht e2e fixture">
  <img src="https://img.shields.io/badge/license-MIT-blue" alt="MIT License">
</p>

</div>

A [DDEV](https://ddev.com)-based Craft CMS 6 (Laravel) project used as an end-to-end test fixture for [Knecht](https://knecht.works). It mirrors [`test-craftcms`](https://github.com/knecht-works/test-craftcms): a multi-site setup (`en` primary, `de`, `gb`) with a `home` single and a `pages` channel, and front-end assets built via [Vite](https://vitejs.dev) (`laravel-vite-plugin`) and [Tailwind CSS](https://tailwindcss.com).

Differences from the Craft 5 fixture: Craft 6 has no plugin ports yet, so CKEditor, SEOmatic, craft-vite, Co-Pilot, Insights, LLMify and Quick Edit are gone. The rich-text fields use Craft's built-in Markdown field, and templates live in `resources/views/`.

## Setup

Requires [DDEV](https://ddev.readthedocs.io/en/stable/users/install/ddev-installation/) and a Docker provider (Docker, OrbStack, or Colima).

```bash
ddev start                      # boot the containers
ddev composer install           # install PHP dependencies
cp .env.example .env            # then run `ddev artisan key:generate`
ddev artisan craft:install      # create the database and admin user (applies the project config)
ddev npm install
ddev npm run dev                # start the Vite dev server, or `npm run build`
```

## URLs

`ddev launch` opens the primary site in your browser.

| Role             | URL                                      |
| ---------------- | ---------------------------------------- |
| EN               | `https://en.craftcms6.ddev.site`         |
| DE               | `https://de.craftcms6.ddev.site`         |
| GB               | `https://en.craftcms6.ddev.site/gb`      |
| Control panel    | `https://cp.craftcms6.ddev.site/admin`   |
