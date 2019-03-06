<template>
  <section>
    <slider class="sliderContainer" animation="normal" auto="false" height="180px">
      <slider-item v-for="(slide, index) in slides" :key="index">
        <div class="slide" v-bind:style="{backgroundImage:'url(' + slide.url + ')'}">
          <div class="slideContainer">
            <span class="slidetext slidetitle">{{slide.title}}</span>
            <p class="slidetext">{{slide.subtitle}}</p>
            <br>
          </div>
          <div class="btndiv">
            <router-link class="button is-medium gotoDetail is-info" :to="slide.to"><div class="btnfont">了解详情</div></router-link>
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
    height: 50%;
    background-color: #ffffffab;
    /*opacity: 0.5;*/
  }
  .slidetext {
    color: #000;
    font-size: 10px;
  }
  .slidetitle {
    font-size: 20px;
  }
  .gotoDetail {
    // background-image: url("../assets/img/home_button.png");
    background-size: cover;
    height: 25px;
    width: 65px;
    background-color: transparent;
    border-color: transparent;
    color: #3a2729;
  }
  .btndiv {
    margin: 20px;
  }
  .btnfont{
    font-size:11px;
  }
</style>
