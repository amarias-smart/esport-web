<template>
  <div class="q-pa-lg q-mx-auto" style="max-width: 700px;">
    <LIST :data="eventList" />

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="add" color="green" @click="openForm" />
    </q-page-sticky>
  </div>
</template>

<script>
import form from "./form";

export default {
  name: "events",

  components: {
    LIST: () => import("./list")
  },

  data() {
    return {
      eventList: []
    };
  },

  created() {
    this.$axios
      .get("api/get/event_list")
      .then(res => (this.eventList = res.data));
  },

  methods: {
    openForm() {
      this.$q.dialog({
        component: form
      });
    }
  }
};
</script>
