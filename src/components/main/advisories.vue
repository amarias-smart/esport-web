<template>
  <q-carousel
    autoplay
    arrows
    animated
    infinite
    control-color="grey-6"
    :fullscreen.sync="fullscreen"
    height="550px"
    v-model="slide"
    class="bg-grey-9"
    transition-next="slide-left"
    transition-prev="slide-right"
  >
    <q-carousel-slide
      v-for="(pic, i) in pics"
      :key="i"
      :name="i"
      class="q-pa-none"
    >
      <q-scroll-area class="fit">
        <q-img :src="'uploads/advisories/' + pic" spinner-color="white" />
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
export default {
  name: "advisories",

  data() {
    return {
      slide: 0,
      fullscreen: false,
      pics: []
    };
  },

  created() {
    this.$axios
      .get("api/get/advisory_list")
      .then(res => (this.pics = res.data));
  }
};
</script>
