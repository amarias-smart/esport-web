<template>
  <q-carousel
    animated
    infinite
    navigation
    :fullscreen.sync="fullscreen"
    height="500px"
    v-model="slide"
    class="bg-grey-9"
  >
    <q-carousel-slide
      v-for="(pic, i) in pics"
      :key="i"
      :name="i"
      :img-src="pic"
      class="q-pa-none"
    />

    <template v-slot:control>
      <q-carousel-control position="bottom-right" :offset="[18, 18]">
        <q-btn
          round
          dense
          color="white"
          text-color="primary"
          :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
          @click="fullscreen = !fullscreen"
        />
      </q-carousel-control>
    </template>
  </q-carousel>
</template>

<script>
const pics = require.context(
  "src/statics/advisories",
  true,
  /^.*\.(png|jpe?g)$/
);

export default {
  name: "advisories",

  data() {
    return {
      slide: 1,
      fullscreen: false,
      pics: pics
        .keys()
        .map(m => m.replace(".", "statics/advisories"))
        .sort(() => Math.random() - 0.5)
    };
  },

  mounted() {
    console.log(this.pics);
  }
};
</script>
