import  { useState } from 'react';
import {SideSheet} from './SideSheet'
import { Header } from '../header/Header';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';

function Sidesheet2() {
  const [isSideSheetOpen, setIsSideSheetOpen] = useState(false);
  const user = useSelector((state:RootState) => state.user)

  const handleOpenSideSheet = () => {
    setIsSideSheetOpen(true);
  };

  const handleCloseSideSheet = () => {
    setIsSideSheetOpen(false);
  };

  return (
    <div className="App overlay" >
      
      
            <SideSheet isOpen={isSideSheetOpen} onClose={handleCloseSideSheet} />
            <Header evento = {handleOpenSideSheet}/>
            
            

   

    </div>
  );
}

export default Sidesheet2;

