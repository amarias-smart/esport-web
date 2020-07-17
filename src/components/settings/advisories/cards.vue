<template>
  <div class="mansory cols">
    <div class="item" v-for="(pic, i) in data" :key="i">
      <q-card>
        <q-img :src="'uploads/advisories/' + pic" />
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cards",

  props: ["data"]
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
