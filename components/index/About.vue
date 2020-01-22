<template>
  <div class="main-client section_clients_mod-a">
    <b-container class="mt-5">
      <b-row>
        <b-col>
          <div class="section_mod-2">
            <div
              v-html="homeHtmlObject.aboutTitle"
              class="ui-title-block"
            ></div>
            <div class="border-color border-color_default"></div>
          </div>
          <span v-html="homeHtmlObject.aboutText"></span>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
