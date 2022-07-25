<template>
  <div>
    <!-- ApexLine Chart created here -->
    <apexchart
      ref="realtimeChart"
      type="line"
      height="350"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
export default {
  name: "ApexLineChart",
  props: {
    machine: { type: Object, required: true },
  },
  data: () => ({
    chartOptions: {
      chart: {
        id: "consumption-of-#-machine",
      },
      animations: {
        enabled: true,
        easing: "linear",
        dynamicAnimation: {
          speed: 850,
        },
      },
      toolbar: {
        show: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        categories: [],
      },
    },
    series: [
      {
        name: "Instant Electricty Usage of #machine",
        data: [],
      },
    ],
  }),

  mounted: function () {
    // Starting connection to Websocket Server
    this.connection = new WebSocket("ws://localhost:5000/consumption/");
    // Handshake connection to Websocket Server
    this.connection.onopen = () => {
      this.connection.send(
        JSON.stringify({ machine_id: this.machine.id })
        // this.$store.state.machinesPano[0].id
      );
    };
    // Event Listening Here
    this.connection.addEventListener("message", (event) => {
      // variable 'currentData' is syncing to 'this.series[0].data'
      var currentData = this.series[0].data;
      currentData.push(JSON.parse(event.data).usage);
      if (currentData.length > 20) {
        // current data length is shifted because we don't want to stretch out chart
        currentData.shift();
      }
      this.$refs.realtimeChart.updateSeries([
        {
          data: currentData,
        },
      ]);
    });
  },
};
</script>
