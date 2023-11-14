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
            return response.json() as Promise<Destacado[]>
         }
      })
            
      .then(data => {
         setProducto(data);
      })
      .catch(error => console.log(error.message("mal")))
   })

return(
    <>
  {producto && <DestacadosClarinete producto={producto}/> }
   
   

    </>
    
 )


}