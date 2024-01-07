import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { useNavigate } from "react-router-dom";


interface Props { 
    children: JSX.Element
}


export const ProtectedComponent = (props:Props ) => {
    const navigate = useNavigate();
    const user = useSelector((state:RootState) => state.user) // esto me trae el estado del usuario guardado en mi redux
  
    
    if (user.roles?.[0] == "ADMINISTRADOR") { //si es true 
        
        return(
            <>
            {props.children} 
            </>
        )
        
    }

    
}