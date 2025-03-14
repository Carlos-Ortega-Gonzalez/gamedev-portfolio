<template>
    <div>
      <h2>VEHICULAR COMBAT ARENA - INTERNALS</h2>

      <VCAMenu />
      
      <hr class="separator_top">

      <div style="clear:both"></div>

      <h3><strong>SUBSYSTEMS</strong></h3>
      
      <table>
        <tr>
          <td>
            <iframe class="youtube" src="https://www.youtube.com/embed/_SCZgTwf9bA" frameborder="0" allowfullscreen></iframe>
          </td>
          <td class="top">
            <div class="side-text">Unreal's Subsystems provide a <strong>modular</strong> way to contain game logic that is not tied to Actors present in the level. In this project they are used for different tasks, such as handling Currency-related operations, managing Vehicle Loadouts, or handling Save Files.</div>
            
            <br>

            <div class="side-text">The data that they need is exposed in the Editor via <strong>Data Assets</strong> and <strong>Data Tables</strong>, making it easy to make changes without recompiling the project.</div>

            <br>

            <div class="side-text">Using Events and Timers helps reduce <strong>CPU load</strong>. Events can be consumed by Objects for very different purposes, like updating the UI, or displaying some VFX in the level.</div>
          </td>
        </tr>
      </table>

      <hr class="separator_middle">

      <h3><strong>MUSIC AND SOUND</strong></h3>
                  
      <table>
        <tr>
          <td>
            <iframe class="youtube" src="https://www.youtube.com/embed/Vcg_1YLXMTA" frameborder="0" allowfullscreen></iframe>
          </td>
          <td class="top">
            <div class="side-text">Every Sound and Music effect is managed by the <strong>Sound Subsystem</strong>. Sounds and Music Cues are given an identifier, and a <strong>Sound Data Asset</strong> links these ids to the actual Cues.</div>
            
            <br>

            <div class="side-text">This means that BPs, like the Vehicle Pawns or the Trains that drop loot, do not need to have <strong>references to the Cues</strong> themselves. Instead, all they need to know is the Id of the sounds they need, and ask the Sound Subsystem to play them.</div>
            
            <br>

            <div class="side-text">Different sounds have different requirements, like playing at a specific <strong>location</strong> (with some attenuation settings to avoid hearing distant sounds too loud) or playing <strong>attached</strong> to a moving Actor (like the Engine sound of Vehicles).</div>
          </td>          
        </tr>
      </table>
      
      <hr class="separator_middle">

      <h3><strong>SAVE SYSTEM</strong></h3>
                  
      <table>
        <tr>
          <td>
            <iframe class="youtube" src="https://www.youtube.com/embed/v5ZQMnpNL5c" frameborder="0" allowfullscreen></iframe>
          </td>
          <td class="top">
            <div class="side-text">The <strong>Game Options Persistance Subsystem</strong> handles loading and saving data to disk. 2 different <strong>USaveGame-based</strong> classes are used, one to store Settings, and another to store Game progress (with up to 4 Game Slots).</div>
            
            <br>

            <div class="side-text">A Widget displays a rotating <strong>Gear Icon</strong> when a load or save operation is ongoing, providing awareness to the Player.</div>
            
            <br>

            <div class="side-text">Although the amount of data the game needs is small, all disk operations are performed <strong>asynchronously</strong> in order to avoid stuttering during Load and Save operations.</div>
          </td>
        </tr>
      </table>

      <hr class="separator_middle">

      <h3><strong>PERFORMANCE</strong></h3>
                  
      <table>
        <tr>
          <td>
            <iframe class="youtube" src="https://www.youtube.com/embed/ioBdW-DrKDg" frameborder="0" allowfullscreen></iframe>

            <br>

            <div class="paragraph-bottom"><strong>Note:</strong> Some of the footage in this video was taken in <strong>PIE</strong> in order to display stats with a bigger size on screen. Performance is better when measured in a <strong>development build</strong>.</div>
          </td>
          <td class="top">
            <div class="side-text">The game is rate-limited by default to <strong>60 fps</strong> in order to reduce CPU usage. A number of <strong>profiling</strong> activities were performed during development, which highlighted that the bottleneck was the <strong>GPU</strong> rather than the <strong>CPU</strong>, so most of the focus has been put on reducing the GPU Time.</div>
            
            <br>

            <div class="side-text">The game uses <strong>Lumen</strong> for Global Illumination. Some tests have shown that Graphic cards below Epic's minimum requirements for Lumen do work well; however, the game suffers greatly with integrated cards.</div>

            <br>

            <div class="side-text">Special attention has been paid to avoiding stutters due to <strong>Shader compilation</strong>.</div>
          </td>
        </tr>
      </table>

      <hr class="separator_bottom">

      <VCAMenu />
    </div>
  </template>
  
  <script lang="ts">
  import Vue from "vue";
  import VCAMenu from "@/components/VCAMenu.vue";
    
  export default Vue.extend({
    name: "VCAInternals",
    components: {
      VCAMenu
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