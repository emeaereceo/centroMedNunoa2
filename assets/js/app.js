document.write('<p></p>');

var radiologia = [
	{
		hora: '11:00',
		especialista: 'IGNACIO SCHULZ',
		paciente: 'FRANCISCA ROJAS',
		rut: '9878782-1',
		prevision: 'FONASA',
	},
	{
		hora: '11:30',
		especialista: 'FEDERICO SUBERCASEAUX',
		paciente: 'PAMELA ESTRADA',
		rut: '15345241-3',
		prevision: 'ISAPRE',
	},
	{
		hora: '15:00',
		especialista: 'FERNANDO WURTHZ',
		paciente: 'ARMANDO LUNA',
		rut: '16445345-9',
		prevision: 'ISAPRE',
	},
	{
		hora: '15:30',
		especialista: 'ANA MARIA GODOY',
		paciente: 'MANUEL GODOY',
		rut: '17666419-0',
		prevision: 'FONASA',
	},
	{
		hora: '16:00',
		especialista: 'PATRICIA SUAZO',
		paciente: 'RAMON ULLOA',
		rut: '14989389-K',
		prevision: 'FONASA',
	},
];

var traumatologia = [
	{
		hora: '8:00',
		especialista: 'MARIA PAZ ALTUZARRA',
		paciente: 'PAULA SANCHEZ',
		rut: '15554774-5',
		prevision: 'FONASA',
	},
	{
		hora: '10:00',
		especialista: 'RAUL ARAYA',
		paciente: 'ANGÉLICA NAVAS',
		rut: '15444147-9',
		prevision: 'ISAPRE',
	},
	{
		hora: '10:30',
		especialista: 'MARIA ARRIAGADA',
		paciente: 'ANA KLAPP',
		rut: '17879423-9',
		prevision: 'ISAPRE',
	},
	{
		hora: '11:00',
		especialista: 'ALEJANDRO BADILLA',
		paciente: 'FELIPE MARDONES',
		rut: '1547423-6',
		prevision: 'ISAPRE',
	},
	{
		hora: '11:30',
		especialista: 'CECILIA BUDNIK',
		paciente: 'DIEGO MARRE',
		rut: '16554741-K',
		prevision: 'FONASA',
	},
	{
		hora: '12:00',
		especialista: 'ARTURO CAVAGNARO',
		paciente: 'CECILIA MENDEZ',
		rut: '9747535-8',
		prevision: 'ISAPRE',
	},
	{
		hora: '12:30',
		especialista: 'ANDRES KANACRI',
		paciente: 'MARCIAL SUAZO',
		rut: '11254785-5',
		prevision: 'ISAPRE',
	},
];

var dental = [
	{
		hora: '8:30',
		especialista: 'ANDREA ZUÑIGA',
		paciente: 'MARCELA RETAMAL',
		rut: '11123425-6',
		prevision: 'ISAPRE',
	},
	{
		hora: '11:00',
		especialista: 'MARIA PIA ZAÑARTU',
		paciente: 'ANGEL MUÑOZ',
		rut: '9878789-2',
		prevision: 'ISAPRE',
	},
	{
		hora: '11:30',
		especialista: 'SCARLETT WITTING',
		paciente: 'MARIO KAST',
		rut: '7998789-5',
		prevision: 'FONASA',
	},
	{
		hora: '13:00',
		especialista: 'FRANCISCO VON TEUBER',
		paciente: 'KARIN FERNANDEZ',
		rut: '18887662-K',
		prevision: 'FONASA',
	},
	{
		hora: '13:30',
		especialista: 'EDUARDO VIÑUELA',
		paciente: 'HUGO SANCHEZ',
		rut: '17665461-4',
		prevision: 'FONASA',
	},
	{
		hora: '14:00',
		especialista: 'RAQUEL VILLASECA',
		paciente: 'ANA SEPULVEDA',
		rut: '14441281-0',
		prevision: 'ISAPRE',
	},
];

const nuevoPacientesTraumatologia = [
	{
		hora: '09:00',
		especialista: 'RENÉ POBLETE',
		paciente: 'ANA GELLONA',
		rut: '13123329-7',
		prevision: 'ISAPRE',
	},
	{
		hora: '09:30',
		especialista: 'MARIA SOLAR',
		paciente: 'RAMIRO ANDRADE',
		rut: '12221451-K',
		prevision: 'FONASA',
	},
	{
		hora: '10:00',
		especialista: 'RAUL LOYOLA',
		paciente: 'CARMEN ISLA',
		rut: '10112348-3',
		prevision: 'ISAPRE',
	},
	{
		hora: '10:30',
		especialista: 'ANTONIO LARENAS',
		paciente: 'PABLO LOAYZA',
		rut: '13453234-1',
		prevision: 'ISAPRE',
	},
	{
		hora: '12:00',
		especialista: 'MATIAS ARAVENA',
		paciente: 'SUSANA POBLETE',
		rut: '14345656-6',
		prevision: 'FONASA',
	},
];

