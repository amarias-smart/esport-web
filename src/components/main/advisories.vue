<template>
  <q-carousel
    animated
    thumbnails
    infinite
    autoplay
    :fullscreen.sync="fullscreen"
    height="500px"
    v-model="slide"
    class="bg-grey-10"
  >
    <q-carousel-slide
      :name="1"
      img-src="https://cdn.quasar.dev/img/mountains.jpg"
    />
    <q-carousel-slide
      :name="2"
      img-src="https://cdn.quasar.dev/img/parallax1.jpg"
    />
    <q-carousel-slide
      :name="3"
      img-src="https://cdn.quasar.dev/img/parallax2.jpg"
    />
    <q-carousel-slide
      :name="4"
      img-src="https://cdn.quasar.dev/img/quasar.jpg"
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
export default {
  name: "advisories",

  data() {
    return {
      slide: 1,
      fullscreen: false
    };
  }
};
</script>
