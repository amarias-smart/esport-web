<template>
  <div class="q-pa-md">
    <CARDS :data="advisoryList" />
  </div>
</template>

<script>
export default {
  name: "Advisories",

  components: {
    CARDS: () => import("./cards")
  },

  data() {
    return {
      advisoryList: []
    };
  },

  created() {
    this.$axios
      .get("api/get/advisory_list")
      .then(res => (this.advisoryList = res.data));
  }
};
</script>
