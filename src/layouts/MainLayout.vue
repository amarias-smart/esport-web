<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated reveal reveal-offset="100">
      <q-toolbar>
        <q-toolbar-title>
          ESPortal
        </q-toolbar-title>

        <q-btn round flat icon="mdi-newspaper">
          <q-tooltip content-class="text-uppercase">advisories</q-tooltip>
        </q-btn>

        <q-btn round flat icon="mdi-apps">
          <q-tooltip content-class="text-uppercase">
            exclusive selections
          </q-tooltip>
        </q-btn>

        <q-btn round flat icon="mdi-calendar">
          <q-tooltip content-class="text-uppercase">extra sccop</q-tooltip>
        </q-btn>

        <q-btn round flat icon="mdi-server-network">
          <q-tooltip content-class="text-uppercase">enabling systems</q-tooltip>
        </q-btn>

        <q-separator vertical inset dark spaced />

        <q-btn flat label="esolve" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",

  components: {},

  data() {
    return {};
  }
};
</script>
