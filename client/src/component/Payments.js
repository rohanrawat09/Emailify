import { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as action from "../actions";

class Payments extends Component{
    render(){
        return(
            <StripeCheckout
            name="Emailify"
            description="Get 5 credits for surveys"
            amount={500}
            token={token => this.props.handleToken(token)}
            stripeKey={process.env.REACT_APP_STRIPE_KEY}>
                <button className="btn">Add Credits

                </button>
            </StripeCheckout>    
        );
    }
}
export default connect(null, action) (Payments);