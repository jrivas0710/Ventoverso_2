import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store"
import { FormEditAdmin } from "../components/administrador/EditAdmin";
import { logout } from "../redux/userSlice";
import { HeaderAdmin } from "../components/administrador/HeaderAdmin";


/* interface Props {
    evento: () => void
} */

export const AdminEdit = () => {
    
    //el header y los botones para editar
    

    return (
        <>
           <HeaderAdmin/>

            <main>
                <FormEditAdmin /> 
            </main>

        </>
    )

}

        
        








