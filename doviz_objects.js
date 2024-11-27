class Currency {
    constructor(){
        this.url = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_fk1xmrKXe5v5IoFQn8399rXKZI7ODHlmzadtMRhR&base_currency="
    }

    async convert(selection_1, selection_2, input){
        let response = await fetch(`${this.url}${selection_1}`)
        let response2 = await response.json()
        let data = await response2.data

        let x = data[selection_2]
        let output = input * x 
        return output
}
}