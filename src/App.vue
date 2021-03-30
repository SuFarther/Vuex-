<template>
  <div id="nav">
       <home></home>
       <about></about>
       <btn></btn>
       <home2></home2>
       <about2></about2>
       <btn2></btn2>
  </div>
</template>
<script>
   import Home from "@/views/Home";
   import About from '@/views/About';
   import Btn from "@/views/Btn";
   import Home2  from "@/views/Home2";
   import About2 from "@/views/About2";
   import Btn2 from "@/views/Btn2";
   export default {
       components: {
         Home,
         About,
         Btn,
         Home2,
         About2,
         Btn2
       }
   }
</script>
