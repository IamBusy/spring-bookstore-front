/**
 * Created by william on 13/04/2017.
 */
export function selectCreateInfo(state, ownProps) {
  return {
    isCreating: state.isCreating,
  }
}

export function paginationInfo(state, ownProps){
  return {
    currentPage: state.order.currentPage + 1,
    itemsPerPage: state.order.itemsPerPage,
    total: state.order.lists.length
  }
}

export function paginationOrders(state, ownProps){
  let currentPage = state.order.currentPage;
  let itemsPerPage = state.order.itemsPerPage;
  let limit = Math.min((currentPage+1)*itemsPerPage,state.order.lists.length);
  return state.order.lists.slice(currentPage*itemsPerPage,limit);
}
