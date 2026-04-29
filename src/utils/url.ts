/**
 * Prepends the Astro BASE_URL to an internal path.
 *
 * Locally  (base = '/'):          url('/about') → '/about'
 * GitHub Pages (base='/Freelance'): url('/about') → '/Freelance/about'
 */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, ''); // strip trailing slash
  const normalised = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalised}`;
}
