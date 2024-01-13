import { useEffect, useState } from "react"
import { DestacadosClarinete } from "../components/destacadosClarinete/DestacadosClarinete"
import { Destacado } from "../interfaces/Destacados"




export const DestacadoClarinetes = () => {

  const [producto, setProducto] = useState<Destacado[]>()

  
   useEffect(() => {
      fetch(`http://localhost:3000/clarinete-sib`,{
         method:"GET"
      })

      .then(response => {
         if (response.ok) {
            console.log(response, "error en el response destacados clarinete")
            return response.json() as Promise<Destacado[]>
         }
      })
            
      .then(json => {
         setProducto(json);
         console.log("mostrando data", json, producto)
      })
      .catch(error => console.log(error.message))
   }, [])

   
return(
    <>
  {producto && <DestacadosClarinete producto={producto}/> }
   
   </>
    
 )


}