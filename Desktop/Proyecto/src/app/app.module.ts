import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import {} from './components/pricipal/pricipal.component';
import { MotivosDeAjustesComponent } from './components/motivos-de-ajustes/motivos-de-ajustes.component';
import { DiasInhabilesComponent, agregarDiasInhabiles } from './components/dias-inhabiles/dias-inhabiles.component';
import { CobrosAdicionalesComponent, Agregar } from './components/cobros-adicionales/cobros-adicionales.component';
import { InstitucionesCobrosAdicionalesComponent } from './components/instituciones-cobros-adicionales/instituciones-cobros-adicionales.component';
import { LimpiezaDeArchivosComponent } from './components/limpieza-de-archivos/limpieza-de-archivos.component';
import { routing, appRoutingProviders } from './app.routing';
import { ProductosComponent } from './components/productos/productos.component';

//***********************SAMUEL***************************

import { MotivoDeReversaComponent, agregarMotivoDeReversa, editarMotivoDeReversa } from './components/motivo-de-reversa/motivo-de-reversa.component';
import { FormasDeDesembolsoComponent, agregarFormasDeDesembolso, editarFormasDeDesembolso } from './components/formas-de-desembolso/formas-de-desembolso.component';
import { MotivosReferenciasClientesComponent, agregarMotivosReferenciasClientes, editarMotivosReferenciasClientes } from './components/motivos-referencias-clientes/motivos-referencias-clientes.component';
import { RelacionTransaccionesDepositosComponent, agregarRelacionTransaccionesDepositos, editarRelacionTransaccionesDepositos } from './components/relacion-transacciones-depositos/relacion-transacciones-depositos.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ParametrosAdicionalPorProductoComponent } from './components/parametros-adicional-por-producto/parametros-adicional-por-producto.component';
import { EventosDeSolicitudesComponent } from './components/eventos-de-solicitudes/eventos-de-solicitudes.component';
import { DocumentosAPresentarPorProductoComponent } from './components/documentos-a-presentar-por-producto/documentos-a-presentar-por-producto.component';
import { MontosPorPlazoComponent } from './components/montos-por-plazo/montos-por-plazo.component';
///
import { SeleccionDeAgenciasPorEmpresaComponent } from './components/seleccion-de-agencias-por-empresa/seleccion-de-agencias-por-empresa.component';
import { RegistroDeTipoDeDocumentoComponent } from './components/registro-de-tipo-de-documento/registro-de-tipo-de-documento.component';
//
//*********************DANIEL OVANDO************************
import { AcercamientosComponent } from './components/acercamientos/acercamientos.component';
import { AsignacionDeCategoriasComponent } from './components/asignacion-de-categorias/asignacion-de-categorias.component';
import { CanalesDeVentaComponent } from './components/canales-de-venta/canales-de-venta.component';
import { MediosDeContactoComponent } from './components/medios-de-contacto/medios-de-contacto.component';
import { PorcentajesDeFinanciamientoComponent } from './components/porcentajes-de-financiamiento/porcentajes-de-financiamiento.component';
import { RangosDePlazosComponent } from './components/rangos-de-plazos/rangos-de-plazos.component';
import { TipoDeProductoComponent } from './components/tipo-de-producto/tipo-de-producto.component';
import { TiposDeCanalesDeDistribucionComponent } from './components/tipos-de-canales-de-distribucion/tipos-de-canales-de-distribucion.component';

//********************************MUÑOZ*******************/
import { PasosCierreAltasComponent } from './components/pasos-cierre-altas/pasos-cierre-altas.component';
import { SidebarsComponent } from './components/sidebars/sidebars.component';
import { NotariosComponent,agregarNotario } from './components/notarios/notarios.component';
import { AltasComponent } from './components/altas/altas.component';
import { EstadosPrestamosComponent } from './components/estados-prestamos/estados-prestamos.component';
import { NumeroPrestamosComponent,agregarNumeroPrestamos } from './components/numero-prestamos/numero-prestamos.component';
import { PasosCierreComponent,agregarPasosCierre } from './components/pasos-cierre/pasos-cierre.component';
import { AjustesAltasComponent } from './components/ajustes-altas/ajustes-altas.component';
import { CobrosAdicionalesAltasComponent } from './components/cobros-adicionales-altas/cobros-adicionales-altas.component';
import { DiasInhabilesAltasComponent } from './components/dias-inhabiles-altas/dias-inhabiles-altas.component';
import { SubEstadosComponent,agregarSubEstados } from './components/sub-estados/sub-estados.component';
import { SubEstadosAltasComponent } from './components/sub-estados-altas/sub-estados-altas.component';
import { NumeroPrestamosAltasComponent } from './components/numero-prestamos-altas/numero-prestamos-altas.component';
import {ContabilizacionComponent,agregarContabilizacion } from './components/contabilizacion/contabilizacion.component';


