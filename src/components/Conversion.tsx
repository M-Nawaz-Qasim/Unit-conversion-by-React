import { useEffect, useState } from "react";

function Conversion() {
    const [input, setInput] = useState(0);
    const [price, setPrice] = useState(0);
    const [totalG, setTotalG] = useState(0);
    const [totalKg, setTotalKg] = useState(0);
    const [quantity, setQuantity] = useState(0);
    useEffect((() => {
        const pricepergram = input / 1000;
        setTotalG(Number(Math.floor(price / pricepergram)));
    }), [price])

    useEffect((() => {
        setTotalKg(Number(Math.floor(quantity * input)));
    }), [quantity]);
    return (
        <>
            <div className="flex flex-col lg:flex-row gap-10 items-center justify-center">
                <div className="border-2 border-black w-90">
                    <div className="flex flex-col items-center">
                        <input type="number" className="border-2 p-2 m-1 w-[95%]" placeholder="1 killo ka Rate" onChange={(e) => (setInput(Number(e.target.value)))} />
                        <input type="number" className="border-2 p-2 m-1 w-[95%]" placeholder="Kitny ki Leni hay" onChange={(e) => (setPrice(Number(e.target.value)))} />
                    </div>
                    <div className="p-4">
                        <h2 className="text-xl">Rs. <span className="font-bold">{price}</span> rupy mei <span className="font-bold">{totalG}g</span> wazn bany ga</h2>
                    </div>
                </div>
                <div className="border-2 border-black w-90">
                    <div className="flex flex-col items-center">
                        <input type="number" className="border-2 p-2 m-1 w-[95%]" placeholder="1 killo ka Rate" onChange={(e) => (setInput(Number(e.target.value)))} />
                        <input type="number" className="border-2 p-2 m-1 w-[95%]" placeholder="Kitna killo leini hay?" onChange={(e) => (setQuantity(Number(e.target.value)))} />
                    </div>
                    <div className="p-4">
                        <h2 className="text-xl"><span className="font-bold">{quantity} kg </span>ki Price Rs.<span className="font-bold">{totalKg}</span></h2>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Conversion;
