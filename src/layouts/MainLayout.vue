<template>
  <q-layout view="lHr lpR lfr">
    <!-- HEADER -->
    <q-header
      reveal
      :class="$q.dark.isActive ? 'bg-grey-10' : 'bg-grey-4'"
    >
      <q-toolbar>
        <q-img
          src="~assets/esport-min-slategray.png"
          width="120px"
        />

        <q-space />

        <!-- TO ADVISORIES -->
        <q-btn
          round
          flat
          icon="mdi-newspaper"
          :color="textColor"
          @click="scrollTo('advisories')"
        >
          <q-tooltip content-class="text-uppercase">advisories</q-tooltip>
        </q-btn>

        <!-- TO APPS -->
        <q-btn
          round
          flat
          icon="mdi-apps"
          :color="textColor"
          @click="scrollTo('apps')"
        >
          <q-tooltip content-class="text-uppercase">
            exclusive selections
          </q-tooltip>
        </q-btn>

        <!-- TO EVENTS -->
        <q-btn
          round
          flat
          icon="mdi-calendar"
          :color="textColor"
          @click="scrollTo('events')"
        >
          <q-tooltip content-class="text-uppercase">extra sccop</q-tooltip>
        </q-btn>

        <!-- TO DOWNTIME -->
        <q-btn
          round
          flat
          icon="mdi-server-network"
          :color="textColor"
          @click="scrollTo('downtime')"
        >
          <q-tooltip content-class="text-uppercase">enabling systems</q-tooltip>
        </q-btn>

        <!-- TO SETTINGS -->
        <q-btn
          round
          flat
          icon="mdi-cog"
          to="/Settings"
          :color="textColor"
          v-show="showSettings"
        >
          <q-tooltip content-class="text-uppercase">settings</q-tooltip>
        </q-btn>

        <!-- MISC -->
        <q-btn-dropdown
          stretch
          flat
          label="misc"
          :color="textColor"
        >
          <q-list>
            <!-- INVERT COLOR -->
            <q-item
              clickable
              v-close-popup
              @click="$q.dark.toggle()"
            >
              <q-item-section avatar>
                <q-avatar
                  icon="mdi-invert-colors"
                  color="accent"
                  text-color="white"
                />
              </q-item-section>
              <q-item-section>
                <q-item-label v-if="$q.dark.isActive">Light Mode</q-item-label>
                <q-item-label v-else>Dark Mode</q-item-label>
              </q-item-section>
            </q-item>

            <!-- FULLSCREEN -->
            <q-item
              clickable
              v-close-popup
              @click="$q.fullscreen.toggle()"
            >
              <q-item-section avatar>
                <q-avatar
                  :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
                  color="accent"
                  text-color="white"
                />
              </q-item-section>
              <q-item-section>
                <q-item-label v-if="$q.fullscreen.isActive">Unfocus</q-item-label>
                <q-item-label v-else>Focus</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>

        <q-separator
          vertical
          inset
          spaced
        />

        <!-- TO ESOLVE -->
        <q-btn
          flat
          label="esolve"
          type="a"
          href="http://10.122.8.236/esolve/"
          target="_blank"
          :color="textColor"
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
    <q-footer
      class="q-pa-lg"
      :class="$q.dark.isActive ? 'bg-grey-10 text-grey-10' : 'bg-grey-4 text-grey-4'"
    >
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

  computed: {
    textColor () { return this.$q.dark.isActive ? 'grey-5' : 'grey-8' }
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
