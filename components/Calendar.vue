<template>
  <div>
    <FullCalendar
      default-view="dayGridMonth"
      :plugins="calendarPlugins"
      :events="events"
      @eventClick="onEventClick"
    />
  </div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  props: ['events'],
  data() {
    return {
      calendarPlugins: [dayGridPlugin, interactionPlugin]
    }
  },
  methods: {
    onEventClick(info) {
      console.log(info.event.id)
      this.$bvModal.show(info.event.id)
    }
  }
}
</script>
