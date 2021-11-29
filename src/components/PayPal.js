import React, { useRef, useEffect } from "react";

export default function Paypal() {
  const paypal = useRef();

  const product = {
    price: 77.77,
    name: 'comfy chair',
    description: 'fancy chair, like new',
    image: 'https://media.istockphoto.com/vectors/old-wooden-chair-isolated-on-white-backgroundfurniture-for-dining-vector-id1159568874?k=20&m=1159568874&s=612x612&w=0&h=DazRv9-NA88QjTRG3B58zAu58AXMyGCV9jc6gmjY_Hc=',
  };

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Cool looking table",
                amount: {
                  currency_code: "USD",
                  value: 77.77,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);

  return (
    <div>
      <h1>
        {product.description} for ${product.price}
      </h1>
      <img alt={product.description} src={product.image} width="200" />
      <div ref={paypal}></div>
    </div>
  );
}