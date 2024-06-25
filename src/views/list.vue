<script setup lang="ts">
import { ref, watch } from "vue";
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
import { useRouter, useRoute } from "vue-router";
import { Document, Folder, Plus, MoreFilled } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";
const router = useRouter();
const route = useRoute();
const content = ref("<div id=\"wk-knowledge-title-wukong\">\n<p id=\"wk-knowledge-content-wukong\">产品需求文档</p>\n</div>\n<h1 style=\"mso-pagination: widow-orphan;\">基本信息</h1>\n<p style=\"mso-margin-top-alt: auto; mso-margin-bottom-alt: auto; mso-pagination: widow-orphan;\">目标上线时间：请输入时间</p>\n<p style=\"mso-margin-top-alt: auto; mso-margin-bottom-alt: auto; mso-pagination: widow-orphan;\"><span lang=\"EN-US\">&nbsp;</span></p>\n<h1 style=\"mso-pagination: widow-orphan;\">项目人员</h1>\n<p class=\"MsoNormal\" style=\"margin-left: 21.0pt; text-align: left; text-indent: -21.0pt; mso-pagination: widow-orphan; mso-list: l0 level1 lfo1;\" align=\"left\"><!-- [if !supportLists]--><span lang=\"EN-US\"><span style=\"mso-list: Ignore;\">l<span style=\"font-style: normal; font-variant: normal; font-stretch: normal; line-height: normal;\">&nbsp; </span></span></span><!--[endif]-->产品：请输入人员<a name=\"_GoBack\"></a></p>\n<p class=\"MsoNormal\" style=\"margin-left: 21.0pt; text-align: left; text-indent: -21.0pt; mso-pagination: widow-orphan; mso-list: l0 level1 lfo1;\" align=\"left\"><!-- [if !supportLists]--><span lang=\"EN-US\"><span style=\"mso-list: Ignore;\">l<span style=\"font-style: normal; font-variant: normal; font-stretch: normal; line-height: normal;\">&nbsp; </span></span></span><!--[endif]-->设计：请输入人员</p>\n<p class=\"MsoNormal\" style=\"margin-left: 21.0pt; text-align: left; text-indent: -21.0pt; mso-pagination: widow-orphan; mso-list: l0 level1 lfo1;\" align=\"left\"><!-- [if !supportLists]--><span lang=\"EN-US\"><span style=\"mso-list: Ignore;\">l<span style=\"font-style: normal; font-variant: normal; font-stretch: normal; line-height: normal;\">&nbsp; </span></span></span><!--[endif]-->研发：请输入人员</p>\n<p class=\"MsoNormal\" style=\"margin-left: 21.0pt; text-align: left; text-indent: -21.0pt; mso-pagination: widow-orphan; mso-list: l0 level1 lfo1;\" align=\"left\"><!-- [if !supportLists]--><span lang=\"EN-US\"><span style=\"mso-list: Ignore;\">l<span style=\"font-style: normal; font-variant: normal; font-stretch: normal; line-height: normal;\">&nbsp; </span></span></span><!--[endif]-->测试：请输入人员</p>\n<p class=\"MsoNormal\" style=\"margin-left: 36.0pt; text-align: left; mso-pagination: widow-orphan;\" align=\"left\"><span lang=\"EN-US\">&nbsp;</span></p>\n<h1 style=\"mso-pagination: widow-orphan;\">需求背景</h1>\n<p style=\"mso-margin-top-alt: auto; mso-margin-bottom-alt: auto; mso-pagination: widow-orphan;\">描述产品需求诞生的背景；我们为什么要做这件事情，和战略方向的契合点。</p>\n<h1 style=\"mso-pagination: widow-orphan;\">产品目标</h1>\n<p class=\"MsoNormal\" style=\"text-align: left; mso-pagination: widow-orphan;\" align=\"left\">描述产品的目标用户，以及期望通过产品实现的核心目标。</p>\n<p class=\"MsoNormal\" style=\"margin-left: 36.0pt; text-align: left; mso-pagination: widow-orphan;\" align=\"left\"><span lang=\"EN-US\">&nbsp;</span></p>\n<h1 style=\"mso-pagination: widow-orphan;\">衡量指标</h1>\n<p class=\"MsoNormal\" style=\"text-align: left; mso-pagination: widow-orphan;\" align=\"left\">用于衡量产品成功的关键指标</p>\n<p class=\"MsoNormal\" style=\"margin-left: 36.0pt; text-align: left; mso-pagination: widow-orphan;\" align=\"left\"><span lang=\"EN-US\">&nbsp;</span></p>\n<p class=\"MsoNormal\" style=\"margin-left: 36.0pt; text-align: left; mso-pagination: widow-orphan;\" align=\"left\"><span lang=\"EN-US\">&nbsp;</span></p>\n<p class=\"MsoNormal\" style=\"text-align: left; mso-pagination: widow-orphan;\" align=\"left\">产品需求</p>\n<table class=\"MsoTableGrid\" style=\"border-collapse: collapse; border: none; mso-border-alt: solid windowtext .5pt; mso-yfti-tbllook: 1184; mso-padding-alt: 0cm 5.4pt 0cm 5.4pt;\" border=\"1\" cellspacing=\"0\" cellpadding=\"0\">\n<tbody>\n<tr style=\"mso-yfti-irow: 0; mso-yfti-firstrow: yes;\">\n<td style=\"width: 106.5pt; border: solid windowtext 1.0pt; mso-border-alt: solid windowtext .5pt; padding: 0cm 5.4pt 0cm 5.4pt;\" valign=\"top\" width=\"142\">\n<p class=\"MsoNormal\" style=\"text-align: left; mso-pagination: widow-orphan;\" align=\"left\"><span lang=\"EN-US\">&nbsp;</span></p>\n</td>\n<td style=\"width: 106.5pt; border: solid windowtext 1.0pt; border-left: none; mso-border-left-alt: solid windowtext .5pt; mso-border-alt: solid windowtext .5pt; padding: 0cm 5.4pt 0cm 5.4pt;\" valign=\"top\" width=\"142\">\n<p class=\"MsoNormal\" style=\"text-align: left; mso-pagination: widow-orphan;\" align=\"left\"><span lang=\"EN-US\">&nbsp;</span></p>\n<p class=\"MsoNormal\" style=\"text-align: left; mso-pagination: widow-orphan;\" align=\"left\">作为</p>\n</td>\n<td style=\"width: 106.55pt; border: solid windowtext 1.0pt; border-left: none; mso-border-left-alt: solid windowtext .5pt; mso-border-alt: solid windowtext .5pt; padding: 0cm 5.4pt 0cm 5.4pt;\" valign=\"top\" width=\"142\">\n<p class=\"MsoNormal\" style=\"text-align: left; mso-pagination: widow-orphan;\" align=\"left\"><span lang=\"EN-US\">&nbsp;</span></p>\n<p class=\"MsoNormal\" style=\"text-align: left; mso-pagination: widow-orphan;\" align=\"left\">我想要的</p>\n</td>\n<td style=\"width: 106.55pt; border: solid windowtext 1.0pt; border-left: none; mso-border-left-alt: solid windowtext .5pt; mso-border-alt: solid windowtext .5pt; padding: 0cm 5.4pt 0cm 5.4pt;\" valign=\"top\" width=\"142\">\n<p class=\"MsoNormal\" style=\"text-align: left; mso-pagination: widow-orphan;\" align=\"left\"><span lang=\"EN-US\">&nbsp;</span></p>\n<p class=\"MsoNormal\" style=\"text-align: left; mso-pagination: widow-orphan;\" align=\"left\">以便于</p>\n</td>\n</tr>\n<tr style=\"mso-yfti-irow: 1;\">\n<td style=\"width: 106.5pt; border: solid windowtext 1.0pt; border-top: none; mso-border-top-alt: solid windowtext .5pt; mso-border-alt: solid windowtext .5pt; padding: 0cm 5.4pt 0cm 5.4pt;\" valign=\"top\" width=\"142\">\n<p class=\"MsoNormal\" style=\"text-align: left; mso-pagination: widow-orphan;\" align=\"left\"><span lang=\"EN-US\">1</span></p>\n</td>\n<td style=\"width: 106.5pt; border-top: none; border-left: none; border-bottom: solid windowtext 1.0pt; border-right: solid windowtext 1.0pt; mso-border-top-alt: solid windowtext .5pt; mso-border-left-alt: solid windowtext .5pt; mso-border-alt: solid windowtext .5pt; padding: 0cm 5.4pt 0cm 5.4pt;\" valign=\"top\" width=\"142\">\n<p class=\"MsoNormal\" style=\"text-align: left; mso-pagination: widow-orphan;\" align=\"left\"><span lang=\"EN-US\">&nbsp;</span></p>\n<p class=\"MsoNormal\" style=\"text-align: left; mso-pagination: widow-orphan;\" align=\"left\">产品经理</p>\n</td>\n<td style=\"width: 106.55pt; border-top: none; border-left: none; border-bottom: solid windowtext 1.0pt; border-right: solid windowtext 1.0pt; mso-border-top-alt: solid windowtext .5pt; mso-border-left-alt: solid windowtext .5pt; mso-border-alt: solid windowtext .5pt; padding: 0cm 5.4pt 0cm 5.4pt;\" valign=\"top\" width=\"142\">\n<p class=\"MsoNormal\" style=\"text-align: left; mso-pagination: widow-orphan;\" align=\"left\">从模版直接创建产品需求文档的功能</p>\n</td>\n<td style=\"width: 106.55pt; border-top: none; border-left: none; border-bottom: solid windowtext 1.0pt; border-right: solid windowtext 1.0pt; mso-border-top-alt: solid windowtext .5pt; mso-border-left-alt: solid windowtext .5pt; mso-border-alt: solid windowtext .5pt; padding: 0cm 5.4pt 0cm 5.4pt;\" valign=\"top\" width=\"142\">\n<p class=\"MsoNormal\" style=\"text-align: left; mso-pagination: widow-orphan;\" align=\"left\">快速并有条理的进行需求文档的撰写</p>\n</td>\n</tr>\n<tr style=\"mso-yfti-irow: 2; mso-yfti-lastrow: yes;\">\n<td style=\"width: 106.5pt; border: solid windowtext 1.0pt; border-top: none; mso-border-top-alt: solid windowtext .5pt; mso-border-alt: solid windowtext .5pt; padding: 0cm 5.4pt 0cm 5.4pt;\" valign=\"top\" width=\"142\">\n<p class=\"MsoNormal\" style=\"text-align: left; mso-pagination: widow-orphan;\" align=\"left\"><span lang=\"EN-US\">2</span></p>\n</td>\n<td style=\"width: 106.5pt; border-top: none; border-left: none; border-bottom: solid windowtext 1.0pt; border-right: solid windowtext 1.0pt; mso-border-top-alt: solid windowtext .5pt; mso-border-left-alt: solid windowtext .5pt; mso-border-alt: solid windowtext .5pt; padding: 0cm 5.4pt 0cm 5.4pt;\" valign=\"top\" width=\"142\">\n<p class=\"MsoNormal\" style=\"text-align: left; mso-pagination: widow-orphan;\" align=\"left\"><span lang=\"EN-US\">&nbsp;</span></p>\n<p class=\"MsoNormal\" style=\"text-align: left; mso-pagination: widow-orphan;\" align=\"left\">团队负责人</p>\n</td>\n<td style=\"width: 106.55pt; border-top: none; border-left: none; border-bottom: solid windowtext 1.0pt; border-right: solid windowtext 1.0pt; mso-border-top-alt: solid windowtext .5pt; mso-border-left-alt: solid windowtext .5pt; mso-border-alt: solid windowtext .5pt; padding: 0cm 5.4pt 0cm 5.4pt;\" valign=\"top\" width=\"142\">\n<p class=\"MsoNormal\" style=\"text-align: left; mso-pagination: widow-orphan;\" align=\"left\">自定义文档模版的能力</p>\n</td>\n<td style=\"width: 106.55pt; border-top: none; border-left: none; border-bottom: solid windowtext 1.0pt; border-right: solid windowtext 1.0pt; mso-border-top-alt: solid windowtext .5pt; mso-border-left-alt: solid windowtext .5pt; mso-border-alt: solid windowtext .5pt; padding: 0cm 5.4pt 0cm 5.4pt;\" valign=\"top\" width=\"142\">\n<p class=\"MsoNormal\" style=\"text-align: left; mso-pagination: widow-orphan;\" align=\"left\">规范不同场景下的撰写文档的格式和要求</p>\n</td>\n</tr>\n</tbody>\n</table>\n<p class=\"MsoNormal\" style=\"text-align: left; mso-pagination: widow-orphan;\" align=\"left\"><span lang=\"EN-US\">&nbsp;</span></p>\n<h1 style=\"mso-pagination: widow-orphan;\">功能及界面设计</h1>\n<p class=\"MsoNormal\" style=\"text-align: left; mso-pagination: widow-orphan;\" align=\"left\">描述详细功能设计，以及相关的线框设计、视觉设计图。</p>\n<p class=\"MsoNormal\" style=\"text-align: left; mso-pagination: widow-orphan;\" align=\"left\"><span lang=\"EN-US\">+</span>上传图片</p>\n<p class=\"MsoNormal\" style=\"text-align: left; mso-pagination: widow-orphan;\" align=\"left\"><span lang=\"EN-US\">+</span>上传附件</p>\n<p class=\"MsoNormal\" style=\"text-align: left; mso-pagination: widow-orphan;\" align=\"left\"><span lang=\"EN-US\">&nbsp;</span></p>\n<p class=\"MsoNormal\" style=\"text-align: left; mso-pagination: widow-orphan;\" align=\"left\">问题</p>\n<table class=\"MsoTableGrid\" style=\"border-collapse: collapse; border: none; mso-border-alt: solid windowtext .5pt; mso-yfti-tbllook: 1184; mso-padding-alt: 0cm 5.4pt 0cm 5.4pt;\" border=\"1\" cellspacing=\"0\" cellpadding=\"0\">\n<tbody>\n<tr style=\"mso-yfti-irow: 0; mso-yfti-firstrow: yes;\">\n<td style=\"width: 47.95pt; border: solid windowtext 1.0pt; mso-border-alt: solid windowtext .5pt; padding: 0cm 5.4pt 0cm 5.4pt;\" valign=\"top\" width=\"64\">\n<p class=\"MsoNormal\" style=\"text-align: left; mso-pagination: widow-orphan;\" align=\"left\"><span lang=\"EN-US\">#</span></p>\n</td>\n<td style=\"width: 224.75pt; border: solid windowtext 1.0pt; border-left: none; mso-border-left-alt: solid windowtext .5pt; mso-border-alt: solid windowtext .5pt; padding: 0cm 5.4pt 0cm 5.4pt;\" valign=\"top\" width=\"300\">\n<p class=\"MsoNormal\" style=\"text-align: left; mso-pagination: widow-orphan;\" align=\"left\">问题</p>\n</td>\n<td style=\"width: 153.0pt; border: solid windowtext 1.0pt; border-left: none; mso-border-left-alt: solid windowtext .5pt; mso-border-alt: solid windowtext .5pt; padding: 0cm 5.4pt 0cm 5.4pt;\" valign=\"top\" width=\"204\">\n<p class=\"MsoNormal\" style=\"text-align: left; mso-pagination: widow-orphan;\" align=\"left\">结论</p>\n</td>\n</tr>\n<tr style=\"mso-yfti-irow: 1;\">\n<td style=\"width: 47.95pt; border: solid windowtext 1.0pt; border-top: none; mso-border-top-alt: solid windowtext .5pt; mso-border-alt: solid windowtext .5pt; padding: 0cm 5.4pt 0cm 5.4pt;\" valign=\"top\" width=\"64\">\n<p class=\"MsoNormal\" style=\"text-align: left; mso-pagination: widow-orphan;\" align=\"left\"><span lang=\"EN-US\">1</span></p>\n</td>\n<td style=\"width: 224.75pt; border-top: none; border-left: none; border-bottom: solid windowtext 1.0pt; border-right: solid windowtext 1.0pt; mso-border-top-alt: solid windowtext .5pt; mso-border-left-alt: solid windowtext .5pt; mso-border-alt: solid windowtext .5pt; padding: 0cm 5.4pt 0cm 5.4pt;\" valign=\"top\" width=\"300\">\n<p class=\"MsoNormal\" style=\"text-align: left; mso-pagination: widow-orphan;\" align=\"left\">描述评审、研发等过程中发现的问题</p>\n</td>\n<td style=\"width: 153.0pt; border-top: none; border-left: none; border-bottom: solid windowtext 1.0pt; border-right: solid windowtext 1.0pt; mso-border-top-alt: solid windowtext .5pt; mso-border-left-alt: solid windowtext .5pt; mso-border-alt: solid windowtext .5pt; padding: 0cm 5.4pt 0cm 5.4pt;\" valign=\"top\" width=\"204\">\n<p class=\"MsoNormal\" style=\"text-align: left; mso-pagination: widow-orphan;\" align=\"left\">描述最终讨论得出的决定</p>\n</td>\n</tr>\n<tr style=\"mso-yfti-irow: 2; mso-yfti-lastrow: yes; height: 22.15pt;\">\n<td style=\"width: 47.95pt; border: solid windowtext 1.0pt; border-top: none; mso-border-top-alt: solid windowtext .5pt; mso-border-alt: solid windowtext .5pt; padding: 0cm 5.4pt 0cm 5.4pt; height: 22.15pt;\" valign=\"top\" width=\"64\">\n<p class=\"MsoNormal\" style=\"text-align: left; mso-pagination: widow-orphan;\" align=\"left\"><span lang=\"EN-US\">2</span></p>\n</td>\n<td style=\"width: 224.75pt; border-top: none; border-left: none; border-bottom: solid windowtext 1.0pt; border-right: solid windowtext 1.0pt; mso-border-top-alt: solid windowtext .5pt; mso-border-left-alt: solid windowtext .5pt; mso-border-alt: solid windowtext .5pt; padding: 0cm 5.4pt 0cm 5.4pt; height: 22.15pt;\" valign=\"top\" width=\"300\">\n<p class=\"MsoNormal\" style=\"text-align: left; mso-pagination: widow-orphan;\" align=\"left\"><span lang=\"EN-US\">&nbsp;</span></p>\n</td>\n<td style=\"width: 153.0pt; border-top: none; border-left: none; border-bottom: solid windowtext 1.0pt; border-right: solid windowtext 1.0pt; mso-border-top-alt: solid windowtext .5pt; mso-border-left-alt: solid windowtext .5pt; mso-border-alt: solid windowtext .5pt; padding: 0cm 5.4pt 0cm 5.4pt; height: 22.15pt;\" valign=\"top\" width=\"204\">\n<p class=\"MsoNormal\" style=\"text-align: left; mso-pagination: widow-orphan;\" align=\"left\"><span lang=\"EN-US\">&nbsp;</span></p>\n</td>\n</tr>\n</tbody>\n</table>\n<p class=\"MsoNormal\" style=\"text-align: left; mso-pagination: widow-orphan;\" align=\"left\"><span lang=\"EN-US\">&nbsp;</span></p>\n<h1 style=\"mso-pagination: widow-orphan;\">暂不支持</h1>\n<p class=\"MsoNormal\" style=\"text-align: left; mso-pagination: widow-orphan;\" align=\"left\">由于受限团队目标、技术、时间等不支持的功能</p>\n<p class=\"MsoNormal\" style=\"text-align: left; mso-pagination: widow-orphan;\" align=\"left\"><span lang=\"EN-US\">&nbsp;</span></p>\n<p class=\"MsoNormal\" style=\"text-align: left; mso-pagination: widow-orphan;\" align=\"left\"><span lang=\"EN-US\">&nbsp;</span></p>\n<h1 style=\"mso-pagination: widow-orphan;\">附录</h1>\n<p class=\"MsoNormal\" style=\"text-align: left; mso-pagination: widow-orphan;\" align=\"left\"><span lang=\"EN-US\">+</span>上传附件</p>\n<p class=\"MsoNormal\" style=\"text-align: left; mso-pagination: widow-orphan;\" align=\"left\"><span lang=\"EN-US\">&nbsp;</span></p>");
const treeRef = ref();
let isDocument = ref(false);
let dialogVisible = ref(false);
let addType = ref("");
let input = ref("");
const handleChange = (v: any) => {
  content.value = v;
};

