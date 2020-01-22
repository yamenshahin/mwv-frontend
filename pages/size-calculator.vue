<template>
  <div class="size-page">
    <h1 class="ui-title-page">Van Size Calculator</h1>
    <div class="triagl triagl-btm"></div>
    <EmptySpace />
    <b-container class="section_mod-2 mt-5">
      <b-row>
        <b-col cols="12" lg="3">
          <div class="mt-2 mb-2">
            <b-button
              v-if="total <= vanType.type4.capacity"
              @click.prevent="setVanSize()"
              block
              size="lg"
            >
              Select This Van
            </b-button>
            <b-button v-else disabled block size="lg">
              Select This Van
            </b-button>
          </div>
          <span class="van-image text-center">
            <span v-if="total <= vanType.type1.capacity">
              <img
                src="~assets/images/vans/van-sm.png"
                alt="sm van"
                class="img-fluid"
              />
              <b-alert show variant="success">Small Van</b-alert>
            </span>
            <span v-else-if="total <= vanType.type2.capacity">
              <img
                src="~assets/images/vans/van-md.png"
                alt="Medium van"
                class="img-fluid"
              />
              <b-alert show variant="success">Medium Van</b-alert>
            </span>
            <span v-else-if="total <= vanType.type3.capacity">
              <img
                src="~assets/images/vans/van-lg.png"
                alt="Large van"
                class="img-fluid"
              />
              <b-alert show variant="success">Large Van</b-alert>
            </span>
            <span v-else-if="total <= vanType.type4.capacity">
              <img
                src="~assets/images/vans/van-xl.png"
                alt="Giant van"
                class="img-fluid"
              />
              <b-alert show variant="success">Giant Van</b-alert>
            </span>
            <span v-else>
              <span class="icon helper">
                <fa :icon="['fas', 'exclamation-triangle']" />
              </span>
              <b-alert show variant="danger">Capacity Exceeded</b-alert>
            </span>
          </span>
          <div class="counter">
            Selected: {{ total | intToFloatString }}
            m
            <sup>3</sup>
            &nbsp;&nbsp;Average van capacity:
            <span v-if="total <= vanType.type1.capacity">
              {{ vanType.type1.capacity }}
            </span>
            <span v-else-if="total <= vanType.type2.capacity">
              {{ vanType.type2.capacity }}
            </span>
            <span v-else-if="total <= vanType.type3.capacity">
              {{ vanType.type3.capacity }}
            </span>
            <span v-else-if="total <= vanType.type4.capacity">
              {{ vanType.type4.capacity }}
            </span>
            <span v-else>
              X
            </span>
            m
            <sup>3</sup>
          </div>
          <span class="item-list">
            <span v-for="item in items" :key="item.id">
              <span v-if="item.show" class="item bg-theme-blue ">
                <span
                  v-if="item.counter !== 0"
                  class="item-count bg-theme-yellow"
                >
                  {{ item.counter }}
                </span>
                <span
                  @click.prevent="addItem(item)"
                  class="item-name bg-theme-blue"
                >
                  {{ item.name }}
                </span>
                <span
                  v-if="item.counter !== 0"
                  @click.prevent="removeItem(item)"
                  class="item-delete bg-danger color-white"
                >
                  X
                </span>
              </span>
            </span>
          </span>
        </b-col>
        <b-col cols="12" lg="9">
          <div>
            <b-nav>
              <b-nav-item @click.prevent="showGroup('Living Room')" active>
                Living Room
              </b-nav-item>
              <b-nav-item @click.prevent="showGroup('Office Items')">
                Office Items
              </b-nav-item>
              <b-nav-item @click.prevent="showGroup('Kitchen / Hallway')">
                Kitchen / Hallway
              </b-nav-item>
              <b-nav-item @click.prevent="showGroup('Outside / Garden')">
                Outside / Garden
              </b-nav-item>
              <b-nav-item @click.prevent="showGroup('Boxes and Luggage')">
                Boxes and Luggage
              </b-nav-item>
              <b-nav-item @click.prevent="showGroup('Bedroom')">
                Bedroom
              </b-nav-item>
              <b-nav-item @click.prevent="showGroup('Bathroom')">
                Bathroom
              </b-nav-item>
            </b-nav>
          </div>
          <span v-for="item in items" :key="item.id">
            <span v-if="group === item.group">
              <span class="item bg-theme-blue">
                <span
                  v-if="item.counter !== 0"
                  class="item-count bg-theme-yellow"
                >
                  {{ item.counter }}
                </span>
                <span
                  @click.prevent="addItem(item)"
                  class="item-name bg-theme-blue"
                >
                  {{ item.name }}
                </span>
                <span
                  v-if="item.counter !== 0"
                  @click.prevent="removeItem(item)"
                  class="item-delete bg-danger color-white"
                >
                  X
                </span>
              </span>
            </span>
          </span>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import EmptySpace from '~/components/EmptySpace.vue'
