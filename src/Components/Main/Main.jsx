import React from "react"
import "./Main.css"
import image from "../../image/image.jpg"
const CardContent = [

    {
        image: image,
        price: '$12500',
        name: 'Vacant',
        Address: '38 Nappan Drive Opp. Gandhi Nagar Mumbai',


    },
    {
        image: image,
        price: '$12500',
        name: 'Vacant',
        Address: '38 Nappan Drive Opp. Gandhi Nagar Mumbai',


    },
    {
        image: image,
        price: '$12500',
        name: 'Vacant',
        Address: '38 Nappan Drive Opp. Gandhi Nagar Mumbai',


    },
    {
        image: image,
        price: '$12500',
        name: 'Vacant',
        Address: '38 Nappan Drive Opp. Gandhi Nagar Mumbai',


    },
    {
        image: image,
        price: '$12500',
        name: 'Vacant',
        Address: '38 Nappan Drive Opp. Gandhi Nagar Mumbai',


    },
    {
        image: image,
        price: '$12500',
        name: 'Vacant',
        Address: '38 Nappan Drive Opp. Gandhi Nagar Mumbai',
    },
    {
        image: image,
        price: '$12500',
        name: 'Vacant',
        Address: '38 Nappan Drive Opp. Gandhi Nagar Mumbai',
    },
    {
        image: image,
        price: '$12500',
        name: 'Vacant',
        Address: '38 Nappan Drive Opp. Gandhi Nagar Mumbai',
    },
    {
        image: image,
        price: '$12500',
        name: 'Vacant',
        Address: '38 Nappan Drive Opp. Gandhi Nagar Mumbai',
    },

]
const Main = () => {
    return (
        <>
            <div className="HomeStyle">

                <div className="row row-cols-1 row-cols-md-4 g-4">

                    {CardContent.map((item, index) => {
                        return (
                            <>
                          <div className="col mr-2 CardStyle " key={index}>
                                    <div className="card " style={{ width: "265px" }}>
                                        <img src={item.image} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{item.price}</h5>
                                            <p className="card-text">{item.Address}</p>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            
                                        </ul>
                                        <div className="card-body">
                                            <a href="#" className="text-start card-link"><i class='bx bx-up-arrow-alt'></i> 1200 Ft</a>
                                            <a href="#" className=" text-center card-link"><i class='bx bx-car'></i> 3 </a>
                                            <a href="#" className=" mr-2 card-link"> <i class='bx bx-bowl-hot'></i> 2</a>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })}

                </div>

            </div>
        </>
    )
}
export default Main