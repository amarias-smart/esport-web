<template>
  <q-page padding class="row justify-center">
    <q-card class="overflow-hidden col-10">
      <advisories id="advisories" />

      <betweens id="apps" bg="Red Sunset" title="Exclusive Selections" />
      <apps />

      <betweens id="events" bg="Crystal Clear" title="Extra Scoop" />
      <events />

      <betweens id="downtime" bg="eXpresso" title="Enabling Systems" />
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
