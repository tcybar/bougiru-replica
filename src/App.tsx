import { ThemeProvider } from '@/components/ThemeProvider';
import Battle from '@/features/Battle/Battle';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Battle />
    </ThemeProvider>
  );
}

export default App;
