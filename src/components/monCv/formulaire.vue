<template>
<div>
<div class="row">
    <div class="col-1">
    </div>
    <div class="col-10 bg-purple-8 border tw  q-ma-lg text-white text-center">
        <h3>Contacter moi</h3>
    </div>
    <div class="col-1">
    </div>
</div>
      <div class="row">
          <div class="col-1">
          </div>
   <div class="col-10">

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md bg-purple-9 q-pa-md q-ma-xl"
    >
      <q-input
        outlined
        class="bg-white"
        v-model="name"
        label="Votre Nom et Prénom"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'veuillez renseigner votre nom et prénom']"
      />

      <q-input
        class="bg-white"
        outlined
        type="email"
        v-model="email"
        label="Votre E-mail"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'veuillez renseigner votre adresse mail']"
      />
    <q-editor v-model="editor" min-height="10rem" />

      <q-toggle v-model="accept" label="I accept the license and terms" />

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
   </div>
   <div class="col-1">
   </div>
  </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      name: null,
      email: null,
      editor: null,

      accept: false
    }
  },

  methods: {
    onSubmit () {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first'
        })
      } else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
      }
    },

    onReset () {
      this.name = null
      this.age = null
      this.accept = false
    }
  }
}
</script>
