import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: ['resources/views/**'],
        }),
        tailwindcss(),
    ],
    server: {
        // DDEV: Vite runs inside the web container and is exposed via
        // web_extra_exposed_ports (https://<project>.ddev.site:5173).
        // Under Knecht the browser reaches it on its own origin, handed in
        // as KNECHT_DEV_SERVER_URL.
        host: '0.0.0.0',
        port: 5173,
        strictPort: true,
        origin: process.env.KNECHT_DEV_SERVER_URL
            ?? (process.env.DDEV_PRIMARY_URL
                ? `${process.env.DDEV_PRIMARY_URL.replace(/:\d+$/, '')}:5173`
                : undefined),
        allowedHosts: true,
        cors: {
            origin: /https?:\/\/([A-Za-z0-9\-\.]+)?(localhost|\.local|\.test|\.site)(?::\d+)?$/,
        },
        watch: {
            ignored: ['**/storage/framework/views/**'],
        },
    },
});
