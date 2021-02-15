<template>
  <div>
    <ActivityItemUpdate v-if="isUpdateActive"   
                        @toggleUpdate="toggleUpdateActive"
                         :activity="activity"                 
                         :categories="categories"/>
    <ActivityItemDetail v-else
                        @toggleUpdate="toggleUpdateActive"
                        :activity="activity" 
                        :categories="categories"/>
    
  </div>
  
</template>

<script>
import ActivityItemDetail from './ActivityItemDetail'
import ActivityItemUpdate from './ActivityItemUpdate'
import store from '@/store'
  
  export default {
    components: {
        ActivityItemDetail,
        ActivityItemUpdate
    },
    props: {
        activity: {
          required: true,
          type: Object
        },
        categories: {
          required: true,
          type: Object
        }
    },
    data () {
        return {
          isUpdateActive: false
        }
    },
    methods: {
      toggleUpdateActive () {
        this.isUpdateActive = !this.isUpdateActive
      }
    }

  }
</script>

<style  scoped>


</style>
