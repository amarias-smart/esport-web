<template>
  <q-card flat bordered class="bg-grey-3">
    <q-card-section class="row justify-center">
      <q-input
        label="search for an app..."
        outlined
        rounded
        v-model="search"
        class="col-6"
        bg-color="white"
      >
      </q-input>
    </q-card-section>

    <q-card-section class="row justify-center q-col-gutter-sm">
      <div class="col-6 col-sm-3 col-md-2" v-for="i in 20" :key="i">
        <q-btn
          stack
          class="fit text-white"
          :style="`background: ${getPastel()}`"
        >
          <q-icon size="3em" name="mdi-anchor" class="q-mb-sm" />
          <div class="text-grey-10 text-body2">Perfomance Reports</div>
        </q-btn>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "apps",

  data() {
    return {
      search: ""
    };
  },

  methods: {
    getPastel(n) {
      let hue = Math.floor(Math.random() * 360);
      let pastel = "hsl(" + hue + ", 100%, 80%)";

      return pastel;
    }
  }
};
</script>

<style lang="stylus" scoped>
* {
  transition: 0.3s all ease;
}
</style>
