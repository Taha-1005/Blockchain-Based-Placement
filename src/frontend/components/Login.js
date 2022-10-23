import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navigation from './Navbar';
import Home from './Home.js'
import Create from './Create.js'
import MyListedItems from './MyListedItems.js'
import MyPurchases from './MyPurchases.js'
import MarketplaceAbi from '../contractsData/Marketplace.json'
import MarketplaceAddress from '../contractsData/Marketplace-address.json'
import NFTAbi from '../contractsData/NFT.json'
import NFTAddress from '../contractsData/NFT-address.json'
import { useState } from 'react'
import { ethers } from "ethers"
import { Spinner } from 'react-bootstrap'

import './App.css';

function Login({ marketplace, nft }) {
//   const [loading, setLoading] = useState(true)
//   const [account, setAccount] = useState(null)
//   // const [nft, setNFT] = useState({})
//   // const [marketplace, setMarketplace] = useState({})
//   // MetaMask Login/Connect
//   const web3Handler = async () => {
//     const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
//     setAccount(accounts[0])
//     // Get provider from Metamask
//     const provider = new ethers.providers.Web3Provider(window.ethereum)
//     // Set signer
//     const signer = provider.getSigner()

//     window.ethereum.on('chainChanged', (chainId) => {
//       window.location.reload();
//     })

//     window.ethereum.on('accountsChanged', async function (accounts) {
//       setAccount(accounts[0])
//       await web3Handler()
//     })
//     loadContracts(signer)
//   }
//   const loadContracts = async (signer) => {
//     // Get deployed copies of contracts
//     const marketplace = new ethers.Contract(MarketplaceAddress.address, MarketplaceAbi.abi, signer)
//     setMarketplace(marketplace)
//     const nft = new ethers.Contract(NFTAddress.address, NFTAbi.abi, signer)
//     setNFT(nft)
//     setLoading(false)
//   }

  return (
    
    <div>
      <d>dd</d>
    </div>

  );
}

export default Login;