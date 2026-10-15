/**
 * URL resolution helper for asset paths and base URLs.
 * Handles GitHub Pages subpaths (e.g. /repo-name/) as well as root deployments (Vercel, Cloudflare).
 */
export function getAssetUrl(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return base.endsWith('/') ? `${base}${cleanPath}` : `${base}/${cleanPath}`;
}
