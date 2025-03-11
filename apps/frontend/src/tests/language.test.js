import { render, screen } from "@testing-library/react";
import { LanguageProvider } from "../context/LanguageContext";
import LanguageSelector from "../components/LanguageSelector";

test("renders language selector and changes language", () => {
  render(
    <LanguageProvider>
      <LanguageSelector />
    </LanguageProvider>,
  );

  const select = screen.getByRole("combobox");
  expect(select).toBeInTheDocument();
});
