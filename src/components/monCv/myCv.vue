<template>
  <div class="q-pa-md q-gutter-sm text-center">
    <q-btn class="text-center" label="Voir Mon Cv" color="purple-8" @click="layout = true"
      padding="xl"
      round
    />
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
