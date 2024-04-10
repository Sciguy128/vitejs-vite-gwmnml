<script>
import { ref } from 'vue';

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <!--<h1>{{ msg }}</h1>-->
  <div
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">
            <font-awesome-icon icon="circle-plus" /> Add Task
          </h1>
        </div>
        <div class="modal-body">
          <form id="addItem">
            <div class="form group">
              <input
                id="title"
                type="text"
                class="form-control"
                placeholder="Title"
              />
              <input
                id="description"
                type="text"
                class="form-control"
                placeholder="Description"
              />
              <input type="date" id="Deadline" class="form-control" />
              <label class="control-label"> Priorty: </label>
              <div>
                <label class="radio-inline">
                  <input
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                  />
                  Low
                </label>
                <label class="radio-inline">
                  <input
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="option2"
                  />
                  Med
                </label>
                <label class="radio-inline">
                  <input
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio3"
                    value="option3"
                  />
                  High
                </label>
              </div>
              <button type="button" class="btn btn-primary">
                <font-awesome-icon icon="circle-plus" /> Add
              </button>
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                <font-awesome-icon icon="ban" /> Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!--
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
--></template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
