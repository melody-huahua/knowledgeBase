<script setup lang="ts">
import { ref } from "vue";
import { Search, Document, Folder } from "@element-plus/icons-vue";
import { useRouter } from "vue-router";
const router = useRouter();
const tableData = ref([
  {
    date: "hr",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "开发",
    name: "Tom",
    address: "No. 200, Grove St, Los Angeles",
  },

  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
]);
let activeType = ref(1);
const multipleSelection = ref([]);
const input2 = ref("");
const handleClickIte = (val) => {
  activeType.value = val;
};
const handleSelectionChange = (val) => {
  multipleSelection.value = val;
};
const handleEdit = (index: number, row: any) => {};
const handleDelete = (row) => {};
const handleClickRow = (row) => {
  router.push({
    path: "/list",
    query: {
      id: 1,
    },
  });
};

const handleSeach = () => {
  router.push({
    path: "/seach",
    query: {
      inp: "11",
    },
  });
};

const handleCommand = (eve: any, data: any) => {};
</script>

<template>
  <!-- <div style="text-align: left">
    <Editor
      :plugins="plugins"
      :value="content"
      :locale="zhHans"
      @change="handleChange"
      :uploadImages="uploadImage"
    />
  </div> -->

  <div class="knowledge-base-table">
    <div class="title">
      <span class="title-text">知识库</span>
      <el-button type="primary">新建知识库</el-button>
    </div>
    <div class="filter-box">
      <el-input
        v-model="input2"
        style="max-width: 240px"
        placeholder="Please input"
      >
        <template #append>
          <el-button @click="handleSeach" :icon="Search"
        /></template>
      </el-input>
      <div class="cate-content">
        <span>显示:</span>
        <div
          class="item-cate"
          :class="{ isActive: activeType == 1 }"
          @click="handleClickIte(1)"
        >
          全部项目
        </div>
        <div
          class="item-cate"
          :class="{ isActive: activeType == 2 }"
          @click="handleClickIte(2)"
        >
          未分组
        </div>
        <div
          class="item-cate"
          :class="{ isActive: activeType == 3 }"
          @click="handleClickIte(3)"
        >
          分组1
        </div>
        <div
          class="item-cate"
          :class="{ isActive: activeType == 4 }"
          @click="handleClickIte(4)"
        >
          分组2
        </div>
      </div>
    </div>
    <el-table
      @row-click="handleClickRow"
      ref="multipleTableRef"
      :data="tableData"
      style="width: 100%"
      stripe
      :header-cell-style="{
        background: '#e5e5e5',
      }"
      max-height="500"
      border
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55" />
      <el-table-column label="知识库名称" width="360">
        <template #default="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column
        width="360"
        property="name"
        label="知识库描述"
        show-overflow-tooltip
      />
      <el-table-column label="文档数" width="180">
        <template #default="scope">
          <el-popover
            effect="light"
            trigger="hover"
            placement="top"
            width="auto"
          >
            <template #default>
              <div>name: {{ scope.row.name }}</div>
            </template>
            <template #reference>
              <el-tag>{{ scope.row.name }}</el-tag>
            </template>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        width="200"
        property="name"
        label="创建时间"
        show-overflow-tooltip
      />

      <el-table-column width="260" align="center" fixed="right" label="操作">
        <template #default="scope">
          <el-button
            size="small"
            @click.stop="handleEdit(scope.$index, scope.row)"
          >
            <el-dropdown trigger="click" @command="handleCommand">
              <span class="el-dropdown-link"> 移动到分组 </span>
              <template #dropdown>
                <el-dropdown-menu :teleported="false">
                  <el-dropdown-item command="1">分组类型1</el-dropdown-item>
                  <el-dropdown-item command="2"> 分组类型2 </el-dropdown-item>
                  <el-dropdown-item command="3"> 分组类型3 </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </el-button>

          <el-button
            size="small"
            @click.stop="handleEdit(scope.$index, scope.row)"
          >
            设置
          </el-button>
          <el-button
            size="small"
            type="danger"
            @click.stop="handleDelete(scope.row)"
          >
            Delete
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style scoped lang="scss">
// .subordinate {
//   width: 80%;
//   height: 100%;
//   padding: 2rem;
//   box-sizing: border-box;
// }
.knowledge-base-table {
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title-text {
      font-size: 30px;
      font-weight: 700;
      color: #000;
    }
  }
  .filter-box {
    margin: 10px 0 10px 0;
    display: flex;
    // justify-content: space-between;
    .cate-content {
      display: flex;
      align-items: center;
      margin-left: 30px;
      font-size: 14px;
      & > * {
        margin: 0 4px;
      }
      .item-cate {
        padding: 6px 10px;
        border-radius: 4px;
        background: rgba(52, 69, 99, 0.1);

        cursor: pointer;
      }
      .isActive {
        padding: 6px 10px;
        border-radius: 4px;
        background: #344563;
        color: #fff;
        cursor: pointer;
      }
    }
  }
}
</style>
