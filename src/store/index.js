import Vue from 'vue'
import fakeApi from '../lib/fakeApi'
const store = {
  state: {
      activities: {},
      categories: {},
  },
  generateUid() { return Math.floor(new Date() * Math.random())},

  fetchActivities () {
    return fakeApi.get('activities', {force: 1})
    .then(activities => {
        Object.keys(activities).forEach(activityId => 
            this.setItem('activities',activityId,activities[activityId])
            //Vue.set(this.state.activities, activityId, activities[activityId])
        )
        return activities
    })
  },

  fetchCategories () {
    return fakeApi.get('categories', {force: 1})
    .then(categories => {
        Object.keys(categories).forEach(categoryId => 
            //Vue.set(this.state.categories, categoryId, categories[categoryId])
            this.setItem('categories',categoryId,categories[categoryId])
        )
        return categories
    })
  },

  fetchUser () {
    return {
      name: 'Filip Jerga',
      id: '-Aj34jknvncx98812',
    }
  },

  createActivity (activity) {
    activity.id = this.generateUid()
    activity.progress = 0
    activity.createdAt = new Date()
    activity.updatedAt = new Date()

    return fakeApi.post('activities', activity)
    .then(activity => {
        this.setItem('activities', activity.id, activity)
        //Vue.set(this.state.activities, activity.id, activity)
        return activity
    })
  },

  updateActivity(activity) {
      activity.updatedAt = new Date()
      return fakeApi.post('activities',activity)
      .then((activity) => {
        this.setItem('activities',activity.id,activity)
        return activity
      })
  },

  deleteActivity (activity) {
    return fakeApi.delete('activities', activity) 
    .then(deletedAPIactivity => {
      Vue.delete(this.state.activities,activity['id'])
      return(deletedAPIactivity)
    })

  },
  setItem (resource, id, item) {
      Vue.set(this.state[resource],id, item)
  }

}

export default store