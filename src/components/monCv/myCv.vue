<template>
  <div class="q-pa-md q-gutter-sm text-center text-white">
    <div class="row">
      <div class="col-1"></div>
      <div class="col-10 bg-purple-8 border tw  q-ma-lg">
        <h3>Mon CV </h3>
      </div>
      <div class="col-1"></div>
    </div>
    <div class="q-ma-xl">
    <q-btn class="text-center myfont"  label="Voir Mon Cv" color="purple-9" @click="layout = true"
      padding="xl"
      round
    />
    </div>
    <q-dialog v-model="layout">
      <q-layout view="Lhh lpR fff" container class="bg-white">
        <q-header class="bg-purple-10">
          <q-toolbar>
            <q-toolbar-title>Mon Cv</q-toolbar-title>
            <q-btn flat v-close-popup round dense icon="close" />
          </q-toolbar>
        </q-header>
        <q-footer class="bg-black text-white">
          <q-toolbar inset>
            <q-toolbar-title>Télécharger mon cv </q-toolbar-title>
            <q-btn label="Download" color="purple" @click="getPDF"></q-btn>
          </q-toolbar>
        </q-footer>
        <q-page-container class="bg-purple-10">
          <q-page>
             <q-img class="mycv" src="../../../public/images/cv.png"></q-img>
          </q-page>
        </q-page-container>
      </q-layout>
    </q-dialog>
  </div>
</template>
<script>
export default {
  getPDF: function () {
  },
  data () {
    return {
      layout: false,
      moreContent: true,
      drawer: false,
      drawerR: false
    }
  }
}
</script>
