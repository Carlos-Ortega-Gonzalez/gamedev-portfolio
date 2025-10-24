<template>
    <div>
      <h2>DUNGEON BUILDER - PROJECT SETUP</h2>

      <DBMenu />

      <hr class="separator_top">

      <div style="clear:both"></div>

      <h3><strong>PROJECT GOAL</strong></h3>
      
      <div>
        The <strong>main goal</strong> of this project is to help reduce the time it takes to build a dungeon level from base assets.
        <p></p>
        This is achieved by placing in a 3D grid groups of assets representing sections of rooms, corridors and stairs.
        <br>
        The layout of the dungeon is controlled by a predefined set of rules.
        <p></p>
        Once the foundation of the level is set, level designers can then spend their time applying the final tweaks that make the dungeon unique.
      </div>

      <h4>Key desired Outcomes:</h4>
      
      <div>
        <ul>
          <li>The tool is built as a Plugin for Unreal, so it's <strong>easy to share</strong> across projects.</li>
          <li>The tool is <strong>integrated in Unreal's Editor</strong>, with a simple but flexible UX design.</li>          
          <li>The tool is <strong>asset agnostic</strong>.</li>
          <li>The <strong>rules</strong> that define how the dungeon is created are <strong>easy to change and expand</strong>.</li>
          <li>Once a dungeon is generated, it's <strong>easy to update</strong> parts of it, while keeping the layout consistent.</li>
          <li>Dungeon generation should <strong>take a reasonable amount of time and memory</strong>.</li>
        </ul>
      </div>

      <hr class="separator_middle">

      <h3><strong>PLUGINS</strong></h3>
      
      <table>
        <tr>
          <td>
            <iframe class="youtube" src="https://www.youtube.com/embed/8Acx4QaKa5k" frameborder="0" allowfullscreen></iframe>
          </td>
          <td class="top">
            <div class="side-text"><strong>Dungeon Builder</strong> is an <i>Editor Mode</i> plugin that holds all of the C++ code used by the tool.</div>
            <br>
            <div class="side-text"><strong>Dungeon Builder Automation Tests</strong> is a plugin that stores all of the testing code for the Dungeon Builder plugin.</div>
            <br>
            <div class="side-text">Additionally, in order to generate dungeons you'll need to prepare the following:
              <ul>
                <li>Dungeon assets, organized in <strong>Actor Blueprints</strong> or <strong>Packaged Level Actor Blueprints</strong>.</li>
                <li>Room, corridor and stair <strong>Data Assets</strong>, which assign metadata and labels to the dungeon assets.</li>
              </ul>
            </div>            
          </td>
        </tr>
      </table>

      <hr class="separator_bottom">
      
      <DBMenu />
    </div>
  </template>
  
  <script lang="ts">
  import Vue from "vue";
  import DBMenu from "@/components/DBMenu.vue";
    
  export default Vue.extend({
    name: "DBProjectSetup",
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