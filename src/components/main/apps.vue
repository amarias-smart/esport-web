<template>
  <q-card flat bordered class="bg-grey-3">
    <q-card-section class="row justify-center">
      <q-input
        label="search for an app or tool..."
        outlined
        rounded
        bg-color="white"
        v-model="search"
        class="col-6"
      >
        <q-icon slot="prepend" name="mdi-magnify" />
      </q-input>
    </q-card-section>

    <q-card-section key="apps" class="row justify-center q-col-gutter-sm">
      <div
        class="col-12 col-xs-6 col-sm-4 col-md-3"
        v-for="(app, index) in getApps"
        :key="app.id"
      >
        <q-btn
          stack
          class="fit text-white q-py-sm"
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
          <q-avatar v-else square size="5em">
            <q-img :src="`uploads/apps/${app.icon}`" />
          </q-avatar>
          <div class="text-grey-9 text-weight-bold">
            {{ app.title }}
          </div>
        </q-btn>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import { openURL } from "quasar";

export default {
  name: "apps",

  data() {
    return {
      search: "",
      apps: []
    };
  },

  computed: {
    getApps() {
      let _this = this;
      return _this.apps.filter(
        f => f.title.toLowerCase().indexOf(_this.search) > -1
      );
    }
  },

  created() {
    let _this = this;
    _this.$axios.get("api/get/app_list").then(res => (_this.apps = res.data));
  },

  methods: {
    openUrl(url) {
      openURL(url);
    },
    getPastel(n) {
      let hue = Math.floor(Math.random() * 360);
      let pastel = "hsl(" + hue + ", 100%, 80%)";

      return pastel;
    },
    isIcon(icon) {
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
