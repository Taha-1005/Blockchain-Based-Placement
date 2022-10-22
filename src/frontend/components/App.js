import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './Navbar';
import Home from './Home.js';
import Create from './Create.js';
import MyListedItems from './MyListedItems.js';
import MyPurchases from './MyPurchases.js';
import MarketplaceAbi from '../contractsData/Marketplace.json';
import MarketplaceAddress from '../contractsData/Marketplace-address.json';
import NFTAbi from '../contractsData/NFT.json';
import NFTAddress from '../contractsData/NFT-address.json';
import { useState } from 'react';
import { ethers } from 'ethers';
import { Spinner } from 'react-bootstrap';

import './App.css';
import Login from './Login';

function App() {
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [account, setAccount] = useState(null);
  const [nft, setNFT] = useState({});
  const [marketplace, setMarketplace] = useState({});
  // MetaMask Login/Connect
  const web3Handler = async () => {
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });
    setAccount(accounts[0]);
    // Get provider from Metamask
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    // Set signer
    const signer = provider.getSigner();

    window.ethereum.on('chainChanged', (chainId) => {
      window.location.reload();
    });

    window.ethereum.on('accountsChanged', async function (accounts) {
      setAccount(accounts[0]);
      await web3Handler();
    });
    loadContracts(signer);
  };

  const loadContracts = async (signer) => {
    // Get deployed copies of contracts
    const marketplace = new ethers.Contract(
      MarketplaceAddress.address,
      MarketplaceAbi.abi,
      signer
    );
    setMarketplace(marketplace);
    const nft = new ethers.Contract(NFTAddress.address, NFTAbi.abi, signer);
    setNFT(nft);
    setLoading(false);
  };

  const goToLoginPage = () => {};
  return (
    <BrowserRouter>
      <div className='App'>
        <>
          <Navigation web3Handler={web3Handler} account={account} />
        </>
        <div>
          {loading ? (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '80vh',
              }}
            >
              <div>Already Registered?</div>
              <button>No</button>
              <button onClick={(event) => setLogin(true)}>Yes</button>
              {
                //   login ? (
                // //  Direct to login
                // <Routes>
                // <Route
                // path='/Login'
                // element={<Login marketplace={marketplace} nft={nft} />}
                // />
                // </Routes>
                // ) : (
                //   <div>
                //     {console.log('J', login)}
                //     Make Form
                //   </div>
                // )
              }
            </div>
          ) : (
            <Routes>
              <Route
                path='/'
                element={<Home marketplace={marketplace} nft={nft} />}
              />
              <Route
                path='/create'
                element={<Create marketplace={marketplace} nft={nft} />}
              />
              <Route
                path='/Login'
                element={<Create marketplace={marketplace} nft={nft} />}
              />
              <Route
                path='/my-listed-items'
                element={
                  <MyListedItems
                    marketplace={marketplace}
                    nft={nft}
                    account={account}
                  />
                }
              />
              <Route
                path='/my-purchases'
                element={
                  <MyPurchases
                    marketplace={marketplace}
                    nft={nft}
                    account={account}
                  />
                }
              />
            </Routes>
          )}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
