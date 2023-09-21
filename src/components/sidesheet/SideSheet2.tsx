import  { useState } from 'react';
import {SideSheet} from './Sidesheet'

function Sidesheet2() {
  const [isSideSheetOpen, setIsSideSheetOpen] = useState(false);
//holaaa!! 
  const handleOpenSideSheet = () => {
    setIsSideSheetOpen(true);
  };

  const handleCloseSideSheet = () => {
    setIsSideSheetOpen(false);
  };

  return (
    <div className="App">
      
      <button onClick={handleOpenSideSheet}>Abrir SideSheet</button>
      <SideSheet isOpen={isSideSheetOpen} onClose={handleCloseSideSheet} />
    </div>
  );
}

export default Sidesheet2;

