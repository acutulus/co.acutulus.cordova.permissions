window.permissionsPlugin = {
  mic: function(cb) {
    window.permissionsPlugin.runCordova('microphone', cb);
  },
  camera: function(cb) {
    window.permissionsPlugin.runCordova('camera', cb);
  },
  checkCamera: function(cb) {
    window.permissionsPlugin.runCordova('checkCamera', cb);
  },
  checkMic: function(cb) {
    window.permissionsPlugin.runCordova('checkMicrophone', cb);
  },
  runCordova: function(name, cb) {
    var success = function() {
      if (cb) cb(true);
    }
    var failure = function() {
      if (cb) cb(false);
    }
    Cordova.exec(success, failure, 'PermissionsPlugin', name, []);
  }
};