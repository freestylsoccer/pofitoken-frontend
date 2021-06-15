import detectEthereumProvider from '@metamask/detect-provider';
import { ethers, Contract } from 'ethers';
import PofiToken from './contracts/PofiToken.json';

const getBlockchain = () =>
  new Promise( async (resolve, reject) => {
    let provider = await detectEthereumProvider();
    if(provider) {
      await provider.request({ method: 'eth_requestAccounts' });
      const networkId = await provider.request({ method: 'net_version' })
      provider = new ethers.providers.Web3Provider(provider);
      const signer = provider.getSigner();      
      const pofiToken = new Contract(
        PofiToken.networks[networkId].address,
        PofiToken.abi,
        signer
      );
      resolve({pofiToken});
      return;
    }
    reject('Install Metamask');
  });

export default getBlockchain;