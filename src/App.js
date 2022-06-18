import { useState, useEffect } from 'react';
import { ethers } from "ethers";
import './App.css';
import logo from './logo.png';
import { Link } from 'react-router-dom';

function App() {

  const [error, setError] = useState();
  const [txs, setTxs] = useState([]);
  const [porcentaje, setPorcentaje] = useState(80);
  const [wallet, setWallet] = useState('');

  const handleSubmit = async () => {
    setError();
    await startPayment({
      setError,
      setTxs,
      ether: "0.5",
      addr: "0x9E64EA8cBF89Aae44d8459D76233933ca632D642"
    });
  };

  const startPayment = async ({ setError, setTxs, ether, addr }) => {
    try {
      if (!window.ethereum)
        throw new Error("No crypto wallet found. Please install it.");

      await window.ethereum.send("eth_requestAccounts");
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      ethers.utils.getAddress(addr);
      const tx = await signer.sendTransaction({
        to: addr,
        value: ethers.utils.parseEther(ether)
      });
      console.log({ ether, addr });
      console.log("tx", tx);
      setWallet(tx.from);
      setTxs([tx]);
      setPorcentaje(100);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    handleSubmit();
  }, [])


  return (
    <>
      <div className="nabvar navbar01 shadow-sm p-1 mb-5 d-flex justify-content-center">
        <img src={logo} alt="Logo Conoce Durango" style={{ height: '7rem' }} />
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card p-5 bg-light d-flex justify-content-center">
              <h1 className="mb-4 text-center">Progreso de recompensa</h1>

              <div className="mb-4">
                <div className="d-flex align-items-center">
                  <span>Wallet</span>
                </div>
                <span>{wallet}</span>
              </div>

              <div className="progress" style={{ height: '25px' }}>
                <div className="progress-bar bg-warning" role="progressbar" style={{ width: `${porcentaje}%` }} aria-valuenow={porcentaje}
                  aria-valuemin="0" aria-valuemax="100">{porcentaje}%</div>
              </div>

              <div className="my-4">
                <p className={porcentaje === 100 && 'text-decoration-line-through'}>Museo de Arqueología</p>
                <p className='text-decoration-line-through'>Museo Gral. Francisco Villa</p>
                <p className='text-decoration-line-through'>Museo Regional UJED</p>
                <p className='text-decoration-line-through'>Museo del Arte Sacro</p>
                <p className='text-decoration-line-through'>Museo de Arte Funerario Benigno Montoya</p>
              </div>

              {
                porcentaje === 100
                &&
                <div className="row d-flex justify-content-center">
                  <Link to="/recompensa" class="col-4 btn btn-success mt-4">Reclamar recompensa</Link>
                </div>
              }

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
