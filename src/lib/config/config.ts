

interface Config {
    apiUrl: string
}
const cfg = { apiUrl: import.meta.env.VITE_API_URL } as Config


export { cfg }