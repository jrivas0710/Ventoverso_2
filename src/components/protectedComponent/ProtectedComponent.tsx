import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"

interface Props { 
    children: JSX.Element
}


export const ProtectedComponent = (props:Props ) => {
    
    const user = useSelector((state:RootState) => state.user) // esto me trae el estado del usuario guardado en mi redux
    console.log(!user.isAuthenticate)
    
    if (user && !user.isAuthenticate) { //si es true 
        
        return(
            <>
            {props.children} 
            </>
        )
        
    }

    
}