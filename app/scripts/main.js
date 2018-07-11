'use stricts';

import dataCommits from './data-commits';
import dataSites from './data-sites';

/**
 * Component <hero></hero>.
 *
 * @example <hero><template slot="heading">Text Content</template></hero>
 */
Vue.component('hero', {
  template: `
    <header id="hero-unit">
      <div class="tabs">
        <div class="container">
          <div class="tab"><icon-list></icon-list> resume.html</div>
        </div>
      </div>
      <div class="container">
        <ol>
          <li v-for="n in 6">
            <heading v-if="n === 3"><slot name="heading"></slot></heading>
            <sub-heading v-if="n === 4"><slot name="sub-heading"></slot></sub-heading>
          </li>
        </ol>
      </div>
    </header>
  `
});

/**
 * Component <heading></heading>.
 *
 * @example <heading>Text Content</heading>
 */
Vue.component('heading', {
  template: `
    <div class="heading"><span class="lt">&lt;</span><span class="tag">h1</span><span class="gt">&gt;</span><slot></slot><span class="lt">&lt;/</span><span class="tag">h1</span><span class="gt">&gt;</span></div>
  `
});

// Component <sub-heading></sub-heading>.
Vue.component('sub-heading', {
  template: `
    <div class="sub-heading"><span class="lt">&lt;</span><span class="tag">p</span><span class="gt">&gt;</span><slot></slot><span class="lt">&lt;/</span><span class="tag">p</span><span class="gt">&gt;</span></div>
  `
});

// Component <commit-icon></commit-icon>.
Vue.component('icon-commit', {
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" class="icon-commit" viewBox="0 0 512 512"><path d="M480 224h-99.8c-14.2-55.2-64.2-96-123.7-96S147 168.8 132.8 224H32v64h100.8c14.2 55.2 64.2 96 123.7 96s109.5-40.8 123.7-96H480v-64zM256.5 336c-44 0-79.8-35.9-79.8-80s35.8-80 79.8-80 79.8 35.9 79.8 80-35.8 80-79.8 80z"/></svg>
  `
});

// Component <commit-icon></commit-icon>.
Vue.component('icon-loading', {
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" class="icon-loading" viewBox="0 0 512 512"><path d="M256 388c-72.597 0-132-59.405-132-132 0-72.601 59.403-132 132-132 36.3 0 69.299 15.4 92.406 39.601L278 234h154V80l-51.698 51.702C348.406 99.798 304.406 80 256 80c-96.797 0-176 79.203-176 176s78.094 176 176 176c81.045 0 148.287-54.134 169.401-128H378.85c-18.745 49.561-67.138 84-122.85 84z"/></svg>
  `
});

// Component <commit-item></commit-item>.
Vue.component('commit-item', {
  props: {
    'commit': Object,
  },
  template: `
    <div class="commit-list__item" v-if="commit">
      <commit-header>{{ commit.date.start }}</commit-header>
      <div class="commit-content">
        <slot></slot>
        <commit-footnote :organization="getOrg" :date="getDate"></commit-footnote>
      </div>
    </div>
  `,
  computed: {
    getOrg() {
      return typeof this.commit.organization !== 'undefined' && this.commit.organization ? this.commit.organization : null;
    },
    getDate() {
      return typeof this.commit.date !== 'undefined' && this.commit.date ? this.commit.date : null;
    },
    getStatus() {
      return typeof this.commit.status !== 'undefined' && this.commit.status ? this.commit.status : null;
    }
  },
});

Vue.component('icon-list', {
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" class="icon-list" viewBox="0 0 512 512"><path d="M80 280h256v48H80zM80 184h320v48H80zM80 88h352v48H80z"/><g><path d="M80 376h288v48H80z"/></g></svg>
  `
});

// Component <commit-header></commit-header>.
Vue.component('commit-header', {
  template: `
    <header class="commit-header">
      <icon-commit></icon-commit><span class="commit-start">Commits on <slot></slot></span>
    </header>
  `
});

// Component <commit-title></commit-title>.
Vue.component('commit-tags', {
  props: {
    'tags': Array,
  },
  template: `
    <span class="commit-tags" v-if="tags"><span v-for="tag in tags" :class="'commit-tag tag-' + tag">{{ tag }}</span></span>
  `
});

// Component <commit-footnote></commit-footnote>.
Vue.component('commit-footnote', {
  props: [
    'organization',
    'date'
  ],
  template: `
    <div class="commit-footnote">
      <figure class="commit-figure" v-if="orgImage">
        <img v-if="orgFavicon" class="commit-figure__organization" :src="orgFavicon" :alt="orgTitle + 'Logo'">
        <img class="commit-figure__profile" src="./images/profile-square.jpg" alt="Thoriq Picture Profile">
      </figure>
    <div class="commit-status">
      <template v-if="orgSlug"><span class="commit-status__organization commit-slug">{{ orgSlug }}</span> and</template>
      <span class="commit-status__profile commit-slug">Thoriq</span>
      <template v-if="date.end">
        <span class="commit-status__date">committed on {{ date.end }}</span>
      </template>
      <template v-else>
        <span class="commit-status__building">are building <icon-loading></icon-loading></span>
      </template>
    </div>
  </div>
  `,
  computed: {
    orgTitle() {
      return typeof this.organization.title !== 'undefined' ? this.organization.title : null;
    },
    orgSlug() {
      return typeof this.organization.slug !== 'undefined' ? this.organization.slug : null;
    },
    orgImage() {
      return typeof this.organization.image !== 'undefined' ? this.organization.image : null;
    },
    orgFavicon() {
      return this.organization.image.favicon;
    },
  }
});

// Component <button-item></button-item>.
Vue.component('button-item', {
  props: {
    'link': {
      required: true,
    }
  },
  template: `
    <a class="button-list__item" :href="link" target="_blank"><slot></slot></a>
  `
});

// Create an instance.
const resumeInstance = new Vue({
  el: '#resume',
  data: {
    commits: dataCommits,
    sites: dataSites
  }
});
