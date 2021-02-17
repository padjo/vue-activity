<template>
  <nav class="navbar is-white">
    <div class="container">
      <div class="navbar-menu is-active">
        <div class="navbar-start">
          <a @click="emitFilter('all')"
            :class="{'is-active': filterOption == 'all'}"
            class="navbar-item"
           
          >
            All
          </a>
          <a @click="emitFilter('in-progress')"
            :class="{'is-active': filterOption == 'in-progress'}"
            class="navbar-item"
            
          >
            In Progress
          </a>
          <a @click="emitFilter('finished')"
            :class="{'is-active': filterOption == 'finished'}"
            class="navbar-item"
            
          >
            Finished
          </a>
          <a @click="emitFilter('not-started')"
            :class="{'is-active': filterOption == 'not-started'}"
            class="navbar-item"
            
          >
            Not started
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    data () {
      return {
        filterOption: 'all'
      }
    },
    methods: {
      emitFilter(filterOption) {
        this.filterOption = filterOption
        this.$emit('filterSelected', filterOption)
        

      }
    }
  }
</script>
