import { ethers } from "ethers"

function Header({ account, setAccount }) {

  async function connectHandler(){
    const accounts =await window.ethereum.request({ method: "eth_requestAccounts" });
    console.log(accounts[0])
    setAccount(accounts[0])
  }


  return (
    <header>
      <p className="brand">fun</p>
      {account ? (
        <button className="btn--fancy">[{account.slice(0,6)+'...'+account.slice(38,42)}]</button>
        ):(
          <button onClick={connectHandler} className="btn--fancy" >[connect]</button>
        )}
      

    </header>
  );
}

export default Header;