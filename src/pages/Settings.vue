<template>
  <q-page padding class="flex flex-center">
    <q-card>
      <q-card-section class="text-center">
        <div class="text-h5 text-weight-light">Available Options</div>
        <div class="text-caption">Open the menu to go to the following:</div>
      </q-card-section>
      <q-card-section>
        <q-list separator bordered>
          <q-item v-for="el in options" :key="el[2]">
            <q-item-section avatar>
              <q-icon :color="el[0]" :name="el[1]" />
            </q-item-section>
            <q-item-section>
              <q-item-label overline>{{ el[2] }}</q-item-label>
              <q-item-label>{{ el[3] }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import uploader from "src/components/settings/advisories/uploader";

const options = [
  ["green", "mdi-newspaper", "Advisories", "Add, Delete"],
  ["red", "mdi-apps", "Apps", "Add, Delete"],
  ["blue", "mdi-calendar", "Events", "Add, Delete"]
];

export default {
  name: "Settings",

  data() {
    return {
      options
    };
  }
};
</script>
