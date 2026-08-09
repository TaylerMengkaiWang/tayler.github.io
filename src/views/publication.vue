<script setup>
// Font Awesome Icon
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCircleQuestion, faSort, faSortUp, faSortDown, faBook, faFileAlt, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

// Publication Thumbnails
import RD_Agent from '@/assets/publication/RD-Agent.png'
import RD_Agent_Quant from '@/assets/publication/RD-Agent_Quant.png'
import ScaleBiO from '@/assets/publication/ScaleBiO.png'
import Math_for_AI from '@/assets/publication/Math-for-AI.png'
import trustworthy_distillation from '@/assets/publication/trustworthy_distillation.png'
import DiscipLink from '@/assets/publication/DiscipLink.png'
import Macrosyntax from '@/assets/publication/Macrosyntax.png'
import cost_silence from '@/assets/publication/cost_silence.png'
import Island_effects from '@/assets/publication/Island_effects.png'
import Local_grammars from '@/assets/publication/Local_grammars.png'
import Motivation from '@/assets/publication/Motivation.png'
import writing_performance from '@/assets/publication/writing_performance.png'
import Center_embedding from '@/assets/publication/Center_embedding.png'

// Add reactive reference and computed property
import { ref, computed } from 'vue'

// Add prop definition
const props = defineProps({
  is_selected: {type: Boolean, default: false}
})

const search_query = ref('')
const sort_date = ref('none') // 'none', 'asc', 'desc'
const filtered_publication = computed(() => {
  let filtered = publication;
  
  // selected publication
  if (props.is_selected) {
    filtered = filtered.filter(pub => pub.selected);
  }

  // search bar
  if (search_query.value) {
    const query = search_query.value.toLowerCase();
    filtered = filtered.filter(pub => 
      pub.title.toLowerCase().includes(query)
    );
  }

  // sort by date
  if (sort_date.value === 'asc') {
    return [...filtered].reverse();
  } else if (sort_date.value === 'desc') {
    return filtered;
  }
  return filtered;
});

const publication = [
{
    title: "The Geometry of Macro-Syntax: Geometric Resonance and Hierarchical Derivation in the Left Angular Gyrus",
    author: "Mengkai Wang",
    venue: "CogSci 2026",
    img: Macrosyntax,
    buttons: [
      {button: "PDF", logo: faFileAlt, link: "https://escholarship.org/uc/item/9rd8d5w7#main"},
    ],
    tags: ['Neuro-Geometry', 'Macro-Syntax'],
    selected: true
  },
  {
    title: "The cost of silence: Processing constraints on elliptical strategies",
    author: "Mengkai Wang",
    venue: "LSA 2026",
    img: cost_silence,
    buttons: [
      {button: "PDF", logo: faFileAlt, link: "https://journals.linguisticsociety.org/proceedings/index.php/PLSA/article/view/6088/5793"},
    ],
    tags: ['Sentence Processing'],
    selected: true
  },
  {
    title: "Evaluating the Linguistic Competence of Large Language Models: Experimental Evidence from Center-embedding Structures",
    author: "Mengkai Wang",
    venue: "CogSci 2025",
    img: Center_embedding,
    buttons: [
      {button: "PDF", logo: faFileAlt, link: "https://escholarship.org/uc/item/84w9p0h8"},
    ],
    tags: ['LLM Linguistic Competence', 'Center-embedding'],
    selected: false
  },
  {
    title: "Island effects and amelioration by resumption in Hong Kong English: an auditory acceptability-judgement study",
    author: "Mengkai Wang",
    venue: "ExLing 2025",
    img: Island_effects,
    buttons: [
      {button: "PDF", logo: faFileAlt, link: "https://publications.linguistic-society.com/index.php/ILS/article/view/1064/1044"},
    ],
    tags: ['Island Effects'],
    selected: false
  },
  {
    title: "Experimental evidence on requests in English varieties from the perspective of local grammars",
    author: "Mengkai Wang",
    venue: "ExLing 2025",
    img: Local_grammars,
    buttons: [
      {button: "PDF", logo: faFileAlt, link: "https://doi.org/10.36505/TheLinguisticProceedings/2025/17/02/021/000707"}
    ],
    tags: ['Local Grammars'],
    selected: false
  },
  {
    title: "Evaluating advanced EFL learners’ writing performance and perceptions of large language model assistance",
    author: "Mengkai Wang",
    venue: "CALL 2025",
    img: writing_performance,
    buttons: [
      {button: "PDF", logo: faFileAlt, link: "https://arxiv.org/abs/2408.12168"},
    ],
    tags: ['LLM-assisted Language Writing'],
    selected: false
  },
  {
    title: "Artificial intelligence-driven personalized language learning: Customizing content and feedback to learners’ needs and proficiency levels",
    author: "<u>Mengkai Wang</u>, Yifei Gao",
    venue: "CALL 2025",
    img: Motivation,
    buttons: [
      {button: "PDF", logo: faFileAlt, link: "https://www.castledown.com/proceedings/call-research/article/download/97817637116240-23/102"}
    ],
    tags: ['AI-driven Language Learning'],
    selected: false
  }
];
</script>

<template>
  <main :class="{ 'main-content': !props.is_selected }">
    <!-- Header -->
    <div class="academic-header">
      <h2>
        <FontAwesomeIcon :icon="faBook" style="color: #4fc08d"/> {{ props.is_selected ? 'Selected Publication' : 'Publication' }}
      </h2>
      
      <div class="academic-header-toolbox">
        <!-- Search Bar -->
        <div class="search-bar">
          <FontAwesomeIcon :icon="faSearch" class="search-icon" />
          <input 
            type="text" 
            v-model="search_query" 
            placeholder="Search publications..." 
            class="search-input"
          />
        </div>

        <!-- Control Icons -->
        <div class="control-icons">
          <div class="tooltip">
            <FontAwesomeIcon :icon="faCircleQuestion" class="tooltip-icon control-icon" />
            <span class="tooltip-content">* denotes Equal Contribution</span>
          </div>

          <div class="tooltip">
            <FontAwesomeIcon 
              :icon="sort_date === 'asc' ? faSortUp : sort_date === 'desc' ? faSortDown : faSort" 
              class="tooltip-icon control-icon"
              @click="sort_date = sort_date === 'none' ? 'asc' : sort_date === 'asc' ? 'desc' : 'none'"
            />
            <span class="tooltip-content">Sort by date</span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Publication -->
    <div v-for="pub in filtered_publication" :key="pub.title" class="academic-block">
      <div>
        <div class="academic-venue">{{ pub.venue }}</div>
        <a :href="pub.arxiv" target="_blank" rel="noopener noreferrer">
          <img :src="pub.img" :alt="pub.title + ' Thumbnail'" class="academic-img">
        </a>
      </div>
      <div class="academic-content">
        <h3>{{ pub.title }}</h3>
        <div class="academic-tags">
          <span v-for="tag in pub.tags" :key="tag" class="academic-tag">{{ tag }}</span>
        </div>
        <p class="program" v-html="pub.author"></p>
        <div class="academic-tags">
          <a v-for="button in pub.buttons" :key="button.button" :href="button.link" target="_blank" rel="noopener noreferrer" class="academic-button">
            <FontAwesomeIcon :icon="button.logo" /> {{ button.button }}
          </a>
        </div>
      </div>
    </div>
  </main>
</template>