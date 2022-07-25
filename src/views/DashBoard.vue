<template>
  <div class="dashboard">
    <h1 v-show="machines.length > 0">Instant Electricity Consumption(w/s)</h1>
    <DashboardCard
      v-for="machine in machines"
      :key="machine.machine_id"
      :machine="machine"
    />
    <div v-show="machines.length === 0" class="not-found-page">
      <div class="not-found-page-info">
        <h3>
          Opps.. something goes wrong. Please select Machine from MachineList
        </h3>
      </div>

      <img
        src="../assets/fall-burning-astronaut-modified.png"
        alt="not-found"
      />
    </div>
  </div>
</template>

<script>
import DashboardCard from "@/components/DashboardCard.vue";
import { watchEffect } from "vue";

export default {
  name: "DashBoard",
  components: {
    DashboardCard,
  },
  data() {
    return {
      machines: null,
    };
  },
  created() {
    watchEffect(() => {
      this.machines = this.$store.state.machinesPano;
    });
  },
};
</script>
<style>
.dashboard {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.dashboard .not-found-page {
  margin: 3rem auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.not-found-page .not-found-page-info {
  max-width: 400px;
  text-align: center;
}
.not-found-page img {
  max-width: 400px;
}
</style>
