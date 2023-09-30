import { DestacadosClarinete } from "../components/destacadosClarinete/DestacadosClarinete"
import dataDestacadoClarinete from "../components/destacadosClarinete/dataDestacadoClarinete.json"
import { Footer } from "../components/footer/Footer"
import { Header } from "../components/header/Header"


export const DestacadoClarinetes = () => {

 return(
    <>
    <Header/>
    <DestacadosClarinete dataDestacadoClarinete={dataDestacadoClarinete}/>
    <Footer/>
    </>
    
 )


}