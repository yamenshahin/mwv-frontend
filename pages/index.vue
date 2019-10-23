<template>
  <div class="page-index mb-5">
    <DriverSlider />
    <MainSlider />
    <WorkSteps />
    <Statistics />
    <UnderStatistics />
    <DriverBanner />
    <Client />
  </div>
</template>

<script>
import DriverSlider from '~/components/index/DriverSlider'
import MainSlider from '~/components/index/MainSlider'
import WorkSteps from '~/components/index/WorkSteps'
import Statistics from '~/components/index/Statistics'
import UnderStatistics from '~/components/index/UnderStatistics'
import DriverBanner from '~/components/index/DriverBanner'
import Client from '~/components/index/Client'

export default {
  components: {
    DriverSlider,
    MainSlider,
    WorkSteps,
    Statistics,
    UnderStatistics,
    DriverBanner,
    Client
  }
}
</script>
