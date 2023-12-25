import api from './config'


const getAllStudents = async () => {
    try {
        const { data } = await api.get('/students')
        console.log(data)
        return data
    } catch (error) {
        throw new Error(error)
    }
}


export {
     getAllStudents
}