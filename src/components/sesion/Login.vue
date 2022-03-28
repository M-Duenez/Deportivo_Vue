<template>
  <div>
    <div class="form">
      <h2>Iniciar Sesión</h2>
      <p>
        <input type="text" placeholder="Correo Electrónico" />
      </p>
      <p>
        <input type="password" placeholder="Contraseña"  />
      </p>
      <button @click="submitForm(session)">Ingresar</button>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
	name:'CLogin',
  computed:{
    ...mapState(['session'])
  },
  methods:{
    submitForm(session){
      if(session == false){
        console.log('estoy aqui');  
        session = true;
      }
      
    },
  }
}

</script>