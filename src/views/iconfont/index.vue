<template>
  <!-- <iframe src="src/assets/iconfont/demo_index.html" frameborder="0" style="width:100%;height:100%"></iframe> -->
  <ul class="icon">
    <li v-for="icon in iconfont" :key="icon.icon_id" v-copy="copyData" @click="handleClick(icon)">
      <i class="iconfont" :class="'icon-' + icon.font_class"></i>
      <span class="text-ellipsis">{{ icon.name.split("_")[0] }}</span>
      <span class="text-ellipsis">{{ "icon-" + icon.font_class }}</span>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import axios from "axios";
import { ref } from "vue";
import { ElMessage } from "element-plus";
interface iconFormat {
  icon_id: string,
  font_class: string,
  name: string,
  [key: string]: string | number
}
const iconfont = ref<Array<iconFormat>>();
const copyData = ref<string>();
axios
  .request({
    url: "/src/assets/iconfont/iconfont.json",
  })
  .then((result) => {
    const { data } = result;
    iconfont.value = data.glyphs;
  }, (error) => {
    ElMessage({
      showClose: true,
      message: error,
      type: "error",
    });
  });
const handleClick = (icon: any) => {
  copyData.value = 'icon-' + icon.font_class
}
</script>

<style lang="scss" scoped>
.icon {
  display: flex;
  flex-wrap: wrap;

  li {
    width: 140px;
    height: 140px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;

    i {
      font-size: 32px;
      font-weight: normal;
      margin-bottom: 20px;
    }

    span {
      text-align: center;
      width: 100px;
      height: 20px;
    }

    &:hover {
      cursor: pointer;
      position: relative;
      opacity: 0.4;
      // &::after{
      //     content: "";
      //     display: inline-block;
      //     position: absolute;
      //     width: 100%;
      //     height: 100%;
      //     background-color: #000;
      //     opacity: .1;
      // }
    }
  }
}
</style>