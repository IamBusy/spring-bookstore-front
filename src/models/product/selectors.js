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

