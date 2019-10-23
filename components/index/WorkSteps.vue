<template>
  <div class="main-work-steps">
    <b-container class="text-center">
      <b-row>
        <b-col>
          <div class="mt-50"></div>
          <div class="ui-subtitle-block">
            <strong>WANT TO MOVE WITH US?</strong>
          </div>
          <h2 class="ui-title-block">HOW WE MAKE IT HAPPEN</h2>
          <div class="border-color border-color_center"></div>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <div class="mt-70"></div>
          <ul class="list-scheme">
            <li class="list-scheme__item">
              <a href="#" class="list-scheme__link">
                <span class="icon helper">
                  <fa :icon="['fas', 'clipboard-check']" />
                </span>
                <span class="list-scheme__number">1</span>
                <div class="list-scheme__title">
                  YOU BOOK
                  <span class="br">AN ORDER WITH US</span>
                </div>
              </a>
              <span class="arrow">
                <fa :icon="['fas', 'angle-right']" class="arrow__inner" />
              </span>
            </li>
            <li class="list-scheme__item">
              <a href="#" class="list-scheme__link">
                <span class="icon helper">
                  <fa :icon="['fas', 'truck-loading']" />
                </span>
                <span class="list-scheme__number">2</span>
                <div class="list-scheme__title">
                  WE COME &amp; PACK
                  <span class="br">YOUR HOME CONTENTS</span>
                </div>
              </a>
              <span class="arrow">
                <fa :icon="['fas', 'angle-right']" class="arrow__inner" />
              </span>
            </li>
            <li class="list-scheme__item">
              <a href="#" class="list-scheme__link">
                <span class="icon helper">
                  <fa :icon="['fas', 'shipping-fast']" />
                </span>
                <span class="list-scheme__number">3</span>
                <div class="list-scheme__title">
                  WE DRIVE &amp; DELIVER TO
                  <span class="br">YOUR NEW PLACE</span>
                </div>
              </a>
              <span class="arrow">
                <fa :icon="['fas', 'angle-right']" class="arrow__inner" />
              </span>
            </li>
            <li class="list-scheme__item">
              <a href="#" class="list-scheme__link">
                <span class="icon helper">
                  <fa :icon="['fas', 'user-shield']" />
                </span>

                <span class="list-scheme__number">4</span>
                <div class="list-scheme__title">
                  YOU SATISFIED -
                  <span class="br">WE HAPPY !</span>
                </div>
              </a>
            </li>
          </ul>
          <mq-layout mq="lg+">
            <div class="mb-85"></div>
          </mq-layout>
          <mq-layout :mq="['sm', 'md']">
            <div class="mb-15"></div>
          </mq-layout>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
