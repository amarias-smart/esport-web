<template>
  <q-table
    hover
    wrap-cells
    title="APP LIST"
    table-header-class="text-h6"
    separator="vertical"
    :loading="loading"
    :data="data"
    :columns="columns"
    row-key="id"
    :rows-per-page-options="[8, 12, 24, 50]"
    :filter="filter"
    selection="single"
    :selected.sync="selected"
  >
    <!-- TOP FIELD -->
    <template v-slot:top-right>
      <q-input
        borderless
        dense
        debounce="500"
        v-model="filter"
        placeholder="Search"
      >
        <template v-slot:append>
          <q-icon name="mdi-magnify" />
        </template>
      </q-input>

      <q-btn
        fab-mini
        icon="mdi-plus"
        color="green"
        :disable="loading"
        @click="addRow"
        class="q-mx-sm"
      />

      <q-btn
        fab-mini
        icon="mdi-delete-outline"
        color="red"
        :disable="selected.length === 0 ? true : false"
        @click="remRow"
      />
    </template>

    <!-- BODY -->
    <template v-slot:body="props">
      <q-tr :props="props">
        <q-td auto-width>
          <q-checkbox dense v-model="props.selected" />
        </q-td>

        <q-td key="title" :props="props">
          {{ props.row.title }}
          <q-popup-edit
            v-model="props.row.title"
            buttons
            @save="(v, iv) => saved(v, iv, props.row)"
          >
            <q-input type="text" v-model="props.row.title" dense autofocus />
          </q-popup-edit>
        </q-td>

        <q-td key="description" :props="props">
          {{ props.row.description }}
          <q-popup-edit
            v-model="props.row.description"
            buttons
            @save="(v, iv) => saved(v, iv, props.row)"
          >
            <q-input
              type="text"
              v-model="props.row.description"
              dense
              autofocus
            />
          </q-popup-edit>
        </q-td>

        <q-td key="url" :props="props">
          {{ props.row.url }}
          <q-popup-edit
            v-model="props.row.url"
            buttons
            @save="(v, iv) => saved(v, iv, props.row)"
          >
            <q-input type="text" v-model="props.row.url" dense autofocus />
          </q-popup-edit>
        </q-td>

        <q-td key="icon" :props="props">
          {{ props.row.icon }}
          <q-popup-edit
            v-model="props.row.icon"
            buttons
            @save="(v, iv) => saved(v, iv, props.row)"
          >
            <q-input type="text" v-model="props.row.icon" dense autofocus />
          </q-popup-edit>
        </q-td>

        <q-td key="profile" :props="props">
          {{ props.row.profile }}
        </q-td>
      </q-tr>
    </template>
  </q-table>
</template>

<script>
import { notify } from "boot/notifier";
import form from "./form";

export default {
  name: "appTable",

  props: ["data"],

  data() {
    return {
      loading: false,
      filter: "",
      selected: [],
      columns: [
        { name: "title", field: "title", label: "NAME" },
        {
          name: "description",
          field: "description",
          label: "DESC",
          align: "left"
        },
        {
          name: "url",
          field: "url",
          label: "PATH",
          align: "left",
          classes: "ellipsis",
          style: "max-width: 300px;"
        },
        { name: "icon", field: "icon", label: "ICON", align: "left" },
        { name: "profile", field: "profile", label: "PROF", align: "left" }
      ]
    };
  },

  methods: {
    saved(v, iv, r) {
      this.$axios
        .post("api/put/app", r)
        .then(_ => {
          notify(
            "Field Updated",
            "successfully saved",
            "mdi-database-check",
            "green"
          );
        })
        .catch(ex => {
          notify(
            "Unable to Update Field",
            `Error Encountered: ${ex.response.statusText}`,
            "mdi-database-remove",
            "red"
          );
        });
    },

    addRow() {
      this.$q.dialog({
        component: form
      });
    },

    remRow() {
      this.$q.notify({
        position: "top",
        message: "Delete App",
        caption: "Are you sure you want to delete this?",
        color: "red",
        icon: "mdi-alert-circle-outline",
        progress: true,
        timeout: "5000",
        actions: [
          {
            label: "Confirm",
            color: "yellow",
            handler: () => {
              const { id } = this.selected[0];
              this.$axios.post(`api/delete/app/${id}`).then(_ => {
                notify(
                  "Succefully Deleted",
                  "App has been removed",
                  "mdi-delete-empty",
                  "orange"
                );
              });

              setTimeout(() => {
                this.$router.go();
              }, 2000);
            }
          }
        ]
      });
    }
  }
};
</script>
