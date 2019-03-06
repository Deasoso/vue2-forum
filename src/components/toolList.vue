<template>
  <div class="toollist">
    <table>
      <tr v-for="(item, index) in tools" :key="index" v-if="index % 4 == 0">
        <td v-for="(tool, index1) in tools.slice(index, index+4)" :key="index1">
          <router-link class="nav-box" :to="item.to">
            <img width="38px" :src="tool.url" alt="">
            <div>{{tool.name}}</div>
          </router-link>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    tools: {
        Type: Array,
        defalut: () => [],
    }
  },
  methods:{

  }
}
</script>

<style lang="less">
  //table
  table {
    border-collapse: collapse;
    background-color: #fff;
    width: 100%;
    border: 0 solid #f5f5f5;
  }
  table td {
    border-top: 1px solid #f5f5f5;
    border-right: 1px solid #f5f5f5;
    border-bottom: 1px solid #f5f5f5;
    border-left: 1px solid #f5f5f5;
    height: 60px;
    &:hover {
      background-color: #f5f5f5;
    }
  }
  table tr.lastrow td {
    border-bottom: 0;
  }

  table tr td.lastCol {
    border-right: 0;
  }
  .nav-box {
    padding: 10px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    color: #4a4a4a;
  }
  .toollist{
    padding: 10px;
  }
</style>
