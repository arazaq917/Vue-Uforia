<template>
  <base-card>
    <base-button
      @click="setSelectedTab('stored-resources')"
      :mode="storedResourcesBtnMode">Stored Resources</base-button>
    <base-button
      @click="setSelectedTab('add-resource')"
      :mode="addResourcesBtnMode"
      >Add Resources</base-button
    >
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';
export default {
  components: {
    StoredResources,
    AddResource,
  },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResource: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          descreption: 'The official Vue.js Documentation',
          link: 'http://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          descreption: 'The official Google plateform for learning',
          link: 'http://google.org',
        },
      ],
    };
  },
  provide() {
    return {
      addResources: this.addResource,
      resources: this.storedResource,
      deleteResource: this.removeResource,
    };
  },
  computed: {
    storedResourcesBtnMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },
    addResourcesBtnMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    },
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, descreption, url) {
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        descreption: descreption,
        link: url,
      };
      this.storedResource.unshift(newResource);
      this.selectedTab = 'stored-resources';
    },
    removeResource(resId){
        const resIndex = this.storedResource.findIndex(res=>res.id == resId);
        this.storedResource.splice(resIndex, 1);
        // this.storedResource = this.storedResource.filter(res=> res.id !== resId);
    }
  },
};
</script>