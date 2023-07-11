<script setup>
import { useForm, useField } from 'vee-validate'
import { loginSchema } from '../validation/loginSchema'

const { handleSubmit } = useForm({ validationSchema: loginSchema })

const email = useField('email')
const password = useField('password')

const submit = handleSubmit(() => {
  console.log('Submit')
})
</script>

<template>
  <v-card flat max-width="600" class="mx-auto my-10">
    <v-card-title class="text-h3 font-weight-bold" tag="h3">Iniciar sesión</v-card-title>
    <v-card-subtitle class="text-h5">Inicia Sesión con tu Cuenta</v-card-subtitle>
    <v-form class="mt-5">
      <v-text-field
        type="email"
        label="Email"
        bg-color="blue-grey-lighten-5"
        class="mb-3"
        v-model="email.value.value"
        :error-messages="email.errorMessage.value"
      />
      <v-text-field
        type="password"
        label="Password"
        bg-color="blue-grey-lighten-5"
        class="mb-3"
        v-model="password.value.value"
        :error-messages="password.errorMessage.value"
      />

      <v-btn block color="pink-accent-3" @click="submit">Iniciar Sesón</v-btn>
    </v-form>
  </v-card>
</template>
