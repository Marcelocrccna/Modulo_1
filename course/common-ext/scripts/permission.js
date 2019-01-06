var permission = new function() {

  function setSession() {
    var current = new Date();
    var expires = new Date(current.getTime());
    expires.setDate(expires.getDate() + 1);
    document.cookie = "logincheck=" + current.getDate() + "; expires=" + expires.toUTCString() + "; path=/";
  }

  function checkSession(callback) {
    var value = document.cookie.replace(/(?:(?:^|.*;\s*)logincheck\s*\=\s*([^;]*).*$)|^.*$/, "$1") || null;
    if (value == (new Date()).getDate()) {
      callback(true);
      return;
    }
    callback(false);
  }

  function checkNetAcad(callback) {
    var url = "https://www.netacad.com/group/landing/learn?p_p_id=omni_WAR_omniportlet&p_p_lifecycle=2&p_p_state=maximized&_omni_WAR_omniportlet_action=crossDomainAuth&_omni_WAR_omniportlet_jspPage=%2Fteach%2Fcross_domain_auth.jsp";
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(event) {
      if (request.readyState == XMLHttpRequest.DONE) {
        callback(request.status == 200);
      }
    };
    request.withCredentials = "true";
    request.open("GET", url, true);
    request.send();
  }

  this.check = function(callback) {
    if (window.location.hostname == "static-course-assets.s3.amazonaws.com") {
      checkSession(function(success) {
        if (success) {
          callback(true);
        } else {
          checkNetAcad(function(success) {
            if (success) {
              setSession();
              callback(true);
            } else {
              callback(false);
            }
          });
        }
      });
    } else {
      callback(true);
    }
  };
  
}();
