import api from './config'

const getAllLabs = async () => {
    try {
        const { data } = await api.get('/labs')
        return data
    } catch (error) {
        throw new Error(error)
    }
}

export { getAllLabs }