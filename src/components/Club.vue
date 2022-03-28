<template>
	<div>
		<div class="container">
			<div class="row">
				<h1>CLUB</h1>
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
								<th>Horario</th>
								<th>Dias</th>
							</tr>
						</thead>
						<tbody v-for='(club, index) in clubs' :key="index">
							<tr>
								<th>{{index}}</th>
								<th>{{club.nombrec}}</th>
								<th>{{club.horarioc}}</th>
								<th>{{club.diasc}}</th>
								<th><button class="btn btn-primary btn-md" @click="editarclub(index, club.nombrec, club.horarioc, club.diasc)" >EDITAR</button></th>
								<th><button class="btn btn-danger btn-md" @click="eliminar(index)" >ELIMINAR</button></th>
							</tr>
						</tbody>
					</table>
				</div>
				<div class="col-md-4">
					<div class="card">
						<div class="card-header bg-dark text-white">
								<h2>Nuevo Club</h2>
						</div>
						<div class="card-body">
							<form id="createStudent" >
								<div class="form-group">
									<label for="formGroupExampleInput">Nombre Club</label>
									<input type="text" v-model="nombre"  class="form-control" name="nombre" id="nombre" placeholder="Ingresar Nombre Club" autofocus>
								</div>
								<div class="form-group">
									<label for="formGroupExampleInput2">Horario</label>
									<input type="text"  v-model="horario" class="form-control" name="horario"  id="horario" placeholder="Ingresar Horario">
								</div>
								<div class="form-group">
									<label for="formGroupExampleInput2">Dias</label>
									<input type="text" v-model="dias"  class="form-control" name="dias"  id="dias" placeholder="Ingresar Dias">
								</div>
								<!--<div class="form-group ">
									<label for="inputState">Curso</label>
									<select name="Club" id="Club" class="form-control">
										<option selected>Choose...</option>
										<option>Natacion</option>
										<option>Basquetbol</option>
										<option>Futbol</option>
										<option>Basebol</option>
									</select>
								</div>-->
								<div class="card-footer">
									
								</div>
							</form>
							<button v-if="btn_a == true"  @click="validaciones(nombre, horario, dias)" class="btn btn-success btn-block">
								AGREGAR
							</button>
							<button v-if="btn_e == true" @click="clicEditar(index,nombre, horario, dias)" class="btn btn-success btn-block">
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
console.log(mapState);

export default {
	name: 'CrudClub',
	computed:{
		...mapState(['clubs'])
	},
	data:()=>{
		return{
			validation: false,
			nombre:'',
			horario:'',
			dias:'',
			btn_a: true,
			btn_e: false,
		}
	},
	methods:{
		dismiss(){
			this.validation = false;

		},
		validaciones(nombre, horario, dias){
			if (nombre && horario && dias) {
				this.agregarclub(nombre, horario, dias);
			}
			else(
				this.validation= true
			)
		},
        agregarclub(){
            //console.log('diste click');
            this.clubs.push({
                nombrec:this.nombre, horarioc:this.horario, diasc:this.dias
            });
            this.nombre='';
            this.horario='';
            this.dias='';
			this.validation = false;
        },
        editarclub(index, nombrec, horarioc, diasc){
            /*for (club in clubs) {
                this.nombre = club.nombrec;
                this.horario = club.horarioc;
                this.dias = club.diasc;
                
            }*/
            console.log(index);
			this.index = index;
            this.nombre = nombrec;
            this.horario = horarioc;
            this.dias = diasc;
            
            this.funcion_texto= "EDITAR";
            this.btn_a = false;
            this.btn_e = true;

            
        },
        clicEditar(index, nombre, horario, dias){
            /*for (club of this.clubs) {
                this.nombre = club.nombrec;
                this.horario = club.horarioc;
                this.dias = club.diasc;
                
            }*/
            //console.log(index);
            this.clubs[index].nombrec = nombre;
            this.clubs[index].horarioc = horario;
            this.clubs[index].diasc = dias;
            
            this.funcion_texto= "AGREGAR";
            this.nombre='';
            this.horario='';
            this.dias='';
            this.btn_a = true;
            this.btn_e = false;

        },
        eliminar(index){
            //console.log(index);
            this.clubs.splice(index, 1);

        },
    }
	
}
</script>

