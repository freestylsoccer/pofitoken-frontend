import React, { useState, useEffect } from 'react';
import getBlockchain from '../ethereum';

export default function Connection(){
    const [pofiToken, setPofiToken] = useState(undefined);
    const [name, setName] = useState(undefined);
    const [address, setAddress] = useState(undefined);
    const [symbol, setSymbol] = useState(undefined);
    const [totalSupply, setTotalSupply] = useState(undefined);
    // user data
    const [userAddress, setUserAddress] = useState(undefined);
    const [userBalance, setUserBalance] = useState(undefined);

    useEffect(() => {
        const init = async () => {
          const { pofiToken } = await getBlockchain();
          setPofiToken(pofiToken);      
    
          // TOKEN ADDRESS
          const address = await pofiToken.address;      
          setAddress(address);
          console.log(pofiToken)
          // TOKEN NAME
          const name = await pofiToken.name();   
          setName(name);
          // TOKEN SYMBOL
          const symbol = await pofiToken.symbol();
          setSymbol(symbol);
          // TOKEN TOTAL SUPPLY
          const totalSupply = await pofiToken.totalSupply();
          setTotalSupply(totalSupply/(10**18));
          // USER ADDRESS
          const userAddress = await pofiToken.signer.getAddress();
          setUserAddress(userAddress);
          // USER BALANCE
          const userBalance = await pofiToken.balanceOf(userAddress);
          setUserBalance(userBalance/(10**18));      
        };
        init();
    }, []);

    if(
        typeof pofiToken === 'undefined'
        || typeof name === 'undefined'
        || typeof symbol === 'undefined'
        || typeof address === 'undefined'
        || typeof totalSupply === 'undefined'
        || typeof userAddress === 'undefined'
        || typeof userBalance === 'undefined'
      ) {
        return 'Loading...';
      }
    
    return (
        <div className='container'>
          <div className='row'>
    
            <div className='col'>
              <h2>Token</h2>
              <p>Name: {name.toString()} Symbol: {symbol.toString()}</p>
              <p><strong>Total Supply:</strong> {totalSupply.toLocaleString('en-US', {})}</p>
            </div> 
            <div className='col'>
              <h2>Token Address:</h2>
              <p>{address.toString()}</p>
            </div>        
          </div>
          <hr></hr>
          <div className="row">
            <div className="col">
              <h2>User</h2>
              <p>Your connected with address: {userAddress.toString()}</p>
              <p>Your currently POFI balance is: {userBalance.toLocaleString('en-US', {})}  </p>
            </div>
          </div>
          <hr></hr>
          <div className="row justify-content-center">
            <div className="col">          
              <form>
              <div className="form-row align-items-center justify-content-center">            
                  <h2>Claim POFI Airdrop</h2>
                </div>
                <div className="form-row align-items-center justify-content-center">            
                  <div className="col-5">                                
                    <input type="text" className="form-control" id="inlineFormInputName" placeholder="Input your Binance Smart Chain address"/>                
                  </div>              
                  <div className="col-auto my-1">
                    <button type="submit" className="btn btn-primary">Claim</button>
                  </div>
                </div>
              </form>
            </div>        
          </div>
          <div className="row justify-content-center">
            <div className="col">          
              <h2>How does this work?</h2>
            </div>        
          </div>
        </div>
    );
}