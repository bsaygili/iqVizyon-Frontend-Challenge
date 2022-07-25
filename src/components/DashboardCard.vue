<template>
  <div class="container">
    <div class="wrapper">
      <div class="machine-content">
        <!-- image comes from localdata -->
        <img src="../assets/img-machines/data.png" :alt="machine.name" />
        <div class="machine-info">
          <!-- Name of machine -->
          <h3>{{ machine.name }}</h3>
          <!-- Producer of machine -->
          <p>Producer :{{ machine.producer }}</p>
          <!-- Model of machine -->
          <p>Model : {{ machine.model }}</p>
          <!-- Serial Number of machine -->
          <p>Serial : {{ machine.serial }}</p>
        </div>
        <button @click="removeFromDashBoard()">Remove From DashBoard</button>
      </div>

      <div class="line-graphics">
        <!-- ApexLine Chart created here -->
        <ApexLineChart :machine="machine" />
      </div>
    </div>
  </div>
</template>

<script>
import ApexLineChart from "./ApexLineChart.vue";

export default {
  name: "DashboardCard",
  components: {
    ApexLineChart,
  },
  props: {
    machine: { type: Object, required: true },
  },

  data() {
    return {};
  },
  methods: {
    removeFromDashBoard() {
      // this func calls with "commit" to "store", in order to remove machine from dashboard
      this.$store.commit("removeFromMachinePano", this.machine.id);
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  margin: 10px auto;
  max-width: 1140px;
  border: 1px solid #26a9e0;
  border-radius: 16px 6px 16px 6px;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
}
.machine-content {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 10px;
}
.machine-content img {
  margin-bottom: 10px;
  max-width: 250px;
  border-radius: 6px;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
}
.machine-content .machine-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.machine-content button {
  outline: none;
  border: 1px solid #26a9e0;
  color: #26a9e0;
  border-radius: 5px;
  transition: backgorund-color ease-in 0.4;
}
.machine-content button:hover {
  color: #fff;
  background-color: #26a9e0;
}
.line-graphics {
  width: 650px;
  margin: auto 2rem;
}
/* media queries */
@media only screen and (max-width: 1200px) {
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .line-graphics {
    max-width: 550px;
    margin: auto 2rem;
  }
}
</style>
