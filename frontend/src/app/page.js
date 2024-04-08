
import styles from "./page.module.css";
import { Home } from './views/Home';
import { NavBar } from './components/navbar';

export default function App() {
  return (
    <div>
      <NavBar />
      <Home />
    </div>
    
  );
}
