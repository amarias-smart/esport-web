<template>
  <q-layout view="hHh LpR fFf">
    <q-header bordered class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          ESPortal
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="drawer = !drawer" />
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="drawer" side="right" bordered>
      <q-list class="fit" separator>
        <q-item-label header>Navigation:</q-item-label>
        <q-item clickable v-ripple exact to="/">
          <q-item-section avatar>
            <q-icon name="mdi-home-outline" />
          </q-item-section>
          <q-item-section>Main Page</q-item-section>
        </q-item>
        <q-item clickable v-ripple exact to="/">
          <q-item-section avatar>
            <q-icon name="mdi-cog-outline" />
          </q-item-section>
          <q-item-section>Settings Page</q-item-section>
        </q-item>

        <q-item-label header>Option(s):</q-item-label>
        <q-item clickable v-ripple to="/Maintenance/Advisories">
          <q-item-section avatar>
            <q-icon name="mdi-newspaper" />
          </q-item-section>
          <q-item-section>Advisory</q-item-section>
        </q-item>

        <q-item clickable v-ripple exact to="/Maintenance/Apps">
          <q-item-section avatar>
            <q-icon name="mdi-apps" />
          </q-item-section>
          <q-item-section>Apps</q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/Maintenance/Events">
          <q-item-section avatar>
            <q-icon name="mdi-calendar" />
          </q-item-section>
          <q-item-section>Events</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      drawer: false
    };
  }
};
</script>
