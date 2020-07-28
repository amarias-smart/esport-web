<template>
  <q-layout view="hHr lpR fFr" class="gradient-bg">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          ESPortal
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="drawer = !drawer" />
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="drawer" side="right" elevated>
      <q-list class="fit" separator>
        <q-item-label header>Navigation:</q-item-label>
        <q-item clickable v-ripple exact to="/">
          <q-item-section avatar>
            <q-icon name="mdi-home-outline" />
          </q-item-section>
          <q-item-section>Main Page</q-item-section>
        </q-item>
        <q-item clickable v-ripple exact to="/Settings">
          <q-item-section avatar>
            <q-icon name="mdi-cog-outline" />
          </q-item-section>
          <q-item-section>Settings Page</q-item-section>
        </q-item>

        <q-item-label header>Option(s):</q-item-label>
        <q-item clickable v-ripple to="/Settings/Advisories">
          <q-item-section avatar>
            <q-icon name="mdi-newspaper" />
          </q-item-section>
          <q-item-section>Advisory</q-item-section>
        </q-item>

        <q-item clickable v-ripple exact to="/Settings/Apps">
          <q-item-section avatar>
            <q-icon name="mdi-apps" />
          </q-item-section>
          <q-item-section>Apps</q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/Settings/Events">
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

<style lang="scss" scoped>
.gradient-bg {
  background: #e6dada;
  background: -webkit-linear-gradient(to bottom, #e6dada, #274046);
  background: linear-gradient(to bottom, #e6dada, #274046);
}
</style>
