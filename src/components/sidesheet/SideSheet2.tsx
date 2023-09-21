import  { useState } from 'react';
import {SideSheet} from './Sidesheet'
import { Header } from '../header/Header';

function Sidesheet2() {
  const [isSideSheetOpen, setIsSideSheetOpen] = useState(false);

  const handleOpenSideSheet = () => {
    setIsSideSheetOpen(true);
  };

  const handleCloseSideSheet = () => {
    setIsSideSheetOpen(false);
  };

  return (
    <div className="App">
      
      <SideSheet isOpen={isSideSheetOpen} onClose={handleCloseSideSheet} />
      <Header evento = {handleOpenSideSheet}/>
    </div>
  );
}

export default Sidesheet2;

