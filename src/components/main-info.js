import data from "../data";
import MainLogo from "./main-logo";

export default class MainInfo extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const { showroom, ventas, email, phone, schedule } = data.info;
    this.innerHTML = `
    <footer class="info">
      <div class="info-header">
        <main-logo></main-logo>
        <div class="info-list">
          <div class="info-list__item">
            <b>Showroom:</b> ${showroom}
          </div>
          <div class="info-list__item">
            <b>Sala de ventas:</b> ${ventas}
          </div>
          <div class="info-list__item">
            <b>Correo:</b> ${email}
          </div>
          <div class="info-list__item">
            <b>Teléfono:</b> ${phone}
          </div>
          <div class="info-list__item">
            <b>Horario:</b> ${schedule}
          </div>
        </div>
      </div>
      <hr />
      <div class="info-legal">
        <b>Términos y Condiciones:</b> 
        Promoción válida del 23.07.2022 al 31.07.2022. El valor del descuento hasta aplica para cualquier departamento disponible. Stock de 3 unidades. No aplica para unidades secundarias (estacionamientos o depósitos). **Los estacionamientos dobles para obsequio solo aplican en el sótano 7: 92, 97, 109, 110, 111 y 112 (no incluyen depósitos). El Cliente deberá firmar Contrato de Compraventa de Bien Futuro a más tardar el 07 de Agosto del 2022 bajo cualquier modalidad de financiamiento, siempre y cuando se complete el pago del 20% de cuota inicial, a más tardar el 31 de octubre del 2022. Para compras bajo la modalidad de financiamiento hipotecario, además debe considerarse, desembolso inmediato, una vez cancelada la cuota inicial, máximo 31 de octubre 2022, deberán entregar carta de aprobación bancaria con anticipación de 90 días calendario a fecha máxima de cancelación según contrato la cual será 30 de diciembre 2022 con banco sponsor; de ser un banco distinto al promotor deberán asumir el costo de la carta fianza (emisión y/o renovación). No acumulable con otras promociones. Mayor información en www.thegrand.pe y/o a los teléfonos: 961 288 287. Imágenes referenciales sujetas a variación sin previo aviso. SM RESIDENCIAL PRIME S.A.C., Av. Saenz Peña 303 – Barranco. Inscrito con Partida Registral No. 13843738. Proyecto en etapa de Pre-Venta. Descripción del proyecto: edificio residencial de 22 pisos con departamentos Flats, Duplex y Triplex. Cuenta con bienes de propiedad común y servicios comunes. Se ofrece conforme a memoria descriptiva y lista de acabados del Proyecto: piso estructurado en sala-comedor y dormitorios. The Grand es un proyecto de Grupo Octagon que nace tras la consolidación de varias compañías dedicadas al desarrollo inmobiliario en el Perú y en los Estados Unidos. Grupo Octagon ofrece un servicio completo e integrado. Participa, a través de sus varias empresas y con aliados estratégicos, desde la conceptualización de un proyecto hasta la construcción y promoción del mismo. Se informa al consumidor que existen, para su información: (a) Central de Información de Promotores Inmobiliarios y/o Empresas Constructoras de Unidades Inmobiliarias (Ley 29203); (b) Registro de Infracciones y Sanciones por el incumplimiento de la Ley 29571; y, (c) Portal Mira a Quién le Compras, estas dos últimas a cargo del INDECOPI (http://servicio.indecopi.gob.pe/appCPCBuscador). Para quejas o reclamos: Libro de Reclamaciones y/o atencionalcliente@grupoctagon.com. INDECOPI es competente para resolver controversias de consumo inmobiliarias. Para mayor información sobre el proceso de compra según Ley 29571 consulte: https://www.thegrand.pe
      </div>

    </footer>
    `;
  }
}
window.customElements.define("main-info", MainInfo);
