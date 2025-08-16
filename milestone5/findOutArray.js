

const products = [
    {id: 1, name: 'redmi', price: 12000, model: 2022 },
    {id: 2, name: 'redmi Phones', price: 12000, model: 2022 },
    {id: 3, name: 'redmi', price: 12000, model: 2022 },
    {id: 4, name: 'redmi mobiles', price: 12000, model: 2022 },
    {id: 5, name: 'redmi', price: 12000, model: 2022 },
    {id: 6, name: 'redmi Phones', price: 12000, model: 2022 },
    {id: 7, name: 'redmi', price: 12000, model: 2022 },
    {id: 8, name: 'redmi Phones', price: 12000, model: 2022 },
    {id: 9, name: 'redmi', price: 12000, model: 2022 },
    {id: 10, name: 'redmi Phones', price: 12000, model: 2022 },
    {id: 11, name: 'redmi', price: 12000, model: 2022 },
    {id: 12, name: 'redmi', price: 12000, model: 2022 },

]

function findOutProduct (products, search){

    let matched = []
    for (const product of products) {
        if(product.name.toLowerCase().includes(search)){
            matched.push(product)
        }
    }
    return matched
}
const finalResult = findOutProduct(products, 'redmi')
console.log(finalResult)