<script setup lang="ts">
import { ref } from "vue";
import { Search, ArrowLeftBold, Document } from "@element-plus/icons-vue";
import { useRouter } from "vue-router";
const router = useRouter();
const input = ref("");
const options = [
  {
    value: "Option1",
    label: "Option1",
  },
  {
    value: "Option2",
    label: "Option2",
  },
];
const handleSeach = () => {
  console.log("sousuo");
};
const handleGoBack = () => {
  router.back();
};
</script>

<template>
  <div class="seach-container">
    <div class="back">
      <el-icon style="color: #000; margin-right: 10px">
        <ArrowLeftBold />
      </el-icon>
      <span @click="handleGoBack">返回</span>
    </div>
    <div class="seach-input">
      <el-input
        v-model="input"
        style="max-width: 240px"
        placeholder="Please input"
      >
        <template #append>
          <el-button @click="handleSeach" :icon="Search"
        /></template>
      </el-input>
    </div>
    <div class="seach-content">
      <div class="seach-detailed">
        <div class="seach-item">
          <span>创建人</span>
          <el-select v-model="value" placeholder="Select" style="width: 100%">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
        <div class="seach-item">
          <span>在下面知识库中</span>
          <el-select v-model="value" placeholder="Select" style="width: 100%">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
      </div>
      <div class="seach-knowledge-list">
        <div class="knowledge-item" v-for="item in 10" :key="item">
          <div class="file">
            <el-icon style="margin-right: 6px">
              <Document />
            </el-icon>
            <span class="name">文件名称</span>
          </div>
          <div class="info">
            <span>分类</span>
            <span style="margin: 0 10px"> | </span>
            <span>2024-06-20 11:30:34</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.seach-container {
  height: 100%;
  width: 100%;

  .back {
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    & > *:hover {
      cursor: pointer;
    }
  }
  .seach-input {
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
  }
  .seach-content {
    width: 100%;
    height: calc(100% - 100px);
    display: flex;
    justify-content: space-between;
    align-items: center;

    .seach-detailed {
      padding: 10px;
      box-sizing: border-box;
      width: 24%;
      height: 100%;
      border: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 4px;
      .seach-item {
        display: flex;
        flex-direction: column;
        align-items: start;
        margin-bottom: 8px;
        span {
          font-size: 12px;
          font-weight: 700;
          margin-bottom: 3px;
        }
      }
    }
    .seach-knowledge-list {
      width: 74%;
      height: 100%;
      border: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 4px;
      padding: 20px;
      box-sizing: border-box;
      .knowledge-item {
        cursor: pointer;
        height: 50px;
        width: 100%;
        display: flex;
        flex-direction: column;

        .file {
          display: flex;
          align-items: center;

          .name {
            font-size: 14px;
            font-weight: 700;
            color: #0052cc;
            border-bottom: 1px solid rgba(0, 0, 0, 0);
            &:hover {
              border-bottom: 1px solid #0052cc;
            }
          }
        }

        .info {
          font-size: 14px;
          display: flex;
          align-items: center;
          color: #6b778c;
          span {
            display: flex;
            align-items: center;
          }
        }
      }
    }
  }
}
</style>
