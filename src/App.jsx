

import './App.css';
import Demooo from './components/Demo';
import Hero, { Hero1 }  from './components/Hero';

const App = () => {
  return (
    <main>
        <div className="main">
            <div className="gradient" />
            </div>
            <div className="app">
                <Hero/> 
                <Hero1/>
                <Demooo/> 
            </div>
    </main>
  )
}

export default App