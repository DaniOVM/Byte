import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router"

import {CobrosAdicionalesComponent} from "./components/cobros-adicionales/cobros-adicionales.component";
import {DiasInhabilesComponent} from "./components/dias-inhabiles/dias-inhabiles.component";
import {InstitucionesCobrosAdicionalesComponent} from "./components/instituciones-cobros-adicionales/instituciones-cobros-adicionales.component";
import {MotivosDeAjustesComponent} from "./components/motivos-de-ajustes/motivos-de-ajustes.component";
import { LimpiezaDeArchivosComponent } from './components/limpieza-de-archivos/limpieza-de-archivos.component';
import { ProductosComponent } from './components/productos/productos.component';

import { FormasDeDesembolsoComponent } from './components/formas-de-desembolso/formas-de-desembolso.component';
import { MotivoDeReversaComponent } from './components/motivo-de-reversa/motivo-de-reversa.component'
import { MotivosReferenciasClientesComponent } from './components/motivos-referencias-clientes/motivos-referencias-clientes.component';
import { RelacionTransaccionesDepositosComponent } from './components/relacion-transacciones-depositos/relacion-transacciones-depositos.component';
import { DocumentosAPresentarPorProductoComponent } from './components/documentos-a-presentar-por-producto/documentos-a-presentar-por-producto.component';
import { EventosDeSolicitudesComponent } from './components/eventos-de-solicitudes/eventos-de-solicitudes.component';
import { ParametrosAdicionalPorProductoComponent } from './components/parametros-adicional-por-producto/parametros-adicional-por-producto.component';
import { MontosPorPlazoComponent } from './components/montos-por-plazo/montos-por-plazo.component';
import { PricipalComponent } from './components/pricipal/pricipal.component';
import { AgrupacionesDeCreditoComponent } from './components/agrupaciones-de-credito/agrupaciones-de-credito.component';
import { AlmacenadoraComponent } from './components/almacenadora/almacenadora.component';
import { AseguradoraComponent } from './components/aseguradora/aseguradora.component';
import { LugarDeInversionComponent } from './components/lugar-de-inversion/lugar-de-inversion.component';
import { AsesorDePrestamosComponent } from './components/asesor-de-prestamos/asesor-de-prestamos.component';
import { TipoDeDeduccionComponent } from './components/tipo-de-deduccion/tipo-de-deduccion.component';
import { TipoDePrestamoComponent } from './components/tipo-de-prestamo/tipo-de-prestamo.component';

const appRoutes: Routes = [
    {path: 'cobrosAdicionales', component: CobrosAdicionalesComponent},
    {path: 'diasInhabiles', component: DiasInhabilesComponent},
    {path: 'institucionesCobrosAdicionales', component: InstitucionesCobrosAdicionalesComponent},
    {path: 'motivosDeAjustes', component: MotivosDeAjustesComponent},
    {path: 'limpiezaDeArchivos', component: LimpiezaDeArchivosComponent},
    {path: 'productos', component: ProductosComponent},
    {path: 'Formas-de-desembolso', component: FormasDeDesembolsoComponent},
    {path: 'Motivo-de-reversa', component: MotivoDeReversaComponent},
    {path: 'Motivos-referencias-clientes', component: MotivosReferenciasClientesComponent},
    {path: 'Relacion-transacciones-depositos', component: RelacionTransaccionesDepositosComponent},
    {path: 'Documentos-a-Presentar-por-Producto', component: DocumentosAPresentarPorProductoComponent},
    {path: 'Eventos-de-solicitudes', component: EventosDeSolicitudesComponent},
    {path: 'Parametros-Adicional-por-Producto', component: ParametrosAdicionalPorProductoComponent},
    {path: 'Montos-por-Plazo', component: MontosPorPlazoComponent},
    {path: 'principal', component: PricipalComponent},
    {path: 'agrupacionesDeCredito', component: AgrupacionesDeCreditoComponent},
    {path: 'almacenadora', component: AlmacenadoraComponent},
    {path: 'aseguradora', component:AseguradoraComponent},
    {path: 'lugarInversion', component:LugarDeInversionComponent},
    {path: 'asesorPrestamos',component:AsesorDePrestamosComponent}, 
    {path: 'tipoDeduccion',component: TipoDeDeduccionComponent},
    {path: 'tipoPrestamo',component: TipoDePrestamoComponent}
]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
