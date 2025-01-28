// src/pages/api/theme.ts
import type { APIRoute } from 'astro';

export const post: APIRoute = async ({ request, cookies }) => {
    const currentTheme = cookies.get('theme')?.value || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    // Set the theme cookie
    cookies.set('theme', newTheme, {
        path: '/',
        maxAge: 60 * 60 * 24 * 365, // 1 year
    });

    // Generate the new button HTML
    const isLightMode = newTheme === 'light';
    const logoSrc = isLightMode ? '/images/logo-blue.svg' : '/images/logo-light.svg';
    
    const buttonHtml = `
        <button 
            class="btn"
            hx-post="/api/theme"
            hx-swap="outerHTML"
            hx-target="#theme-button"
            id="theme-button"
        >
            <i class="${isLightMode ? 'ri-moon-line hover:ri-moon-fill' : 'ri-sun-line hover:ri-sun-fill'}"></i>
        </button>
    `;

    // Update body class using HTMX response headers
    return new Response(buttonHtml, {
        headers: {
            'Content-Type': 'text/html',
            'HX-Trigger': JSON.stringify({
                'themeChanged': {
                    theme: newTheme,
                    logoSrc: logoSrc
                }
            })
        }
    });
};