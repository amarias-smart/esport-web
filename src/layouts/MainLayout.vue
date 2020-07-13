<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated reveal>
      <q-toolbar>
        <q-toolbar-title>
          ESPortal
        </q-toolbar-title>

        <q-btn round flat icon="mdi-newspaper" @click="scrollTo('advisories')">
          <q-tooltip content-class="text-uppercase">advisories</q-tooltip>
        </q-btn>

        <q-btn round flat icon="mdi-apps" @click="scrollTo('apps')">
          <q-tooltip content-class="text-uppercase">
            exclusive selections
          </q-tooltip>
        </q-btn>

        <q-btn round flat icon="mdi-calendar" @click="scrollTo('events')">
          <q-tooltip content-class="text-uppercase">extra sccop</q-tooltip>
        </q-btn>

        <q-btn
          round
          flat
          icon="mdi-server-network"
          @click="scrollTo('downtime')"
        >
          <q-tooltip content-class="text-uppercase">enabling systems</q-tooltip>
        </q-btn>

        <q-btn round flat icon="mdi-cog" to="/Settings">
          <q-tooltip content-class="text-uppercase">settings</q-tooltip>
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
import { scroll } from "quasar";

export default {
  name: "MainLayout",

  components: {},

  data() {
    return {};
  },

  methods: {
    scrollTo(el) {
      const { getScrollTarget, setScrollPosition } = scroll;
      const dom = document.getElementById(el);
      const target = getScrollTarget(dom);
      const offset = dom.offsetTop;
      const duration = 1000;
      setScrollPosition(target, offset, duration);
    }
  }
};
</script>
