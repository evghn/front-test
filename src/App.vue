<script setup lang="ts">

import { RouterView } from 'vue-router'
import { routes } from './router';
</script>

<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-tabs v-if="!$vuetify.display.mobile" color="white">
        <v-tab v-for="(item, key) in routes" :key="key" :to="item.path" exact>
          {{ item.name }}
        </v-tab>
      </v-tabs>
    </v-app-bar>

    <v-main class="bg-grey-lighten-3">
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-sheet>

            </v-sheet>
          </v-col>
          <RouterView />
        </v-row>
      </v-container>
    </v-main>
  </v-app>






</template>