//********************************CHINO*******************/
import { AgrupacionesDeCreditoComponent, agregarACredito } from './components/agrupaciones-de-credito/agrupaciones-de-credito.component';
import { AlmacenadoraComponent, aAlmacenadora } from './components/almacenadora/almacenadora.component';
import { AseguradoraComponent, aAseguradora } from './components/aseguradora/aseguradora.component';
import { AsesorDePrestamosComponent, agregarAprestamos } from './components/asesor-de-prestamos/asesor-de-prestamos.component';
import { BancosComponent } from './components/bancos/bancos.component';
import { LugarDeInversionComponent, aLuagrInv } from './components/lugar-de-inversion/lugar-de-inversion.component';
import { TipoDeDeduccionComponent, aTipoDeduc } from './components/tipo-de-deduccion/tipo-de-deduccion.component';
import { TipoDePrestamoComponent, aTipoP } from './components/tipo-de-prestamo/tipo-de-prestamo.component'; 
import { ContenidosContablesComponent, contenido1, contenido2 } from './components/contenidos-contables/contenidos-contables.component';
import { ContabilizacionComponent, cotabilidad1, cotabilidad2 } from './components/contabilizacion/contabilizacion.component';
//----------------------- ANGULAR MATERIAL

import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import { PricipalComponent } from './components/pricipal/pricipal.component';
import { from } from 'rxjs';
import { SidenavComponent } from './components/sidenav/sidenav.component';


@NgModule({
  declarations: [
    AppComponent,
    MotivosDeAjustesComponent,
    DiasInhabilesComponent,
    CobrosAdicionalesComponent,
    InstitucionesCobrosAdicionalesComponent,
    Agregar,
    agregarDiasInhabiles,
    LimpiezaDeArchivosComponent,
    ProductosComponent, 
//SAMUEL
    MotivoDeReversaComponent,
    FormasDeDesembolsoComponent,
    MotivosReferenciasClientesComponent,
    RelacionTransaccionesDepositosComponent,
    ParametrosAdicionalPorProductoComponent,
    EventosDeSolicitudesComponent,
    DocumentosAPresentarPorProductoComponent,
    MontosPorPlazoComponent,
    PricipalComponent,
    SidenavComponent,
    SeleccionDeAgenciasPorEmpresaComponent, 
    RegistroDeTipoDeDocumentoComponent,

    agregarMotivoDeReversa,
    editarMotivoDeReversa,
    agregarFormasDeDesembolso,
    editarFormasDeDesembolso,
    agregarMotivosReferenciasClientes,
    editarMotivosReferenciasClientes,
    agregarRelacionTransaccionesDepositos,
    editarRelacionTransaccionesDepositos,
//
    AgrupacionesDeCreditoComponent,
    agregarACredito,
    AlmacenadoraComponent, 
    aAlmacenadora,
    AseguradoraComponent,
    aAseguradora,
    AsesorDePrestamosComponent,
    agregarAprestamos,
    BancosComponent,
    LugarDeInversionComponent, 
    aLuagrInv,
    TipoDeDeduccionComponent,
    aTipoDeduc,
    TipoDePrestamoComponent, 
    aTipoP, 


    AcercamientosComponent,
    AsignacionDeCategoriasComponent,
    CanalesDeVentaComponent,
    MediosDeContactoComponent,
    PorcentajesDeFinanciamientoComponent,
    RangosDePlazosComponent,
    TipoDeProductoComponent,
    TiposDeCanalesDeDistribucionComponent,

    NotariosComponent,
    agregarNotario,
    AltasComponent,
    EstadosPrestamosComponent,
    NumeroPrestamosComponent,
    agregarNumeroPrestamos,
    PasosCierreComponent,
    AjustesAltasComponent,
    CobrosAdicionalesAltasComponent,
    DiasInhabilesAltasComponent,
    SubEstadosComponent,
    agregarSubEstados,
    SubEstadosAltasComponent,
    NumeroPrestamosAltasComponent,
    PasosCierreAltasComponent,
<<<<<<< HEAD
    SidebarsComponent,
    ContenidosContablesComponent,
    ContabilizacionComponent,
    cotabilidad1,
    cotabilidad2,
    contenido1,
    contenido2
=======
    agregarPasosCierre,
    SidebarsComponent,
    ContabilizacionComponent,
    agregarContabilizacion
>>>>>>> 8fc06b4d3ec55da972c91ab22c5de1eac432f5aa
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatCheckboxModule,
    MatTableModule,
    MatSidenavModule,
    MatToolbarModule,
    //
    //A11yModule,
    //CdkStepperModule,
    //CdkTableModule,
    //CdkTreeModule,
    //DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    //PortalModule,
    //ScrollingModule,
    //
    routing,
    LayoutModule
  ],

  exports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatCheckboxModule,
    MatTableModule,
    MatDialogModule,
  ],

  entryComponents: [
    //////Alan
    Agregar,
    agregarDiasInhabiles,
    agregarACredito,
    aAlmacenadora, 
    cotabilidad1,
    cotabilidad2, 
    contenido1,
    contenido2,
    aAseguradora,   
    aLuagrInv,
    agregarAprestamos,
    aTipoDeduc,
    aTipoP,
    //////Samuel
    agregarMotivoDeReversa,//
    editarMotivoDeReversa,
    agregarFormasDeDesembolso,//
    editarFormasDeDesembolso,
    agregarMotivosReferenciasClientes,//
    editarMotivosReferenciasClientes,
    agregarRelacionTransaccionesDepositos,//
    editarRelacionTransaccionesDepositos,
     //////

     ///Muñoz
     agregarNotario,
     agregarPasosCierre,
     agregarNumeroPrestamos,
     agregarSubEstados,
     agregarACredito,
     agregarContabilizacion
     
  ],

  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})

export class AppModule { }
