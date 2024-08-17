<template>
  <div id="app">
    <header>
      <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="50" height="50" />
    </header>

    <main>
      <!-- <element-form /> -->
      <!-- <el-dialog visible="true"> -->
      <el-dialog model-value="true">
        Content
      </el-dialog>
    </main>
  </div>
</template>

<script>
import ElementForm from './components/ElementForm.vue'

export default {
  name: 'App',
  components: { ElementForm },
}
</script>
