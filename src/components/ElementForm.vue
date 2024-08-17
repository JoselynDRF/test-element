<template>
  <div>
    <p>Filter Vue 2: {{ amount | currency }}</p>
    <br><hr><br>
    <span>Element Plus Vue 3:</span>
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="Activity name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { configureCompat } from 'vue'

export default {
  name: 'ElementForm',
  setup() {
    configureCompat({
      MODE: 3,
    })
  },
  filters: {
    currency(value) {
      return 'EUR ' + value
    }
  },
  data() {
    return {
      amount: 100,
      form: {
        name: '',
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!', this.form);
    }
  }
}
</script>