export const SUPPORTED_LOCALES = ["pt", "en"] as const;

export type AppLocale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: AppLocale = "en";
export const I18N_STORAGE_KEY = "i18nextLng";

export const isSupportedLocale = (value: string | null | undefined): value is AppLocale =>
  value !== null && value !== undefined && SUPPORTED_LOCALES.includes(value as AppLocale);

export const normalizeLocale = (value: string | null | undefined): AppLocale => {
  if (!value) return DEFAULT_LOCALE;
  const normalized = value.toLowerCase().split("-")[0];
  return isSupportedLocale(normalized) ? normalized : DEFAULT_LOCALE;
};

export const detectLocale = (): AppLocale => {
  if (typeof window === "undefined") return DEFAULT_LOCALE;

  const storedLocale = window.localStorage.getItem(I18N_STORAGE_KEY);
  if (storedLocale) return normalizeLocale(storedLocale);

  return normalizeLocale(window.navigator.language);
};

export const withLocale = (pathname: string, locale: AppLocale): string => {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) return `/${locale}`;

  const [, ...rest] = segments;
  if (isSupportedLocale(segments[0])) {
    const suffix = rest.length > 0 ? `/${rest.join("/")}` : "";
    return `/${locale}${suffix}`;
  }

  return `/${locale}/${segments.join("/")}`;
};
