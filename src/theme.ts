import { ref, watch } from 'vue';

export type ThemeName = 'catalogue' | 'trs80';

const STORAGE_KEY = 'mv-theme';

/**
 * Catalogue is the default for a first-time visitor, including on a
 * dark-preferring system. To follow the OS instead, seed this from
 * matchMedia('(prefers-color-scheme: dark)') when nothing is stored.
 * The matching guard in index.html has to change with it.
 */
function stored(): ThemeName {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'trs80' ? 'trs80' : 'catalogue';
  } catch {
    return 'catalogue';
  }
}

export const theme = ref<ThemeName>(stored());

watch(
  theme,
  (next) => {
    document.documentElement.classList.toggle('trs80', next === 'trs80');
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Private browsing. The theme still applies for this session.
    }
  },
  { immediate: true },
);

export function toggleTheme() {
  theme.value = theme.value === 'trs80' ? 'catalogue' : 'trs80';
}