export default {
  head() {
    return {
      title:
        'Van Size Calculator | Compare low cost Man with a van quotes - book Man and van for Removals',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Van Size Calculator description | Compare low cost Man with a van quotes - book Man and van for Removals'
        }
      ]
    }
  },
  components: {
    EmptySpace
  },
  data() {
    return {
      total: 0.0,
      group: 'Living Room',
      vanType: {
        type1: {
          type: 'Small van',
          capacity: 2.5
        },
        type2: {
          type: 'Medium van',
          capacity: 8
        },
        type3: {
          type: 'Large van',
          capacity: 14
        },
        type4: {
          type: 'Giant van',
          capacity: 22
        }
      },
      items: [
        {
          id: 1,
          name: '2 Seater Sofa',
          value: 1.5,
          group: 'Living Room',
          counter: 0,
          show: false
        },
        {
          id: 2,
          name: '3 Seater Sofa',
          value: 2.5,
          group: 'Living Room',
          counter: 0,
          show: false
        },
        {
          id: 3,
          name: 'Aquarium (large)',
          value: 0.34,
          group: 'Living Room',
          counter: 0,
          show: false
        },
        {
          id: 4,
          name: 'Aquarium (medium)',
          value: 0.11,
          group: 'Living Room',
          counter: 0,
          show: false
        },
        {
          id: 5,
          name: 'Aquarium (small)',
          value: 0.04,
          group: 'Living Room',
          counter: 0,
          show: false
        },
        {
          id: 6,
          name: 'Arm Chair',
          value: 0.55,
          group: 'Living Room',
          counter: 0,
          show: false
        },
        {
          id: 7,
          name: 'Blu Ray / DVD player',
          value: 0.01,
          group: 'Living Room',
          counter: 0,
          show: false
        },
        {
          id: 8,
          name: 'Bookcase (Large)',
          value: 0.8,
          group: 'Living Room',
          counter: 0,
          show: false
        },
        {
          id: 9,
          name: 'Bureau',
          value: 1,
          group: 'Living Room',
          counter: 0,
          show: false
        },
        {
          id: 10,
          name: 'Carver Chair',
          value: 0.25,
          group: 'Living Room',
          counter: 0,
          show: false
        },
        {
          id: 11,
          name: 'CD Rack',
          value: 0.25,
          group: 'Living Room',
          counter: 0,
          show: false
        },
        {
          id: 12,
          name: 'Chandelier / Lampshades',
          value: 0.75,
          group: 'Living Room',
          counter: 0,
          show: false
        },
        {
          id: 13,
          name: 'China Cabinet (Large)',
          value: 3,
          group: 'Living Room',
          counter: 0,
          show: false
        },
        {
          id: 14,
          name: 'China Cabinet (Medium)',
          value: 2.5,
          group: 'Living Room',
          counter: 0,
          show: false
        },
        {
          id: 15,
          name: 'China Cabinet (Small)',
          value: 1.3,
          group: 'Living Room',
          counter: 0,
          show: false
        },
        {
          id: 16,
          name: 'Coffee Table',
          value: 0.3,
          group: 'Living Room',
          counter: 0,
          show: false
        },
        {
          id: 17,
          name: 'Corner unit',
          value: 1,
          group: 'Living Room',
          counter: 0,
          show: false
        },
        {
          id: 18,
          name: 'Dining Chair',
          value: 0.25,
          group: 'Living Room',
          counter: 0,
          show: false
        },
        {
          id: 19,
          name: 'Dining Table (Large)',
          value: 1.25,
          group: 'Living Room',
          counter: 0,
          show: false
        },
        {
          id: 20,
          name: 'Dining Table (Medium)',
          value: 1,
          group: 'Living Room',
          counter: 0,
          show: false
        },
        {
          id: 21,
          name: 'Dining Table (Small)',
          value: 0.85,
          group: 'Living Room',
          counter: 0,
          show: false
        },
        {
          id: 22,
          name: 'Exercise Bike',
          value: 0.3,
          group: 'Living Room',
          counter: 0,
          show: false
        },
        {
          id: 23,
          name: 'Fireplace equipment',
          value: 0.15,
          group: 'Living Room',
          counter: 0,
          show: false
        },
        {
          id: 24,
          name: 'Floor fan',
          value: 0.1,
          group: 'Living Room',
          counter: 0,
          show: false
        },
        {
          id: 25,
          name: 'Floor Standing Lamp',
          value: 0.25,
          group: 'Living Room',
          counter: 0,
          show: false
        },
        {
          id: 26,
          name: 'Grandfather Clock',
          value: 0.7,
          group: 'Living Room',
          counter: 0,
          show: false
        },
        {
          id: 27,
          name: 'Jukebox',
          value: 0.9,
          group: 'Living Room',
          counter: 0,
          show: false
        },
        {
          id: 28,
          name: 'Large Sofa',
          value: 3.1,
          group: 'Living Room',
          counter: 0,
          show: false
        },
        {
          id: 29,
          name: 'Magazine rack',
          value: 0.25,
          group: 'Living Room',
          counter: 0,
          show: false
        },
        {
          id: 30,
          name: 'Mirror',
          value: 0.1,
          group: 'Living Room',
          counter: 0,
          show: false
        },
        {
          id: 31,
          name: 'Music Cabinet',
          value: 1,
          group: 'Living Room',
          counter: 0,
          show: false
        },
        {
          id: 32,
          name: 'Nest of Tables',
          value: 0.5,
          group: 'Living Room',
          counter: 0,
          show: false
        },
        {
          id: 33,
          name: 'Nintendo',
          value: 0.1,
          group: 'Living Room',
          counter: 0,
          show: false
        },
        {
          id: 34,
          name: 'Occasional Chair',
          value: 0.25,
          group: 'Living Room',
          counter: 0,
          show: false
        },
        {
          id: 35,
          name: 'Occasional Table (Small)',
          value: 0.5,
          group: 'Living Room',
          counter: 0,
          show: false
        },
        {
          id: 36,
          name: 'Piano (Grand)',
          value: 3.1,
          group: 'Living Room',
          counter: 0,
          show: false
        },
        {
          id: 37,
          name: 'Piano (Upright)',
          value: 1.5,
          group: 'Living Room',
          counter: 0,
          show: false
        },
        {
          id: 38,
          name: 'Piano Stool',
          value: 0.45,
          group: 'Living Room',
          counter: 0,
          show: false
        },
        {
          id: 39,
          name: 'Picture (Large)',
          value: 0.1,
          group: 'Living Room',
          counter: 0,
          show: false
        },
        {
          id: 40,
          name: 'Playstation',
          value: 0.1,
          group: 'Living Room',
          counter: 0,
          show: false
        },
        {
          id: 41,
          name: 'Rocking Chair',
          value: 0.65,
          group: 'Living Room',
          counter: 0,
          show: false
        },
        {
          id: 42,
          name: 'Roll-top Desk (Large)',
          value: 3,
          group: 'Living Room',
          counter: 0,
          show: false
        },
        {
          id: 43,
          name: 'Roll-top Desk (Small)',
          value: 1.5,
          group: 'Living Room',
          counter: 0,
          show: false
        },
        {
          id: 44,
          name: 'Rug',
          value: 0.15,
          group: 'Living Room',
          counter: 0,
          show: false
        },
        {
          id: 45,
          name: 'Sideboard (Large)',
          value: 2,
          group: 'Living Room',
          counter: 0,
          show: false
        },
        {
          id: 46,
          name: 'Sideboard (Medium)',
          value: 1.5,
          group: 'Living Room',
          counter: 0,
          show: false
        },
        {
          id: 47,
          name: 'Sideboard (Small)',
          value: 0.75,
          group: 'Living Room',
          counter: 0,
          show: false
        },
        {
          id: 48,
          name: 'Sofa bed',
          value: 1.5,
          group: 'Living Room',
          counter: 0,
          show: false
        },
        {
          id: 49,
          name: 'Standing fan',
          value: 0.2,
          group: 'Living Room',
          counter: 0,
          show: false
        },
        {
          id: 50,
          name: 'Standing Mirror',
          value: 0.4,
          group: 'Living Room',
          counter: 0,
          show: false
        },
        {
          id: 51,
          name: 'Stereo / Video',
          value: 0.2,
          group: 'Living Room',
          counter: 0,
          show: false
        },
        {
          id: 52,
          name: 'Stereo Unit',
          value: 0.15,
          group: 'Living Room',
          counter: 0,
          show: false
        },
        {
          id: 53,
          name: 'Stool',
          value: 0.15,
          group: 'Living Room',
          counter: 0,
          show: false
        },
        {
          id: 54,
          name: 'Table lamp',
          value: 0.1,
          group: 'Living Room',
          counter: 0,
          show: false
        },
        {
          id: 55,
          name: 'Telephone seat',
          value: 0.85,
          group: 'Living Room',
          counter: 0,
          show: false
        },
        {
          id: 56,
          name: 'TV',
          value: 0.15,
          group: 'Living Room',
          counter: 0,
          show: false
        },
        {
          id: 57,
          name: 'TV stand',
          value: 0.5,
          group: 'Living Room',
          counter: 0,
          show: false
        },
        {
          id: 58,
          name: 'Wall Unit',
          value: 0.4,
          group: 'Living Room',
          counter: 0,
          show: false
        },
        {
          id: 59,
          name: 'Welsh Dresser',
          value: 0.5,
          group: 'Living Room',
          counter: 0,
          show: false
        },
        {
          id: 60,
          name: 'Xbox',
          value: 0.1,
          group: 'Living Room',
          counter: 0,
          show: false
        },
        {
          id: 61,
          name: 'Computer Chair',
          value: 0.4,
          group: 'Office Items',
          counter: 0,
          show: false
        },
        {
          id: 62,
          name: 'Fax Machine',
          value: 0.2,
          group: 'Office Items',
          counter: 0,
          show: false
        },
        {
          id: 63,
          name: 'Filing cabinet (2 drawer)',
          value: 0.7,
          group: 'Office Items',
          counter: 0,
          show: false
        },
        {
          id: 64,
          name: 'Filing cabinet (3 drawer)',
          value: 1,
          group: 'Office Items',
          counter: 0,
          show: false
        },
        {
          id: 65,
          name: 'Filing cabinet (4 drawer)',
          value: 1.3,
          group: 'Office Items',
          counter: 0,
          show: false
        },
        {
          id: 66,
          name: 'Laptop',
          value: 0.1,
          group: 'Office Items',
          counter: 0,
          show: false
        },
        {
          id: 67,
          name: 'Office Cupboard (Large)',
          value: 2.55,
          group: 'Office Items',
          counter: 0,
          show: false
        },
        {
          id: 68,
          name: 'Office Cupboard (Small)',
          value: 1.25,
          group: 'Office Items',
          counter: 0,
          show: false
        },
        {
          id: 69,
          name: 'Office Desk',
          value: 1,
          group: 'Office Items',
          counter: 0,
          show: false
        },
        {
          id: 70,
          name: 'Office Desk Small',
          value: 1,
          group: 'Office Items',
          counter: 0,
          show: false
        },
        {
          id: 71,
          name: 'PC Monitor (Large)',
          value: 0.35,
          group: 'Office Items',
          counter: 0,
          show: false
        },
        {
          id: 72,
          name: 'PC Monitor (Medium)',
          value: 0.2,
          group: 'Office Items',
          counter: 0,
          show: false
        },
        {
          id: 73,
          name: 'PC Monitor (Small)',
          value: 0.1,
          group: 'Office Items',
          counter: 0,
          show: false
        },
        {
          id: 74,
          name: 'PC Tower (Large)',
          value: 0.25,
          group: 'Office Items',
          counter: 0,
          show: false
        },
        {
          id: 75,
          name: 'PC Tower (Small)',
          value: 0.1,
          group: 'Office Items',
          counter: 0,
          show: false
        },
        {
          id: 76,
          name: 'Printer (Large)',
          value: 1.75,
          group: 'Office Items',
          counter: 0,
          show: false
        },
        {
          id: 77,
          name: 'Printer (Small)',
          value: 0.3,
          group: 'Office Items',
          counter: 0,
          show: false
        },
        {
          id: 78,
          name: 'Shredder (Large)',
          value: 0.6,
          group: 'Office Items',
          counter: 0,
          show: false
        },
        {
          id: 79,
          name: 'Shredder (Medium)',
          value: 0.2,
          group: 'Office Items',
          counter: 0,
          show: false
        },
        {
          id: 80,
          name: 'Shredder (Small)',
          value: 0.1,
          group: 'Office Items',
          counter: 0,
          show: false
        },
        {
          id: 81,
          name: 'American 2 door fridge',
          value: 1.2,
          group: 'Kitchen / Hallway',
          counter: 0,
          show: false
        },
        {
          id: 82,
          name: "Baby's High Chair",
          value: 0.2,
          group: 'Kitchen / Hallway',
          counter: 0,
          show: false
        },
        {
          id: 83,
          name: 'Cooker',
          value: 0.5,
          group: 'Kitchen / Hallway',
          counter: 0,
          show: false
        },
        {
          id: 84,
          name: 'Dining Chair',
          value: 0.2,
          group: 'Kitchen / Hallway',
          counter: 0,
          show: false
        },
        {
          id: 85,
          name: 'Dining Table (Large)',
          value: 1.5,
          group: 'Kitchen / Hallway',
          counter: 0,
          show: false
        },
        {
          id: 86,
          name: 'Dining Table (Small)',
          value: 1.2,
          group: 'Kitchen / Hallway',
          counter: 0,
          show: false
        },
        {
          id: 87,
          name: 'Dishwasher',
          value: 0.4,
          group: 'Kitchen / Hallway',
          counter: 0,
          show: false
        },
        {
          id: 88,
          name: 'Electric Heater',
          value: 0.04,
          group: 'Kitchen / Hallway',
          counter: 0,
          show: false
        },
        {
          id: 89,
          name: 'Freezer (Chest)',
          value: 0.4,
          group: 'Kitchen / Hallway',
          counter: 0,
          show: false
        },
        {
          id: 90,
          name: 'Fridge',
          value: 0.6,
          group: 'Kitchen / Hallway',
          counter: 0,
          show: false
        },
        {
          id: 91,
          name: 'Fridge Freezer',
          value: 0.8,
          group: 'Kitchen / Hallway',
          counter: 0,
          show: false
        },
        {
          id: 92,
          name: 'Hall Chair',
          value: 0.25,
          group: 'Kitchen / Hallway',
          counter: 0,
          show: false
        },
        {
          id: 93,
          name: 'Hall Table',
          value: 0.85,
          group: 'Kitchen / Hallway',
          counter: 0,
          show: false
        },
        {
          id: 94,
          name: 'Ironing board',
          value: 0.1,
          group: 'Kitchen / Hallway',
          counter: 0,
          show: false
        },
        {
          id: 95,
          name: 'Kitchen Cupboard',
          value: 1,
          group: 'Kitchen / Hallway',
          counter: 0,
          show: false
        },
        {
          id: 96,
          name: 'Microwave',
          value: 0.13,
          group: 'Kitchen / Hallway',
          counter: 0,
          show: false
        },
        {
          id: 97,
          name: 'Pedal bin',
          value: 0.35,
          group: 'Kitchen / Hallway',
          counter: 0,
          show: false
        },
        {
          id: 98,
          name: 'Sewing Machine',
          value: 0.1,
          group: 'Kitchen / Hallway',
          counter: 0,
          show: false
        },
        {
          id: 99,
          name: 'Shoe Rack',
          value: 0.35,
          group: 'Kitchen / Hallway',
          counter: 0,
          show: false
        },
        {
          id: 100,
          name: 'Slow Cooker',
          value: 0.2,
          group: 'Kitchen / Hallway',
          counter: 0,
          show: false
        },
        {
          id: 101,
          name: 'Swing bin',
          value: 0.4,
          group: 'Kitchen / Hallway',
          counter: 0,
          show: false
        },
        {
          id: 102,
          name: 'Trolley Table',
          value: 0.2,
          group: 'Kitchen / Hallway',
          counter: 0,
          show: false
        },
        {
          id: 103,
          name: 'Tumble Dryer',
          value: 0.4,
          group: 'Kitchen / Hallway',
          counter: 0,
          show: false
        },
        {
          id: 104,
          name: 'Upright Fridge Freezer',
          value: 1,
          group: 'Kitchen / Hallway',
          counter: 0,
          show: false
        },
        {
          id: 105,
          name: 'Vacuum Cleaner',
          value: 0.1,
          group: 'Kitchen / Hallway',
          counter: 0,
          show: false
        },
        {
          id: 106,
          name: 'Washing Machine',
          value: 1.25,
          group: 'Kitchen / Hallway',
          counter: 0,
          show: false
        },
        {
          id: 107,
          name: '2 Hob Camping Stove',
          value: 0.1,
          group: 'Outside / Garden',
          counter: 0,
          show: false
        },
        {
          id: 108,
          name: 'Alloy Wheel',
          value: 0.1,
          group: 'Outside / Garden',
          counter: 0,
          show: false
        },
        {
          id: 109,
          name: 'Bird Bath / Feeder',
          value: 0.02,
          group: 'Outside / Garden',
          counter: 0,
          show: false
        },
        {
          id: 110,
          name: 'Deck Chairs',
          value: 0.3,
          group: 'Outside / Garden',
          counter: 0,
          show: false
        },
        {
          id: 111,
          name: 'Dehumidifier',
          value: 0.07,
          group: 'Outside / Garden',
          counter: 0,
          show: false
        },
        {
          id: 112,
          name: 'Dustbin',
          value: 1,
          group: 'Outside / Garden',
          counter: 0,
          show: false
        },
        {
          id: 113,
          name: 'Extension Ladder',
          value: 1,
          group: 'Outside / Garden',
          counter: 0,
          show: false
        },
        {
          id: 114,
          name: 'Front door ',
          value: 2,
          group: 'Outside / Garden',
          counter: 0,
          show: false
        },
        {
          id: 115,
          name: 'Garden Roller',
          value: 0.45,
          group: 'Outside / Garden',
          counter: 0,
          show: false
        },
        {
          id: 116,
          name: 'Garden Tools (Bundle)',
          value: 0.2,
          group: 'Outside / Garden',
          counter: 0,
          show: false
        },
        {
          id: 117,
          name: 'Golf Clubs',
          value: 0.2,
          group: 'Outside / Garden',
          counter: 0,
          show: false
        },
        {
          id: 118,
          name: 'Hose and Reel',
          value: 0.25,
          group: 'Outside / Garden',
          counter: 0,
          show: false
        },
        {
          id: 119,
          name: 'Iron',
          value: 0.01,
          group: 'Outside / Garden',
          counter: 0,
          show: false
        },
        {
          id: 120,
          name: 'Jet Ski',
          value: 5.1,
          group: 'Outside / Garden',
          counter: 0,
          show: false
        },
        {
          id: 121,
          name: 'Large BBQ',
          value: 1,
          group: 'Outside / Garden',
          counter: 0,
          show: false
        },
        {
          id: 122,
          name: 'Lawn Mower',
          value: 0.17,
          group: 'Outside / Garden',
          counter: 0,
          show: false
        },
        {
          id: 123,
          name: 'Motor Bike / Scooter',
          value: 1.5,
          group: 'Outside / Garden',
          counter: 0,
          show: false
        },
        {
          id: 124,
          name: 'Mountain Bicycle',
          value: 0.25,
          group: 'Outside / Garden',
          counter: 0,
          show: false
        },
        {
          id: 125,
          name: 'Outdoor Chair',
          value: 0.2,
          group: 'Outside / Garden',
          counter: 0,
          show: false
        },
        {
          id: 126,
          name: 'Outdoor Table',
          value: 1,
          group: 'Outside / Garden',
          counter: 0,
          show: false
        },
        {
          id: 127,
          name: 'Parasol',
          value: 0.1,
          group: 'Outside / Garden',
          counter: 0,
          show: false
        },
        {
          id: 128,
          name: 'Plant Pots (Large)',
          value: 0.35,
          group: 'Outside / Garden',
          counter: 0,
          show: false
        },
        {
          id: 129,
          name: 'Plant Pots (Medium)',
          value: 0.2,
          group: 'Outside / Garden',
          counter: 0,
          show: false
        },
        {
          id: 130,
          name: 'Plant Pots (Small)',
          value: 0.1,
          group: 'Outside / Garden',
          counter: 0,
          show: false
        },
        {
          id: 131,
          name: 'Pram',
          value: 0.45,
          group: 'Outside / Garden',
          counter: 0,
          show: false
        },
        {
          id: 132,
          name: 'Quad Bike',
          value: 2.5,
          group: 'Outside / Garden',
          counter: 0,
          show: false
        },
        {
          id: 133,
          name: 'Skis',
          value: 0.04,
          group: 'Outside / Garden',
          counter: 0,
          show: false
        },
        {
          id: 134,
          name: 'Snowboard',
          value: 0.05,
          group: 'Outside / Garden',
          counter: 0,
          show: false
        },
        {
          id: 135,
          name: 'Stepladder',
          value: 0.2,
          group: 'Outside / Garden',
          counter: 0,
          show: false
        },
        {
          id: 136,
          name: 'Sun Bed',
          value: 0.3,
          group: 'Outside / Garden',
          counter: 0,
          show: false
        },
        {
          id: 137,
          name: 'Surfboard (long)',
          value: 0.21,
          group: 'Outside / Garden',
          counter: 0,
          show: false
        },
        {
          id: 138,
          name: 'Surfboard (short)',
          value: 0.07,
          group: 'Outside / Garden',
          counter: 0,
          show: false
        },
        {
          id: 139,
          name: 'Swing Set (Dismantled)',
          value: 0.25,
          group: 'Outside / Garden',
          counter: 0,
          show: false
        },
        {
          id: 140,
          name: 'Trampoline (Dismantled)',
          value: 0.25,
          group: 'Outside / Garden',
          counter: 0,
          show: false
        },
        {
          id: 141,
          name: 'Treadmill',
          value: 0.45,
          group: 'Outside / Garden',
          counter: 0,
          show: false
        },
        {
          id: 142,
          name: 'Waste Bin (Small)',
          value: 0.1,
          group: 'Outside / Garden',
          counter: 0,
          show: false
        },
        {
          id: 143,
          name: 'Weight Bench',
          value: 0.5,
          group: 'Outside / Garden',
          counter: 0,
          show: false
        },
        {
          id: 144,
          name: 'Wheelbarrow',
          value: 0.4,
          group: 'Outside / Garden',
          counter: 0,
          show: false
        },
        {
          id: 145,
          name: 'Work Bench Large',
          value: 1.2,
          group: 'Outside / Garden',
          counter: 0,
          show: false
        },
        {
          id: 146,
          name: 'Bin liner of soft clothes',
          value: 0.2,
          group: 'Boxes and Luggage',
          counter: 0,
          show: false
        },
        {
          id: 147,
          name: 'Box (Extra Large)',
          value: 1,
          group: 'Boxes and Luggage',
          counter: 0,
          show: false
        },
        {
          id: 148,
          name: 'Box (Large)',
          value: 0.8,
          group: 'Boxes and Luggage',
          counter: 0,
          show: false
        },
        {
          id: 149,
          name: 'Box (Medium)',
          value: 0.25,
          group: 'Boxes and Luggage',
          counter: 0,
          show: false
        },
        {
          id: 150,
          name: 'Box (Small)',
          value: 0.1,
          group: 'Boxes and Luggage',
          counter: 0,
          show: false
        },
        {
          id: 151,
          name: 'Suitcase (Large)',
          value: 0.34,
          group: 'Boxes and Luggage',
          counter: 0,
          show: false
        },
        {
          id: 152,
          name: 'Suitcase (Medium)',
          value: 0.26,
          group: 'Boxes and Luggage',
          counter: 0,
          show: false
        },
        {
          id: 153,
          name: 'Suitcase (Small)',
          value: 0.13,
          group: 'Boxes and Luggage',
          counter: 0,
          show: false
        },
        {
          id: 154,
          name: 'Trunk',
          value: 0.4,
          group: 'Boxes and Luggage',
          counter: 0,
          show: false
        },
        {
          id: 155,
          name: 'Baby Changing Table',
          value: 0.4,
          group: 'Bedroom',
          counter: 0,
          show: false
        },
        {
          id: 156,
          name: 'Bedroom Chair',
          value: 0.4,
          group: 'Bedroom',
          counter: 0,
          show: false
        },
        {
          id: 157,
          name: 'Bedside Table',
          value: 0.3,
          group: 'Bedroom',
          counter: 0,
          show: false
        },
        {
          id: 158,
          name: 'Blanket Box',
          value: 0.35,
          group: 'Bedroom',
          counter: 0,
          show: false
        },
        {
          id: 159,
          name: 'Bookshelf unit (Large)',
          value: 1.4,
          group: 'Bedroom',
          counter: 0,
          show: false
        },
        {
          id: 160,
          name: 'Bookshelf Unit (Small)',
          value: 0.5,
          group: 'Bedroom',
          counter: 0,
          show: false
        },
        {
          id: 161,
          name: 'Bunk Beds',
          value: 3.75,
          group: 'Bedroom',
          counter: 0,
          show: false
        },
        {
          id: 162,
          name: 'Chest of Drawers (Large)',
          value: 1.5,
          group: 'Bedroom',
          counter: 0,
          show: false
        },
        {
          id: 163,
          name: 'Chest of Drawers (Medium)',
          value: 1,
          group: 'Bedroom',
          counter: 0,
          show: false
        },
        {
          id: 164,
          name: 'Chest of Drawers (Small)',
          value: 0.75,
          group: 'Bedroom',
          counter: 0,
          show: false
        },
        {
          id: 165,
          name: "Child's Cot &amp; mattress",
          value: 1.5,
          group: 'Bedroom',
          counter: 0,
          show: false
        },
        {
          id: 166,
          name: "Children's Table",
          value: 0.2,
          group: 'Bedroom',
          counter: 0,
          show: false
        },
        {
          id: 167,
          name: 'Clothes Rack',
          value: 0.3,
          group: 'Bedroom',
          counter: 0,
          show: false
        },
        {
          id: 168,
          name: 'Clothes Steamer',
          value: 0.15,
          group: 'Bedroom',
          counter: 0,
          show: false
        },
        {
          id: 169,
          name: 'Continental Headboard',
          value: 0.25,
          group: 'Bedroom',
          counter: 0,
          show: false
        },
        {
          id: 170,
          name: 'Double Bed',
          value: 1.8,
          group: 'Bedroom',
          counter: 0,
          show: false
        },
        {
          id: 171,
          name: 'Double Divan Bed',
          value: 1.9,
          group: 'Bedroom',
          counter: 0,
          show: false
        },
        {
          id: 172,
          name: 'Double Wardrobe',
          value: 1.25,
          group: 'Bedroom',
          counter: 0,
          show: false
        },
        {
          id: 173,
          name: 'Dressing Table (Large)',
          value: 1.5,
          group: 'Bedroom',
          counter: 0,
          show: false
        },
        {
          id: 174,
          name: 'Dressing Table (Small)',
          value: 0.5,
          group: 'Bedroom',
          counter: 0,
          show: false
        },
        {
          id: 175,
          name: 'Folding Bed',
          value: 0.75,
          group: 'Bedroom',
          counter: 0,
          show: false
        },
        {
          id: 176,
          name: 'King Size Bed',
          value: 2.5,
          group: 'Bedroom',
          counter: 0,
          show: false
        },
        {
          id: 177,
          name: 'Linen Basket',
          value: 0.16,
          group: 'Bedroom',
          counter: 0,
          show: false
        },
        {
          id: 178,
          name: 'Mattress (Childs)',
          value: 0.5,
          group: 'Bedroom',
          counter: 0,
          show: false
        },
        {
          id: 179,
          name: 'Mattress (Large)',
          value: 1.1,
          group: 'Bedroom',
          counter: 0,
          show: false
        },
        {
          id: 180,
          name: 'Mattress (Medium)',
          value: 0.75,
          group: 'Bedroom',
          counter: 0,
          show: false
        },
        {
          id: 181,
          name: 'Shelf Bracket',
          value: 0.05,
          group: 'Bedroom',
          counter: 0,
          show: false
        },
        {
          id: 182,
          name: 'Single Bed',
          value: 0.75,
          group: 'Bedroom',
          counter: 0,
          show: false
        },
        {
          id: 183,
          name: 'Single Divan Bed',
          value: 0.95,
          group: 'Bedroom',
          counter: 0,
          show: false
        },
        {
          id: 184,
          name: 'Single Shelf',
          value: 0.1,
          group: 'Bedroom',
          counter: 0,
          show: false
        },
        {
          id: 185,
          name: 'Single Wardrobe',
          value: 1,
          group: 'Bedroom',
          counter: 0,
          show: false
        },
        {
          id: 186,
          name: 'Super King Size Bed',
          value: 2.75,
          group: 'Bedroom',
          counter: 0,
          show: false
        },
        {
          id: 187,
          name: 'Table Lamp',
          value: 0.1,
          group: 'Bedroom',
          counter: 0,
          show: false
        },
        {
          id: 188,
          name: 'Tallboy Dresser',
          value: 0.5,
          group: 'Bedroom',
          counter: 0,
          show: false
        },
        {
          id: 189,
          name: 'Travel Cot',
          value: 1.75,
          group: 'Bedroom',
          counter: 0,
          show: false
        },
        {
          id: 190,
          name: 'Vanity Chair',
          value: 0.07,
          group: 'Bedroom',
          counter: 0,
          show: false
        },
        {
          id: 191,
          name: 'Baby Bath',
          value: 0.11,
          group: 'Bathroom',
          counter: 0,
          show: false
        },
        {
          id: 192,
          name: 'Bath Tub',
          value: 0.6,
          group: 'Bathroom',
          counter: 0,
          show: false
        }
      ]
    }
  },
  mounted() {},
  created() {},
  methods: {
    addItem(item) {
      item.counter++
      this.addTotal(item)
      if (item.counter === 0) {
        this.hideItem(item)
      } else {
        this.showItem(item)
      }
    },
    addTotal(item) {
      this.total = this.total + item.value
    },
    removeItem(item) {
      item.counter--
      this.subtrauctItem(item)
      if (item.counter === 0) {
        this.hideItem(item)
      } else {
        this.showItem(item)
      }
    },
    subtrauctItem(item) {
      this.total = this.total - item.value
    },
    showItem(item) {
      item.show = true
    },
    hideItem(item) {
      item.show = false
    },
    async setVanSize() {
      if (this.total <= this.vanType.type1.capacity) {
        const metaObject = {
          vanSize: 1
        }
        await this.$store.dispatch('search/setSearchMetaValue', metaObject)
      } else if (this.total <= this.vanType.type2.capacity) {
        const metaObject = {
          vanSize: 2
        }
        await this.$store.dispatch('search/setSearchMetaValue', metaObject)
      } else if (this.total <= this.vanType.type3.capacity) {
        const metaObject = {
          vanSize: 3
        }
        await this.$store.dispatch('search/setSearchMetaValue', metaObject)
      } else {
        const metaObject = {
          vanSize: 4
        }
        await this.$store.dispatch('search/setSearchMetaValue', metaObject)
      }
      this.$router.push('/my-move')
    },
    showGroup(group) {
      this.group = group
    }
  }
}
</script>
