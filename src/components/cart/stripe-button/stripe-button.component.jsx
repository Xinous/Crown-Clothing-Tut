import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = (price) => {
	const priceForStripe = price * 100;
	const pubKey = 'pk_test_6qWaRs4PvSNFkGoYkmDXPcrK00WOGfwwRU';

	const onToken = (token) => {
		console.log(token);
		alert('Payment Successful');
	};

	return (
		<StripeCheckout
			label='Pay Now'
			name='Crown Tradegoods'
			billingAddress
			shippingAddress
			image='https://svgshare.com/i/CUz.svg'
			description={`Your Total is $${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={pubKey}
		/>
	);
};

export default StripeCheckoutButton;
