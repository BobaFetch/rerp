// import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import SideNav from './components/SideNav';

import Home from './components/views/Home';
import Administration from './components/views/Administration';
import Production from './components/views/Production';
import Engineering from './components/views/Engineering';
import Finance from './components/views/Finance'

const viewMap = {
  Home,
  Administration,
  Production,
  Engineering,
  Finance
}


export default function App() {
  const [title, setTitle] = useState('Home')
  const Component = viewMap[title]
  return (
    <div className='container-full h-screen bg-gradient-to-br from-slate-900 to-cyan-500 overflow-y-hidden'>
      <Header name={title} />
      <div className='grid grid-cols-10 gap-2 text-white h-5/6'>
        <div className='col-span-1'>
          <SideNav setTitle={setTitle} />
        </div>
        <div className='col-span-9 px-2 bg-gray-200 text-black mr-2 rounded overflow-auto'>
         <Component />
        </div>
      </div>
    </div>
  );
}
