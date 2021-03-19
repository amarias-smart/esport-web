<template>
  <q-card
    flat
    class="bg-grey-3"
  >
    <!-- SEARCH -->
    <q-card-section class="row justify-center">
      <q-input
        label="search for an app or tool..."
        outlined
        rounded
        bg-color="white"
        class="col-6"
        v-model="search"
        hint="Opening a shared path in modern browsers are disabled by default for security reasons"
      >
        <q-icon
          slot="prepend"
          name="mdi-magnify"
        />
      </q-input>
      <a
        href="\\10.122.8.236\IRESCUE$\ENABLING CENTER\Expanded EC\IRAB\screen recording"
        target="_blank"
      >TEST</a>
    </q-card-section>

    <!-- APP LIST -->
    <q-card-section
      key="apps"
      class="row justify-center q-col-gutter-sm"
    >
      <div
        class="col-12 col-xs-6 col-sm-3 col-md-2"
        v-for="(app, index) in getApps"
        :key="app.id"
      >
        <q-btn
          v-if="app.local"
          unelevated
          stack
          class="fit text-white q-py-sm overflow-hidden"
          :class="index % 2 ? 'bg-red-5' : 'bg-green-5'"
          style="min-height: 100px;"
          type="a"
          :href="app.url"
          target="_blank"
        >
          <q-icon
            v-if="isIcon(app.icon)"
            size="5em"
            :name="app.icon"
            class="q-mb-sm glow"
          />
          <q-avatar
            v-else
            square
            size="5em"
          >
            <q-img :src="`uploads/apps/${app.icon}`" />
          </q-avatar>
          <div class="text-grey-9 text-weight-bold">
            {{ app.title }}
          </div>
          <q-tooltip
            content-class="bg-indigo"
            :offset="[10, 10]"
          >
            {{ app.description }}
          </q-tooltip>
        </q-btn>

        <q-btn
          v-else
          unelevated
          stack
          class="fit text-white q-py-sm overflow-hidden"
          :class="index % 2 ? 'bg-red-5' : 'bg-green-5'"
          style="min-height: 100px;"
          @click="openUrl(app.url)"
        >
          <q-icon
            v-if="isIcon(app.icon)"
            size="5em"
            :name="app.icon"
            class="q-mb-sm glow"
          />
          <q-avatar
            v-else
            square
            size="5em"
          >
            <q-img :src="`uploads/apps/${app.icon}`" />
          </q-avatar>
          <div class="text-grey-9 text-weight-bold">
            {{ app.title }}
          </div>
          <q-tooltip
            content-class="bg-indigo"
            :offset="[10, 10]"
          >
            {{ app.description }}
          </q-tooltip>
        </q-btn>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import { openURL } from "quasar";

export default {
  name: "apps",

  data () {
    return {
      search: "",
      apps: []
    };
  },

  computed: {
    getApps () {
      let _this = this;
      return _this.apps.filter(
        f => f.title.toLowerCase().indexOf(_this.search) > -1
      );
    }
  },

  created () {
    let _this = this;
    _this.$axios.get("api/get/userz").then(res => {
      let filter = res.data.length === 0 ? 'guest' : res.data[0].role

      _this.$axios.get(`api/get/app_list?filter=${filter}`)
        .then(res => (_this.apps = res.data));
    });
  },

  methods: {
    openUrl (url) {
      openURL(url);
    },
    getPastel (n) {
      let hue = Math.floor(Math.random() * 360);
      let pastel = "hsl(" + hue + ", 100%, 80%)";

      return pastel;
    },
    isIcon (icon) {
      return icon.indexOf("mdi-") === 0 ? true : false;
    }
  }
};
</script>

<style lang="stylus" scoped>
* {
  transition: 0.3s all ease;
}
</style>
