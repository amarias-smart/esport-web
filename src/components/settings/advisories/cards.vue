<template>
  <div class="mansory cols">
    <div
      class="item"
      v-for="(pic, i) in data"
      :key="i"
      style="postition: relative;"
    >
      <q-card class="overflow-hidden">
        <q-btn
          fab-mini
          icon="mdi-close"
          color="red-12"
          :style="{
            position: 'absolute',
            'z-index': 1,
            top: '5px',
            right: '5px'
          }"
          @click="deleteMe(pic)"
        />
        <q-img :src="`uploads/advisories/${pic.FileName}`" />
      </q-card>
    </div>
  </div>
</template>

<script>
import { notify } from "boot/notifier";
export default {
  name: "Cards",

  props: ["data"],

  methods: {
    deleteMe (file) {
      const fileName = file.FileName;

      this.$q
        .dialog({
          title: "Delete File:",
          message: `This will delete "${fileName}"`,
          ok: "Confirm",
          color: "red"
        })
        .onOk(() => {
          this.$axios
            .post(`api/delete/advisory/?id=${fileName}`)
            .then(_ => this.$router.go());
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.masonry {
  width: 100%;
  max-width: 700px;
  margin: 1em auto;
}

.cols {
  -moz-column-count: 3;
  -moz-column-gap: 2%;
  -moz-column-width: 30%;

  -webkit-column-count: 3;
  -webkit-column-gap: 2%;
  -webkit-column-width: 30%;

  column-count: 3;
  column-gap: 2%;
  column-width: 30%;
}

.item {
  margin-bottom: 20px;
}
</style>
