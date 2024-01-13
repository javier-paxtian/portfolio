import React, { useEffect, useState } from "react";
import criptoBg from '../assets/img/cripto-bg.jpg'

const Cripto = () => {
    const [data, setData] = useState([])
    const [result, setResult] = useState({})
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        coin: '',
        cryptocurrencies: '',
    });
    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const res = await fetch(`https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`).then()
        if (!res.ok) {
            throw new Error(`La solicitud falló con el código de estado ${res.status}`);
        }
        const resJSON = await res.json();
        setData(resJSON.Data)
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.cryptocurrencies.length === 0) return
        setLoading(true)
        const res = await fetch(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${formData.cryptocurrencies}&tsyms=${formData.coin}`).then()
        if (!res.ok) {
            throw new Error(`La solicitud falló con el código de estado ${res.status}`);
        }
        const resJSON = await res.json();
        setResult(resJSON.DISPLAY[formData.cryptocurrencies][formData.coin])
        setLoading(false)
    };

    useEffect(() => {
        console.log(result);
    }, [])
    return <>
        <main className="bg-gray-100 h-full min-h-screen w-full m-auto pb-8 pt-24 ">
            <div className="max-w-[640px] m-auto">
                <nav className="bg-purple-700 text-white text-center py-4 text-white font-bold text-4xl tracking-widest ">CRIPTO</nav>
                <img className="w-full   h-52 object-cover object-center" src='https://images.unsplash.com/photo-1621504450181-5d356f61d307?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vbmVkYXMlMjBkZSUyMG9yb3xlbnwwfHwwfHx8MA%3D%3D' alt="" />

                <div className="px-[5%]">
                    <form class="mb-8" onSubmit={handleSubmit}>
                        <div class="my-5">
                            <label for="coin" class="block mb-2 text-sm font-medium text-gray-900">Your Coin</label>
                            <select id="coin" name="coin"
                                value={formData.coin}
                                onChange={handleInputChange}
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 " required>
                                <option selected>Select Coin</option>
                                <option value="MXN">Mexican peso</option>
                                <option value="USD">USA dolar</option>
                                <option value="EUR">Euro</option>
                                <option value="GBP">Pound sterling</option>
                            </select>
                        </div>
                        <div class="mb-5">
                            <label for="cryptocurrencies" class="block mb-2 text-sm font-medium text-gray-900">Your Cryptocurrencies</label>
                            <select id="cryptocurrencies" name="cryptocurrencies"
                                value={formData.cryptocurrencies}
                                onChange={handleInputChange}
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 " required >
                                <option selected>Select Cryptocurrencies</option>
                                {data.length > 0 && data.map((item, index) => <>
                                    <option key={index} value={item.CoinInfo.Name}>{item.CoinInfo.FullName}</option>
                                </>)}
                            </select>
                        </div>
                        <button type="submit" class="text-white bg-purple-700 
                    hover:bg-purple-500 focus:ring-4 focus:outline-none focus:ring-purple-500 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center ">Submit</button>
                    </form>
                    <div>
                        {!(Object.keys(result).length === 0) && !loading && <>
                            <h2 className="text-gray-700 text-center pt-4 text-4xl font-bold">{result.PRICE}</h2>
                            <div className="flex pt-4 flex-col gap-y-3">
                                <p className="text-center text-base">
                                    Last update: <span className="text-center text-xl font-bold">{result.LASTUPDATE}</span>
                                </p>
                                <p className="text-center text-base">
                                    Variation of the last 24 hours: <span className="text-center text-xl font-bold">{result.CHANGEPCT24HOUR}</span>
                                </p>
                                <p className="text-center text-base">
                                    Highest price of the day: <span className="text-center text-xl font-bold">{result.HIGHDAY}</span>
                                </p>
                                <p className="text-center text-base">
                                    Lowest price of the day: <span className="text-center text-xl font-bold">{result.LOWDAY}</span>
                                </p>
                            </div>

                        </>}
                        {loading && <>
                            <div role="status" className="flex justify-center">
                                <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-purple-700" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                                <span class="sr-only">Loading...</span>
                            </div>
                        </>}
                    </div>
                </div>

            </div>
        </main>
    </>
}

export default Cripto