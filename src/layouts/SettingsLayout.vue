<template>
  <q-layout
    view="hHr lpR fFr"
    class="gradient-bg"
  >
    <!-- HEADER -->
    <q-header
      elevated
      :class="$q.dark.isActive ? 'bg-grey-10 text-grey-5' : 'bg-grey-4 text-grey-8'"
    >
      <q-toolbar>
        <q-toolbar-title>
          ESPortal
        </q-toolbar-title>

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

        <!-- DRAWER -->
        <q-btn
          dense
          flat
          round
          icon="menu"
          @click="drawer = !drawer"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      v-model="drawer"
      side="right"
      elevated
    >
      <q-list
        class="fit"
        separator
      >
        <q-item-label header>Navigation:</q-item-label>
        <q-item
          clickable
          v-ripple
          exact
          to="/Harbour"
        >
          <q-item-section avatar>
            <q-icon name="mdi-home-outline" />
          </q-item-section>
          <q-item-section>Main Page</q-item-section>
        </q-item>
        <q-item
          clickable
          v-ripple
          exact
          to="/Settings"
        >
          <q-item-section avatar>
            <q-icon name="mdi-cog-outline" />
          </q-item-section>
          <q-item-section>Settings Page</q-item-section>
        </q-item>

        <q-item-label header>Option(s):</q-item-label>
        <q-item
          clickable
          v-ripple
          to="/Settings/Advisories"
        >
          <q-item-section avatar>
            <q-icon name="mdi-newspaper" />
          </q-item-section>
          <q-item-section>Advisory</q-item-section>
        </q-item>

        <q-item
          clickable
          v-ripple
          exact
          to="/Settings/Apps"
        >
          <q-item-section avatar>
            <q-icon name="mdi-apps" />
          </q-item-section>
          <q-item-section>Apps</q-item-section>
        </q-item>

        <q-item
          clickable
          v-ripple
          to="/Settings/Events"
        >
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
  data () {
    return {
      drawer: false
    };
  },

  computed: {
    textColor () { return this.$q.dark.isActive ? 'grey-5' : 'grey-8' }
  },
};
</script>

<style lang="scss" scoped>
.gradient-bg2 {
  background: #e6dada;
  background: -webkit-linear-gradient(to bottom, #e6dada, #274046);
  background: linear-gradient(to bottom, #e6dada, #274046);
}

.gradient-bg {
  background: linear-gradient(270deg, #b4656f, #948392);
  background-size: 400% 400%;

  -webkit-animation: colorGradiation 30s ease infinite;
  -moz-animation: colorGradiation 30s ease infinite;
  animation: colorGradiation 30s ease infinite;
}

@-webkit-keyframes colorGradiation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@-moz-keyframes colorGradiation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@keyframes colorGradiation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