let addContext = ref({});

const plugins = [
  // 将所有的扩展功能放入插件数组中，然后就可以生效了
  highlight(),
  highlightssr(),
  gfm(),
];

const addNewFold = () => {
  if (input.value == "") {
    ElMessage({
      message: "未命名",
      type: "warning",
    });
    return;
  }

  append(addContext.value);

  dialogVisible.value = false;
  input.value = "";
};

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
const dataSource = ref([
  {
    id: 1,
    label: "目录1",
    children: [
      {
        id: 4,
        label: "文件夹",
        children: [
          {
            id: 9,
            label: "子文件",
          },
          {
            id: 10,
            label: "子文件",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: "目录2",
    children: [
      {
        id: 5,
        label: "子文件",
      },
      {
        id: 6,
        label: "子文件",
      },
    ],
  },
]);
const handleTreeNode = (data, node, TreeNode, eve) => {
  console.log(data, node);
  if (data.children) {
    isDocument.value = false;
  } else {
    isDocument.value = true;
    addType.value = "112";
  }
};
let id = 1;
const append = (data) => {
  console.log(data, "要操作的树节点");
  if (addType.value == "重命名") {
    data.label = input.value;
    dataSource.value = [...dataSource.value];
    return;
  }

  let newChild;
  if (addType.value == "创建文件") {
    newChild = { id: id++, label: input.value };
  } else if (addType.value == "创建文件夹") {
    newChild = { id: id++, label: input.value, children: [] };
  }

  if (!data.children) {
    data.children = [];
  }
  data.children.push(newChild);
  dataSource.value = [...dataSource.value];
};

const updataName = (data) => {
  data = { id: id++, label: input.value };
  dataSource.value = [...dataSource.value];
};

const remove = (node, data) => {
  const parent = node.parent;
  const children = parent.data.children || parent.data;
  const index = children.findIndex((d) => d.id === data.id);
  children.splice(index, 1);
  dataSource.value = [...dataSource.value];
};

const handleCommand = (eve: any, data: any) => {
  addContext.value = data;
  dialogVisible.value = true;
  addType.value = eve;
};
const handleCommandMore = (eve, node, data) => {
  if (eve == "重命名") {
    addContext.value = data;
    dialogVisible.value = true;
    addType.value = eve;
  } else if (eve == "删除") {
    remove(node, data);
  }
};

const filterText = ref("");
watch(filterText, (val) => {
  treeRef.value!.filter(val);
});
const filterNode = (value: string, data: any) => {
  if (!value) return true;
  return data.label.includes(value);
};

const handleClose = () => {
  dialogVisible.value = false;
};

const handleGoBack = () => {
  router.back();
};
</script>

<template>
  <div class="item-cate-content">
    <div class="catalogue">
      <div class="title">
        <div class="goback" @click="handleGoBack">
          <i style="font-size: 12px" class="iconfont icon-chexiao"></i>
          <span>返回</span>
        </div>
        <span class="title-name">IT&运维</span>
      </div>
      <div class="tree-content">
        <el-input
          v-model="filterText"
          style="width: 100%; margin-bottom: 10px"
          placeholder="查询过滤"
          size="default"
        />

        <el-tree
          ref="treeRef"
          style="width: 100%"
          :data="dataSource"
          node-key="id"
          default-expand-all
          :expand-on-click-node="false"
          :filter-node-method="filterNode"
          @node-click="handleTreeNode"
        >
          <template #default="{ node, data }">
            <span class="custom-tree-node">
              <span style="display: flex; align-items: center">
                <el-icon style="margin-right: 4px" v-if="!data.children"
                  ><Document
                /></el-icon>
                <el-icon style="margin-right: 4px" v-if="data.children"
                  ><Folder
                /></el-icon>
                {{ node.label }}
              </span>
              <span style="display: flex; align-items: center" @click.stop>
                <el-dropdown
                  trigger="click"
                  @command="handleCommand($event, data)"
                  v-if="data.children"
                >
                  <span class="el-dropdown-link">
                    <el-icon style="color: #000"><Plus /></el-icon>
                  </span>
                  <template #dropdown>
                    <el-dropdown-menu :teleported="false">
                      <el-dropdown-item :icon="Document" command="创建文件"
                        >创建文件</el-dropdown-item
                      >
                      <el-dropdown-item :icon="Folder" command="创建文件夹">
                        创建文件夹
                      </el-dropdown-item>
                    </el-dropdown-menu>
                  </template>
                </el-dropdown>
                <el-dropdown
                  trigger="click"
                  @command="handleCommandMore($event, node, data)"
                >
                  <span class="el-dropdown-link" style="margin-left: 8px">
                    <el-icon style="color: #000"><MoreFilled /></el-icon>
                  </span>
                  <template #dropdown>
                    <el-dropdown-menu :teleported="false">
                      <el-dropdown-item :icon="Document" command="重命名"
                        >重命名</el-dropdown-item
                      >
                      <el-dropdown-item :icon="Folder" command="删除">
                        删除
                      </el-dropdown-item>
                    </el-dropdown-menu>
                  </template>
                </el-dropdown>
                <!-- <el-popover
                  popper-class="tree-popover"
                  :teleported="false"
                  placement="bottom"
                  :hide-after="0"
                  trigger="click"
                >
                  <template #reference>
                    <a @click="append(data)">创建</a>
                  </template>
                  <div>创建文件</div>
                  <div>创建文件夹</div>
                </el-popover> -->

                <!-- <a style="margin-left: 8px" @click="remove(node, data)">
                  <el-icon style="color: #000"><MoreFilled /></el-icon>
                </a> -->
              </span>
            </span>
          </template>
        </el-tree>
      </div>
    </div>
    <div class="list-content" v-show="!isDocument">
      <div class="list-title">
        <span>该文件夹于 2022-02-02 由 某某 创建</span>
        <div class="upload-btn">添加内容</div>
      </div>
      <div class="list-container">
        <div class="list-item" v-for="item in 20" :key="item">
          <div class="name">
            <el-icon style="margin-right: 4px"><Document /></el-icon>
            <span>文件名称</span>
          </div>
          <div class="prop">文件属性</div>
        </div>
      </div>
    </div>
    <div class="document-content" v-show="isDocument">
      <div class="list-title">
        <span>地图下钻 于 某某 2022-02-02 创建</span>
        <div class="upload-btn">上传</div>
      </div>
      <div style="text-align: left; height: 100%">
        <Editor
          style="height: 100%"
          :plugins="plugins"
          mode="split"
          :value="content"
          :locale="zhHans"
          @change="handleChange"
          :uploadImages="uploadImage"
        />
        <!-- <Viewer
          style="height: 100%"
          :plugins="plugins"
          :value="content"
          :locale="zhHans"
        /> -->
      </div>
    </div>
  </div>
  <el-dialog
    v-model="dialogVisible"
    width="500"
    :align-center="true"
    :before-close="handleClose"
    :show-close="false"
  >
    <template #header="{ close, titleId, titleClass }">
      <div class="my-header">
        <span :id="titleId" :class="titleClass">{{ addType }}</span>
        <span @click="close"> X </span>
      </div>
    </template>
    <div>
      <el-input
        v-model="input"
        style="width: 100%"
        placeholder="请输入文件 / 文件夹名称"
      />
    </div>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false"> 取消 </el-button>
        <el-button type="primary" @click="addNewFold"> 提交 </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style scoped lang="scss">
@import url("../assets/font/iconfont.css");
.item-cate-content {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 20px;
  box-sizing: border-box;
  .catalogue {
    width: 26%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      width: 100%;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      font-weight: 900;
      .goback {
        position: absolute;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
      }
      .title-name {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
      }
    }
    .tree-content {
      width: 100%;
    }
  }
  .list-content {
    width: 70%;
    height: 100%;
    .list-title {
      width: 100%;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .upload-btn {
        background: rgba(52, 69, 99);
        border: 0;
        color: #fff;
        height: 30px;
        width: 80px;
        border-radius: 4px;
        font-weight: 500;
        line-height: 30px;
        text-align: center;
        font-size: 14px;
        cursor: pointer;
        &:hover {
          background: rgba(52, 69, 99, 0.8);
        }
      }
    }
    .list-container {
      width: 100%;
      height: calc(100% - 100px);
      // height: 80%;
      overflow: auto;
      &::-webkit-scrollbar {
        display: none;
      }

      .list-item {
        height: 40px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        .name {
          color: #000;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        &:hover {
          background: rgba($color: #828282, $alpha: 0.1);
        }
      }
    }
  }
  .document-content {
    width: 70%;
    height: 100%;
    .list-title {
      width: 100%;
      height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .upload-btn {
        background: rgba(52, 69, 99);
        border: 0;
        color: #fff;
        height: 30px;
        width: 60px;
        border-radius: 4px;
        font-weight: 500;
        line-height: 30px;
        text-align: center;
        font-size: 14px;
        cursor: pointer;
        &:hover {
          background: rgba(52, 69, 99, 0.8);
        }
      }
    }
  }
}

.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}

::v-deep .bytemd {
  height: calc(100% - 40px);
}

::v-deep .tree-popover {
  width: 100px !important;
  min-width: 0 !important;
}

.my-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;
}
</style>
