<template>
  <div class="topics grail">
    <!-- <mu-tabs 
      :value="activeTab" 
      lineClass="tabs-line"
      @change="handleTabChange"
    >
      <mu-tab value="all" title="全部"/>
      <mu-tab value="good" title="精华"/>
      <mu-tab value="weex" title="weex"/>
      <mu-tab value="share" title="分享"/>
      <mu-tab value="ask" title="问答"/>
      <mu-tab value="job" title="招聘"/>
    </mu-tabs> -->
    <!-- 只在第一次加载tab话题数据时显示，之后用正在加载显示加载状态 -->
    <mu-circular-progress
      class="pfi centre1" 
      v-if="topic.firstLoading"
      color="#41b883" 
      :size="40"
    />
    <div 
      v-for="(tabItem,i) in ['all','good','weex','share','ask','job']" 
      v-show="activeTab === tabItem" 
      class="topic-list fe ova" 
      :ref="tabItem"
      :key="i"  
    >
      <!-- 这个组件必须放在scroller里面 -->
      <slidePage :slides="slides"/>
      <toolList :tools="tools"/>
      <mu-refresh-control 
        @refresh="refreshTabTopic"      
        :refreshing="refreshingObj[tabItem]" 
        :trigger="listRefObj[tabItem]" 
        color="#41b883"
      />
      <topicItem v-for="(data,i) in topic.listdata[tabItem]" :key="i" :data="data" />
      <noMoreData v-if="!topic.datapage[tabItem]" />
      <mu-infinite-scroll 
        class="topic-list-load" 
        :scroller="listRefObj[tabItem]" 
        :loading="topic.isfetching && !topic.firstLoading" 
        @load="loadMore"
        loadingText="正在加载 ..."
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import slidePage from '../../components/slidePage'
import toolList from '../../components/toolList'
import topicItem from '../../components/topicItem'
import noMoreData from '../../components/noMoreData'
import tools from '../../assets/json/toollist.json'
import slides from '../../assets/json/slidelist.json'

export default {
  name: 'topics',
  components: {
    topicItem,
    noMoreData,
    slidePage,
    toolList,
  },
  data(){
    return {
      refreshingObj: {
        'all': false,
        'good': false,
        'weex': false,
        'share': false,
        'ask': false,
        'job': false
      },
      activeTab: 'all',
      listRefObj: {
        all: null,
        good: null,
        weex: null,
        share: null,
        ask: null,
        job: null
      },  //每个tab的滚动条是独立的
      tools: tools,
      slides: slides,
    }
  },
  computed: {
    ...mapState([
      'topic'
    ])
  },
  mounted(){
    this.$store.dispatch('setTitle', {text: '首页'})
    this.$nextTick(function () {
      this.listRefObj.all = this.$refs.all[0];
      this.listRefObj.good = this.$refs.good[0];
      this.listRefObj.weex = this.$refs.weex[0];
      this.listRefObj.share = this.$refs.share[0];
      this.listRefObj.ask = this.$refs.ask[0];
      this.listRefObj.job = this.$refs.job[0];
      // 初始化第一个tab数据
      if(!this.topic.listdata.all.length){
        this.handleTabChange('all');
      }
		})
  },
  methods: {
    fetchTopicsData(){
      if(this.topic.isfetching) return;
      this.$store.dispatch("fetchTopics",{
        tab: this.activeTab,
        page: this.topic.datapage[this.activeTab],
        limit: 8
      });
    },
    handleTabChange(val) {
      this.activeTab = val;
      // tab数据第一次初始化自动加载，之后上拉加载
      if(this.topic.listdata[val].length === 0){
        this.$store.commit("CHANGE_ISFIRST_STATE", { state: true });
        this.fetchTopicsData();
      }
    },
    loadMore(){
      //如果已经返回完数据，将不再请求
      if(!this.topic.datapage[this.activeTab]) return;
      this.fetchTopicsData();
    },
    refreshTabTopic(){
      this.$store.commit("CLEAR_TOPIC_TAB_DATA",{
        tab: this.activeTab
      });
      this.handleTabChange(this.activeTab);
    }
  }
}

</script>

<style lang="less">
  .topics{
    min-height: 0 !important;
    background-color: #eff2f7;
    .mu-tabs{
      background-color: #fff;
      .mu-tab-link{
        color: rgba(31,45,61,.7);
      }
    }
    .tabs-line{
      background-color: #41b883;
    }
    .topic-list{
      margin: 0;
      -webkit-overflow-scrolling: touch;
    }
    .topic-list-load{
      padding: 0;
      .mu-circle{
        border-color: #41b883;
      }
      .mu-infinite-scroll-text{
        margin: .8rem 1rem;
      }
    }
  }
</style>
