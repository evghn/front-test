<script setup lang="ts">

import { RouterView } from 'vue-router'
import { routes } from './router';
import { useTheme } from 'vuetify';
import { computed, ref } from 'vue';
const theme = useTheme()

// Состояние темы
const isDarkTheme = ref(theme.global.name.value === 'dark')

// Текущая тема
const currentTheme = computed(() => isDarkTheme.value ? 'dark' : 'light')
</script>

<template>
  <v-app :theme="currentTheme">
    <v-app-bar app>
      <!-- Навигация слева -->
      <v-tabs v-if="!$vuetify.display.mobile">
        <v-tab v-for="(item, key) in routes" :key="key" :to="item.path" exact>
          {{ item.name }}
        </v-tab>
      </v-tabs>

      <v-spacer></v-spacer>

      <!-- Переключатель темы справа -->
      <div class="d-flex align-center mr-2 flex-row ga-2">
        <v-icon>
          mdi-weather-sunny
        </v-icon>
        <v-switch v-model="isDarkTheme" hide-details inset density="compact" class="mt-0"></v-switch>
        <v-icon>
          mdi-weather-night
        </v-icon>
      </div>
    </v-app-bar>
    <v-main>
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
