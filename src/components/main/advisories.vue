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
    ref="advisoryCarousel"
  >
    <q-carousel-slide
      v-for="(pic, i) in picsFiltered"
      :key="i"
      :name="i"
      class="q-pa-none"
    >
      <q-scroll-area class="fit">
        <q-img
          :src="'uploads/advisories/' + pic.FileName"
          spinner-color="white"
        />
      </q-scroll-area>
    </q-carousel-slide>

    <template v-slot:control>
      <q-carousel-control
        position="top-right"
        :offset="[12, 10]"
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
        position="top-right"
        :offset="[12, 45]"
        class="text-white rounded-borders"
        style="background: rgba(0, 0, 0, .3); padding: 4px 8px;"
      >
        <q-select
          borderless
          dense
          v-model="picMonth"
          :options="picMonths"
          label="Month"
          style="width: 98px;"
        />
      </q-carousel-control>

      <q-carousel-control
        position="top-right"
        :offset="[12, 100]"
        class="text-white rounded-borders"
        style="background: rgba(0, 0, 0, .3); padding: 4px 8px;"
      >
        <q-input
          dense
          borderless
          color="white"
          style="width: 98px;"
          v-model="keyword"
          label="keyword"
          debounce="1000"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
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
      keyword: '',
      tags: [],
      pics: [],
      picMonth: '',
      picMonths: []
    };
  },

  computed: {
    picsFiltered () {
      const _this = this
      return _this.pics.filter(f => {
        const filterSubject = f.Subject.toUpperCase().indexOf(_this.picMonth) > -1
        const filterKeyword = f.Tags.indexOf(_this.keyword) > -1

        if (_this.picMonth.length > 0) return filterSubject
        else if (_this.keyword.length > 0) return filterKeyword
        else return filterSubject || filterKeyword
      });
      return []
    }
  },

  watch: {
    picsFiltered () {
      this.$refs.advisoryCarousel.next()
    }
  },

  created () {
    this.$axios
      .get("api/get/advisory_list")
      .then(res => {
        const data = res.data.filter(f => f.Subject !== null && f.Tags !== null).reverse()

        this.pics = data
        this.picMonths = [...new Set(data.map(m => m.Subject.toUpperCase().substring(0, 3)))]
        this.picMonths.unshift('')
      });
  }
};
</script>
