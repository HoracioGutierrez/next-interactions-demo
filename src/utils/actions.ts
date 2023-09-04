export const getDemos = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/demos')
        const data = await response.json()
        return data
    } catch (error) {
        return error
    }
}