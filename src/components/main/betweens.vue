<template>
  <q-parallax
    :height="180"
    :src="getImage(bg)"
    class="bg-primary"
  >
    <div class="text-center text-white">
      <div class="text-h4 text-weight-thin text-uppercase">{{ title }}</div>
      <div class="text-weight-light">{{ caption }}</div>
    </div>
  </q-parallax>
</template>

<script>
export default {
  name: "betweens",

  props: ["bg", "title", 'caption'],

  methods: {
    getImage (name) {
      return require(`../../assets/gradient/${name}.jpg`);
    }
  }
};
</script>
