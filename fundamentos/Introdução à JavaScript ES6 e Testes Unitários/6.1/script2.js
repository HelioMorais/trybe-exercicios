const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
        street: 'Rua das Flores',
        number: '389',
        apartment: '701',
    },
    order: {
        pizza: {
            marguerita: {
                amount: 1,
                price: 25,
            },
            pepperoni: {
                amount: 1,
                price: 20,
            },
        },
        drinks: {
            coke: {
                type: 'Coca-Cola Zero',
                price: 10,
                amount: 1,
            },
        },
        delivery: {
            deliveryPerson: 'Ana Silveira',
            price: 5,
        },
    },
    payment: {
        total: 60,
    },
};

const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    const address = 'address';
    const deliveryPerson = order.order.delivery.deliveryPerson;
    const customerName = order['name'];
    const customerPhone = order['phoneNumber'];
    const street = order[address].street;
    const number = order[address].number;
    const apartment = order[address].apartment;

    console.log(`Olá ${deliveryPerson}, entrega para: ${customerName}, Telefone: ${customerPhone}, R. ${street} N° ${number}, Apt: ${apartment}`);


};

customerInfo(order);

const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    const newB = order.name = 'Helio Morais';
    const newValue = order.price = '50';
    const pizzas = Object.keys(order.order.pizza);
    const drinks = order.order.drinks.coke.type

    console.log(`Olá ${newB}, o total do seu pedido  de ${pizzas[0]}, ${pizzas[1]} e ${drinks} é de R$ ${newValue},00`);

};

orderModifier(order);