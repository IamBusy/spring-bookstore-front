/**
 * Created by william on 04/04/2017.
 */
export function itemSelector(state, ownProps) {
  const id = ownProps.params.id;
  const product = state.product.itemsById[id];

  return {
    product,
    itemsById: state.product.itemsById,
  };
}

export function recommendationSelector(state, ownProps) {
  return state.product.recommend.slice(0,6);
}

export function paginationInfo(state, ownProps){
  return { 
    currentPage: state.product.currentPage + 1,
    itemsPerPage: state.product.itemsPerPage,
    total: state.product.products.length
  }
}

export function paginationProducts(state, ownProps){
  let currentPage = state.product.currentPage;
  let itemsPerPage = state.product.itemsPerPage;
  let limit = Math.min((currentPage+1)*itemsPerPage,state.product.products.length);
  return state.product.products.slice(currentPage*itemsPerPage,limit);
}

