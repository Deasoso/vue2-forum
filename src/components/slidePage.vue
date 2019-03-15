<template>
  <section>
    <slider class="sliderContainer" animation="normal" auto="false" height="240px">
      <slider-item v-for="(slide, index) in slides" :key="index">
        <div class="slide" v-bind:style="{backgroundImage:'url(' + slide.url + ')'}">
          <span class="slidetext slidetitle">{{slide.title}}
            
          </span>
          <p class="slidetext">{{slide.subtitle}}</p>
          <div class="slideContainer">
            
          </div>
          <div class="btndiv">
            <router-link class="button is-small is-info" :to="slide.to"><div class="btnfont">了解详情</div></router-link>
          </div>
        </div>
      </slider-item>
    </slider>
  </section>
</template>

<script>
import { Slider, SliderItem } from 'vue-easy-slider';

export default {
  components:{
    Slider,
    SliderItem,
  },
  props: {
    slides: {
        Type: Array,
        defalut: () => [],
    }
  },
}
</script>

<style lang="less">
  //slide
  .sliderContainer {
    width: 100%;
    height: 100%;
    z-index: 10;
  }
  .slide {
    width: 100%;
    height: 100%;
    background-size: 100%;
    background-repeat: no-repeat;
    background-color: #000;
    display: inline-block;
    vertical-align: middle;
    padding-left: 15px;
    background-size: cover;
  }
  .slideContainer {
    margin-top: 28px;
    margin-left: 15px;
    padding: 15px;
    width: 80%;
    height: 60%;
    background-color: #ffffff;
    opacity: 0.5;
  }
  .slidetext {
    padding: 15px;
    margin-top: 68px;
    margin-left: 15px;
    position: absolute;
    opacity: 0.9;
    color:  #000;
    font-size: 10px;
    font-weight:bold;
    z-index:1000;
  }
  .slidetitle {
    margin-top: 28px;
    font-size: 20px;
  }
  .btndiv {
    margin: 20px;
  }
  .btnfont{
    font-size:11px;
  }
</style>
