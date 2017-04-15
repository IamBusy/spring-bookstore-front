export function list(state, ownProps) {
  let products = (Object.values(state.cart.products));
  products.map( product => {
    product['key'] = product.id;
  });
  return products;
}
