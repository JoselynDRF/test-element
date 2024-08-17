<template>
  <div id="app">
    <header>
      <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="50" height="50" />
    </header>

    <main>
      <span>Hello!</span>
      <el-button>Button</el-button>
      <!-- <element-form /> -->
    </main>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
// import ElementForm from './components/ElementForm.vue'

export default defineComponent({
  name: 'App',
  // components: { ElementForm }
})
</script>
