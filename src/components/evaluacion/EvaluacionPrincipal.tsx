
import { EvaluacionCentro } from "./EvaluacionCentro"
import { EvaluacionIzquierda } from "./EvaluacionIzquierda"
import "./EvaluacionPrincipal.css"




export const EvaluacionPrincipal = () => {
    return (
        <>
            <div className="containerEvaluacion">
           
                <EvaluacionIzquierda />
                <EvaluacionCentro/>
            </div>
        </>
    )
}

