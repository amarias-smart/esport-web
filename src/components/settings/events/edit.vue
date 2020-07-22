<template>
  <q-dialog ref="dialog" @hide="onDialogHide">
    <q-card class="q-dialog-plugin" style="width: 100%; max-width: 700px;">
      <q-card-section>
        <div class="text-h5 text-center">
          {{ data.title }}
        </div>
      </q-card-section>

      <q-separator inset />

      <q-card-section>
        <q-editor v-model="editor" min-height="5rem" max-height="400px" />
      </q-card-section>

      <q-separator inset />

      <q-card-section class="row justify-center q-col-gutters-md">
        <div class="col-4">
          <q-img
            v-for="pic in data.attachments"
            :key="pic"
            :src="`uploads/events/${data.id}/${pic}`"
            class="shadow-3 zoom"
          />
        </div>
      </q-card-section>

      <q-separator inset />

      <q-card-actions align="right">
        <q-btn color="green" label="Save" @click="save" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { notify } from "boot/notifier";

export default {
  props: ["data"],

  data() {
    return {
      editor: "" || this.data.contents
    };
  },

  created() {
    this.$axios.get("api/get/event_images/" + this.data.id).then(res => {
      this.data.attachments = res.data;
    });
  },

  methods: {
    save() {
      this.data.contents = this.editor;

      this.$axios.post(`api/put/event/${this.data.id}`, this.data).then(_ => {
        notify(
          "Event Updated",
          "successfully saved",
          "mdi-database-check",
          "green"
        );

        this.hide();
      });
    },

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

<style lang="scss" scoped>
.zoom {
  transition: transform 0.2s;
}

.zoom:hover {
  transform: scale(1.7);
}
</style>
