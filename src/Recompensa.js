import { useEffect, useState } from 'react';
import { useMoralis, useWeb3Contract } from "react-moralis";
import ala1 from './ala1.jpeg';
import ala2 from './ala2.jpeg';
import ala3 from './ala3.jpeg';
import logo from './logo.png';
import { abi, contractAddress } from './NftsContract';

export const Recompensa = () => {

    const [img, setImg] = useState();

    useEffect(() => {

        let numPosibilidades = 3 - 1;
        let aleatorio = Math.floor(Math.random() * (numPosibilidades + 2));

        switch (aleatorio) {
            case 1:
                setImg(ala1);
                break;
            case 2:
                setImg(ala2);
                break;
            case 3:
                setImg(ala3);
                break;
            default:
                setImg(ala1);
                break;
        }

    }, [])

    const { enableWeb3, isWeb3Enabled } = useMoralis()

    const { runContractFunction, data, error } = useWeb3Contract({
        abi,
        contractAddress,
        functionName: 'createNft',
        params: {
            _link: img,
            _owner: 'wallet address'
        }
    })

    useEffect(async () => {
        if (!isWeb3Enabled) {
            await enableWeb3()
        }
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const resp = await runContractFunction()
    }

    return (
        <>

            <div className="nabvar navbar01 shadow-sm p-1 mb-5 d-flex justify-content-center">
                <img src={logo} alt="Logo Conoce Durango" style={{ height: '7rem' }} />
            </div>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card p-5 bg-light d-flex justify-content-center">
                            <h1 className="mb-4 text-center">Felicidades</h1>
                            <img src={img} alt="Premio" />
                            <input type="button" value="Reclamar" className='btn btn-success m-4' onClick={handleSubmit} />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
