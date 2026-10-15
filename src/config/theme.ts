/**
 * Theme & Version Management Configuration
 * 
 * Controls which portfolio design version is actively served at the root URL (/).
 * To change your active public portfolio, simply change `activeTheme` below!
 * 
 * Available options:
 * - 'minimal': Clean, restrained, high-contrast engineering portfolio.
 * - 'modern': Polished UI with glassmorphism, gradient accents, and segmented filter controls.
 * - 'parallax': Spatial depth, 3D interactive card tilt, and motion layers.
 */

export type ThemeVariant = 'minimal' | 'modern' | 'parallax' | 'bento';

export interface ThemeConfig {
  activeTheme: ThemeVariant;
  availableThemes: {
    id: ThemeVariant;
    name: string;
    description: string;
    previewPath: string;
  }[];
}

export const siteThemeConfig: ThemeConfig = {
  // Set your public active theme here ('minimal' | 'modern' | 'parallax' | 'bento'):
  activeTheme: 'bento',

  availableThemes: [
    {
      id: 'bento',
      name: 'Engineering Bento',
      description: 'Asymmetric bento grid spotlighting flagship scale, architecture metrics, and mobile craft.',
      previewPath: '/preview/bento',
    },
    {
      id: 'minimal',
      name: 'Clean Minimalist',
      description: 'Understated, high-contrast, editorial engineering portfolio.',
      previewPath: '/preview/minimal',
    },
    {
      id: 'modern',
      name: 'Modern Interactive',
      description: 'Glassmorphism surfaces, subtle gradient borders, and segmented filter controls.',
      previewPath: '/preview/modern',
    },
    {
      id: 'parallax',
      name: 'Parallax & Motion',
      description: 'Spatial depth layers, 3D perspective card tilt, and scroll-driven physics.',
      previewPath: '/preview/parallax',
    },
  ],
};
