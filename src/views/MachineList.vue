<template>
  <div class="contanier">
    <div class="wrapper">
      <img alt="Firm logo" src="../assets/logo.svg" />
      <div class="machine-cards">
        <MachineCard
          v-for="machine in machines"
          :key="machine.machine_id"
          :machine="machine"
        />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MachineCard from "@/components/MachineCard.vue";
import MachineWebService from "../services/MachineWebService";
import { watchEffect } from "vue";

export default {
  name: "MachineList",
  components: {
    MachineCard,
  },
  data() {
    return {
      machines: null,
    };
  },
  created() {
    watchEffect(() => {
      // Webservice data fetching here
      MachineWebService.getMachines()
        .then((response) => {
          // response sync to machines Array
          this.machines = response.data;
        })
        .catch((err) => console.log(err));
    });
  },
};
</script>
<style scoped>
.container {
  max-width: 1140px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
img {
  max-width: 350px;
  max-height: 60px;
  margin: 1rem 0;
}
.machine-cards {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
a {
  text-decoration: none;
}
@media only screen and (max-width: 1200px) {
  .machine-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    align-items: center;
  }
}
@media only screen and (max-width: 992px) {
  .machine-cards {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media only screen and (max-width: 768px) {
  .machine-cards {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
