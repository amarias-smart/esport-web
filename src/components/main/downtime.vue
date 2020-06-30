<template>
  <q-card flat bordered class="bg-grey-3">
    <q-card-section class="row justify-center">
      <q-list bordered class="rounded-borders" style="max-width: 70%" separator>
        <q-item clickable v-ripple v-for="i in 50" :key="i">
          <q-item-section avatar>
            <q-icon name="mdi-alert-circle-outline" />
          </q-item-section>

          <q-item-section>
            <q-item-label lines="1">Lorem ipsum</q-item-label>
            <q-item-label caption lines="1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis officiis id delectus culpa quas nisi, quibusdam quis
              animi facere. Inventore eius omnis quis nam optio debitis vel
              corporis, voluptatem modi.
            </q-item-label>
          </q-item-section>

          <q-item-section side top>
            1 min ago
          </q-item-section>
        </q-item>
      </q-list>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "downtime",
  data() {
    return {};
  }
};
</script>
