<template>
  <div id="app">
    <div class="row">
     <Banner/>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- 原始html中使用a 标签实现跳转 -->
          <!-- <a class="list-group-item active" href="./about.html">About</a> -->
          <br>
          <!-- <a class="list-group-item" href="./home.html">home</a> -->

          <!--  -->
          
          <router-link class="list-group-item" active-class="active" :to="{name:'guanyu'}">About</router-link>
          <br>
          <router-link class="list-group-item" active-class="active" to="/home">home</router-link>
        </div>
        <div class="col-xs-6">
          <div class="panel">
            <div class="panel-body">
              <!-- router-link 来实现路由的切换 
                    router-view 来呈现页面
              -->
              <router-view></router-view>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { Router } from 'express';
import Banner from './components/Banner.vue'

export default {
    name: "App",
    components: { Banner }
}
</script>


