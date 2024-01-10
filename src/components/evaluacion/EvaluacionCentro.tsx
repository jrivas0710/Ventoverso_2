import "./EvaluacionCentro.css"



export const EvaluacionCentro = () => {
    return (
        <>

        <div style={{display:"flex", flexDirection:"column"}}>



       
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div> <h2 className="tituloEvaluacion">Calificaciones de Clientes</h2></div>

                <div style={{display:"flex", gap:"20px"}}>
                    <div className="estrellas">
                        <img src="../images/Star.png" alt="" style={{ width: "32px", height: "32px" }} />
                        <img src="../images/Star.png" alt="" style={{ width: "32px", height: "32px" }} />
                        <img src="../images/Star.png" alt="" style={{ width: "32px", height: "32px" }} />
                        <img src="../images/Star.png" alt="" style={{ width: "32px", height: "32px" }} />
                        <img src="../images/Star.png" alt="" style={{ width: "32px", height: "32px" }} />

                    </div>
                    <div style={{ display: "flex" }}>
                        <div style={{ marginTop: "5px" }}><b><span>5/5</span></b></div>
                        <div style={{ marginTop: "5px" }}><b><span>3 comentarios</span></b></div>
                        <div><button className="evaluarBoton">Evaluar</button></div>
                    </div>
                </div>
            </div>


            <div className="containerEvaluacionCentro">

                <div className="criteriosRanking">

                    <div className="ranking">
                        <div>
                            <b><span>Características</span></b>
                        </div>
                        <div className="lineas">
                            <div className="primeraLinea"></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div className="ultimaLinea"></div>
                        </div>
                    </div>
                    <div className="ranking">
                        <div>
                            <b><span>Sonido</span></b>
                        </div>
                        <div className="lineas">
                            <div className="primeraLinea"></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div className="ultimaLinea"></div>
                        </div>
                    </div>
                    <div className="ranking">
                        <div>
                            <b><span>Fabricación</span></b>
                        </div>
                        <div className="lineas">
                            <div className="primeraLinea"></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div className="ultimaLinea"></div>
                        </div>
                    </div>

                </div>

            </div>
            </div>
        </>
    )
}








