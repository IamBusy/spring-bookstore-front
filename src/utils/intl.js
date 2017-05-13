/**
 * Created by william on 13/05/2017.
 */
import IntlMessageFormat from 'intl-messageformat';
import zh from '../locale/zh';
import en from '../locale/en';
const MESSAGES = { en, zh };
const LOCALE = 'zh';

class Intl {

  get(key, defaultMessage, options) {
    let msg = MESSAGES[LOCALE][key];
    if (msg == null) {
      if (defaultMessage != null) {
        return defaultMessage;
      }
      return key;
    }
    if (options) {
      msg = new IntlMessageFormat(msg, LOCALE);
      return msg.format(options);
    }
    return msg;

  }
}

export default new Intl();
