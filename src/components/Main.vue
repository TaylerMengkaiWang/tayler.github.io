<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGraduationCap, faStar, faUser, faBook, faFileAlt, faCircleQuestion } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import BFSU  from '@/assets/institution/BFSU.png'
import MIT  from '@/assets/institution/MIT.png'
import Tsinghua  from '@/assets/institution/Tsinghua.png'
import Publication from '@/views/publication.vue'

const education = [
  {
    institution: "Massachusetts Institute of Technology",
    program: "Ph.D",
    time: "Incoming",
    logo: MIT,
  },
  {
    institution: "Beijing Foreign Studies University",
    program: "BA in English (Linguistics)",
    time: "Sep 2022 - July 2026",
    logo: BFSU,
  }
];

const experience = [
  {
    institution: "Brain and Intelligence Lab at Tsinghua University",
    program: "Research Intern at Liu Lab",
    time: "May 2025 - Jan 2026",
    logo: Tsinghua,
  }
];
</script>

<template>
  <main class="main-content">
    <!-- About Me -->
    <section>
      <div class="academic-header">
        <h2>
          <FontAwesomeIcon :icon="faUser" style="color: #4fc08d"/>
          About Me
        </h2>
      </div>
      <p style="line-height: 1.5;">
        Hi! 👏
        I am Mengkai Wang (王盟凯), also known as Tayler. I am an undergraduate student at <a href="https://www.bfsu.edu.cn/" target="_blank" rel="noopener noreferrer">Beijing Foreign Studies University (BFSU)</a>, majoring in Linguistics. I am also an incoming Ph.D student at <a href="https://www.mit.edu/" target="_blank" rel="noopener noreferrer">Massachusetts Institute of Technology (MIT)</a>.
      </p>
      <p style="line-height: 1.5;">
        My research interests mainly focus on cognitive and computational neurolinguistics. I investigate the fundamental questions of language in human brain, with a particular focus on syntactic structure and semantic interpretation. Right now, differences of neurolinguistic mechanisms between LLMs and human brains are also considered and studied.
      </p>
    </section>
    
    <!-- Education -->
    <section>
      <div class="academic-header">
        <h2>
          <FontAwesomeIcon :icon="faGraduationCap" style="color: #4fc08d"/> Education
        </h2>
      </div>
      <div v-for="edu in education" :key="edu.program" class="academic-block">
        <img :src="edu.logo" :alt="edu.institution + ' Logo'" class="academic-logo">
        <div class="academic-content">
          <h3>{{ edu.institution }}</h3>
          <p>{{ edu.program }}</p>
          <p class="time">{{ edu.time }}</p>
          <div class="academic-tags" v-if="edu.tags">
            <span v-for="tag in edu.tags" :key="tag" class="academic-tag">{{ tag }}</span>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Experience -->
    <section>
      <div class="academic-header">
        <h2>
          <FontAwesomeIcon :icon="faStar" style="color: #4fc08d"/> Experience
        </h2>
      </div>
      <div v-for="exp in experience" :key="exp.program" class="academic-block">
        <img :src="exp.logo" :alt="exp.institution + ' Logo'" class="academic-logo">
        <div class="academic-content">
          <h3>{{ exp.institution }}</h3>
          <p>{{ exp.program }}</p>
          <p class="time">{{ exp.time }}</p>
          <div class="academic-tags" v-if="exp.buttons">
            <a v-for="button in exp.buttons" :key="button.button" :href="button.link" target="_blank" rel="noopener noreferrer" class="academic-button">
              <FontAwesomeIcon :icon="button.logo" /> {{ button.button }}
            </a>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Selected Publication -->
    <Publication :is_selected="true" />
  </main>
</template>