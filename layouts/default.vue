<template>
  <v-app light>
    <!--v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
      <v-list>
        <v-list-item v-for="(item, i) in menu" :key="i"  router exact>
          <v-list-item-action>
            <v-icon>mdi-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer-->
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      color="white"
      hide-on-scroll
      light
      flat
      class="mainbar"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="141deg, rgba(0,0,0,.5), rgba(0,0,0,0.7)"
        ></v-img>
      </template>

      <v-btn icon to="/">
        <img
          src="data:image/png;base64,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"
          height="25"
        />
      </v-btn>

      <!--v-app-bar-nav-icon @click.stop="drawer = !drawer" /-->
      <!--v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn-->

      <!--linear-gradient(141deg, #b94e0c 0%, #dd851b 71%, #ebb326 100%)-->
      <v-toolbar-title class="main-title">{{ title }}</v-toolbar-title>

      <!--template v-slot:extension>
        <v-tabs align-with-title background-color="transparent">
          <v-tab v-for="(item, i) in menu" :key="i">{{item.title}}</v-tab>
        </v-tabs>
      </template-->
      <v-spacer />
      {{$i18n.locale}}
      <NuxtLink :to="$i18n.path('')" class="Header__Link" exact>
            {{ $t('links.home') }}
          </NuxtLink>
                    <NuxtLink :to="$i18n.path('products')" class="Header__Link" exact>
            products
          </NuxtLink>

          <NuxtLink :to="$i18n.path('inspire')" class="Header__Link" exact>
            {{ $t('links.about') }}
          </NuxtLink>
          <NuxtLink v-if="$i18n.locale === 'en'" :to="`/fr` + $route.fullPath" class="Header__Link" active-class="none" exact>
            {{ $t('links.french') }}
          </NuxtLink>
          <NuxtLink v-else :to="$route.fullPath.replace(/^\/[^\/]+/, '')" class="Header__Link" active-class="none" exact>
            {{ $t('links.english') }}
          </NuxtLink>
      <v-btn
        class="mr-5 d-none d-md-inline"
        v-for="(item, i) in menu"
        :key="i"
        router
        exact
        outlined
        style="font-weight:300;border:1px solid gray"
        >{{ item.title }}</v-btn
      >
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
        class="d-xs d-md-none"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <nuxt />
    </v-content>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item v-for="(item, i) in menu" :key="i" router exact>
          <v-list-item-action>
            <v-icon>mdi-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!--v-footer :fixed="fixed" app>
      <span>&copy; 2019 SOLUTAS GmbH, Switzerland</span>
    </v-footer-->
  </v-app>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex'

/*

function add_cors_http_header(){
    header("Access-Control-Allow-Origin: *");
}
*/
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        },
        {
          icon: 'mdi-mail',
          title: 'Products',
          to: '/products'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'SOLUTAS. because simplicity matters.'
    }
  },
  asyncData: async function(context) {
    await this.setMenu()
  },
  methods: {
    ...mapActions({
      setMenu: 'menu/get'
    }),
    ...mapGetters({
      menud: 'menu/menu'
    })
  },
  computed: {
    menu() {
      return this.$store.state.menu.main
    }
  },
  created: async function() {
    // await this.setMenu()
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300&display=swap');
.mainbar {
  /*  background-image: linear-gradient(141deg, #b94e0c9f 0%, #dd861ba1 71%, #ebb32688 100%);
  background-image: linear-gradient(141deg, #b94e0c 0%, #dd861b 71%, #ebb326 100%);
*/
}
.main-title {
  font-family: 'Open Sans Condensed', sans-serif;
  text-transform: uppercase;

  padding-left: 0 !important;
}

.v-application .v-app-bar--is-scrolled {
  /*background-color: white !important;*/
}
</style>
