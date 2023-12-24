import './App.css'
import { Home } from './pages/Home'
import { PaginaProducto } from './pages/AñadirProducto'
import { DestacadoClarinetes } from './pages/DestacadosClarinete'
import { PageProducto } from './pages/Producto'
import { CarroCompras } from './pages/CarroCompras'
import Sidesheet2 from './components/sidesheet/SideSheet2'
import { Footer } from './components/footer/Footer'
import { CrearUser } from './pages/CrearUsurario'
import { RegtoExitoso } from './pages/RegtoExitoso'
import { Checkout } from './components/checkout/Checkout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ResultadoCompra } from './components/compra/ResultadoCompraExitosa'
import { ResultadoCompraFallo } from './components/compra/ResultadoFalloCompra'
import { NotificationProvider } from './context/notification.context'
import { CentrodeAyuda } from './pages/CentrodeAyuda'
import { Agenda } from './components/Agenda/Agenda'
import { ImagenFormulario } from './pages/ImagenFormulario'
import { ProtectedComponent } from './components/protectedComponent/ProtectedComponent'
import { AdminEdit } from './pages/AdminEdit'
import { CrearProducto } from './components/administrador/EditarProducto'
import { useSelector } from 'react-redux'
import { RootState } from './redux/store'
import { EliminarProducto } from './components/administrador/EliminarProducto'
import { ModificarProducto } from './components/administrador/ModificarProducto'
import { ImagenesProductoAdmin } from './components/administrador/ImagenesBase64'



function App() {

  const user = useSelector((state: RootState) => state.user)

  return (
    <>
      <div>
        <NotificationProvider>
          <BrowserRouter>
            {user.roles?.[0] != "ADMINISTRADOR" &&
              <Sidesheet2 />}

            <Routes>


              <Route path='editAdmin' element={
                <ProtectedComponent>
                  <AdminEdit />
                </ProtectedComponent>
              } />

              <Route path='editarProducto' element={
                <ProtectedComponent>
                  <ModificarProducto/>
                </ProtectedComponent>
              } />

              <Route path='agregarProducto' element={
                <ProtectedComponent>
                  <CrearProducto />
                </ProtectedComponent>
              } />

              <Route path='eliminarProducto' element={
                <ProtectedComponent>
                  <EliminarProducto/>
                </ProtectedComponent>
              } />


              <Route path="/" element={<Home />} />
              <Route path="/agenda" element={<Agenda />} ></Route>
              <Route path="/categoria" element={<PageProducto />} ></Route>
              <Route path="/d_clarinete" element={<DestacadoClarinetes />}> </Route>
              <Route path="/agregarProductoCarro" element={<PaginaProducto />}> </Route>
              <Route path="/carro" element={<CarroCompras />}> </Route>
              <Route path="/checkout" element={<Checkout />}></Route>
              <Route path="/algoSalioMal" element={<ResultadoCompraFallo />}></Route>
              <Route path="/compraExitosa" element={<ResultadoCompra />}></Route>
              <Route path="/registro" element={<CrearUser />}></Route>
              <Route path="/registroExitoso" element={<RegtoExitoso />}></Route>
              <Route path="/centroAyuda" element={<CentrodeAyuda />}></Route>
              <Route path="/imagenFormulario" element={<ImagenFormulario />}></Route>
             <Route path='/imagenesProductoAdmin' element = {<ImagenesProductoAdmin/> } />



            </Routes>

            <Footer />
          </BrowserRouter>
        </NotificationProvider>
      </div>

 </>
  )
}

export default App
