<template>
  <q-page
    padding
    class="row justify-center"
  >
    <q-card class="overflow-hidden col-10 shadow-10">
      <betweens
        id="advisories"
        bg="Digital Water"
        title="Advisories"
        caption="interact with options on the top-right of the slideshow"
      />

      <advisories />

      <betweens
        id="apps"
        bg="Crystal Clear"
        title="Exclusive Selections"
        caption="a listing of our apps to help you sail through obstacles"
      />
      <apps />

      <betweens
        id="events"
        bg="Red Sunset"
        title="Extra Scoop"
        caption="events and articles to view"
      />
      <events />

      <betweens
        id="downtime"
        bg="eXpresso"
        title="Enabling Systems"
        caption="downtime statuses filed from our ESolve"
      />
      <downtime />
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: "Index",

  components: {
    betweens: () => import("../components/main/betweens"),
    advisories: () => import("../components/main/advisories"),
    apps: () => import("../components/main/apps"),
    events: () => import("../components/main/events"),
    downtime: () => import("../components/main/downtime")
  }
};
</script>
