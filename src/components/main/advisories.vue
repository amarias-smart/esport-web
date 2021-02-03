<template>
  <q-carousel
    :autoplay="autoplay"
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
      v-for="(pic, i) in picsFiltered"
      :key="i"
      :name="i"
      class="q-pa-none"
    >
      <q-scroll-area class="fit">
        <q-img
          :src="'uploads/advisories/' + pic.filename"
          spinner-color="white"
        />
      </q-scroll-area>
    </q-carousel-slide>

    <template v-slot:control>
      <q-carousel-control
        position="top-right"
        :offset="[18, 55]"
        class="text-white rounded-borders"
        style="background: rgba(0, 0, 0, .3); padding: 4px 8px;"
      >
        <q-select
          outlined
          dense
          v-model="picMonth"
          :options="picMonths"
          label="Month"
          style="width: 98px;"
        />
      </q-carousel-control>

      <q-carousel-control
        position="top-right"
        :offset="[18, 18]"
        class="text-white rounded-borders"
        style="background: rgba(0, 0, 0, .3); padding: 4px 8px;"
      >
        <q-toggle
          dense
          dark
          color="orange"
          v-model="autoplay"
          label="Auto Play"
        />
      </q-carousel-control>

      <q-carousel-control
        position="bottom-right"
        :offset="[18, 18]"
      >
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

  data () {
    return {
      slide: 0,
      fullscreen: false,
      autoplay: true,
      pics: [],
      picMonth: '',
      picMonths: []
    };
  },

  computed: {
    picsFiltered () {
      const _this = this
      return _this.pics.filter(f => {
        return f.month.indexOf(_this.picMonth) > -1
      });
    }
  },

  created () {
    this.$axios
      .get("api/get/advisory_list")
      .then(res => {
        this.pics = res.data.reverse()
        this.picMonths = [...new Set(res.data.map(m => m.month))]
      });
  }
};
</script>
