import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const Panier =() => {
    const stripe = useStripe();
    const elements = useElements();
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      // Ici, vous pouvez appeler l'API de Stripe pour effectuer le traitement du paiement
      // en utilisant les informations du formulaire.
  
      // Par exemple :
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
      });
  
      if (!error) {
        // Le paiement a été traité avec succès, vous pouvez effectuer d'autres actions ici.
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit" disabled={!stripe}>
          Payer
        </button>
      </form>
    );
  }

export default Panier;
  