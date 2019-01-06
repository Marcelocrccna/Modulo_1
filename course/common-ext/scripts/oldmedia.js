(function() {

  var mediaTypeMap = {
    'ActivityCustom': 'animation',
    'ActivityDnDCheckReset': 'animation',
    'ActivityDnDSnapback': 'animation',
    'ActivityDnDSnapbackWithMA': 'animation',
    'ActivityLab': 'handsonlab',
    'ActivityMCMA': 'animation',
    'ActivityMCSA': 'animation',
    'ActivityMCSACheckbox': 'animation',
    'ActivityPKA': 'pka',
    'ActivityPKT': 'pka',
    'ActivityPopup': 'activity',
    'AnimationDual': 'animation',
    'AnimationFullScreen': 'animation',
    'AnimationPartialScreen': 'animation',
    'AnimationStepped': 'animation',
    'Captivate': 'animation',
    'ChapterIntroduction': 'animation',
    'ChapterQuiz': 'quiz',
    'ChapterSummary': 'animation',
    'InteractiveGraphicHotspots': 'animation',
    'InteractiveGraphicRollovers': 'animation',
    'Photozoom': 'animation',
    'SlideShow': 'animation',
    'StaticGraphic': 'animation',
    'Video': 'video'
  };

  function loadMedia(mediaref, externalref, mediatyperef) {
    var url = '../../../media/theme/swf/mediaplayer.swf';
    if (mediatyperef == 'video') {
      url = '../../../media/theme/swf/flvplayer.swf';
    }
    var id = 'flashContent';
    var flashvars = {
      mediaref: '../course/export/' + mediaref,
      externalref: '../course/export/' + externalref,
      mediatyperef: mediatyperef
    };
    var params = {
      base: '../../../media/theme/',
      menu: 'false',
      wmode: 'transparent'
    };
    var attributes = {
      id: 'flashObject'
    };
    swfobject.embedSWF(url, id, '100%', '100%', '9.0.0', false, flashvars, params, attributes);
  }

  window.addEventListener('DOMContentLoaded', function() {
    if (typeof mediaFile !== 'undefined') {
      var request = new XMLHttpRequest();
      request.open("GET", '../../../media/course/export/' + mediaFile, true);
      request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
          var doc = request.responseXML;
          var node = doc.firstChild;
          if (node && node.nodeName == 'content-media') {
            var type = mediaTypeMap[node.getAttribute('type')];
            var child = node.firstChild;
            while (child) {
              if (child.nodeName == 'media') {
                var media = child.getAttribute('ref');
                var external = child.getAttribute('external');
                loadMedia(media, external, type);
              }
              child = child.nextSibling;
            }
          }
        }
      };
      request.send();
    }
  });

})();

function openActivity(ref, path) {
  var url = ref.replace(/^\.\.\/\.\.\/\.\./, '$&/media/');
  url += '?path' + path;
  var name = 'eawin';
  var features = [
    'resizable',
    'width=800',
    'height=470'
  ];
  var win = window.open(url, name, features);
  win.focus();
}

function openDocument(ref) {
  var url = ref.replace(/^\.\.\/\.\.\/\.\./, '$&/media/');
  var name = 'docwin';
  var win = window.open(url, name);
  win.focus();
}

function openPT(ref) {
  var url = ref.replace(/^\.\.\/\.\.\/\.\./, '$&/media/');
  var name = 'ptwin';
  var win = window.open(url, name);
  win.focus();
}

function openQuiz(ref, path) {
  var url = '../../../media/theme/' + ref;
  url += '?path=' + path.replace(/^\.\.\/\.\.\/\.\./, '..');
  var name = 'quizwin';
  var features = [
    'resizable',
    'width=740',
    'height=460'
  ];
  var win = window.open(url, name, features);
  win.focus();
}
