import { DestacadosClarinete } from "../components/destacadosClarinete/DestacadosClarinete"
import dataDestacadoClarinete from "../components/destacadosClarinete/dataDestacadoClarinete.json"
import { Footer } from "../components/footer/Footer"
import Sidesheet2 from "../components/sidesheet/SideSheet2"



export const DestacadoClarinetes = () => {

 return(
    <>
    <Sidesheet2/>
    <DestacadosClarinete dataDestacadoClarinete={dataDestacadoClarinete}/>
    <Footer/>

    </>
    
 )


}