const traumatologiaExtendido = [
	...traumatologia,
	...nuevoPacientesTraumatologia,
];
console.log(traumatologiaExtendido);

const tabla = (especialidad, ubicacionHtml) => {
	// const tabUbicacion = document.querySelector('#ejercicio1');
	const tabUbicacion = document.querySelector(ubicacionHtml);
	const tab = document.createElement('table');
	const tabHead = document.createElement('thead');
	const tabBody = document.createElement('tbody');

	// UBICACION EN EL HTML
	tabUbicacion.appendChild(tab);
	tab.id = 'tabla-detalle';
	tab.className = 'table table-hover';
	tab.appendChild(tabHead);

	// CONTENIDO DE LA CABECERA
	tabHead.innerHTML = `
	<tr>
		<th scope="col">#</th>
		<th scope="col">Rut</th>
		<th scope="col">Paciente</th>
		<th scope="col">Prevision</th>
		<th scope="col">Especialista</th>
		<th scope="col">Hora</th>
	</tr>`;

	// CONSTRUYO EL DETALLE
	let contador = 0;
	especialidad.forEach((r) => {
		contador++;
		tabBody.innerHTML += `
		<tr>
		<th scope="row">${contador}</th>
		<td>${r.rut}</td>
		<td>${r.paciente}</td>
		<td>${r.prevision}</td>
		<td>${r.especialista}</td>
		<td>${r.hora}</td>
		</tr>`;
	});
	tab.appendChild(tabBody);
};
tabla(traumatologiaExtendido, '#ejercicio1');

// EJERCICIO 2
const eliminoPrimerUltimo = (especialidad) => {
	especialidad.pop();
	especialidad.shift();
	return especialidad;
};

const nuevoRadio = eliminoPrimerUltimo(radiologia);
tabla(nuevoRadio, '#ejercicio2');
console.log(radiologia);

// EJERCICIO 3
const tablaDental = () => {
	const tabUbicacion = document.querySelector('#ejercicio3');

	// CONSTRUYO EL DETALLE
	dental.forEach((r) => {
		tabUbicacion.innerHTML += `
		<p>${r.rut}-
		${r.paciente}-
		${r.prevision}-
		${r.especialista}-
		${r.hora}</p>`;
	});
	// tab.appendChild(tabBody);
};
tablaDental();

// EJERCICIO 4
const pacientesCM = [...dental, ...traumatologiaExtendido, ...nuevoRadio];
const ejercicio4 = document.querySelector('#ejercicio4');
pacientesCM.forEach((persona) => {
	ejercicio4.innerHTML += `<p>${persona.paciente}</p>`;
});

// document.write(
// 	`<p>Cantidad de atenciones para Radiología: ${radiologia.length}</p>`
// );
// document.write(
// 	`<p>Cantidad de atenciones para Traumatología: ${traumatologia.length}</p>`
// );
// document.write(`<p>Cantidad de atenciones para Dental: ${dental.length}</p>`);

// document.write(
// 	`<p>Primera atencion: ${radiologia[0].paciente} - ${
// 		radiologia[0].prevision
// 	} | Última atención: ${radiologia[radiologia.length - 1].paciente} - ${
// 		radiologia[radiologia.length - 1].prevision
// 	}.</p>`
// );
// document.write(
// 	`<p>Primera atencion: ${traumatologia[0].paciente} - ${
// 		traumatologia[0].prevision
// 	} | Última atención: ${traumatologia[traumatologia.length - 1].paciente} - ${
// 		traumatologia[traumatologia.length - 1].prevision
// 	}.</p>`
// );
// document.write(
// 	`<p>Primera atencion: ${dental[0].paciente} - ${
// 		dental[0].prevision
// 	} | Última atención: ${dental[dental.length - 1].paciente} - ${
// 		dental[dental.length - 1].prevision
// 	}.</p>`
// );

var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'));
var collapseList = collapseElementList.map(function (collapseEl) {
	return new bootstrap.Collapse(collapseEl);
});
