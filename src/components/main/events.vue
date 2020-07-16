<template>
  <q-card flat bordered class="bg-grey-3">
    <q-card-section class="row justify-center">
      <q-input
        label="search for an event..."
        outlined
        rounded
        bg-color="white"
        v-model="search"
        class="col-6 col-md-8"
      >
        <q-icon slot="prepend" name="mdi-magnify" />
      </q-input>
    </q-card-section>

    <q-card-section
      class="row justify-center q-col-gutter-sm"
      v-if="getEvents.length > 0"
    >
      <div
        class="col-12 col-sm-6 col-md-4"
        v-for="event in getEvents"
        :key="event.id"
      >
        <q-card class="fit">
          <q-img
            src="https://picsum.photos/900/400"
            style="width: 100%; object-fit: contain;"
            height="150px"
          />
          <q-card-section>
            <div class="ellipsis">{{ event.title }}</div>
            <div class="text-caption">{{ event.timestamp }}</div>
          </q-card-section>
          <q-separator />
          <q-card-actions vertical>
            <q-btn flat @click="seeMore(event)">See More</q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </q-card-section>

    <q-card-section v-else class="text-center">
      <div class="text-h5 text-weight-light">
        No events to currently show...
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import { date } from "quasar";
import eventDetails from "./events-detail";

export default {
  name: "events",

  computed: {
    getEvents() {
      return this.eventList.map(m => {
        let timestamp = new Date(m.timestamp);
        m.timestamp = date.formatDate(timestamp, "Do MMM YYYY");
        m.attachments = JSON.parse(m.attachments);
        return m;
      });
    }
  },

  data() {
    return {
      search: "",
      eventList: []
    };
  },

  methods: {
    seeMore(data) {
      this.$q.dialog({
        component: eventDetails,
        parent: this,
        data: data
      });
    }
  },

  created() {
    this.$axios
      .get("api/get/event_list")
      .then(res => (this.eventList = res.data));
  }
};
</script>
