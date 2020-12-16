
<template>
  <div class="q-pa-md bg-cyan" style="max-width: 100%">
    <q-toggle v-model="expanded" label="Expanded" class="q-mb-md" />

    <q-expansion-item
      v-model="expanded"
      icon="perm_identity"
      label="Messagerie"
      caption="Etienne Massot"
    >
      <q-card>
        <q-card-section>
            <q-list>
  <div class="q-pa-md">
    <q-table
      title="messages"
      :data="data"
      :row="row"
      row-key="name"
    />
  </div>
            </q-list>
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </div>
</template>
<script>
export default {
  data () {
    return {
      row: [
        {
          name: 'name',
          required: true,
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        {
          sujet: 'sujet',
          required: true,
          align: 'center',
          field: row => row.sujet,
          format: val => `${val}`,
          sortable: true

        },
        {
          mail: 'mail',
          required: true,
          align: 'center',
          field: row => row.mail,
          format: val => `${val}`,
          sortable: true
        }

      ],
      data: [
        {
          name: 'Mr Massot',
          sujet: 'Demande de devis',
          mail: 'massot.etienne@gmail.com'
        }
      ]
    }
  }
}
</script>
