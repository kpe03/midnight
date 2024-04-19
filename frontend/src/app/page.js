
import { Home } from './views/Home';
import { NavBar } from './components/navbar';
import {useRouter} from 'next/navigation';

import style from './assets/style.module.css';

export default function App() {
  const router = useRouter()

  return (
    <div>
      <NavBar />
      <Home />
    </div>
    
  );
}
