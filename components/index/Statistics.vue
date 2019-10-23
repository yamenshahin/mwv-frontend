<template>
  <div class="main-statistics section_mod-3 section_mod-3b">
    <b-container>
      <b-row>
        <b-col>
          <ul class="list-progress">
            <li class="list-progress__item">
              <fa :icon="['fas', 'check']" class="icon" />
              <div class="list-progress__info">
                <span data-percent="648" class="chart">
                  <span class="percent">9480</span>
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
              <span class="list-progress__label">PROJECTS FINISHED</span>
            </li>
            <li class="list-progress__item">
              <fa :icon="['fas', 'users']" class="icon" />
              <div class="list-progress__info">
                <span data-percent="1694" class="chart">
                  <span class="percent">3086</span>
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
              <span class="list-progress__label">SATISFIED CUSTOMERS</span>
            </li>
            <li class="list-progress__item">
              <fa :icon="['fas', 'home']" class="icon" />
              <div class="list-progress__info">
                <span data-percent="56" class="chart">
                  <span class="percent">56</span>
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
              <span class="list-progress__label">BRANCHS NETWORK</span>
            </li>
            <li class="list-progress__item">
              <fa :icon="['fas', 'truck']" class="icon" />
              <div class="list-progress__info">
                <span data-percent="2543" class="chart">
                  <span class="percent">1543</span>
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
              <span class="list-progress__label">DRIVERS &amp; VANS</span>
            </li>
            <li class="list-progress__item">
              <fa :icon="['fas', 'chart-bar']" class="icon" />
              <div class="list-progress__info">
                <span data-percent="926" class="chart">
                  <span class="percent">59926</span>
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
              <span class="list-progress__label">FREE QUOTES SENT</span>
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
