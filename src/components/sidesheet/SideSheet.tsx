
import { useState } from 'react';
import SideSheet2 from './SideSheet2';


export const SideSheet  = () => {
  const [isSideSheetOpen, setIsSideSheetOpen] = useState(false);

  const openSideSheet = () => {
    setIsSideSheetOpen(true);
  };

  const closeSideSheet = () => {
    setIsSideSheetOpen(false);
  };

  return (
    <div className="App">
      <button onClick={openSideSheet}>Open SideSheet</button>
      <SideSheet2 isOpen={isSideSheetOpen} onClose={closeSideSheet}>



        {/* Contenido del sidesheet */}



        
        <h2>Contenido del SideSheet</h2>
        <p>Este es el contenido que se muestra en el sidesheet.</p>
      </SideSheet2>
    </div>
  );
}

export default SideSheet;
