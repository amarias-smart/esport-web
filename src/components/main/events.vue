<template>
  <q-card flat bordered class="bg-grey-3">
    <q-card-section class="row justify-center">
      <q-input
        label="search for an event..."
        outlined
        rounded
        v-model="search"
        class="col-6"
        bg-color="white"
      >
      </q-input>
    </q-card-section>

    <q-card-section class="row justify-center q-col-gutter-sm">
      <div class="col-3" v-for="i in 15" :key="i">
        <q-card>
          <q-img
            src="https://picsum.photos/900/400"
            style="width: 100%; object-fit: contain;"
          />
          <q-card-section>
            <div>Lorem ipsum dolor sit amet</div>
            <div class="text-caption">3rd Jan 2020</div>
          </q-card-section>
          <q-separator />
          <q-card-actions vertical>
            <q-btn flat>See More</q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "events",

  data() {
    return {
      search: ""
    };
  }
};
</script>
