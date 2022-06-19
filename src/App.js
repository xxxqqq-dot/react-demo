import './App.css';
import { useRoutes, Outlet } from 'react-router-dom'
import routes from './router'

function App() {
  const element = useRoutes(routes)
  return (
    <div className="App">
      {element}

      <Outlet />
    </div>
  );
}

export default App;
