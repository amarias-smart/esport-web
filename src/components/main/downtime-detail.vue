<template>
  <q-dialog ref="dialog" @hide="onDialogHide">
    <q-card class="q-dialog-plugin" style="width: 700px; max-width: 80vw;">
      <q-card-section>
        <div class="text-h4 text-weight-light">
          {{ data.title }}
        </div>
        <div class="text-caption text-grey-8">{{ data.timestamp }}</div>
        <div class="text-caption">{{ data.description }}</div>
      </q-card-section>
      <q-separator spaced inset class="q-mb-lg" v-show="data.contents" />
      <q-card-section v-html="data.contents"> </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  props: ["data"],

  methods: {
    show() {
      this.$refs.dialog.show();
    },

    hide() {
      this.$refs.dialog.hide();
    },

    onDialogHide() {
      this.$emit("hide");
    },

    onOKClick() {
      this.$emit("ok");
      this.hide();
    },

    onCancelClick() {
      this.hide();
    }
  }
};
</script>
