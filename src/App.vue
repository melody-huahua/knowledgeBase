<script setup lang="ts">
import { ref } from "vue";
import "bytemd/dist/index.css";
import { Editor, Viewer } from "@bytemd/vue-next"; // 导入编辑器组件
import zhHans from "bytemd/lib/locales/zh_Hans.json"; // 汉化
// import "github-markdown-css/github-markdown-light.css";
import highlightssr from "@bytemd/plugin-highlight-ssr";
import highlight from "@bytemd/plugin-highlight";
import gfm from "@bytemd/plugin-gfm";
import axios from "axios";
import "highlight.js/styles/atom-one-light.css"; //主题样式文件
import "highlight.js/lib/common";

const content = ref("");
const handleChange = (v: any) => {
  content.value = v;
};

const plugins = [
  // 将所有的扩展功能放入插件数组中，然后就可以生效了
  highlight(),
  highlightssr(),
  gfm(),
];

const uploadImage = async (files: any) => {
  // files 获取的图片文件，这里处理逻辑
  console.log("files", files);
  const data = await goimg(files[0]);
  return [
    {
      title: files.map((i: any) => i.name),
      url: "http",
    },
  ];
};

const goimg = async (file: any) => {
  const data = new FormData();
  data.append("file", file);
  let config = {
    method: "post",
    url: "http://121.36.17.6:19090/admin-api/infra/file/upload", //上传图片地址
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: "Bearer " + getAccessToken(),
      "tenant-id": getTenantId(),
    },
    data: file,
  };
  axios(config).then((res) => {
    console.log(res);
  });
};
</script>

<template>
  <div class="layout">
    <div class="first-level-sidebar">
      <div class="sidebar-header">
        <div class="user">
          <div class="icon"></div>
          <div class="name">admin</div>
        </div>
        <div class="operation"></div>
      </div>
      <div class="sidebar">
        <span>知识库</span>
        <span>日志</span>
      </div>
    </div>
    <div class="subordinate">
      <router-view />
    </div>
  </div>
</template>

<style scoped lang="scss">
#app {
  margin: 0;
}
.layout {
  width: 100vw;
  height: 100vh;
  display: flex;

  .first-level-sidebar {
    width: 20%;
    height: 100%;
    background: rgba(183, 183, 183, 0.1);
    border-right: 1px solid rgba(183, 183, 183, 0.5);
    // background: #fff;
    .sidebar-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 50px;
      width: 100%;
      padding: 0 6px;
      box-sizing: border-box;
      .user {
        display: flex;
        align-items: center;
        .icon {
          width: 40px;
          height: 40px;
          background: #ff8b8b;
          margin-right: 6px;
          border-radius: 20px;
        }
        .name {
          font-weight: 700;
        }
      }
      .operation {
        width: 40px;
        height: 40px;
        background: #ff8b8b;
        padding: 6px;
        box-sizing: border-box;
      }
    }
    .sidebar {
      height: 80%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: start;
      span {
        padding: 1rem 1rem 0 1rem;
        box-sizing: border-box;
        font-weight: 600;
        cursor: pointer;
      }
    }
  }
  .subordinate {
    width: 80%;
    height: 100%;
    padding: 2rem;
    box-sizing: border-box;
    overflow: auto;
  }
}
</style>
