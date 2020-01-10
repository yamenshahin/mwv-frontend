<template>
  <div class="main-trust-box ">
    <b-container class="mt-5 mb-5">
      <b-row>
        <b-col class="text-center">
          <h2 class="ui-title-block">{{ ukHtmlObject.meta.trustBoxTitle }}</h2>
          <div class="border-color border-color_center"></div>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <no-ssr>
            <!-- <div class="text-center mt-2">
              <a href="https://www.trustpilot.com/review/hellovans.com">
                <img
                  src="~assets/images/trustbox-min.jpg"
                  alt="trustbox"
                  class="img-fluid trustbox-img"
                />
              </a>
            </div> -->

            <trustbox
              template-id="539ad60defb9600b94d7df2c"
              style-height="500px"
              style-width="100%"
              stars="3,4,5"
              theme="light"
              locale="en-GB"
            />
          </no-ssr>
          <!-- TrustBox widget - List -->
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
