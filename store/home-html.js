// Create a global store
export const state = () => ({
  homeHtml: {
    page: 'home',
    workStepsSubTitle: 'WHY NOT COMPARE BEFORE YOU BOOK?',
    workStepsTitle: 'HOW HELLO VANS WORKS?',
    workStep1: 'TELL US A LITTLE BIT ABOUT YOUR MOVE',
    workStep2: 'OUR COMPUTER SYSTEM SHOWS YOU THE BEST PRICES',
    workStep3: 'YOU RESERVE ONE OF THE QUOTES AND GET CONFIRMATION',
    workStep4: 'SERVICE PROVIDER ARRIVES ON THE DAY AND A HAPPY MOVE STARTS',
    statisticNumber1: '1050',
    statisticNumber2: '3086',
    statisticNumber3: '900',
    statisticNumber4: '343',
    statisticNumber5: '107',
    statisticText1: 'JOBS COMPLETED',
    statisticText2: 'QUOTES COMPARED',
    statisticText3: 'HAPPY CUSTOMERS',
    statisticText4: 'DRIVERS & VANS',
    statisticText5: 'TOWNS & CITIES COVERED',
    underStatisticsTitle: 'WHY HELLOVANS.COM?',
    underStatisticsText:
      '<p>Some of the reasons why you should hire HelloVans.com</p>\n            <ul class="list-mark list-mark_small">\n              <li class="list-mark__item">\n                <a href="#" class="list-mark__link">\n                  <i class="icon"></i>\n                  The entire Uk is covered\n                </a>\n              </li>\n              <li class="list-mark__item">\n                <a href="#" class="list-mark__link">\n                  <i class="icon"></i>\n                  Everything is done online, No paperwork needed.\n                </a>\n              </li>\n              <li class="list-mark__item">\n                <a href="#" class="list-mark__link">\n                  <i class="icon"></i>\n                  Instant online quotes 24/7\n                </a>\n              </li>\n              <li class="list-mark__item">\n                <a href="#" class="list-mark__link">\n                  <i class="icon"></i>\n                  Secured online payment\n                </a>\n              </li>\n              <li class="list-mark__item">\n                <a href="#" class="list-mark__link">\n                  <i class="icon"></i>\n                  Compare many service providers at one place\n                </a>\n              </li>\n              <li class="list-mark__item">\n                <a href="#" class="list-mark__link">\n                  <i class="icon"></i>\n                  All drivers are vetted\n                </a>\n              </li>\n              <li class="list-mark__item">\n                <a href="#" class="list-mark__link">\n                  <i class="icon"></i>\n                  Have full control of your booking\n                </a>\n              </li>\n              <li class="list-mark__item">\n                <a href="#" class="list-mark__link">\n                  <i class="icon"></i>\n                  Be able to leave your feedback\n                </a>\n              </li>\n              <li class="list-mark__item">\n                <a href="#" class="list-mark__link">\n                  <i class="icon"></i>\n                  Top customer service\n                </a>\n              </li>\n              <li class="list-mark__item">\n                <a href="#" class="list-mark__link">\n                  <i class="icon"></i>\n                  Rated excellent on Trustpilot\n                </a>\n              </li>\n            </ul>',
    aboutTitle: 'WE ARE COMMITTED TO FIND YOU THE BEST DRIVERS:',
    aboutText:
      '<p>\n            We know letting someone into your house is not an easy deal. All\n            drivers at Hello Vans are vetted by us to ensure you get the right\n            person.\n          </p>\n          <p>\n            <b>\n              We guarantee that your driver will meet the following criteria\n            </b>\n          </p>\n          <ul>\n            <li>Experienced, Polite &amp; professional</li>\n            <li>Background &amp; reference checked</li>\n            <li>English speaking</li>\n            <li>Fully insured</li>\n            <li>Has a clean Van</li>\n            <li>Has all moving tools & Equipment</li>\n          </ul>'
  }
})

// Getters
export const getters = {
  homeHtml(state) {
    return state.homeHtml
  }
}

// Mutations
export const mutations = {
  SET_HOME_HTML(state, homeHtml) {
    state.homeHtml = homeHtml
  }
}

// Actions
export const actions = {
  setHomeHtml({ commit }, homeHtml) {
    commit('SET_HOME_HTML', homeHtml)
  }
}
