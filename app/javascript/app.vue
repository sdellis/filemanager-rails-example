<template>
  <div id="filemanager">
    <gallery></gallery>
    <detail></detail>
    <panel></panel>
    <controls></controls>
  </div>
</template>

<script>
// import {Gallery, Detail, Panel, Controls} from 'filemanager'
import Gallery from './components/Gallery'
import Detail from './components/Detail'
import Panel from './components/Panel'
import Controls from './components/Controls'

export default {
  name: 'app',
  components: {
    Gallery,
    Detail,
    Panel,
    Controls
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  padding-top: 50px;
}

/* start presentation styles */

.layout {
  position: relative;
  height: 85vh;
  width: 100vw;
}

#filemanager {
  position: relative;
  height: 85vh;
  width: 98vw;
}

.actions {
  padding: 0 30px 0 30px;
  height: 100%;
  overflow-y: auto;
}

.formPanel {
  position: absolute;
  bottom: 10px;
  left: 0;
  height: 25%;
  width: 60%;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.controls {
  position: absolute;
  bottom: 10px;
  right: 10px;
  height: 25%;
  width: 38.5%;
}

.content {
  position: relative;
  top: 20px;
  left: 0;
  height: 70%;
  width: 60%;
  border-radius: 4px;
  border: 1px solid #ddd;
}

.sidebar {
  position: absolute;
  top: 20px;
  right: 10px;
  height: 70%;
  width: 38.5%;
  border: 1px solid #ddd;
  border-radius: 4px;
}

</style>
