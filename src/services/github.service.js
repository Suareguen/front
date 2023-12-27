import api from './config'


const getCorrection = async () => {
     try {
        const { data } = await api.get('/github/blobContent')
        console.log(data)
        return data
     } catch (error) {
        throw new Error(error)
     }
}

export { 
    getCorrection
}