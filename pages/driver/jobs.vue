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
import EmptySpace from '~/components/EmptySpace.vue'
export default {
  components: {
    EmptySpace,
    FullCalendar // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarPlugins: [dayGridPlugin]
    }
  },
  async mounted() {
    const response = await this.$axios
      .$get('/driver/jobs')
      .then(function(response) {
        // handle success
        return response
      })
      .catch(function(error) {
        console.log(error)
      })
    this.$store.dispatch('driver-jobs/setDriverJobs', response.data)
  }
}
</script>
