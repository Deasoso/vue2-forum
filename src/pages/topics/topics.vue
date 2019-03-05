<template>
  <div class="topics grail">
    <mu-tabs 
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
    </mu-tabs>
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
      <section>
        <slider class="sliderContainer" animation="normal" height="700px">
          <slider-item>
            <div class="slide slide1">
              <div class="slideContainer">
                <span class="slidetext slidetitle">各路武将 谁与争锋</span>
                <p class="slidetext">在幸运币商店购买幸运币即可抽取随机一位武将。</p>
                <br>
                <div class="btndiv">
                  <router-link class="button is-medium gotoDetail" :to="{ name: 'PreSale' }">了解详情</router-link>
                </div>
              </div>
            </div>
          </slider-item>
          <slider-item>
            <div class="slide slide2">
              <div class="slideContainer">
                <span class="slidetext slidetitle">群雄争霸天下</span>
                <p class="slidetext">指挥武将进行对战，争夺城池，一统天下。</p>
                <br>
                <div class="btndiv">
                  <router-link class="button is-medium gotoDetail" :to="{ name: 'Game' }">了解详情</router-link>
                </div>
              </div>
            </div>
          </slider-item>
          <slider-item>
            <div class="slide slide3">
              <div class="slideContainer">
                <span class="slidetext slidetitle">更多内容</span>
                <p class="slidetext">敬请期待。</p>
              </div>
            </div>
          </slider-item>
        </slider>
      </section>
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
import { Slider, SliderItem } from 'vue-easy-slider';
import { mapState } from 'vuex'
import topicItem from '../../components/topicItem'
import noMoreData from '../../components/noMoreData'

export default {
  name: 'topics',
  components: {
    topicItem,
    noMoreData,
    Slider,
    SliderItem
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
      }  //每个tab的滚动条是独立的
    }
  },
  computed: {
    ...mapState([
      'topic'
    ])
  },
  mounted(){
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

//slide
.sliderContainer {
  width: 100%;
  height: 100%;
}
.slide {
  width: 100%;
  height: 100%;
  background-size: 100%;
  background-repeat: no-repeat;
  background-color: #000;
  display: inline-block;
  vertical-align: middle;
  padding-left: 30px;
}
.slide1 {
  background-image: url("../../assets/img/home1.jpeg");
    background-size: cover;
}
.slide2 {
  background-image: url("../../assets/img/home2.jpeg");
    background-size: cover;
}
.slide3 {
  background-image: url("../../assets/img/home3.jpeg");
    background-size: cover;
}
.slideContainer {
  margin-top: 55px;
  margin-left: 30px;
  padding: 30px;
  width: 80%;
  height: 50%;
  background-color: #ffffff33;
  /*opacity: 0.5;*/
}
.slidetext {
  color: #000;
  font-size: 20px;
}
.slidetitle {
  font-size: 40px;
}
.gotoDetail {
  background-image: url("../../assets/img/home_button.png");
  background-size: cover;
  height: 50px;
  width: 130px;
  background-color: transparent;
  border-color: transparent;
  color: #3a2729;
}

</style>
