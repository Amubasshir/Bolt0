'use client';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
const Provider = ({ children }) => {
  return (
    <div>
      <NextThemesProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </NextThemesProvider>
    </div>
  );
};

export default Provider;
