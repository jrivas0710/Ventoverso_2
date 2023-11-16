import './Comentarios.css'

import { Comentario } from '../../interfaces/Comentarios'

/* export type ComentarioTipo = {
    productoId : string,
    cliente: string,
    fotoClienteUrl: string,
    nombreCliente:string,
    estrellas:number,
    titulo:string,
    comentario:string

    calificaciones:{
        caracteristicas:number,
        sonido:number,
        fabricacion:number
    },
    reacciones:{
        MeGusta:number,
        NoMeGusta:number,
        Denunciar:number
    }
}
 */

const Comentario = (props:{dataComentario: Comentario[] }) => {

    console.log(props)

    return (
        <>
            {props.dataComentario.map((item) => {

                return (<div className='containerComentarioEvaluaciones' key={item.productoId}>
                <div className='containerComentario'>

                    <div className='avatarTexto'>
                        <div className='avatarUser'>
                            <img src={item.fotoClienteUrl} alt="avatarUser" />
                            <span>{item.nombreCliente}</span>
                        </div>
                        <div className='textoUser'><span className='spanUser'>{item.titulo}</span></div>
                    </div>

                    <div className='comentario'>
                        <p>
                            {item.comentario}
                        </p>
                    </div>

                    <div className='iconosComentario'>
                        <div className='megusta'>
                            <span className="material-symbols-outlined">
                                thumb_up
                            </span>
                            <span>{item.reacciones.MeGusta}</span>
                        </div>
                        <div>
                            <div className='nomegusta'>
                                <span className="material-symbols-outlined">
                                    thumb_down
                                </span>
                                <div>
                                    <span>{item.reacciones.NoMeGusta}</span>
                                </div>
                            </div>

                        </div>

                        <div>
                            <div className='denunciar'>
                                <div>
                                    <span className="material-symbols-outlined">
                                        emoji_flags
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        <span hidden>{item.reacciones.Denunciar}</span>
                                        Reportar</span>
                                </div>

                            </div>
                        </div>
                    </div>


                </div>

                <div className="rankingComentario">
                    <div className='criterioLinea'>
                        <div className='criterio'>
                            <b><span >Características</span></b>
                        </div>
                        <div className="lineasComentario">
                            <div className="primeraLineaComentario">
                                <span hidden>{item.calificaciones.caracteristicas} {/* esto se supone que luego determinara las rallitas que se pintan en pantalla  */}
                                </span>
                            </div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div className="ultimaLineaComentario"></div>
                        </div>
                    </div>

                    <div className='criterioLinea'>
                        <div className='criterio'>
                            <b><span >Sonido</span></b>
                        </div>
                        <div className="lineasComentario">
                            <div className="primeraLineaComentario">
                                <span hidden>{item.calificaciones.sonido}
                                </span>
                            </div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div className="ultimaLineaComentario"></div>
                        </div>

                    </div>
                    <div className='criterioLinea'>
                        <div className='criterio'>
                            <b><span >Fabricación</span></b>
                        </div>
                        <div className="lineasComentario">
                            <div className="primeraLineaComentario">
                                <span hidden>{item.calificaciones.fabricacion}
                                </span>
                            </div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div className="ultimaLineaComentario"></div>
                        </div>

                    </div>
                </div>
            </div>)
                
            })}

        </>
    )


}


export default Comentario



/* export const Comentario = () => {
    return (
        <>
            <div className='containerComentarioEvaluaciones'>
                <div className='containerComentario'>

                    <div className='avatarTexto'>
                        <div className='avatarUser'><img src="" alt="avatarUer" /></div>
                        <div className='textoUser'><span className='spanUser'>'Me parece genial'</span></div>
                    </div>

                    <div className='comentario'>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit reiciendis expedita
                            architecto officia qui eveniet molestiae, saepe impedit alias corrupti dolor optio ad
                            eius animi distinctio aliquid deleniti natus sit.
                        </p>
                    </div>

                    <div className='iconosComentario'>
                        <div className='megusta'>
                            <span className="material-symbols-outlined">
                                thumb_up
                            </span>
                            <span>2</span>
                        </div>
                        <div>
                            <div className='nomegusta'>
                                <span className="material-symbols-outlined">
                                    thumb_down
                                </span>
                                <div>
                                    <span>0</span>
                                </div>
                            </div>

                        </div>

                        <div>
                            <div className='denunciar'>
                                <div>
                                    <span className="material-symbols-outlined">
                                        emoji_flags
                                    </span>
                                </div>
                                <div>
                                    <span>Reportar</span>
                                </div>

                            </div>
                        </div>
                    </div>


                </div>

                <div className="rankingComentario">
                    <div className='criterioLinea'>
                        <div className='criterio'>
                            <b><span >Características</span></b>
                        </div>
                        <div className="lineasComentario">
                            <div className="primeraLineaComentario"></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div className="ultimaLineaComentario"></div>
                        </div>
                    </div>

                    <div className='criterioLinea'>
                        <div className='criterio'>
                            <b><span >Sonido</span></b>
                        </div>
                        <div className="lineasComentario">
                            <div className="primeraLineaComentario"></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div className="ultimaLineaComentario"></div>
                        </div>

                    </div>
                    <div className='criterioLinea'>
                        <div className='criterio'>
                            <b><span >Fabricación</span></b>
                        </div>
                        <div className="lineasComentario">
                            <div className="primeraLineaComentario"></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div className="ultimaLineaComentario"></div>
                        </div>

                    </div>
                </div>
            </div>
        </>

    )



} */


