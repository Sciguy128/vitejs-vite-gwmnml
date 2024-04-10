<script>
import AddItem from './components/AddItem.vue';
import EditItem from './components/EditItem.vue';
import Task from './components/Task.vue';

export default {
  name: 'app',
  components: {
    Task,
  },
  data() {
    return {
      Tasks: [
        {
          title: 'Placeholder',
          description: 'Place',
          deadline: 'place',
          priorty: 'place',
          isComplete: 'place',
          action: 'place',
        },
      ],
    };
  },
};
</script>

<template>
  <div class="row">
    <div class="card">
      <div class="card-header">
        <div class="row">
          <div class="col-11">
            <div class="label">
              <font-awesome-icon icon="bars" /> FRAMEWORKS
            </div>
          </div>
          <div class="col-1">
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              <font-awesome-icon icon="circle-plus" /> Add
            </button>
          </div>
        </div>
      </div>
      <!--<div class="card-body">
        <table class="table">
          <tr>
            <td class="col-2">Title</td>
            <td class="col-2">Description</td>
            <td class="col-2">Deadline</td>
            <td class="col-2">Priorty</td>
            <td class="col-2">Is Complete</td>
            <td class="col-2">Action</td>
          </tr>
          <tr v-for="task in Tasks" :key="task.title">
            <Task
              :title="task.title"
              :description="task.description"
              :deadline="task.deadline"
              :priorty="task.priorty"
              :isComplete="task.isComplete"
              :action="task.action"
            ></Task>
          </tr>
        </table>
      </div>-->
    </div>
  </div>
  <AddItem msg="Vite + Vue" />
</template>

<style scoped>
.card-header {
  background-color: #347bb5;
  color: white;
}
.card {
  border-color: #347bb5;
}
.label {
  text-align: center;
}
td {
  text-align: center;
}
</style>
