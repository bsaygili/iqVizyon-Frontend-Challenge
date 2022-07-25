<template>
  <div class="machine-card">
    <div v-show="isClick">
      <button @click="addToDashBoard()">
        <span class="remove-machine-list">+</span>
      </button>
      <span>Add to DashBoard</span>
    </div>

    <!-- image source goes here from local data -->
    <img src="../assets/img-machines/machine.jpg" :alt="machine.name" />
    <div v-if="machine.id" class="machineCard-info">
      <h3>
        <!-- Machine name goes here -->
        {{ machine.name }}
      </h3>
      <p>
        <!-- Machine details goes here -->
        Producer: {{ machine.producer }}
      </p>
      <p>Model:{{ machine.model }}</p>

      <p>Serial:{{ machine.serial }}</p>

      <!-- link to machine elec. consumption page -->
      <a href="#"> Go to details... </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "MachineCard",
  props: {
    machine: { type: Object, required: true },
  },
  data: function () {
    return {
      isClick: true,
    };
  },
  methods: {
    addToDashBoard() {
      // Vuex state management
      this.$store.commit("addToMachinePano", this.machine);
      if (this.machine.id) {
        this.isClick = false;
        alert("The machine has been successfully added to the list");
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.machine-card {
  padding: 20px;
  max-width: 265px;
  max-height: 475px;
  cursor: pointer;
  border: 1px solid #26a9e0;
  margin-bottom: 15px;
  border-radius: 6px;
  transition: box-shadow ease-in 0.3s;
}
.machine-card:hover {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.machine-card img {
  max-width: 200px;
  max-height: 200px;
  margin: 10px auto;

  border-radius: 6px;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
}
.machine-card .machineCard-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.machineCard-info h3 {
  font-size: 18px;
  color: #26a9e0;
}
.machineCard-info p {
  font-size: 16px;
  color: #404042;
}
.machineCard-info a {
  text-decoration: none;
  cursor: pointer;
}
.remove-machine-list {
  display: block;
  width: 24px;
  border-radius: 50%;
  background-color: #26a9e0;
  color: white;
  cursor: pointer;
}
.machine-card button {
  display: inline;
  background-color: transparent;
  appearance: none;
  outline: none;
  border: none;
}
@media only screen and (max-width: 600px) {
  .machine-card img {
    display: none;
  }
}
</style>
