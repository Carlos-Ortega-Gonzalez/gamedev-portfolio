<template>
    <div>
      <h2>VEHICULAR COMBAT ARENA - GAMEPLAY ELEMENTS</h2>

      <VCAMenu />

      <hr class="separator_top">

      <div style="clear:both"></div>

      <h3><strong>DATA POINTS</strong></h3>
      
      <table>
        <tr>
          <td>
            <iframe class="youtube" src="https://www.youtube.com/embed/UPjGtSi3U_s" frameborder="0" allowfullscreen></iframe>
          </td>
          <td class="top">
            <div class="side-text">Data Points disrupt the balance of <strong>Resource generation</strong> by giving a bonus either to the Enemy or to the Player.</div>
            
            <br>

            <div class="side-text">They can be either <strong>inactive</strong> (gray), <strong>controlled by the Enemy</strong> (red) or <strong>controlled by the Player</strong> (blue). While controlled by the Enemy they can be attacked, and a widget shows the remaining health.</div>
            
            <br>

            <div class="side-text">Data Points <strong>activate randomly</strong> during the match, which puts them under the enemy's control (see <router-link to="/vca-internals">Internals</router-link> for additional details).</div>
          </td>
        </tr>
      </table>

      <hr class="separator_middle">

      <h3><strong>AMMO & HEALTH PICK UPS</strong></h3>
                  
      <table>
        <tr>
          <td>
            <iframe class="youtube" src="https://www.youtube.com/embed/VukqrnRLK_o" frameborder="0" allowfullscreen></iframe>
          </td>
          <td class="top">
            <div class="side-text">Ammo & health pick ups are dropped periodically at random intervals by the <strong>trains</strong> on the sides of the map, and the <strong>central building</strong>.</div>
            
            <br>

            <div class="side-text">The are 2 types of Ammo pick ups (<strong>MachineGun</strong> & <strong>RailGun</strong>), and 3 types of Repair packs (for the <strong>Body</strong>, <strong>Chassis</strong> or <strong>Weapons</strong>). Look at the icons to identify their type. </div>

            <br>

            <div class="side-text">Ammo & health pick ups can be used by the Player and Enemies. They won't be consumed if the ammo type is not compatible with any of the vehicle's weapons, or if the corresponding vehicle part is not damaged.</div>
          </td>
        </tr>
      </table>
      
      <hr class="separator_middle">

      <h3><strong>GEARS</strong></h3>
                  
      <table>
        <tr>
          <td>
            <iframe class="youtube" src="https://www.youtube.com/embed/958d-_bvf1o" frameborder="0" allowfullscreen></iframe>
          </td>
          <td class="top">
            <div class="side-text">Gears are the <strong>currency</strong> of the game. They are dropped by defeated Enemies, except when the Player is maxed out (has purchased every vehicle part).</div>
            
            <br>

            <div class="side-text">Gear rewards are adjusted based on the enemy's configuration, and on the difference in power between the Player and the defeated Enemy.</div>

            <br>

            <div class="side-text">The Player can spend Gears between matches in order to buy new vehicle parts (chassis, bodies and weapons).</div>
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
    name: "VCAGameplayElements",
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