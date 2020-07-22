<template>
  <q-card>
    <q-list separator v-if="data.length > 0">
      <q-item v-for="item in data" :key="item.id">
        <q-item-section thumbnail class="q-pl-sm">
          <img :src="`uploads/events/${item.id}/${item.thumbnail}`" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ item.title }}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <div class="text-grey-8 q-gutter-xs">
            <q-btn
              flat
              dense
              round
              class="gt-xs"
              size="12px"
              icon="mdi-pencil"
              @click="editEvent(item)"
            />
            <q-btn
              flat
              dense
              round
              class="gt-xs"
              size="12px"
              icon="mdi-delete"
              @click="deleteEvent(item.id)"
            />
          </div>
        </q-item-section>
      </q-item>
    </q-list>

    <q-banner v-else class="bg-red text-white q-pa-lg">
      Unfortunately, there are no events to show.
    </q-banner>
  </q-card>
</template>

<script>
import { notify } from "boot/notifier";
import edit from "./edit";

export default {
  name: "eventList",

  props: ["data"],

  methods: {
    editEvent(item) {
      this.$q.dialog({
        component: edit,
        parent: this,
        data: item
      });
    },

    deleteEvent(id) {
      console.log(id);

      this.$q.notify({
        position: "top",
        message: "Delete App",
        caption: "Are you sure you want to delete this?",
        color: "red",
        icon: "mdi-alert-circle-outline",
        progress: true,
        timeout: "5000",
        actions: [
          {
            label: "Confirm",
            color: "yellow",
            handler: () => {
              this.$axios.post(`api/delete/event/${id}`).then(_ => {
                notify(
                  "Succefully Deleted",
                  "Event has been removed",
                  "mdi-delete-empty",
                  "orange"
                );
              });

              setTimeout(() => {
                this.$router.go();
              }, 3000);
            }
          }
        ]
      });
    }
  }
};
</script>
