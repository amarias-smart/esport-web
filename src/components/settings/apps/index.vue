<template>
  <div class="fit q-pa-lg">
    <TABLE :data="appList" />
  </div>
</template>

<script>
import table from "./table";

export default {
  name: "apps",

  components: {
    TABLE: table
  },

  data() {
    return {
      appList: []
    };
  },

  created() {
    this.$axios.get("api/get/app_list").then(res => (this.appList = res.data));
  }
};
</script>
