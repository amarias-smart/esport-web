<template>
  <q-carousel
    arrows
    animated
    infinite
    navigation
    control-color="grey-6"
    :fullscreen.sync="fullscreen"
    height="500px"
    v-model="slide"
    class="bg-grey-9"
  >
    <q-carousel-slide
      v-for="(pic, i) in pics"
      :key="i"
      :name="i"
      class="q-pa-none"
    >
      <q-scroll-area class="fit">
        <q-img :src="pic" />
      </q-scroll-area>
    </q-carousel-slide>

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
  "src/assets/advisories",
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
        .map(m => m.replace("./", "images/advisories/"))
        .sort(_ => Math.random() - 0.5)
    };
  }
};
</script>
