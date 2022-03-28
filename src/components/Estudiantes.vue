<template>
	<div>
		<div class="container">
			<div class="row">
				<h1>ESTUDIANTES</h1>
			</div>
			<div class="row">
				<div v-if="validation == true" class="alert alert-warning alert-dismissible fade show" role="alert">
					<strong>Advertencia!!!</strong> No Puede haber campos ni espacions vacios.
					<button type="button" class="close" data-dismiss="alert" @click="dismiss" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
			</div>
			<div class="row">
				<div class="col-md-8">
					<table class="table table-dark">
						<thead>
							<tr>
								<th>No.</th>
								<th>Nombres</th>
								<th>Apellidos</th>
								<th>Grupo</th>
							</tr>
						</thead>
						<tbody v-for='(estuadinte, index) in Estudiantes' :key="index">
							<tr>
								<th>{{index}}</th>
								<th>{{estuadinte.nombrec}}</th>
								<th>{{estuadinte.apellidosc}}</th>
								<th>{{estuadinte.edadc}}</th>
								<th>{{estuadinte.grupoc}}</th>
								<th><button class="btn btn-primary btn-md" @click="editarEstudiante(index, estuadinte.nombrec, estuadinte.apellidosc, estuadinte.edadc, estuadinte.grupoc)" >EDITAR</button></th>
								<th><button class="btn btn-danger btn-md" @click="Eliminar(index)" >ELIMINAR</button></th>
							</tr>
						</tbody>
					</table>
				</div>
				<div class="col-md-4">
					<div class="card">
						<div class="card-header bg-dark text-white">
								<h2>Nuevo Estuadinte</h2>
						</div>
						<div class="card-body">
							<form id="createStudent" >
								<div class="form-group">
									<label for="formGroupExampleInput">Nombre Completo</label>
									<input type="text" v-model="nombre"  class="form-control" name="nombre" id="nombre" placeholder="Ingresar Nombre Club" autofocus>
								</div>
								<div class="form-group">
									<label for="formGroupExampleInput2">Apellidos</label>
									<input type="text"  v-model="apellidos" class="form-control" name="apellidos"  id="apellidos" placeholder="Ingresar Apellidos">
								</div>
								<div class="form-group">
									<label for="formGroupExampleInput2">Edad</label>
									<input type="text" v-model="edad"  class="form-control" name="edad"  id="edad" placeholder="Ingresar Edad">
								</div>
								<div class="form-group ">
									<label for="inputState">Curso</label>
									<select v-model="grupo" name="grupo" id="grupo" class="form-control">
										<option selected >Choose...</option>
										<option>Natacion</option>
										<option>Basquetbol</option>
										<option>Futbol</option>
										<option>Basebol</option>
									</select>
								</div>
								<div class="card-footer">
									
								</div>
							</form>
							<button v-if="btn_a == true" @click="validaciones(nombre, apellidos, edad, grupo)" class="btn btn-success btn-block">
								AGREGAR
							</button>
							<button v-if="btn_e == true" @click="clicEditar(index,nombre, apellidos, edad, grupo)" class="btn btn-success btn-block">
								EDITAR
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {mapState} from 'vuex';

export default {
	name: 'CEstudiantes',
	computed:{
		...mapState(['Estudiantes'])
	},
	data:()=>{
		return{
			validation: false,
			nombre:'',
			apellidos:'',
			edad: '',
			grupo:'',
			btn_a: true,
			btn_e: false,
		}
	},
	methods:{
		dismiss(){
			this.validation = false;

		},
		validaciones(nombre, apellidos, edad, grupo){
			if (nombre && apellidos && edad && grupo) {
				this.agregarEstudiante(nombre, apellidos, edad, grupo);
			}
			else(
				this.validation= true
			)
		},
        agregarEstudiante(nombre, apellidos, edad, grupo){
            //console.log('diste click');
            this.Estudiantes.push({
                nombrec:nombre, apellidosc:apellidos, edadc:edad, grupoc:grupo
            });
            this.nombre='';
            this.apellidos='';
            this.grupo='';
			this.edad= '';
			this.validation = false;
        },
        editarEstudiante(index, nombrec, apellidosc, edadc, grupoc){
            /*for (club in clubs) {
                this.nombre = club.nombrec;
                this.horario = club.horarioc;
                this.dias = club.diasc;
                
            }*/
            console.log(index);
			this.index = index;
            this.nombre = nombrec;
            this.apellidos = apellidosc;
            this.edad = edadc;
			this.grupo = grupoc;
            
            this.funcion_texto= "EDITAR";
            this.btn_a = false;
            this.btn_e = true;

            
        },
        clicEditar(index, nombre, apellidos, edad, grupo){
            /*for (club of this.clubs) {
                this.nombre = club.nombrec;
                this.horario = club.horarioc;
                this.dias = club.diasc;
                
            }*/
            //console.log(index);
            this.Estudiantes[index].nombrec = nombre;
            this.Estudiantes[index].apellidosc = apellidos;
            this.Estudiantes[index].edadc = edad;
			this.Estudiantes[index].grupoc = grupo;
            
            this.funcion_texto= "AGREGAR";
            this.nombre='';
            this.apellidos='';
            this.grupo='';
			this.edad= '';
            this.btn_a = true;
            this.btn_e = false;

        },
        Eliminar(index){
            console.log(index);
            this.Estudiantes.splice(index, 1);

        },
    }
}
</script>

