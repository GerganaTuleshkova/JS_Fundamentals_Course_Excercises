function fillStorage(input) {
    let storage = new Map()

    for (let element of input) {
        let [product, quantity] = element.split(' ');
        quantity = Number(quantity);
        if (storage.has(product)) {
            let currentQuantity = storage.get(product);
            let newQuantity = currentQuantity + quantity;
            storage.set(product, newQuantity);
        }
        else {
            storage.set(product, quantity);
        }
    }

    for (let [product, totalQuantity] of storage.entries()) {
        console.log(`${product} -> ${totalQuantity} `);
    }
}

fillStorage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
);

fillStorage(['apple 50',
'apple 61',
'coffee 115',
'coffee 40']
);