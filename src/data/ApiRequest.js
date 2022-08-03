module.exports = {
    fetchData: async () => {
        await fetch('http://localhost:2556/api/users')
            .then((response) => response.json())
            .then((data) => {
                console.log(`result = ${data.data[0].name}`)
            })
    }
}