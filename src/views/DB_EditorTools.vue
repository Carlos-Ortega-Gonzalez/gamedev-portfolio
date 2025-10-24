<template>
    <div>
      <h2>DUNGEON BUILDER - EDITOR TOOLS</h2>

      <DBMenu />

      <hr class="separator_top">

      <div style="clear:both"></div>

      <h3>SETUP | ASSETS | RULES | PLACE</h3>
      
      <table>
        <tr>
          <td>
            <iframe class="youtube" src="https://www.youtube.com/embed/908NCgfs6yo" frameborder="0" allowfullscreen></iframe>
          </td>
          <td>
            <div class="side-text"><strong>1 - Dungeon Setup tool:</strong>
              <ul>
                <li>Sets the <strong>dungeon dimensions</strong> (X,Y,Z), and <strong>cell size</strong>.</li>
                <li>Repositions the whole dungeon in the level.</li>
                <li>Actor Blueprints need to conform to the cell size to be correctly aligned.</li>
              </ul>              
            </div>
            <div class="side-text"><strong>2 - Data Assets tool:</strong>
              <ul>
                <li>Sets the Data Assets that will be used to select dungeon assets.</li>
                <li>Each Data Asset stores, for each Actor BP, <strong>class, metadata & label</strong>.</li>
                <li>Actor Blueprints can include static meshes, lights, and even other BPs (but be careful with hard references).</li>
              </ul>
            </div>
          </td>
        </tr>
        <tr>
          <td class="top">
            <iframe class="youtube" src="https://www.youtube.com/embed/QTaCKFk5TuY" frameborder="0" allowfullscreen></iframe>
          </td>
          <td style="padding-top: 30px;">
            <div class="side-text"><strong>3 - Dungeon generation Rules tool:</strong>
              <ul>
                <li>Selects how the dungeon is generated.</li>
                <li>There are 4 rule categories:</li>
                <ul>
                  <li>Number of Rooms Rule.</li>
                  <li>Room Layout Rule.</li>
                  <li>Corridor Layout Rule.</li>
                  <li>Stair Layout Rule.</li>
                </ul>
                <li>Rules are implemented using the <strong>Strategy pattern</strong>.</li>
                <li>Each rule displays its own properties when it's selected.</li>
              </ul>
            </div>
            <div class="side-text"><strong>4 - Dungeon Placement tool:</strong>              
              <ul>
                <li>Executes the rules and places BPs in the level, in the correct location and rotation.</li>
                <li>Can identify and delete dungeon BPs using a <strong>tag</strong>.</li>
                <li>Cells can be randomized again once the layout is set.</li>
                <li>Labels (themes) can also be applied to hand-picked rooms, corridors and stairs.</li>
              </ul>
            </div>
          </td>
        </tr>
      </table>

      <p></p>

      <hr class="separator_bottom">
      
      <DBMenu />
    </div>
  </template>
  
  <script lang="ts">
  import Vue from "vue";
  import DBMenu from "@/components/DBMenu.vue";
    
  export default Vue.extend({
    name: "DBEditorTools",
    components: {
      DBMenu
    }
  });
  </script>

  <style scoped>
  .paragraph {
    max-width: 700px;
    margin-bottom: 20px;
  }
  
  .paragraph-bottom {
    max-width: 700px;
    margin-top: 40px;
  }

  .photo {
    margin-top: 50px;
    text-align: center;
  }

  iframe.youtube {        
    min-height: 360px;
    min-width: 640px;
  }

  .side-text {
    margin-left: 50px;    
  }

  td.top {
    vertical-align: top;
  }

  td.middle {
    vertical-align: middle;
  }

  @media only screen and (min-width: 620px){
    .paragraph {
      float: left;
    }
  
    .photo {
      float: left;
      padding: 10px;
      padding-left: 80px;
    }
  }
  
  </style>