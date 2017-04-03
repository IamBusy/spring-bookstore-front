class auth{
  constructor(){
    this.token = null;
    this.expired_in = null;
    this.userCache = localStorage;
    this.cacheKey = 'authentication';
    this.getToken = this.getToken.bind(this);

  }

  isLoggedIn(){
    return this.getToken()!=null;
  }

  setToken(t,exp){
    userCache[cacheKey] = JSON.stringify({
      token: t,
      expired_in: exp
    });

    token = t;
    expired_in = exp;

    return true;
  }

  getToken(){
    try {
      var now = (new Date()).valueOf();

      //this is the first time to access this service,
      // try to retire the token from cache
      if (expired_in == 0) {
        var obj = JSON.parse(userCache.getItem(cacheKey));
        if (obj && obj.expired_in > now) {
          token = obj.token;
          expired_in = obj.expired_in;
          return token;
        }
      } else {
        if (expired_in > now) {
          return token;
        }
      }
      return null;
    } catch (e) {
      return null
    }
  }
}


export default new auth();
