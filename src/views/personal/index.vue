<template>
  <el-row :gutter="20">
    <el-col :span="8">
      <el-card class="box-card personal-card">
        <el-avatar :size="100" style="vertical-align: top;" src="src/assets/images/avatar.jpg" />
        <!-- <div class="flex-column" style="margin-left:30px;height:100px">
          <p style="display:block"><span>姓名:</span><span>{{ exhibit.name }}</span></p>
          <p style="display:block"><span>年龄:</span><span>{{ exhibit.age }}</span></p>
          <p style="display:block"><span>性别:</span><span>{{ exhibit.sex }}</span></p>
        </div> -->
        <el-divider />
      </el-card>
    </el-col>
    <el-col :span="16">
      <el-card class="box-card personal-form">
        <el-form :model="form" label-width="120px">
          <el-form-item label="姓名">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="年龄">
            <el-input v-model="form.age"></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <Select enum="sexEnum" v-model="form.sex" @change="handleChange"></Select>
          </el-form-item>
        </el-form>
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { ref } from "vue";
interface sexFormat {
  name: string,
  age: number,
  sex: number
}
const form = ref<sexFormat>(init())
function init():sexFormat {
  return {
    name: "北小鱼",
    age: 18,
    sex: 1
  }
}
function handleChange(val:number) {
  console.log(form.value.sex);
}
</script>

<style lang="scss" scoped>
.personal {
  display: flex;

  .personal-card {
    flex: 1;
  }

  .personal-form {
    margin-left: 20px;
    flex: 3;
  }
}
</style>