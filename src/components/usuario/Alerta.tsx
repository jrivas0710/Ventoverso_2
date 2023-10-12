import './Usuario.css'


export const Alerta = () => {
    return (
        <>


            <div className='alerta'>
                <div>
                    <span className='tituloAlerta'>¿No quieres crearte una cuenta?</span>
                </div>
                <div className='divTextoAlerta'>
                    <p className='textoAlerta'> Si continúas no tendrás una cuenta creada y te perderás nuestras novedades y acumulación de puntos.
                        Pero, ¡No te preocupes! puedes continuar comprando sin registro y crearte una cuenta cuando quieras.
                    </p>
                </div>
                <div className='btnsAlerta'>
                    <button className='salirAlerta'>Salir</button>
                    <button className='cancelarAlerta'>Cancelar</button>
                </div>
            </div>




        </>
    )
}