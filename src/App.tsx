import { Outlet } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';

const App = () => (
  <div className="App">
    <MainLayout>
      <Outlet />
    </MainLayout>
  </div>
);
export default App;
