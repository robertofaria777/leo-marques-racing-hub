import { beforeEach, describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";

describe("i18n routing", () => {
  beforeEach(() => {
    window.localStorage.clear();
    window.history.pushState({}, "", "/");
    vi.restoreAllMocks();
  });

  it("renders portuguese content when locale is /pt", async () => {
    window.history.pushState({}, "", "/pt");
    render(<App />);
    expect(await screen.findByText("Inicio")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Contacto" })).toBeInTheDocument();
  });

  it("renders english content when locale is /en", async () => {
    window.history.pushState({}, "", "/en");
    render(<App />);
    expect(await screen.findByText("Home")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Contact" })).toBeInTheDocument();
  });

  it("redirects / based on browser language", async () => {
    vi.spyOn(window.navigator, "language", "get").mockReturnValue("pt-PT");
    render(<App />);

    await waitFor(() => {
      expect(window.location.pathname).toBe("/pt");
    });
    expect(await screen.findByText("Inicio")).toBeInTheDocument();
  });

  it("redirects invalid locale to /en", async () => {
    window.history.pushState({}, "", "/fr");
    render(<App />);

    await waitFor(() => {
      expect(window.location.pathname).toBe("/en");
    });
    expect(await screen.findByText("Home")).toBeInTheDocument();
  });

  it("switches language and keeps hash", async () => {
    window.history.pushState({}, "", "/en#contact");
    render(<App />);

    const ptButtons = await screen.findAllByText("PT", { selector: "button" });
    fireEvent.click(ptButtons[0]);

    await waitFor(() => {
      expect(window.location.pathname).toBe("/pt");
      expect(window.location.hash).toBe("#contact");
    });
    expect(await screen.findByRole("heading", { name: "Contacto" })).toBeInTheDocument();
  });
});
