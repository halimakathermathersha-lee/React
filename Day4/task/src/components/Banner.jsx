import cardImg from "../assets/2.jpg"
import bannerImg from "../assets/banner2.png"
const Banner = () => {
    return (
        <>
            <img className="h-120 relative w-screen" src={bannerImg} />
            <LeftSide/>
        </>
    )
}

export default Banner

const LeftSide = () => {
    return (<>
        <div className="absolute bottom-100 top-50 m-3 w-200 text-black">
            <p className="text-blue-800 text-6xl my-3">Welcome To My Website</p>
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, eum, similique culpa labore quod vero eligendi illo voluptatibus totam hic tempore ullam nostrum blanditiis atque vitae quam quis sint! Harum.</p>
        </div>
    </>)
}

export const Card=()=>{
    return(<>
    <div className="text-center m-3">
        <h2 className="text-blue-800 text-6xl my-3">Services
        </h2>
        <div className="flex gap-10 m-3 ">
            <div className="bg-indigo-400 w-65 h-110 m-3 p-3">
            <img src={cardImg} className="object-cover" alt="..."/>
            <div className=" py-3">
                <p className="text-3xl">Service1</p>
                <p className="text-black/70">Lorem ipsum dolor sit amet conseunt ipsa si harum corporis non assumenda maxime iusto</p>
                <button className="bg-green-600 p-1 rounded m-3">Know More</button>
            </div>
        </div>
        <div className="bg-indigo-400 w-65 h-110 m-3 p-3">
            <img src={cardImg} className="object-cover" alt="..."/>
            <div className=" py-3">
                <p className="text-3xl">Service1</p>
                <p className="text-black/70">Lorem ipsum dolor sit amet conseunt ipsa si harum corporis non assumenda maxime iusto</p>
                <button className="bg-green-600 p-1 rounded m-3">Know More</button>
            </div>
        </div>
        <div className="bg-indigo-400 w-65 h-110 m-3 p-3">
            <img src={cardImg} className="object-cover" alt="..."/>
            <div className=" py-3">
                <p className="text-3xl">Service1</p>
                <p className="text-black/70">Lorem ipsum dolor sit amet conseunt ipsa si harum corporis non assumenda maxime iusto</p>
                <button className="bg-green-600 p-1 rounded m-3">Know More</button>
            </div>
        </div>
        <div className="bg-indigo-400 w-65 h-110 m-3 p-3">
            <img src={cardImg} className="object-cover" alt="..."/>
            <div className=" py-3">
                <p className="text-3xl">Service1</p>
                <p className="text-black/70">Lorem ipsum dolor sit amet conseunt ipsa si harum corporis non assumenda maxime iusto</p>
                <button className="bg-green-600 p-1 rounded m-3">Know More</button>
            </div>
        </div>
        </div>

        
    </div>
    
    </>)
}