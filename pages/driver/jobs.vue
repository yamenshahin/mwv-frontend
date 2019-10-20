<template>
  <div class="page-driver-jobs section_mod-2">
    <h1 class="ui-title-page">Jobs</h1>
    <div class="triagl triagl-btm"></div>
    <EmptySpace />
    <b-container>
      <FullCalendar default-view="dayGridMonth" :plugins="calendarPlugins" />
    </b-container>
  </div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarPlugins: [dayGridPlugin]
    }
  }
}
</script>
