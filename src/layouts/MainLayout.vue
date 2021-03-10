<template>
  <q-layout view="lHr lpR lfr">
    <!-- HEADER -->
    <q-header
      reveal
      class="text-blue-grey bg-white"
    >
      <q-toolbar>
        <q-img
          src="~assets/esport-min-slategray.png"
          width="120px"
        />

        <q-space />

        <q-btn
          round
          flat
          icon="mdi-newspaper"
          @click="scrollTo('advisories')"
        >
          <q-tooltip content-class="text-uppercase">advisories</q-tooltip>
        </q-btn>

        <q-btn
          round
          flat
          icon="mdi-apps"
          @click="scrollTo('apps')"
        >
          <q-tooltip content-class="text-uppercase">
            exclusive selections
          </q-tooltip>
        </q-btn>

        <q-btn
          round
          flat
          icon="mdi-calendar"
          @click="scrollTo('events')"
        >
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

        <q-btn
          round
          flat
          icon="mdi-cog"
          to="/Settings"
          v-show="showSettings"
        >
          <q-tooltip content-class="text-uppercase">settings</q-tooltip>
        </q-btn>

        <q-separator
          vertical
          inset
          dark
          spaced
        />

        <q-btn
          flat
          label="esolve"
          type="a"
          href="http://10.122.8.236/esolve/"
          target="_blank"
        />
      </q-toolbar>

      <!-- IE Warning -->
      <q-toolbar
        inset
        class="bg-red-3"
        v-show="$q.platform.is.ie"
      >
        <div class="text-center fit">
          <q-icon
            name="mdi-information-outline"
            size="sm"
          />
          for better performance kindly open ESPort in Google Chrome
        </div>
      </q-toolbar>
    </q-header>

    <!-- PAGE -->
    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- FOOTER -->
    <q-footer class="q-pa-lg text-white bg-white">
      <div class="text-weight-light text-center">
        DEVELOPED BY AMARIAS
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",

  data () {
    return {
      user: [],
      showSettings: false
    };
  },

  created () {
    this.$axios.get("api/get/userz").then(res => {
      if (res.data.length > 0) {
        this.showSettings = res.data[0].role === 'admin' ? true : false
      }
    });
  },

  methods: {
    scrollTo (el) {
      const dom = document.getElementById(el);

      dom.scrollIntoView({ behavior: "smooth", block: "start" });
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
