/**
 * Theme & Version Management Configuration
 * 
 * Controls which portfolio design version is actively served at the root URL (/).
 * To change your active public portfolio, simply change `activeTheme` below!
 * 
 * Available options:
 * - 'bento': Asymmetric bento grid spotlighting flagship scale & metrics (Active default).
 * - 'craft': Linear / Raycast-inspired dark craft with 1px hairline borders & Cmd+K palette.
 * - 'minimal': Clean, restrained, high-contrast engineering portfolio.
 * - 'modern': Polished UI with glassmorphism & segmented filter controls.
 * - 'parallax': Spatial depth, 3D interactive card tilt, and motion layers.
 */

export type ThemeVariant = 'bento' | 'craft' | 'minimal' | 'modern' | 'parallax';

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
  // Set your public active theme here ('bento' | 'craft' | 'minimal' | 'modern' | 'parallax'):
  activeTheme: 'bento',

  availableThemes: [
    {
      id: 'bento',
      name: 'Engineering Bento',
      description: 'Asymmetric bento grid spotlighting flagship scale, architecture metrics, and mobile craft.',
      previewPath: '/preview/bento',
    },
    {
      id: 'craft',
      name: 'Linear Dark Craft',
      description: 'Raycast/Linear aesthetic, razor-sharp 1px hairline borders, micro-glows, and Cmd+K command palette.',
      previewPath: '/preview/craft',
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
