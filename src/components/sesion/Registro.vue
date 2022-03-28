<template>
  <div class="form">
    <h2>Registrate</h2>
    <p>
      <input type="text" placeholder="Correo Electrónico" v-model="email" />
    </p>
    <p>
      <input type="password" placeholder="Contraseña" v-model="password.password" />
    </p>
    <p>
      <input type="password" placeholder="Confirmar contraseña" v-model="password.confirm" />
    </p>
    <button @click="submitForm">Registrar</button>
  </div>
</template>

<script>
// import useValidate from "@vuelidate/core";
// import { required } from "@vuelidate/validators";

/*export default {
  data() {
    return {
      // v$: useValidate(),
      email: '',
      password: {
        password: '',
        confirm: '',
      },
    };
  },
  validations() {
    // return {
    //   email: { required },
    //   password: {
    //     password: { required },
    //     confirm: { required },
    //   }
    // }
  },
  methods: {
    submitForm() {
        if (!this.v$.$error) { 
          alert('No has llenado los campus aún.')
        } else {
          alert('No has llenado los campus aún')
        }
    },
  },
};*/
</script>