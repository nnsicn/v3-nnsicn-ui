<template>
  <div class="nav-bar">
    <!-- <span>{{ routeStore.currentRouter }}</span> -->
    <div class="text-scroll">
      <p :style="{width:textWidth+'px'}" style="max-width:500px">
        <span ref="text" :style="{'animation-duration':duration+'s'}">
          <!-- {{content}} -->
        </span>
      </p>
    </div>
    <div>
      <el-dropdown trigger="click">
        <el-avatar
          :size="40"
          style="vertical-align: top; cursor: pointer"
          src="src/assets/images/avatar.jpg"
        />
        <template #dropdown>
          <el-dropdown-menu>
            <router-link to="/personal/index">
              <el-dropdown-item>personal</el-dropdown-item>
            </router-link>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref,computed,onMounted} from "vue"
// import { useRouter } from "@/store/app.js";
// const routeStore = useRouter();
let sentence = [
  "生命是轮回，苦难也是轮回。学会让自己安静，把思维沉浸下来，人生就像是一场长跑，跑得太快，会容易后劲不足；跑得太慢，就会落伍；中途退出，就会断送以前的努力；不参加，就没有赢得比赛的机会。",
  "少年,这江湖之大,难道就非她不可吗?"
]
let text = ref();//用以获取文本标签的宽
let textWidth = ref();//设置外层容器的宽度
let content = ref(sentence[0]);//文本内容
let duration = ref();//动画时长
onMounted(()=>{
    textWidth.value = text.value.clientWidth
    if(textWidth.value<600){
      duration.value = 10
    }else{
      duration.value = textWidth.value / 100;
    }
});
</script>

<style lang="scss">
.nav-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px 0 20px;
  width: 100%;
  height: 100%;
  background-color: #eee;
  .text-scroll {
    height: 100%;
    p {
      height: 100%;
      overflow: hidden;
      white-space: nowrap;
      span {
        line-height: 60px;
        display: inline-block;
        width: fit-content;
        animation-name:fadenum;
        animation-timing-function:linear;
        animation-iteration-count:infinite
      }
      @keyframes fadenum {
        0% {
          transform: translateX(300px);
        }
        100% {
          transform: translateX(-100%);
        }
      }
    }
  }
}
</style>