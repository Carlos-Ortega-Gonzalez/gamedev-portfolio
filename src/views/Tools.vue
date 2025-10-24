<template>
  <div>
    <div style="margin-bottom: 30px; margin-top: 30px;">
      <h2>Tools for Unreal Engine</h2>

      <div style="margin-bottom: 20px;">
        Here you can find tools that I've developed for Unreal Engine to assist in the game development process.
      </div>      

      <div style="margin-bottom: 40px;">
        Contact me if you'd like to see the github repositories for recruitment purposes.
      </div>    

      <ProjectsList v-bind:projects="projects" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import toolProjectsData from "@/data/ToolProjectsData.ts";

export default Vue.extend({
  name: "ToolProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: toolProjectsData,
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