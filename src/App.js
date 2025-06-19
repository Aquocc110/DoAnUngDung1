import Header from './component/header/header'
import { Outlet } from 'react-router-dom';
import Aside from './component/aside/aside'
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Aside />
    </>
  );
}

export default App;
