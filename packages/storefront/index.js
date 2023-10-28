import Client from 'shopify-buy';

const client = Client.buildClient({
    domain: "electrumaudio.myshopify.com",
    storefrontAccessToken: "0bfee0170275f73ab00b97242369e4b7",
});

const getProduct = async ({handle, ID}) => {
    if (handle) {
        return client.product.fetchByHandle(handle);
    }
    if (ID) {
        return client.product.fetch(ID);
    }
    return new Error("please include a 'handle' or 'ID'");
};

export { getProduct };