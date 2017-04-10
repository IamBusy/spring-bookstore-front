/**
 * Created by william on 04/04/2017.
 */
import request from '../utils/request';

export function fetchByCategory(categoryId) {
  return request.get(`/categories/${categoryId}/products`);
}

export function fetchBySearch(key, limit, offset) {
  return request.get(`/search/${key}`,{
    limit: limit,
    offset: offset
  });
}

export function fetchById(id) {
  return request.get(`/products/${id}`);
}

export function fetchRecommendation() {
  return request.get(`/recommendation`);
}
