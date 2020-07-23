<template>
  <q-layout view="lHh Lpr lFf">
    <!-- HEADER -->
    <q-header elevated reveal>
      <q-toolbar>
        <q-img src="~assets/esport-min.png" width="100px" />

        <q-toolbar-title> </q-toolbar-title>

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
      <q-toolbar inset class="bg-red-3" v-show="$q.platform.is.ie">
        <div class="text-center fit">
          <q-icon name="mdi-information-outline" size="sm" />
          for better performance kindly open ESPort in Google Chrome
        </div>
      </q-toolbar>
    </q-header>

    <!-- PAGE -->
    <q-page-container class="gradient-bg">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { scroll } from "quasar";

export default {
  name: "MainLayout",

  components: {},

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

<style lang="scss" scoped>
.gradient-bg {
  background: #e6dada;
  background: -webkit-linear-gradient(to bottom, #e6dada, #274046);
  background: linear-gradient(to bottom, #e6dada, #274046);
}
</style>
