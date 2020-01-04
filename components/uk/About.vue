<template>
  <div class="main-client section_clients_mod-a">
    <b-container class="mt-5">
      <b-row>
        <b-col>
          <div class="section_mod-2">
            <h2 class="ui-title-block">
              {{ ukHtmlObject.meta.aboutTitle }}
            </h2>
            <div class="border-color border-color_default"></div>
          </div>
          <span v-html="ukHtmlObject.meta.aboutText"></span>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
