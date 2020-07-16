<template>
  <q-dialog ref="dialog" @hide="onDialogHide">
    <q-card class="q-dialog-plugin" style="width: 60%;">
      <q-card-section>
        <div class="text-h4 text-weight-light text-center q-mb-lg">
          {{ data.title }}
        </div>
        <q-separator spaced inset />
        {{ data }}
      </q-card-section>
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
