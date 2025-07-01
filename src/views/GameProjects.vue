<template>
  <div>
    <h2>Hello!</h2>
  
    <div class="paragraph">      
        I'm <strong>Carlos Ortega González</strong>, a <strong>Game Programmer</strong> with a technical background in Test Automation, Technical Support, and Unix System Administration.<br/>
        <br>
        I make games using <strong>Unreal Engine 5</strong> using C++ and blueprints, and I enjoy crafting polished gameplay that keeps players engaged.
    </div>

    <div class="photo">
      <img src="img/avatar.png" alt="Avatar" /> 
    </div>

    <div style="margin-bottom: 30px; margin-top: 30px;">
      <h2>Games released in itch.io</h2>

      <div style="margin-bottom: 20px;">
        I've released the following projects as a solo dev (Zoldar Games). 
      </div>

      <div style="margin-bottom: 20px;">
        Some projects contain paid assets from the Unreal Marketplace, so I can't publicly share the whole project.
      </div>

      <div style="margin-bottom: 40px;">
        Contact me if you'd like to see the github repositories for recruitment purposes.
      </div>    

      <ProjectsList v-bind:projects="projects" />
    </div>
    
    <div style="text-align: right; margin-bottom: -20px; margin-top: -12px; font-size: smaller;">
      <br>
      <br>
      <a href="https://github.com/schouffy/gamedev-portfolio" target="blank">Portfolio template</a> by schouffy</div>
  </div>  
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import gameProjectsData from "@/data/GameProjectsData.ts";

export default Vue.extend({
  name: "GameProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: gameProjectsData,
    };
  },
});
</script>

<style scoped>

.paragraph {
  max-width: 600px;
  margin-bottom: 20px;
}

.photo {
  margin-top: -230px;
  margin-right: 300px;
  text-align: right;
}

</style>