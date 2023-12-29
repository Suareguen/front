import api from './config'


const getCorrection = async (org, lab) => {
     try {
        const { data } = await api.get(`/github/pullRequests/org/${org}/repo/${lab}`)
        return data
     } catch (error) {
        throw new Error(error)
     }
}


const updatePullrequests = async (lab) => {
   try {
      const { data } = await api.get(`/github/createCommentPullRequest/${lab}`)
      return data
   } catch (error) {
      throw new Error(error)
   }
}

export { 
    getCorrection,
    updatePullrequests
}