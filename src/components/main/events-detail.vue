<template>
  <q-dialog
    ref="dialog"
    @hide="onDialogHide"
    maximized
    transition-show="slide-up"
    transition-hide="slide-down"
  >
    <q-card class="q-dialog-plugin">
      <q-bar>
        <q-icon name="mdi-calendar" />
        <div>Event Details:</div>
        <q-space />
        <q-btn
          dense
          flat
          icon="close"
          v-close-popup
        >
          <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
        </q-btn>
      </q-bar>

      <q-card-section class="text-center">
        <q-img
          :src="`uploads/events/${data.id}/${data.thumbnail}`"
          width="60%"
        />
      </q-card-section>

      <q-card-section>
        <div class="text-h4 text-weight-light text-center q-mb-lg">
          {{ data.title }}
        </div>
        <q-separator
          spaced
          inset
        />
        <div
          v-html="data.contents"
          style="width: 80%; margin: auto;"
        ></div>
      </q-card-section>

      <q-card-section
        class="mansory cols"
        v-if="data.attachments.length > 1"
      >
        <div
          class="item"
          v-for="(pic, i) in data.attachments"
          :key="i"
          style="position: relative;"
        >
          <q-card
            flat
            class="overflow-hidden"
          >
            <q-img :src="`uploads/events/${data.id}/${pic}`" />
          </q-card>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  props: ["data"],

  methods: {
    show () {
      this.$refs.dialog.show();
    },

    hide () {
      this.$refs.dialog.hide();
    },

    onDialogHide () {
      this.$emit("hide");
    },

    onOKClick () {
      this.$emit("ok");
      this.hide();
    },

    onCancelClick () {
      this.hide();
    }
  }
};
</script>

<style lang="scss" scoped>
.masonry {
  width: 100%;
  max-width: 300px;
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
