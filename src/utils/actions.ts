export const getDemos = async () => {
    try {
        const response = await fetch(process.env.BASE_URL + '/api/demos')
        const { payload } = await response.json()
        return { payload, error: null }
    } catch (error) {
        return { payload: null, error }
    }
}