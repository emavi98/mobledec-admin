import { Outlet } from 'react-router-dom';
import { MainLayout } from './layouts/main-layout';
import { ThemeProvider } from './providers/theme-provider';

const App = () => (
  <div className="App">
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <MainLayout>
        <Outlet />
      </MainLayout>
    </ThemeProvider>
  </div>
);
export default App;
