<template>
  <div>
    <FullCalendar
      :plugins="calendarPlugins"
      :events="events"
      @eventClick="onEventClick"
      default-view="dayGridMonth"
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
      this.$bvModal.show(info.event.id)
    }
  }
}
</script>
