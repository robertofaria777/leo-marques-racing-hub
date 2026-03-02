import { beforeEach, describe, expect, it, vi } from "vitest";
import { DEFAULT_LOCALE, detectLocale, isSupportedLocale, normalizeLocale } from "./locales";

describe("locale helpers", () => {
  beforeEach(() => {
    window.localStorage.clear();
    vi.restoreAllMocks();
  });

  it("normalizes locale variants to supported locales", () => {
    expect(normalizeLocale("pt-PT")).toBe("pt");
    expect(normalizeLocale("pt-BR")).toBe("pt");
    expect(normalizeLocale("en-US")).toBe("en");
    expect(normalizeLocale("fr-FR")).toBe(DEFAULT_LOCALE);
  });

  it("detects locale from localStorage before navigator", () => {
    window.localStorage.setItem("i18nextLng", "pt-BR");
    vi.spyOn(window.navigator, "language", "get").mockReturnValue("en-US");
    expect(detectLocale()).toBe("pt");
  });

  it("detects locale from navigator when localStorage is empty", () => {
    vi.spyOn(window.navigator, "language", "get").mockReturnValue("pt-PT");
    expect(detectLocale()).toBe("pt");

    vi.spyOn(window.navigator, "language", "get").mockReturnValue("fr-FR");
    expect(detectLocale()).toBe("en");
  });

  it("validates supported locales", () => {
    expect(isSupportedLocale("pt")).toBe(true);
    expect(isSupportedLocale("en")).toBe(true);
    expect(isSupportedLocale("fr")).toBe(false);
  });
});
