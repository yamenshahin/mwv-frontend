<template>
  <div class="main-statistics section_mod-3 section_mod-3b">
    <b-container>
      <b-row>
        <b-col>
          <ul class="list-progress">
            <div class="text-center mb-5">
              <div
                v-html="landingHtmlObject.meta.statisticTitle"
                class="ui-title-block"
              ></div>
              <div class="border-color border-color_center"></div>
            </div>
            <li class="list-progress__item">
              <fa :icon="['fas', 'check']" class="icon" />
              <div class="list-progress__info">
                <span data-percent="648" class="chart">
                  <span class="percent">
                    {{ landingHtmlObject.meta.statisticNumber1 }}
                  </span>
                  <canvas height="0" width="0"></canvas>
                </span>
              </div>
              <div class="clearfix"></div>
              <i class="brand-decor">
                <img
                  src="~assets/images/brand-decor_white.png"
                  alt="Decor"
                  width="60"
                  height="6"
                />
              </i>
              <span class="list-progress__label">
                {{ landingHtmlObject.meta.statisticText1 }}
              </span>
            </li>
            <li class="list-progress__item">
              <fa :icon="['fas', 'chart-bar']" class="icon" />
              <div class="list-progress__info">
                <span data-percent="1694" class="chart">
                  <span class="percent">
                    {{ landingHtmlObject.meta.statisticNumber2 }}
                  </span>
                  <canvas height="0" width="0"></canvas>
                </span>
              </div>
              <div class="clearfix"></div>
              <i class="brand-decor">
                <img
                  src="~assets/images/brand-decor_white.png"
                  alt="Decor"
                  width="60"
                  height="6"
                />
              </i>
              <span class="list-progress__label">
                {{ landingHtmlObject.meta.statisticText2 }}
              </span>
            </li>
            <li class="list-progress__item">
              <fa :icon="['fas', 'users']" class="icon" />
              <div class="list-progress__info">
                <span data-percent="56" class="chart">
                  <span class="percent">
                    {{ landingHtmlObject.meta.statisticNumber3 }}
                  </span>
                  <canvas height="0" width="0"></canvas>
                </span>
              </div>
              <div class="clearfix"></div>
              <i class="brand-decor">
                <img
                  src="~assets/images/brand-decor_white.png"
                  alt="Decor"
                  width="60"
                  height="6"
                />
              </i>
              <span class="list-progress__label">
                {{ landingHtmlObject.meta.statisticText3 }}
              </span>
            </li>
            <li class="list-progress__item">
              <fa :icon="['fas', 'truck']" class="icon" />
              <div class="list-progress__info">
                <span data-percent="2543" class="chart">
                  <span class="percent">
                    {{ landingHtmlObject.meta.statisticNumber4 }}
                  </span>
                  <canvas height="0" width="0"></canvas>
                </span>
              </div>
              <div class="clearfix"></div>
              <i class="brand-decor">
                <img
                  src="~assets/images/brand-decor_white.png"
                  alt="Decor"
                  width="60"
                  height="6"
                />
              </i>
              <span class="list-progress__label">
                {{ landingHtmlObject.meta.statisticText4 }}
              </span>
            </li>
            <li class="list-progress__item">
              <fa :icon="['fas', 'home']" class="icon" />
              <div class="list-progress__info">
                <span data-percent="926" class="chart">
                  <span class="percent">
                    {{ landingHtmlObject.meta.statisticNumber5 }}
                  </span>
                  <canvas height="0" width="0"></canvas>
                </span>
              </div>
              <div class="clearfix"></div>
              <i class="brand-decor">
                <img
                  src="~assets/images/brand-decor_white.png"
                  alt="Decor"
                  width="60"
                  height="6"
                />
              </i>
              <span class="list-progress__label">
                {{ landingHtmlObject.meta.statisticText5 }}
              </span>
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
