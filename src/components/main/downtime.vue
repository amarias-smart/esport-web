<template>
  <q-card
    flat
    bordered
  >
    <q-card-section
      class="row justify-center"
      v-if="getDowntimeList.length > 0"
    >
      <q-list
        bordered
        class="rounded-borders"
        style="width: 100%; max-width: 70%"
        separator
      >
        <q-item
          clickable
          v-ripple
          v-for="event in getDowntimeList"
          :key="event.id"
          @click="viewDetails(event)"
        >
          <q-item-section avatar>
            <q-icon
              :name="event.icon"
              :color="event.status"
            />
          </q-item-section>

          <q-item-section>
            <q-item-label lines="1">{{ event.title }}</q-item-label>
            <q-item-label
              caption
              lines="1"
            >
              {{ event.description }}
            </q-item-label>
          </q-item-section>

          <q-item-section
            side
            top
          >
            {{ event.timestamp }}
          </q-item-section>
        </q-item>
      </q-list>
    </q-card-section>

    <q-card-section
      v-else
      class="text-center"
    >
      <div class="text-h5 text-weight-light text-purple">
        No new data to show yet...
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import { date } from "quasar";
import downtimeDetail from "./downtime-detail";

export default {
  name: "downtime",

  data () {
    return {
      downtimeList: []
    };
  },

  computed: {
    getDowntimeList () {
      let _this = this;
      return _this.downtimeList.map(m => {
        let timestamp = new Date(m.timestamp);
        m.timestamp = date.formatDate(timestamp, "Do MMM hh:mm A");
        return m;
      });
    }
  },

  created () {
    let _this = this;
    this.$axios
      .get("api/get/downtime_list")
      .then(res => (_this.downtimeList = res.data));
  },

  methods: {
    viewDetails (data) {
      let _this = this;
      _this.$q.dialog({
        component: downtimeDetail,
        parent: _this,
        data: data
      });
    }
  }
};
</script>
