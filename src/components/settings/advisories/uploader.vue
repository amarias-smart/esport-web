<template>
  <q-dialog
    ref="dialog"
    @hide="onDialogHide"
  >
    <q-card class="q-dialog-plugin">
      <!-- accept=".jpg, image/*" -->
      <q-uploader
        flat
        bordered
        hide-upload-btn
        multiple
        batch
        auto-upload
        label="Attach Image(s)"
        color="primary"
        class="fit"
        url="api/post/upload_to/?path=advisories"
        accept=".jpg"
        @uploaded="hasuploaded"
        with-credentials
      />
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  props: {
    // ...your custom props
  },

  data () {
    return {};
  },

  methods: {
    hasuploaded () {
      this.$router.go();
    },

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
