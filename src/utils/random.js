/**
 * Created by william on 15/04/2017.
 */

/**
 * @param min
 * @param max
 * @returns {*}
 * 返回min-max之间随机整数
 */
export function random(min,max) {
  return Math.round(Math.random()*(max-min))+min;
}

/**
 * @param targets
 * @param quantity
 * @returns {*}
 * 返回从targets数组中随机取得quantity个元素数组
 */
export function randomItem(targets,quantity) {
  if(targets.length <= quantity) {
    return targets;
  }

  let result = [];
  let possiblity = quantity/targets.length;
  targets.map( target => {
    if(Math.random()<possiblity){
      result.push(target);
    }
  });
  return result;
}
