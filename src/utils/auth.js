class auth{
  constructor(){
    this.token = null;
    this.expired_in = null;
    this.userCache = localStorage;
    this.cacheKey = 'authentication';
    this.getToken = this.getToken.bind(this);
    this.setToken = this.setToken.bind(this);

  }

  isLoggedIn(){
    return this.getToken()!=null;
  }

  setToken(t,exp){
    this.userCache[this.cacheKey] = JSON.stringify({
      token: t,
      expired_in: exp
    });

    this.token = t;
    this.expired_in = exp;

    return true;
  }

  getToken(){
    try {
      var now = (new Date()).valueOf();

      //this is the first time to access this service,
      // try to retire the token from cache
      if (this.expired_in == 0) {
        var obj = JSON.parse(this.userCache.getItem(this.cacheKey));
        if (obj && obj.expired_in > now) {
          this.token = obj.token;
          this.expired_in = obj.expired_in;
          return this.token;
        }
      } else {
        if (this.expired_in > now) {
          return this.token;
        }
      }
      return null;
    } catch (e) {
      return null
    }
  }
}


export default new auth();
