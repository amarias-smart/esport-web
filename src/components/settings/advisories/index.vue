<template>
  <div class="q-pa-md">
    <CARDS :data="advisoryList" />

    <q-page-sticky
      position="bottom-right"
      :offset="[18, 18]"
      style="z-index: 2;"
    >
      <q-btn
        fab
        icon="add"
        color="light-green"
        @click="openUploader"
      />
    </q-page-sticky>
  </div>
</template>

<script>
import uploader from "./uploader";

export default {
  name: "advisories",

  components: {
    CARDS: () => import("./cards")
  },

  data () {
    return {
      advisoryList: []
    };
  },

  created () {
    this.$axios
      .get("api/get/advisory_list")
      .then(res => (this.advisoryList = res.data.reverse()))
  },

  methods: {
    openUploader () {
      this.$q.dialog({
        component: uploader,
        parent: this
      });
    }
  }
};
</script>
