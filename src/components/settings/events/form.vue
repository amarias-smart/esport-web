<template>
  <q-dialog ref="dialog" @hide="onDialogHide">
    <q-card class="q-dialog-plugin">
      <q-card-section class="text-center">
        <div class="text-h5">
          Create a new Event
        </div>
      </q-card-section>

      <q-separator />

      <q-card-section>
        <q-input
          outlined
          label="Title"
          v-model="event.title"
          :rules="[val => !!val || 'Field is required']"
        />

        <q-editor
          v-model="event.contents"
          min-height="5rem"
          max-height="400px"
        />
      </q-card-section>

      <q-card-section>
        <q-uploader
          flat
          bordered
          hide-upload-btn
          multiple
          batch
          label="Attach Image(s) for Gallery"
          color="grey-9"
          url=""
          accept=".jpg, image/*"
          method="post"
          ref="uploader"
          class="fit"
          @uploaded="hasUploaded"
        />
      </q-card-section>

      <q-separator />

      <q-card-actions align="right">
        <q-btn color="green" label="save" @click="submitForm"></q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { notify } from "boot/notifier";

export default {
  props: [],

  data() {
    return {
      event: {
        title: "",
        contents: ""
      },
      url: "api/post/upload_to/?path=events/"
    };
  },

  methods: {
    submitForm() {
      if (this.event.title.length < 1) {
        notify(
          "Title is required",
          "A headline is needed",
          "mdi-comment-text",
          "orange"
        );
      } else if (this.event.contents.length < 1) {
        notify(
          "Article needs a body",
          "Kindly write something for the body",
          "mdi-comment-text",
          "orange"
        );
      } else if (this.$refs.uploader.files.length < 1) {
        notify(
          "Images are needed",
          "Attach some images",
          "mdi-file-image",
          "orange"
        );
      } else {
        this.$axios.post("api/post/event", this.event).then(res => {
          this.upload(res.data);
        });
      }
    },

    upload(id) {
      let uploader = this.$refs.uploader;
      uploader.url = this.url + id;

      uploader.upload();
    },

    hasUploaded() {
      this.$router.go();
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
