const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "Harbour", component: () => import("pages/Index.vue") }]
  },

  {
    path: "/Settings",
    component: () => import("layouts/SettingsLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Settings.vue") },
      {
        path: "Advisories",
        component: () => import("components/settings/advisories/index.vue")
      },
      {
        path: "Apps",
        component: () => import("components/settings/apps/index.vue")
      },
      {
        path: "Events",
        component: () => import("components/settings/events/index.vue")
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
