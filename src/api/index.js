const activities = {
    1546968934: {
      id: '1546968934',
      title: 'Learn Vue.js',
      notes: 'I started today and it was not good.',
      progress: 0,
      category: '1546969049',
      createdAt: 1546969144391,
      updatedAt: 1546969144391
    },
    1546969212: {
      id: '1546969212',
      title: 'Read Witcher Books',
      notes: 'These books are super nice',
      progress: 0,
      category: '1546969049',
      createdAt: 1546969144391,
      updatedAt: 1546969144391
    }
}

const canContinue = () => {
    const RandomNumber = Math.floor(Math.random() * 10)
    if (RandomNumber >= 5) {
        return true
    }
    return false
}

export const fetchActivities = () => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      if (canContinue()) {
          resolve(activities)
      }else {
          reject('canot get activities')
      }
    }, 2000)
  })    
  
}

const generateUid = () => Math.floor(new Date().valueOf() * Math.random()) 

export const createActivityAPI = (activity) => {
  activity.id = generateUid()
  activity.progress = 0
  activity.createdAt = new Date()
  activity.updatedAt = new Date()

  return new Promise((resolve,reject)=> {
    resolve(activity)
  })
}

export const fetchCatogeries = () => {
  return {
    1546969049: { id: 1546969049, text: 'books' },
    1546969225: { id: 1546969225, text: 'movies' }
  }
}

export const fetchUser = () => {
  return {
    name: 'Filip Jerga',
    id: '-Aj34jknvncx98812'
  }
}
