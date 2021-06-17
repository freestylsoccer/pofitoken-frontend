import React, { Component } from 'react';

class WaitList extends Component {
    constructor(props) {
      super(props);
      this.state = {address: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({[event.target.name]: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
        return (
            <div className="container">
                <div className="row justify-content-md-center">
                    <br/>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <br/>
                    <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dicti</p>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col align-self-start">    
                        <form onSubmit={this.handleSubmit}>
                            
                            <div className="card mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">Step 1</h5>
                                    <ul className="list-unstyled">                                    
                                        <li>Previous requirements:
                                            <ul>
                                                <li>If you don't have a wallet, add the Metamask extension to your browser it's free and easy to use <a href="https://metamask.io/download" target="_blank" rel="noreferrer">add metamask</a></li>
                                                <li>If you do not have the Binance Smart Chain network configured in your wallet, you must add it by following the steps indicated in the following guide: <a href="https://academy.binance.com/es/articles/connecting-metamask-to-binance-smart-chain" target="_blank" rel="noreferrer">Connecting MetaMask to Binance Smart Chain</a></li>
                                            </ul>
                                        </li>                                    
                                    </ul>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput1">Binance Smart Chain Wallet Address</label>
                                        <input type="text" className="form-control" id="exampleFormControlInput1" maxLength='42' name="address" value={this.state.address} onChange={this.handleChange} placeholder="0x6533a3F85AFSDF54FG93BcC1B573B5e6533075b0"/>
                                    </div>
                                </div>                                
                            </div>
                                                        
                            <div className="card mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">Step 2</h5>
                                    <ul className="list-unstyled">                                    
                                        <li>Join us on Telegram:
                                            <ul>
                                            <li><a href="https://t.me/pofitoken" target="_blank" rel="noreferrer">https://t.me/pofitoken</a></li>
                                                <li><img src="data:image/png;base64,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" 
                                                className="rounded-sm" alt="..."/></li>
                                            </ul>
                                        </li>                                    
                                    </ul>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput2">Telegram User</label>
                                        <input type="text" className="form-control" id="exampleFormControlInput2" name="telegram" value={this.state.telegram} onChange={this.handleChange} placeholder="@MyTelegram"/>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="card mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">Step 3</h5>
                                    <ul className="list-unstyled">                                    
                                        <li>Join us on Facebook:
                                            <ul>
                                            <li><a href="https://www.facebook.com/pofitoken" target="_blank" rel="noreferrer">https://www.facebook.com/pofitoken</a></li>
                                                <li><img src="data:image/png;base64,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" 
                                                className="rounded-sm" alt="..."/></li>
                                            </ul>
                                        </li>                                    
                                    </ul>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput2">Facebook User</label>
                                        <input type="text" className="form-control" id="exampleFormControlInput2" maxLength='42' name="telegram" value={this.state.telegram} onChange={this.handleChange} placeholder="@MyTelegram"/>
                                    </div>
                                </div>                                
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleFormControlSelect2">Example multiple select</label>
                                <select multiple className="form-control" id="exampleFormControlSelect2">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                    <input type="email" className="form-control" id="inputEmail3" value={this.state.value} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                                <div className="col-sm-10">
                                    <input type="password" className="form-control" id="inputPassword3" />
                                </div>
                            </div>
                            <fieldset className="form-group row">
                                <legend className="col-form-label col-sm-2 float-sm-left pt-0">Radios</legend>
                                <div className="col-sm-10">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                                        <label className="form-check-label" htmlFor="gridRadios1">
                                            First radio
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                                        <label className="form-check-label" htmlFor="gridRadios2">
                                            Second radio
                                        </label>
                                    </div>
                                    <div className="form-check disabled">
                                        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled />
                                        <label className="form-check-label" htmlFor="gridRadios3">
                                            Third disabled radio
                                        </label>
                                    </div>
                                </div>
                            </fieldset>
                            <div className="form-group row">
                                <div className="col-sm-10 offset-sm-2">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="gridCheck1" />
                                        <label className="form-check-label" htmlFor="gridCheck1">
                                            Example checkbox
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-10">
                                    <button type="submit" className="btn btn-primary">Sign in</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default WaitList;