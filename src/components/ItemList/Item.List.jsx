import React from 'react'

const ItemList = () => {

    const [localItems, setLocalItems] = useState ([])

    useEffect(() => {

        const items = [
        {id:1 , name:'Brasil', precio:'U$D 1.300' , img:'' , description:'Viaje guiado de alta calidad a la ciudad mas hermosa de Brasil'},

        {id:1 , name:'Espana', precio:'U$D 1.300' , img:'' , description:'Viaje guiado de alta calidad a la ciudad mas hermosa de Espana'},

        {id:1 , name:'Francia', precio:'U$D 1.300' , img:'' , description:'Viaje guiado de alta calidad a la ciudad mas hermosa de France',}              

    ]
    
 
    const getItems = (products) =>{
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve(products)
            }, 2000)
        })
    }

    getItems(items)
        .then(result => setLocalItems(result))
        .catch(error => console.log(error))

    }, [])
 

    console.log(localItems)

    //mapear localItems
    return (
        <div>
        {
                localItems.map((item) => (
            <div>
                <Item product={item}/>
            </div>
           ))
        }
        </div>
    )
}

export default Item.List
