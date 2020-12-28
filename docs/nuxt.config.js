export default {
    // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
    ssr: false,

    // Target (https://go.nuxtjs.dev/config-target)
    target: "static",

    router: {
        base: "/polyfig/"
    },

    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: "polyfig | A simple JavaScript utility library",
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },
            {
                hid: "name",
                name: "name",
                content: "polyfig | A simple JavaScript utility library"
            },
            {
                hid: "description",
                name: "description",
                content: "polyfig | A simple JavaScript utility library"
            },
            {
                hid: "twitter:title",
                name: "twitter:title",
                content: "polyfig | A simple JavaScript utility library"
            },
            {
                hid: "twitter:description",
                name: "twitter:description",
                content: "polyfig | A simple JavaScript utility library"
            },
            {
                hid: "twitter:image",
                name: "twitter:image",
                content: "/polyfig/icon.png"
            },
            {
                hid: "twitter:image:alt",
                name: "twitter:image:alt",
                content: "polyfig | A simple JavaScript utility library"
            },
            {
                hid: "twitter:card",
                name: "twitter:card",
                content: "summary_large_image"
            },
            {
                hid: "twitter:url",
                name: "twitter:url",
                content: "https://jamieslome.github.io/polyfig/"
            },
            {
                hid: "og:type",
                property: "og:type",
                content: "website"
            },
            {
                hid: "og:title",
                property: "og:title",
                content: "polyfig | A simple JavaScript utility library"
            },
            {
                hid: "og:url",
                property: "og:url",
                content: "https://jamieslome.github.io/polyfig/"
            },
            {
                hid: "og:description",
                property: "og:description",
                content: "polyfig | A simple JavaScript utility library"
            },
            {
                hid: "og:image",
                property: "og:image",
                content: "/polyfig/icon.png"
            },
            {
                hid: "og:image:alt",
                property: "og:image:alt",
                content: "polyfig | A simple JavaScript utility library"
            },
            {
                hid: "keywords",
                name: "keywords",
                content: "vuejs, nuxt, javascript, polyfig, utility, library"
            }
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "/polyfig/favicon.ico" }
        ]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        "@nuxtjs/tailwindcss",
        [
            "@nuxtjs/fontawesome",
            {
                imports: [
                    {
                        set: "@fortawesome/free-solid-svg-icons",
                        icons: ["fas"]
                    },
                    {
                        set: "@fortawesome/free-brands-svg-icons",
                        icons: ["fab"]
                    }
                ]
            }
        ]
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/axios
        "@nuxtjs/axios",
        // https://go.nuxtjs.dev/pwa
        "@nuxtjs/pwa",
        // https://go.nuxtjs.dev/content
        "@nuxt/content"
    ],

    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    axios: {},

    // Content module configuration (https://go.nuxtjs.dev/config-content)
    content: {},

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {}
};
