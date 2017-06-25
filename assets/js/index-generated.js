(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

module.exports = (function (window, document, undefined) {
  "use strict";

  function setCookie(name, value, expires) {
    if (typeof expires === 'number') {
      var d = new Date();
      d.setTime(d.getTime() + expires * 24 * 60 * 60 * 1000);
      var expires = "expires=" + d.toUTCString();
      document.cookie = name + "=" + value + "; " + expires + "; path=/";
    } else {
      document.cookie = name + "=" + value + "; path=/";
    }
  }

  function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
  }

  return {
    setCookie: setCookie,
    getCookie: getCookie
  };
})(window, document);

},{}],2:[function(require,module,exports){
// check the value of the css :before psuedo element
// values look for "true" or "false"

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = function ($el) {
  var value = "true";
  try {
    value = window.getComputedStyle($el[0], ':before').getPropertyValue('content').replace(/\"/g, '');
  } catch (err) {}
  return value === "false" ? false : true;
};

module.exports = exports['default'];

},{}],3:[function(require,module,exports){
'use strict';

module.exports = function (name) {
    if (Handlebars.templates === undefined || Handlebars.templates[name] === undefined) {
        $.ajax({
            url: themePath + '/js/templates/' + name + '.html',
            success: function success(data) {
                if (Handlebars.templates === undefined) {
                    Handlebars.templates = {};
                }
                Handlebars.templates[name] = Handlebars.compile(data);
            },
            async: false
        });
    }
    return Handlebars.templates[name];
};

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _helpersCssControlCodeJs = require("../helpers/cssControlCode.js");

var _helpersCssControlCodeJs2 = _interopRequireDefault(_helpersCssControlCodeJs);

exports['default'] = (function (window, document, $, undefined) {
  var $el = undefined,
      $elParent = undefined,
      elHeight = undefined,
      elWidth = undefined,
      lowerLimit = undefined,
      upperLimit = undefined,
      debounceTimer = undefined,
      runCode = false;

  function init(element) {
    $el = element;
    $elParent = $el.parent().css('position') === 'relative' ? $el.parent() : $el.parent().offsetParent();

    // default assumption as to where the screen will load
    $el.attr('data-sticky', 'top');

    updateData();

    // update variables one more time to catch any post page load changes
    window.setTimeout(function () {
      updateData();
    }, 1000);

    $(window).resize(function () {
      updateData();
      setPosition();
    });

    // toggle the sticky positioning
    $(window).scroll(function () {
      setPosition();
    });
  }

  function updateData() {
    var newRunCode = (0, _helpersCssControlCodeJs2['default'])($el);

    if (runCode && !newRunCode) {
      $el.removeAttr('style');
    }

    runCode = newRunCode;

    if (!runCode) {
      return;
    }

    runCode = newRunCode;
    elHeight = $el.height();
    elWidth = $elParent.width();
    upperLimit = $elParent.offset().top;
    lowerLimit = upperLimit + $elParent.outerHeight(true) - $el.height();

    $el.width(elWidth);
  }

  function setPosition() {
    if (!runCode) {
      $el.attr('data-sticky', 'top');
      return false;
    }

    var windowTop = $(window).scrollTop(),
        attr = $el.attr('data-sticky'),
        top = attr !== 'top' && windowTop <= upperLimit,
        middle = attr !== 'middle' && windowTop < lowerLimit && windowTop > upperLimit,
        bottom = attr !== 'bottom' && windowTop >= lowerLimit;

    if (top) {
      $el.attr('data-sticky', 'top');
    } else if (middle) {
      $el.attr('data-sticky', 'middle');
    } else if (bottom) {
      $el.attr('data-sticky', 'bottom');
    }
  }

  return { init: init };
})(window, document, jQuery);

;
module.exports = exports['default'];

},{"../helpers/cssControlCode.js":2}],5:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _modulesAccordionsJs = require("./modules/accordions.js");

var _modulesAccordionsJs2 = _interopRequireDefault(_modulesAccordionsJs);

var _modulesGoogleMapJs = require("./modules/googleMap.js");

var _modulesGoogleMapJs2 = _interopRequireDefault(_modulesGoogleMapJs);

var _modulesBack2topJs = require("./modules/back2top.js");

var _modulesBack2topJs2 = _interopRequireDefault(_modulesBack2topJs);

var _modulesBannerCarouselJs = require("./modules/bannerCarousel.js");

var _modulesBannerCarouselJs2 = _interopRequireDefault(_modulesBannerCarouselJs);

var _modulesClickableJs = require("./modules/clickable.js");

var _modulesClickableJs2 = _interopRequireDefault(_modulesClickableJs);

var _modulesDropdownJs = require("./modules/dropdown.js");

var _modulesDropdownJs2 = _interopRequireDefault(_modulesDropdownJs);

var _modulesEmergencyAlertsJs = require("./modules/emergencyAlerts.js");

var _modulesEmergencyAlertsJs2 = _interopRequireDefault(_modulesEmergencyAlertsJs);

var _modulesFormValidationJs = require("./modules/formValidation.js");

var _modulesFormValidationJs2 = _interopRequireDefault(_modulesFormValidationJs);

var _modulesHideAlertJs = require("./modules/hideAlert.js");

var _modulesHideAlertJs2 = _interopRequireDefault(_modulesHideAlertJs);

var _modulesKeywordSearchJs = require("./modules/keywordSearch.js");

var _modulesKeywordSearchJs2 = _interopRequireDefault(_modulesKeywordSearchJs);

var _modulesLocationListingJs = require("./modules/locationListing.js");

var _modulesLocationListingJs2 = _interopRequireDefault(_modulesLocationListingJs);

var _modulesMainNavJs = require("./modules/mainNav.js");

var _modulesMainNavJs2 = _interopRequireDefault(_modulesMainNavJs);

var _modulesMainNavPilotJs = require("./modules/mainNavPilot.js");

var _modulesMainNavPilotJs2 = _interopRequireDefault(_modulesMainNavPilotJs);

var _modulesMobileNavJs = require("./modules/mobileNav.js");

var _modulesMobileNavJs2 = _interopRequireDefault(_modulesMobileNavJs);

var _modulesResponsiveVideoJs = require("./modules/responsiveVideo.js");

var _modulesResponsiveVideoJs2 = _interopRequireDefault(_modulesResponsiveVideoJs);

var _modulesRichTextJs = require("./modules/richText.js");

var _modulesRichTextJs2 = _interopRequireDefault(_modulesRichTextJs);

var _modulesScrollAnchorsJs = require("./modules/scrollAnchors.js");

var _modulesScrollAnchorsJs2 = _interopRequireDefault(_modulesScrollAnchorsJs);

var _modulesUtilNavJs = require("./modules/utilNav.js");

var _modulesUtilNavJs2 = _interopRequireDefault(_modulesUtilNavJs);

},{"./modules/accordions.js":6,"./modules/back2top.js":7,"./modules/bannerCarousel.js":8,"./modules/clickable.js":9,"./modules/dropdown.js":10,"./modules/emergencyAlerts.js":11,"./modules/formValidation.js":12,"./modules/googleMap.js":13,"./modules/hideAlert.js":14,"./modules/keywordSearch.js":15,"./modules/locationListing.js":16,"./modules/mainNav.js":17,"./modules/mainNavPilot.js":18,"./modules/mobileNav.js":19,"./modules/responsiveVideo.js":20,"./modules/richText.js":21,"./modules/scrollAnchors.js":22,"./modules/utilNav.js":23}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _helpersCssControlCodeJs = require("../helpers/cssControlCode.js");

var _helpersCssControlCodeJs2 = _interopRequireDefault(_helpersCssControlCodeJs);

exports['default'] = (function (window, document, $, undefined) {

  $('.js-accordion').each(function () {
    var $el = $(this),
        $link = $el.find('.js-accordion-link'),
        $content = $el.find('.js-accordion-content'),
        active = (0, _helpersCssControlCodeJs2['default'])($el);

    $link.on('click', function (e) {
      if (active) {
        e.preventDefault();
        if ($el.hasClass('is-open')) {
          $content.stop(true, true).slideUp();
        } else {
          $content.stop(true, true).slideDown();
        }
        $el.toggleClass('is-open');
      }
    });

    $(window).resize(function () {
      var temp = (0, _helpersCssControlCodeJs2['default'])($el);

      if (temp !== active && !temp) {
        $content.removeAttr('style');
        $el.removeClass('is-open');
      }

      active = temp;
    }).resize();
  });
})(window, document, jQuery);

;
module.exports = exports['default'];

},{"../helpers/cssControlCode.js":2}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = (function (window, document, $, undefined) {
  var $footer = $('.js-footer'),
      visibleThreshold = 250,
      staticThreshold = 50;

  $(".js-back2top").each(function () {
    var $el = $(this);

    $el.on('click', function (e) {
      e.preventDefault();
      try {
        $("html, body").stop(true, true).animate({ scrollTop: 0 }, '750');
      } catch (e) {
        $('body').scrollTop(0);
      }
      // Bring keyboard focus back to top as well.
      $("#main-content").focus();
      return false;
    });

    $(window).on('scroll', function () {
      // if we've exceeded the threshold of scrolling
      // from the top, show control
      var scrollTop = $(window).scrollTop();

      if (scrollTop > visibleThreshold) {
        $el.removeClass('is-hidden');
      } else {
        $el.addClass('is-hidden');
      }
    });
  });
})(window, document, jQuery);

;
module.exports = exports['default'];

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = (function (window, document, $, undefined) {

  $('.js-banner-carousel').each(function () {
    var $el = $(this);

    if ($el.children().length <= 1) {
      return;
    }

    var slider = $el.slick({
      dots: true,
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>'
    });
  });
})(window, document, jQuery);

;
module.exports = exports['default'];

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = (function (window, document, $, undefined) {
  $('.js-clickable').each(function () {
    // if the this is clicked
    $(this).click(function (event) {
      event.preventDefault();

      var $el = $(this).find('.js-clickable-link').first();
      // find the destination
      var dest = $el.attr("href");
      // if the target attribute exists
      if ("_blank" === $el.attr("target")) {
        // launch new tab/window
        window.open(dest);
      } else {
        // otherwise redirect to a new page
        window.location = dest;
      }
    });
  });
})(window, document, jQuery);

;
module.exports = exports['default'];

},{}],10:[function(require,module,exports){
// ****** basic custom select that uses mobile select keyboard ******
"use strict";

var dropdownMenu = document.querySelectorAll(".js-dropdown");

if (null !== dropdownMenu) {

  var _length = dropdownMenu.length;

  var _loop = function (i) {
    var parentEl = dropdownMenu[i],
        selectEl = parentEl.querySelector(".js-dropdown-select"),
        link = parentEl.querySelector(".js-dropdown-link");

    if (null === selectEl || null === link) {
      return "break";
    }

    selectEl.onchange = function () {
      var elem = typeof this.selectedIndex === "undefined" ? window.event.srcElement : this;
      link.innerText = elem.text || elem.options[elem.selectedIndex].text;
    };
  };

  for (var i = 0; i < _length; i++) {
    var _ret = _loop(i);

    if (_ret === "break") break;
  }
}

},{}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _helpersCookiesJs = require("../helpers/cookies.js");

var _helpersCookiesJs2 = _interopRequireDefault(_helpersCookiesJs);

exports['default'] = (function (window, document, $, undefined) {

  $('.js-emergency-alerts').each(function () {
    var $el = $(this),
        open = true,
        id = $el.data('id'),
        cookieName = 'emergency-alerts' + id,
        cookieValue = _helpersCookiesJs2['default'].getCookie(cookieName);

    if (typeof cookieValue != 'undefined' && cookieValue === 'false') {
      // cookieValue is a string so we can't use the value directly
      open = false;
    }
    if (open) {
      // expand the menu
      $el.find('.js-accordion-link').trigger('click');
    }

    $el.on('click', '.js-accordion-link', function () {
      // toggle the current state
      open = !open;
      // update open/close state cookie
      // leave off third argument to make it expire on session
      _helpersCookiesJs2['default'].setCookie(cookieName, open);
    });
  });
})(window, document, jQuery);

;
module.exports = exports['default'];

},{"../helpers/cookies.js":1}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = (function (window, document, $, undefined) {

  $('form').each(function () {
    var $form = $(this),
        requiredFields = [];

    // find all required fields
    $('.js-is-required').each(function () {
      var $field = $(this),
          type = $field.data('type'),
          value = $field.val(),
          valid = validate(value, type);

      requiredFields.push({ type: type, valid: valid, $el: $field });

      $(this).data('index', requiredFields.length);
    });

    // if there aren't any required fields, don't do anything
    if (requiredFields.length === 0) {
      return;
    }

    $form.on('submit', function (e) {
      var submitForm = true;

      // validate each required field
      requiredFields.forEach(function (item) {
        var value = item.$el.val();

        item.valid = validate(value, item.type);

        if (item.valid) {
          item.$el.attr('data-valid', 'is-valid');
        } else {
          submitForm = false;
          item.$el.attr('data-valid', 'is-invalid');
        }
      });

      if (!submitForm) {
        // prevent the form from submitting
        e.preventDefault();
        // show the form error message
        // or blink the message if it is already visible
        $form.find('.js-error-msg').attr('hidden', true);
        setTimeout(function () {
          $form.find('.js-error-msg').removeAttr('hidden');
        }, 100);
      }
    });
  });

  function validate(value) {
    var type = arguments.length <= 1 || arguments[1] === undefined ? 'text' : arguments[1];

    var valid = false;

    switch (type) {
      case 'email':
        valid = !!value.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]+/i);
        break;
      default:
        valid = value.length !== 0;
    }

    return valid;
  }
})(window, document, jQuery);

;
module.exports = exports['default'];

},{}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _helpersGetHandlebarTemplateJs = require("../helpers/getHandlebarTemplate.js");

var _helpersGetHandlebarTemplateJs2 = _interopRequireDefault(_helpersGetHandlebarTemplateJs);

exports['default'] = (function (window, document, $, undefined) {

  // only run this code if there is a google map component on the page
  if (!$('.js-google-map').length || typeof googleMapData === 'undefined') {
    return;
  }

  var compiledTemplate = (0, _helpersGetHandlebarTemplateJs2['default'])('googleMapInfo');

  // after the api is loaded this function is called
  window.initMap = function () {

    $(".js-google-map").each(function (i) {
      var $el = $(this);

      // get the maps data
      // this could be replaced with an api
      var rawData = googleMapData[i];

      // *** Create the Map *** //
      // map defaults
      var initMapData = {
        scrollwheel: false
      };
      // create map Data by combining the rawData with the defaults
      var mapData = Object.assign({}, rawData.map, initMapData);

      var map = new google.maps.Map(this, mapData);

      var markers = [];

      // *** Add Markers with popups *** //
      rawData.markers.forEach(function (d, i) {
        var markerData = Object.assign({ map: map }, d);

        var marker = new google.maps.Marker(markerData);

        var infoData = infoTransform(markerData.infoWindow);
        var template = compiledTemplate(infoData);
        var infoWindow = new google.maps.InfoWindow({
          content: template
        });

        marker.addListener('click', function () {
          infoWindow.open(map, marker);
        });

        marker.showInfo = function () {
          infoWindow.open(map, marker);
        };

        markers.push(marker);
      });

      // listen for recenter command
      $el.on("recenter", function (event, markerIndex) {
        if (typeof markers[markerIndex] === "undefined") {
          return false;
        }
        map.setCenter(markers[markerIndex].getPosition());
        markers[markerIndex].showInfo();
      });
    });
  };

  function infoTransform(data) {
    var infoData = {
      phoneFormatted: formatPhone(data.phone),
      faxFormatted: formatPhone(data.fax)
    };
    return Object.assign({}, data, infoData);
  }

  function formatPhone(phone) {
    var phoneTemp = phone[0] === '1' ? phone.substring(1) : phone;
    return phoneTemp.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
  }

  // load Google's api
  var script = document.createElement('script');
  script.src = "//maps.googleapis.com/maps/api/js?key=AIzaSyC-WIoNfS6fh7TOtOqpDEgKST-W_NBebTk&callback=initMap";
  document.getElementsByTagName('head')[0].appendChild(script);
})(window, document, jQuery);

;
module.exports = exports['default'];

},{"../helpers/getHandlebarTemplate.js":3}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _helpersCookiesJs = require("../helpers/cookies.js");

var _helpersCookiesJs2 = _interopRequireDefault(_helpersCookiesJs);

exports['default'] = (function (window, document, $, undefined) {

  $('.js-header-alert').each(function () {
    var $el = $(this),
        $link = $el.find('.js-header-alert-link'),
        id = $el.data('id'),
        cookieName = "Alert" + id,
        cookieExpires = 365,
        cookieValue = _helpersCookiesJs2['default'].getCookie(cookieName);

    // show alert if cookie doesn't exist
    if (cookieValue !== "hide") {
      $el.fadeIn().fadeOut('fast').fadeIn('slow');
    }

    // hide the alert
    $link.on('click', function () {
      _helpersCookiesJs2['default'].setCookie(cookieName, "hide", cookieExpires);
      $el.stop(true, true).fadeOut();
    });
  });
})(window, document, jQuery);

;
module.exports = exports['default'];

},{"../helpers/cookies.js":1}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = (function (window, document, $, undefined) {

  $('.js-keyword-search').each(function () {
    var $el = $(this),
        $form = $el.find('form');

    $form.on('submit', function (e) {
      e.preventDefault();
      $el.addClass('is-dirty');
    });

    $form.on('reset', function () {
      $el.removeClass('is-dirty');
    });
  });
})(window, document, jQuery);

;
module.exports = exports['default'];

},{}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _helpersStickyJs = require("../helpers/sticky.js");

var _helpersStickyJs2 = _interopRequireDefault(_helpersStickyJs);

exports['default'] = (function (window, document, $, undefined) {

  $('.js-location-listing').each(function () {
    var $el = $(this),
        $map = $el.find('.js-location-listing-map');

    _helpersStickyJs2['default'].init($map);

    // find the location link
    $el.find('.js-location-listing-link').each(function (index) {
      var $link = $(this);

      $link.on('click', function (e) {
        e.preventDefault();
        // when link is clicked
        // trigger map to recenter on this item based on it's index.
        var $map = $el.find('.js-google-map'),
            position = $map.offset().top;

        $map.trigger('recenter', index);
        // focus on the map
        $("html,body").stop(true, true).animate({ scrollTop: position }, '750');
      });
    });
  });
})(window, document, jQuery);

;
module.exports = exports['default'];

},{"../helpers/sticky.js":4}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = (function (window, document, $, undefined) {

  var windowWidth = window.innerWidth;

  $(window).resize(function () {
    windowWidth = window.innerWidth;
  });

  $('.js-main-nav').each(function () {
    var openClass = "is-open",
        closeClass = "is-closed",
        submenuClass = "show-submenu",
        $parent = $(this),
        $mainNavToggle = $parent.find('.js-main-nav-toggle'),
        $mainNavItems = $parent.find('.js-main-nav-toggle, .js-main-nav-top-link'),
        previousKey = null,
        breakpoint = 800; // matches CSS breakpoint for Main Nav

    $mainNavItems.on('keydown', function (e) {
      if (windowWidth <= breakpoint) {
        // only for desktop
        return;
      }

      // Grab all the DOM info we need...
      var $link = $(this),
          $topLevelLinks = $parent.find('.ma__main-nav__top-link'),
          open = $link.hasClass(openClass),
          $openContent = $parent.find('.js-main-nav-content.' + openClass),
          $focusedElement = $(document.activeElement),

      // relevant if open..
      $topLevelItem = $focusedElement.parents('.ma__main-nav__item'),
          $topLevelLink = $topLevelItem.find('.ma__main-nav__top-link'),
          $dropdownLinks = $link.find('.ma__main-nav__subitem .ma__main-nav__link'),
          focusIndexInDropdown = $dropdownLinks.index($focusedElement),
          isShift = !!e.shiftKey; // typecast to boolean

      // down arrow or tab key
      if (e.keyCode === 40 || e.keyCode === 9 && !isShift) {
        // hide content
        // If menubar focus
        //  - Open pull down menu and select first menu item
        //
        // If dropdown focus
        //  - Select next menu item
        e.preventDefault();
        if (open) {
          if (focusIndexInDropdown === $dropdownLinks.length - 1) {
            return;
          } else {
            if (focusIndexInDropdown === -1) {
              $dropdownLinks[1].focus();
            } else {
              $dropdownLinks[focusIndexInDropdown + 1].focus();
            }
            return;
          }
        } else {
          show($topLevelItem.find('.js-main-nav-content'));
          $topLevelLink.attr('aria-expanded', 'true');
          $link.addClass(openClass);
          if ($dropdownLinks[1]) {
            $dropdownLinks[1].focus();
          }
          return;
        }
      }

      // up arrow or shift+tab keys
      if (e.keyCode === 38 || e.keyCode === 9 && isShift) {
        // hide content
        // If menubar focus
        //  - Open pull down menu and select first menu item
        //
        // If dropdown focus
        //  - Select previous menu item
        e.preventDefault();
        if (open) {
          if (focusIndexInDropdown <= 1) {
            // not 0 bc of hidden first link
            hide($openContent);
            $topLevelLink.focus().attr('aria-expanded', 'false');
            return;
          } else {
            $dropdownLinks[focusIndexInDropdown - 1].focus();
            return;
          }
        } else {
          show($topLevelItem.find('.js-main-nav-content'));
          $topLevelLink.focus().attr('aria-expanded', 'true');
          $link.addClass(openClass);
          return;
        }
      }

      // esc key
      if (e.keyCode === 27) {
        // Close menu and return focus to menubar
        e.preventDefault();
        hide($openContent);
        $link.removeClass(openClass);
        $topLevelLink.focus().attr('aria-expanded', 'false');
        return;
      }

      // left arrow key
      if (e.keyCode === 37) {
        e.preventDefault();
        // hide content
        // If menubar focus
        //  - Previous menubar item
        //
        // If dropdown focus
        //  - Open previous pull down menu and select first item
        hide($openContent);
        $topLevelLink.attr('aria-expanded', 'false');
        var index = $topLevelLinks.index($topLevelLink) - 1;
        if ($topLevelLinks[index]) {
          $topLevelLinks[index].focus();
        }
        return;
      }
      // right arrow key
      if (e.keyCode === 39) {
        e.preventDefault();
        // hide content
        // If menubar focus
        //  - Next menubar item
        //
        // If dropdown focus
        //  - Open next pull menu and select first item
        hide($openContent);
        $topLevelLink.attr('aria-expanded', 'false');
        var index = $topLevelLinks.index($topLevelLink) + 1;
        if ($topLevelLinks[index]) {
          $topLevelLinks[index].focus();
        }
        return;
      }

      // key code 9 is the tab key
      if (open || typeof e.keycode !== "undefined" && e.keycode !== 9) {
        return;
      }
    });
    $mainNavItems.on('mouseenter', function (e) {
      $(this).children('button').attr("aria-expanded", "true");

      if (windowWidth > breakpoint) {
        var $openContent = $(this).find('.js-main-nav-content');
        show($openContent);
      }
    });
    $mainNavItems.on('mouseleave', function (e) {
      $(this).children('button').attr("aria-expanded", "false");

      if (windowWidth > breakpoint) {
        var $openContent = $(this).find('.js-main-nav-content');
        hide($openContent);
      }
    });
    $mainNavToggle.children('button, a').on('click', function (e) {
      var $el = $(this);
      var $elParent = $(this).parent();
      var $content = $elParent.find('.js-main-nav-content');
      var $openContent = $parent.find('.js-main-nav-content.' + openClass);
      var isOpen = $content.hasClass(openClass);

      // mobile
      if (windowWidth <= breakpoint) {
        e.preventDefault();
        // add open class to this item
        $elParent.addClass(openClass);
        show($content);
        $el.attr('aria-expanded', 'true');
      } else {
        hide($openContent);
        $el.attr('aria-expanded', 'false');

        if (!isOpen) {
          show($content);
          $el.attr('aria-expanded', 'true');
        }
      }
    });
    $mainNavToggle.last().find('.js-main-nav-content li').last().find('a').on('keydown', function (e) {
      e.stopPropagation();
      // previous key was not a shift
      if (e.keyCode === 9 && previousKey !== 16) {
        // tab arrow\
        var $openContent = $parent.find('.js-main-nav-content.' + openClass);
        hide($openContent);
      }
      previousKey = e.keyCode;
    });

    $('.js-close-sub-nav').on('click', function () {
      var $openContent = $parent.find('.js-main-nav-content.' + openClass);
      hide($openContent);
    });

    // Hide any open submenu content when the sidebar menu is closed
    $('.js-header-menu-button').click(function () {
      var $openContent = $parent.find('.js-main-nav-content.' + openClass);
      hide($openContent);
    });

    function hide($content) {
      $('body').removeClass(submenuClass);
      $parent.find("." + openClass).removeClass(openClass);

      if (windowWidth <= breakpoint) {
        $content.addClass(closeClass);
      } else {
        $content.stop(true, true).slideUp('fast', function () {
          $content.addClass(closeClass).slideDown(0);
        });
      }
    }

    function show($content) {
      $('body').addClass(submenuClass);
      if (windowWidth <= breakpoint) {
        $content.addClass(openClass).removeClass(closeClass);
      } else {
        $content.stop(true, true).delay(200).slideUp(0, function () {
          $content.addClass(openClass).removeClass(closeClass).slideDown('fast');
        });
      }
    }
  });
})(window, document, jQuery);

;
module.exports = exports["default"];

},{}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = (function (window, document, $, undefined) {

  $('.js-main-nav').each(function () {
    var $parent = $(this),
        $mainNavToggle = $parent.find('.js-main-nav-toggle');

    // make root top-level links inert for pilot
    $mainNavToggle.children('a').on('click', function (e) {
      e.preventDefault();
    });

    // Ensure top-level links that are potential anchor links close the sidebar on mobile
    $parent.find('.js-main-nav-top-link').find('a').on('click', function () {
      $('.js-header-menu-button').trigger('click');
    });
  });
})(window, document, jQuery);

;
module.exports = exports['default'];

},{}],19:[function(require,module,exports){
// ****** Menu button ******
"use strict";

var menuButton = document.querySelector(".js-header-menu-button");

if (null !== menuButton) {
  menuButton.addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector("body").classList.toggle("show-menu");
  });
}

// ****** Main Header Search button on mobile should open the mobile menu  ******
var searchForm = document.querySelector(".js-header-search-menu .js-header-search-form");

if (null !== searchForm) {
  searchForm.addEventListener("submit", function (event) {
    if (window.innerWidth > 620) {
      return;
    }
    event.preventDefault();
    document.querySelector("body").classList.toggle("show-menu");
  });
}

},{}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = (function (window, document, $, undefined) {

  $('.js-ma-responsive-video').fitVids();
})(window, document, jQuery);

;
module.exports = exports['default'];

},{}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = (function (window, document, $, undefined) {

  $('.js-ma-rich-text table').wrap("<div class='ma__rich-text__table-wrapper'></div>");

  // get the external SVG link code
  fetch(themePath + '/images/svg-icons/arrow.svg', {
    method: 'get',
    headers: new Headers({
      'Content-Type': 'text/plain'
    })
  }).then(function (response) {
    return response.text();
  }).then(function (data) {
    // find all external links that need an icon
    $('.js-ma-rich-text a').each(function () {
      var $el = $(this);

      if ($el.children().length !== 0) {
        return false;
      }

      // wrap the link in a span tag
      $el.wrap('<span class="ma__decorative-link"></span>');
      // append the SVG to the link
      $el.append('&nbsp;' + data);
    });
  })['catch'](function (e) {
    console.error('failed to style rich text link');
  });
})(window, document, jQuery);

;
module.exports = exports['default'];

},{}],22:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _helpersCssControlCodeJs = require("../helpers/cssControlCode.js");

var _helpersCssControlCodeJs2 = _interopRequireDefault(_helpersCssControlCodeJs);

exports["default"] = (function (window, document, $, undefined) {

  $(".js-scroll-anchors").each(function () {
    var $el = $(this),
        $elParent = $el.parent().css('position') === 'relative' ? $el.parent() : $el.parent().offsetParent(),
        $links = $el.find('.js-scroll-anchors-link'),
        elHeight = undefined,
        headerBuffer = 0,
        lowerLimit = undefined,
        upperLimit = undefined,
        debounceTimer = undefined,
        activeClass = "is-active",
        activeAnchorIndex = 0,
        anchors = [],
        numAnchors = 0,
        isMobile = false,
        linkScrolling = false;

    setVariables();

    // default assumption as to where the screen will load
    $el.attr('data-sticky', 'top');

    // update variables one more time to catch any post page load changes
    window.setTimeout(function () {
      setVariables();
    }, 1000);

    $links.on('click', function (e) {
      e.preventDefault();

      // is the menu closed on mobile
      if (!$el.hasClass('is-open') && isMobile) {
        // just show the menu
        $el.addClass('is-open');
        return;
      }

      activeAnchorIndex = $(this).data('index');
      // find the location of the desired link and scroll the page
      var position = anchors[activeAnchorIndex].position;
      // close the menu
      $el.removeClass('is-open');
      // remove active flag from other links
      $el.find('.' + activeClass).removeClass(activeClass);
      // mark this link as active
      $(this).addClass(activeClass);
      // prevent the scroll event from updating active links
      linkScrolling = true;

      $("html,body").stop(true, true).animate({ scrollTop: position }, '750', function () {
        linkScrolling = false;
        // Get the link hash target so we can bring focus to it
        var hash = anchors[activeAnchorIndex].hash;
        // bring focus to the item we just scrolled to
        $(hash).focus();
      });
    });

    $el.find(".js-scroll-anchors-toggle").on('click', function () {
      $el.toggleClass('is-open');
    });

    // make the links sticky
    $(window).resize(function () {
      if (typeof debounceTimer === "number") {
        window.clearTimeout(debounceTimer);
      }
      debounceTimer = window.setTimeout(function () {
        setVariables();
        setPosition();
        activateLink();
      }, 300);
    });

    $(window).scroll(function () {
      setPosition();
      activateLink();
    });

    function setVariables() {
      var topOffset = 0;

      headerBuffer = 0;
      elHeight = $el.height();
      upperLimit = $elParent.offset().top;
      isMobile = (0, _helpersCssControlCodeJs2["default"])($el);

      if ($elParent[0].hasAttribute("style") && !isMobile) {
        $elParent.removeAttr('style');
      }

      if (isMobile) {
        headerBuffer = $('.js-sticky-header').height() || 0;
        upperLimit -= headerBuffer;
        topOffset = elHeight;
      }

      lowerLimit = upperLimit + $elParent.outerHeight(true) - $el.height();

      // locate the position of all of the anchor targets
      anchors = new Array();
      $links.each(function (i, e) {
        var $el = $(this),
            $link = $el.is('a') ? $el : $el.find('a'),
            hash = $link[0].hash,
            position = $(hash).offset() ? $(hash).offset().top - headerBuffer - topOffset : upperLimit;

        anchors[i] = { hash: hash, position: position };

        $el.data('index', i);
      });

      // record the number of anchors for performance
      numAnchors = anchors.length;
    }

    function setPosition() {
      var windowTop = $(window).scrollTop(),
          attr = $el.attr('data-sticky'),
          top = attr !== 'top' && windowTop <= upperLimit,
          middle = attr !== 'middle' && windowTop < lowerLimit && windowTop > upperLimit,
          bottom = attr !== 'bottom' && windowTop >= lowerLimit;

      if ($elParent[0].hasAttribute("style") && !isMobile) {
        $elParent.removeAttr('style');
      }

      if (!$elParent[0].hasAttribute("style") && isMobile && attr === 'middle') {
        $elParent.css({ 'paddingTop': elHeight });
      }

      if (top) {
        $el.attr('data-sticky', 'top');

        if (isMobile) {
          $elParent.removeAttr('style');
        }
      } else if (middle) {
        $el.attr('data-sticky', 'middle');

        if (isMobile) {
          $elParent.css({ 'paddingTop': elHeight });
        }
      } else if (bottom) {
        $el.attr('data-sticky', 'bottom');

        if (isMobile) {
          $elParent.removeAttr('style');
        }
      }
    }

    function activateLink() {
      // do we have more than one anchor
      if (numAnchors < 2 || linkScrolling) {
        return;
      }

      // get the current scroll position and offset by half the view port
      var windowTop = $(window).scrollTop() + window.innerHeight / 2,
          currentAnchor = activeAnchorIndex;

      // is there a prev target
      // and
      // is the current scroll position above the current target
      if (currentAnchor > 0 && windowTop < anchors[activeAnchorIndex].position) {
        // make the prev link active
        --activeAnchorIndex;
      }

      // is there a next target
      // and
      // is the current scroll position below the next target
      else if (currentAnchor < numAnchors - 1 && windowTop > anchors[activeAnchorIndex + 1].position) {
          // make the next link active
          ++activeAnchorIndex;
        }

      if (currentAnchor !== activeAnchorIndex) {
        // move the active flag
        $el.find('.' + activeClass).removeClass(activeClass);
        $links.eq(activeAnchorIndex).addClass(activeClass);
      }
    }
  });
})(window, document, jQuery);

;
module.exports = exports["default"];

},{"../helpers/cssControlCode.js":2}],23:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = (function (window, document, $, undefined) {

  $('.js-util-nav').each(function () {
    var openClass = "is-open",
        closeClass = "is-closed",
        submenuClass = "show-utilmenu",
        $parent = $(this),
        waitForIt = null;

    $('.js-close-sub-nav').on('click', function () {
      var $openContent = $parent.find('.js-util-nav-content.' + openClass);
      hide($openContent);
    });

    $parent.find('.js-util-nav-toggle > a').on('click', function (e) {
      e.preventdefault;

      var open = $(this).hasClass(openClass),
          $content = $(this).next('.js-util-nav-content'),
          $openContent = $parent.find('.js-util-nav-content.' + openClass);

      // hide other content
      hide($openContent);

      if (open) {
        return;
      }
      // add open class to this item
      $(this).addClass(openClass);
      // add open class to the correct content based on index
      $content.attr("aria-hidden", "false");

      setTimeout(function () {
        $content.removeClass(closeClass).addClass(openClass);
        $('body').addClass(submenuClass);
      }, .1);
    });

    $parent.find('.js-close-util-nav').on('click', function (e) {
      e.preventDefault;

      hide($(this).closest('.js-util-nav-content'));
    });

    $('.js-close-sub-nav').on('click', function () {
      var $openContent = $parent.find('.js-util-nav-content.' + openClass);
      hide($openContent);
    });

    function hide($content) {
      $('body').removeClass(submenuClass);
      $parent.find("." + openClass).removeClass(openClass);
      $content.removeClass(openClass).addClass(closeClass);

      if (waitForIt) {
        clearTimeout(waitForIt);
      }
      waitForIt = setTimeout(function () {
        $content.attr("aria-hidden", "true");
      }, 1000);
    }
  });
})(window, document, jQuery);

;
module.exports = exports["default"];

},{}]},{},[5])

//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvamNvbnN0YW50aW5lL21hc3Nnb3Ytd29yay9tYXlmbG93ZXIvc3R5bGVndWlkZS9zb3VyY2UvYXNzZXRzL2pzL2hlbHBlcnMvY29va2llcy5qcyIsIi9Vc2Vycy9qY29uc3RhbnRpbmUvbWFzc2dvdi13b3JrL21heWZsb3dlci9zdHlsZWd1aWRlL3NvdXJjZS9hc3NldHMvanMvaGVscGVycy9jc3NDb250cm9sQ29kZS5qcyIsIi9Vc2Vycy9qY29uc3RhbnRpbmUvbWFzc2dvdi13b3JrL21heWZsb3dlci9zdHlsZWd1aWRlL3NvdXJjZS9hc3NldHMvanMvaGVscGVycy9nZXRIYW5kbGViYXJUZW1wbGF0ZS5qcyIsIi9Vc2Vycy9qY29uc3RhbnRpbmUvbWFzc2dvdi13b3JrL21heWZsb3dlci9zdHlsZWd1aWRlL3NvdXJjZS9hc3NldHMvanMvaGVscGVycy9zdGlja3kuanMiLCIvVXNlcnMvamNvbnN0YW50aW5lL21hc3Nnb3Ytd29yay9tYXlmbG93ZXIvc3R5bGVndWlkZS9zb3VyY2UvYXNzZXRzL2pzL2luZGV4LmpzIiwiL1VzZXJzL2pjb25zdGFudGluZS9tYXNzZ292LXdvcmsvbWF5Zmxvd2VyL3N0eWxlZ3VpZGUvc291cmNlL2Fzc2V0cy9qcy9tb2R1bGVzL2FjY29yZGlvbnMuanMiLCIvVXNlcnMvamNvbnN0YW50aW5lL21hc3Nnb3Ytd29yay9tYXlmbG93ZXIvc3R5bGVndWlkZS9zb3VyY2UvYXNzZXRzL2pzL21vZHVsZXMvYmFjazJ0b3AuanMiLCIvVXNlcnMvamNvbnN0YW50aW5lL21hc3Nnb3Ytd29yay9tYXlmbG93ZXIvc3R5bGVndWlkZS9zb3VyY2UvYXNzZXRzL2pzL21vZHVsZXMvYmFubmVyQ2Fyb3VzZWwuanMiLCIvVXNlcnMvamNvbnN0YW50aW5lL21hc3Nnb3Ytd29yay9tYXlmbG93ZXIvc3R5bGVndWlkZS9zb3VyY2UvYXNzZXRzL2pzL21vZHVsZXMvY2xpY2thYmxlLmpzIiwiL1VzZXJzL2pjb25zdGFudGluZS9tYXNzZ292LXdvcmsvbWF5Zmxvd2VyL3N0eWxlZ3VpZGUvc291cmNlL2Fzc2V0cy9qcy9tb2R1bGVzL2Ryb3Bkb3duLmpzIiwiL1VzZXJzL2pjb25zdGFudGluZS9tYXNzZ292LXdvcmsvbWF5Zmxvd2VyL3N0eWxlZ3VpZGUvc291cmNlL2Fzc2V0cy9qcy9tb2R1bGVzL2VtZXJnZW5jeUFsZXJ0cy5qcyIsIi9Vc2Vycy9qY29uc3RhbnRpbmUvbWFzc2dvdi13b3JrL21heWZsb3dlci9zdHlsZWd1aWRlL3NvdXJjZS9hc3NldHMvanMvbW9kdWxlcy9mb3JtVmFsaWRhdGlvbi5qcyIsIi9Vc2Vycy9qY29uc3RhbnRpbmUvbWFzc2dvdi13b3JrL21heWZsb3dlci9zdHlsZWd1aWRlL3NvdXJjZS9hc3NldHMvanMvbW9kdWxlcy9nb29nbGVNYXAuanMiLCIvVXNlcnMvamNvbnN0YW50aW5lL21hc3Nnb3Ytd29yay9tYXlmbG93ZXIvc3R5bGVndWlkZS9zb3VyY2UvYXNzZXRzL2pzL21vZHVsZXMvaGlkZUFsZXJ0LmpzIiwiL1VzZXJzL2pjb25zdGFudGluZS9tYXNzZ292LXdvcmsvbWF5Zmxvd2VyL3N0eWxlZ3VpZGUvc291cmNlL2Fzc2V0cy9qcy9tb2R1bGVzL2tleXdvcmRTZWFyY2guanMiLCIvVXNlcnMvamNvbnN0YW50aW5lL21hc3Nnb3Ytd29yay9tYXlmbG93ZXIvc3R5bGVndWlkZS9zb3VyY2UvYXNzZXRzL2pzL21vZHVsZXMvbG9jYXRpb25MaXN0aW5nLmpzIiwiL1VzZXJzL2pjb25zdGFudGluZS9tYXNzZ292LXdvcmsvbWF5Zmxvd2VyL3N0eWxlZ3VpZGUvc291cmNlL2Fzc2V0cy9qcy9tb2R1bGVzL21haW5OYXYuanMiLCIvVXNlcnMvamNvbnN0YW50aW5lL21hc3Nnb3Ytd29yay9tYXlmbG93ZXIvc3R5bGVndWlkZS9zb3VyY2UvYXNzZXRzL2pzL21vZHVsZXMvbWFpbk5hdlBpbG90LmpzIiwiL1VzZXJzL2pjb25zdGFudGluZS9tYXNzZ292LXdvcmsvbWF5Zmxvd2VyL3N0eWxlZ3VpZGUvc291cmNlL2Fzc2V0cy9qcy9tb2R1bGVzL21vYmlsZU5hdi5qcyIsIi9Vc2Vycy9qY29uc3RhbnRpbmUvbWFzc2dvdi13b3JrL21heWZsb3dlci9zdHlsZWd1aWRlL3NvdXJjZS9hc3NldHMvanMvbW9kdWxlcy9yZXNwb25zaXZlVmlkZW8uanMiLCIvVXNlcnMvamNvbnN0YW50aW5lL21hc3Nnb3Ytd29yay9tYXlmbG93ZXIvc3R5bGVndWlkZS9zb3VyY2UvYXNzZXRzL2pzL21vZHVsZXMvcmljaFRleHQuanMiLCIvVXNlcnMvamNvbnN0YW50aW5lL21hc3Nnb3Ytd29yay9tYXlmbG93ZXIvc3R5bGVndWlkZS9zb3VyY2UvYXNzZXRzL2pzL21vZHVsZXMvc2Nyb2xsQW5jaG9ycy5qcyIsIi9Vc2Vycy9qY29uc3RhbnRpbmUvbWFzc2dvdi13b3JrL21heWZsb3dlci9zdHlsZWd1aWRlL3NvdXJjZS9hc3NldHMvanMvbW9kdWxlcy91dGlsTmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxNQUFNLENBQUMsT0FBTyxHQUFHLENBQUEsVUFBUyxNQUFNLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBQztBQUNwRCxjQUFZLENBQUM7O0FBRWIsV0FBUyxTQUFTLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUU7QUFDdkMsUUFBRyxPQUFPLE9BQU8sQUFBQyxLQUFLLFFBQVEsRUFBRTtBQUMvQixVQUFJLENBQUMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0FBQ25CLE9BQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxHQUFJLE9BQU8sR0FBQyxFQUFFLEdBQUMsRUFBRSxHQUFDLEVBQUUsR0FBQyxJQUFJLEFBQUMsQ0FBQyxDQUFDO0FBQ2pELFVBQUksT0FBTyxHQUFHLFVBQVUsR0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDekMsY0FBUSxDQUFDLE1BQU0sR0FBRyxJQUFJ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bnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsIHVuZGVmaW5lZCl7XHJcbiAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gIGZ1bmN0aW9uIHNldENvb2tpZShuYW1lLCB2YWx1ZSwgZXhwaXJlcykge1xyXG4gICAgaWYodHlwZW9mKGV4cGlyZXMpID09PSAnbnVtYmVyJykge1xyXG4gICAgICB2YXIgZCA9IG5ldyBEYXRlKCk7XHJcbiAgICAgIGQuc2V0VGltZShkLmdldFRpbWUoKSArIChleHBpcmVzKjI0KjYwKjYwKjEwMDApKTtcclxuICAgICAgdmFyIGV4cGlyZXMgPSBcImV4cGlyZXM9XCIrZC50b1VUQ1N0cmluZygpO1xyXG4gICAgICBkb2N1bWVudC5jb29raWUgPSBuYW1lICsgXCI9XCIgKyB2YWx1ZSArIFwiOyBcIiArIGV4cGlyZXMgKyBcIjsgcGF0aD0vXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkb2N1bWVudC5jb29raWUgPSBuYW1lICsgXCI9XCIgKyB2YWx1ZSArIFwiOyBwYXRoPS9cIjtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRDb29raWUobmFtZSkge1xyXG4gICAgdmFyIHZhbHVlID0gXCI7IFwiICsgZG9jdW1lbnQuY29va2llO1xyXG4gICAgdmFyIHBhcnRzID0gdmFsdWUuc3BsaXQoXCI7IFwiICsgbmFtZSArIFwiPVwiKTtcclxuICAgIGlmIChwYXJ0cy5sZW5ndGggPT0gMikgcmV0dXJuIHBhcnRzLnBvcCgpLnNwbGl0KFwiO1wiKS5zaGlmdCgpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHNldENvb2tpZSxcclxuICAgIGdldENvb2tpZVxyXG4gIH07XHJcblxyXG59KHdpbmRvdywgZG9jdW1lbnQpO1xyXG5cclxuIiwiLy8gY2hlY2sgdGhlIHZhbHVlIG9mIHRoZSBjc3MgOmJlZm9yZSBwc3VlZG8gZWxlbWVudFxyXG4vLyB2YWx1ZXMgbG9vayBmb3IgXCJ0cnVlXCIgb3IgXCJmYWxzZVwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoJGVsKSA9PiB7XHJcbiAgbGV0IHZhbHVlID0gXCJ0cnVlXCI7XHJcbiAgdHJ5IHtcclxuICAgIHZhbHVlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoJGVsWzBdLCAnOmJlZm9yZScpLmdldFByb3BlcnR5VmFsdWUoJ2NvbnRlbnQnKS5yZXBsYWNlKC9cXFwiL2csICcnKTtcclxuICB9IGNhdGNoKGVycikge31cclxuICByZXR1cm4gdmFsdWUgPT09IFwiZmFsc2VcIiA/IGZhbHNlIDogdHJ1ZTtcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKSB7XHJcbiAgaWYgKEhhbmRsZWJhcnMudGVtcGxhdGVzID09PSB1bmRlZmluZWQgfHwgSGFuZGxlYmFycy50ZW1wbGF0ZXNbbmFtZV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgdXJsIDogdGhlbWVQYXRoICsgJy9qcy90ZW1wbGF0ZXMvJyArIG5hbWUgKyAnLmh0bWwnLFxyXG4gICAgICAgICAgc3VjY2VzcyA6IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgICBpZiAoSGFuZGxlYmFycy50ZW1wbGF0ZXMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICBIYW5kbGViYXJzLnRlbXBsYXRlcyA9IHt9O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBIYW5kbGViYXJzLnRlbXBsYXRlc1tuYW1lXSA9IEhhbmRsZWJhcnMuY29tcGlsZShkYXRhKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBhc3luYyA6IGZhbHNlXHJcbiAgICAgIH0pO1xyXG4gIH1cclxuICByZXR1cm4gSGFuZGxlYmFycy50ZW1wbGF0ZXNbbmFtZV07XHJcbn07XHJcbiIsImltcG9ydCBjaGVja0FjdGl2ZSBmcm9tIFwiLi4vaGVscGVycy9jc3NDb250cm9sQ29kZS5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHdpbmRvdyxkb2N1bWVudCwkLHVuZGVmaW5lZCkge1xyXG4gIGxldCAkZWwsXHJcbiAgICAkZWxQYXJlbnQsXHJcbiAgICBlbEhlaWdodCxcclxuICAgIGVsV2lkdGgsXHJcbiAgICBsb3dlckxpbWl0LFxyXG4gICAgdXBwZXJMaW1pdCxcclxuICAgIGRlYm91bmNlVGltZXIsXHJcbiAgICBydW5Db2RlID0gZmFsc2U7XHJcblxyXG4gIGZ1bmN0aW9uIGluaXQoZWxlbWVudCkge1xyXG4gICAgJGVsID0gZWxlbWVudDtcclxuICAgICRlbFBhcmVudCA9ICRlbC5wYXJlbnQoKS5jc3MoJ3Bvc2l0aW9uJykgPT09ICdyZWxhdGl2ZScgPyAkZWwucGFyZW50KCkgOiAkZWwucGFyZW50KCkub2Zmc2V0UGFyZW50KCk7XHJcblxyXG4gICAgLy8gZGVmYXVsdCBhc3N1bXB0aW9uIGFzIHRvIHdoZXJlIHRoZSBzY3JlZW4gd2lsbCBsb2FkXHJcbiAgICAkZWwuYXR0cignZGF0YS1zdGlja3knLCd0b3AnKTtcclxuXHJcbiAgICB1cGRhdGVEYXRhKCk7XHJcblxyXG4gICAgLy8gdXBkYXRlIHZhcmlhYmxlcyBvbmUgbW9yZSB0aW1lIHRvIGNhdGNoIGFueSBwb3N0IHBhZ2UgbG9hZCBjaGFuZ2VzXHJcbiAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICB1cGRhdGVEYXRhKCk7XHJcbiAgICB9LDEwMDApO1xyXG4gICAgXHJcbiAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xyXG4gICAgICB1cGRhdGVEYXRhKCk7XHJcbiAgICAgIHNldFBvc2l0aW9uKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyB0b2dnbGUgdGhlIHN0aWNreSBwb3NpdGlvbmluZ1xyXG4gICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHNldFBvc2l0aW9uKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHVwZGF0ZURhdGEoKXtcclxuICAgIGxldCBuZXdSdW5Db2RlID0gY2hlY2tBY3RpdmUoJGVsKTtcclxuXHJcbiAgICBpZihydW5Db2RlICYmICFuZXdSdW5Db2RlKSB7XHJcbiAgICAgICRlbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xyXG4gICAgfVxyXG5cclxuICAgIHJ1bkNvZGUgPSBuZXdSdW5Db2RlO1xyXG5cclxuICAgIGlmKCFydW5Db2RlKXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBydW5Db2RlID0gbmV3UnVuQ29kZTtcclxuICAgIGVsSGVpZ2h0ID0gJGVsLmhlaWdodCgpO1xyXG4gICAgZWxXaWR0aCA9ICRlbFBhcmVudC53aWR0aCgpO1xyXG4gICAgdXBwZXJMaW1pdCA9ICRlbFBhcmVudC5vZmZzZXQoKS50b3A7XHJcbiAgICBsb3dlckxpbWl0ID0gdXBwZXJMaW1pdCArICRlbFBhcmVudC5vdXRlckhlaWdodCh0cnVlKSAtICRlbC5oZWlnaHQoKTtcclxuXHJcbiAgICAkZWwud2lkdGgoZWxXaWR0aCk7ICAgICAgXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzZXRQb3NpdGlvbigpIHtcclxuICAgIGlmKCFydW5Db2RlKXtcclxuICAgICAgJGVsLmF0dHIoJ2RhdGEtc3RpY2t5JywndG9wJyk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgd2luZG93VG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpLFxyXG4gICAgICAgIGF0dHIgPSAkZWwuYXR0cignZGF0YS1zdGlja3knKSxcclxuICAgICAgICB0b3AgPSBhdHRyICE9PSAndG9wJyAmJiB3aW5kb3dUb3AgPD0gdXBwZXJMaW1pdCwgXHJcbiAgICAgICAgbWlkZGxlID0gYXR0ciAhPT0gJ21pZGRsZScgJiYgd2luZG93VG9wIDwgbG93ZXJMaW1pdCAmJiB3aW5kb3dUb3AgPiB1cHBlckxpbWl0LFxyXG4gICAgICAgIGJvdHRvbSA9IGF0dHIgIT09ICdib3R0b20nICYmIHdpbmRvd1RvcCA+PSBsb3dlckxpbWl0O1xyXG4gICAgXHJcbiAgICBpZih0b3ApIHtcclxuICAgICAgJGVsLmF0dHIoJ2RhdGEtc3RpY2t5JywndG9wJyk7XHJcbiAgICB9IFxyXG4gICAgZWxzZSBpZiAobWlkZGxlKSB7XHJcbiAgICAgICRlbC5hdHRyKCdkYXRhLXN0aWNreScsJ21pZGRsZScpO1xyXG4gICAgfSBcclxuICAgIGVsc2UgaWYgKGJvdHRvbSkge1xyXG4gICAgICAkZWwuYXR0cignZGF0YS1zdGlja3knLCdib3R0b20nKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB7aW5pdH07XHJcblxyXG59KHdpbmRvdyxkb2N1bWVudCxqUXVlcnkpOyIsImltcG9ydCBhY2NvcmRpb25zICAgICAgIGZyb20gXCIuL21vZHVsZXMvYWNjb3JkaW9ucy5qc1wiO1xuaW1wb3J0IGdvb2dsZU1hcCAgICAgICAgZnJvbSBcIi4vbW9kdWxlcy9nb29nbGVNYXAuanNcIjtcbmltcG9ydCBiYWNrMnRvcCAgICAgICAgIGZyb20gXCIuL21vZHVsZXMvYmFjazJ0b3AuanNcIjtcbmltcG9ydCBiYW5uZXJDYXJvdXNlbCAgIGZyb20gXCIuL21vZHVsZXMvYmFubmVyQ2Fyb3VzZWwuanNcIjtcbmltcG9ydCBjbGlja2FibGUgICAgICAgIGZyb20gXCIuL21vZHVsZXMvY2xpY2thYmxlLmpzXCI7XG5pbXBvcnQgZHJvcGRvd24gICAgICAgICBmcm9tIFwiLi9tb2R1bGVzL2Ryb3Bkb3duLmpzXCI7XG5pbXBvcnQgZW1lcmdlbmN5QWxlcnRzICBmcm9tIFwiLi9tb2R1bGVzL2VtZXJnZW5jeUFsZXJ0cy5qc1wiO1xuaW1wb3J0IGZvcm1WYWxpZGF0aW9uICAgZnJvbSBcIi4vbW9kdWxlcy9mb3JtVmFsaWRhdGlvbi5qc1wiO1xuaW1wb3J0IGhpZGVBbGVydCAgICAgICAgZnJvbSBcIi4vbW9kdWxlcy9oaWRlQWxlcnQuanNcIjtcbmltcG9ydCBrZXl3b3JkU2VhcmNoICAgIGZyb20gXCIuL21vZHVsZXMva2V5d29yZFNlYXJjaC5qc1wiO1xuaW1wb3J0IGxvY2F0aW9uTGlzdGluZyAgZnJvbSBcIi4vbW9kdWxlcy9sb2NhdGlvbkxpc3RpbmcuanNcIjtcbmltcG9ydCBtYWluTmF2ICAgICAgICAgIGZyb20gXCIuL21vZHVsZXMvbWFpbk5hdi5qc1wiO1xuaW1wb3J0IG1haW5OYXZQaWxvdCAgICAgZnJvbSBcIi4vbW9kdWxlcy9tYWluTmF2UGlsb3QuanNcIjtcbmltcG9ydCBtb2JpbGVOYXYgICAgICAgIGZyb20gXCIuL21vZHVsZXMvbW9iaWxlTmF2LmpzXCI7XG5pbXBvcnQgcmVzcG9uc2l2ZVZpZGVvICBmcm9tIFwiLi9tb2R1bGVzL3Jlc3BvbnNpdmVWaWRlby5qc1wiO1xuaW1wb3J0IHJpY2hUZXh0ICAgICAgICAgZnJvbSBcIi4vbW9kdWxlcy9yaWNoVGV4dC5qc1wiO1xuaW1wb3J0IHNjcm9sbEFuY2hvcnMgICAgZnJvbSBcIi4vbW9kdWxlcy9zY3JvbGxBbmNob3JzLmpzXCI7XG5pbXBvcnQgdXRpbE5hdiAgICAgICAgICBmcm9tIFwiLi9tb2R1bGVzL3V0aWxOYXYuanNcIjtcbiIsImltcG9ydCBjaGVja0FjdGl2ZSBmcm9tIFwiLi4vaGVscGVycy9jc3NDb250cm9sQ29kZS5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHdpbmRvdyxkb2N1bWVudCwkLHVuZGVmaW5lZCkge1xyXG5cclxuICAkKCcuanMtYWNjb3JkaW9uJykuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgbGV0ICRlbCA9ICQodGhpcyksXHJcbiAgICAgICAgJGxpbmsgPSAkZWwuZmluZCgnLmpzLWFjY29yZGlvbi1saW5rJyksXHJcbiAgICAgICAgJGNvbnRlbnQgPSAkZWwuZmluZCgnLmpzLWFjY29yZGlvbi1jb250ZW50JyksXHJcbiAgICAgICAgYWN0aXZlID0gY2hlY2tBY3RpdmUoJGVsKTtcclxuXHJcbiAgICAkbGluay5vbignY2xpY2snLGZ1bmN0aW9uKGUpe1xyXG4gICAgICBpZihhY3RpdmUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoJGVsLmhhc0NsYXNzKCdpcy1vcGVuJykpe1xyXG4gICAgICAgICAgJGNvbnRlbnQuc3RvcCh0cnVlLHRydWUpLnNsaWRlVXAoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgJGNvbnRlbnQuc3RvcCh0cnVlLHRydWUpLnNsaWRlRG93bigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkZWwudG9nZ2xlQ2xhc3MoJ2lzLW9wZW4nKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uICgpIHtcclxuICAgICAgbGV0IHRlbXAgPSBjaGVja0FjdGl2ZSgkZWwpO1xyXG5cclxuICAgICAgaWYodGVtcCAhPT0gYWN0aXZlICYmICF0ZW1wKSB7XHJcbiAgICAgICAgJGNvbnRlbnQucmVtb3ZlQXR0cignc3R5bGUnKTtcclxuICAgICAgICAkZWwucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgYWN0aXZlID0gdGVtcDtcclxuICAgIH0pLnJlc2l6ZSgpO1xyXG4gIH0pO1xyXG5cclxufSh3aW5kb3csZG9jdW1lbnQsalF1ZXJ5KTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAod2luZG93LGRvY3VtZW50LCQsdW5kZWZpbmVkKSB7XHJcbiAgbGV0ICRmb290ZXIgPSAkKCcuanMtZm9vdGVyJyksXHJcbiAgICAgIHZpc2libGVUaHJlc2hvbGQgPSAyNTAsXHJcbiAgICAgIHN0YXRpY1RocmVzaG9sZCA9IDUwO1xyXG5cclxuICAkKFwiLmpzLWJhY2sydG9wXCIpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICBsZXQgJGVsID0gJCh0aGlzKTtcclxuXHJcbiAgICAkZWwub24oJ2NsaWNrJyxmdW5jdGlvbihlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICAkKFwiaHRtbCwgYm9keVwiKS5zdG9wKHRydWUsdHJ1ZSkuYW5pbWF0ZSh7c2Nyb2xsVG9wOjB9LCAnNzUwJyk7XHJcbiAgICAgIH0gXHJcbiAgICAgIGNhdGNoKGUpIHtcclxuICAgICAgICAkKCdib2R5Jykuc2Nyb2xsVG9wKDApO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIEJyaW5nIGtleWJvYXJkIGZvY3VzIGJhY2sgdG8gdG9wIGFzIHdlbGwuXHJcbiAgICAgICQoXCIjbWFpbi1jb250ZW50XCIpLmZvY3VzKCk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxuICAgICQod2luZG93KS5vbignc2Nyb2xsJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgIC8vIGlmIHdlJ3ZlIGV4Y2VlZGVkIHRoZSB0aHJlc2hvbGQgb2Ygc2Nyb2xsaW5nXHJcbiAgICAgIC8vIGZyb20gdGhlIHRvcCwgc2hvdyBjb250cm9sXHJcbiAgICAgIGxldCBzY3JvbGxUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblxyXG4gICAgICBpZiAoc2Nyb2xsVG9wID4gdmlzaWJsZVRocmVzaG9sZCkge1xyXG4gICAgICAgICAgJGVsLnJlbW92ZUNsYXNzKCdpcy1oaWRkZW4nKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICRlbC5hZGRDbGFzcygnaXMtaGlkZGVuJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxufSh3aW5kb3csZG9jdW1lbnQsalF1ZXJ5KTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAod2luZG93LGRvY3VtZW50LCQsdW5kZWZpbmVkKSB7XHJcblxyXG4gICQoJy5qcy1iYW5uZXItY2Fyb3VzZWwnKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICBsZXQgJGVsID0gJCh0aGlzKTtcclxuXHJcbiAgICBpZigkZWwuY2hpbGRyZW4oKS5sZW5ndGggPD0gMSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHNsaWRlciA9ICRlbC5zbGljayh7XHJcbiAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgIHByZXZBcnJvdzogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stcHJldlwiPjwvYnV0dG9uPicsXHJcbiAgICAgIG5leHRBcnJvdzogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stbmV4dFwiPjwvYnV0dG9uPidcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxufSh3aW5kb3csZG9jdW1lbnQsalF1ZXJ5KTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAod2luZG93LGRvY3VtZW50LCQsdW5kZWZpbmVkKSB7XHJcbiAgJCgnLmpzLWNsaWNrYWJsZScpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgIC8vIGlmIHRoZSB0aGlzIGlzIGNsaWNrZWRcclxuICAgICQodGhpcykuY2xpY2soZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgdmFyICRlbCA9ICQodGhpcykuZmluZCgnLmpzLWNsaWNrYWJsZS1saW5rJykuZmlyc3QoKTtcclxuICAgICAgLy8gZmluZCB0aGUgZGVzdGluYXRpb25cclxuICAgICAgdmFyIGRlc3QgPSAkZWwuYXR0cihcImhyZWZcIik7XHJcbiAgICAgIC8vIGlmIHRoZSB0YXJnZXQgYXR0cmlidXRlIGV4aXN0c1xyXG4gICAgICBpZihcIl9ibGFua1wiID09PSAkZWwuYXR0cihcInRhcmdldFwiKSkge1xyXG4gICAgICAgIC8vIGxhdW5jaCBuZXcgdGFiL3dpbmRvd1xyXG4gICAgICAgIHdpbmRvdy5vcGVuKGRlc3QpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIG90aGVyd2lzZSByZWRpcmVjdCB0byBhIG5ldyBwYWdlIFxyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IGRlc3Q7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG59KHdpbmRvdyxkb2N1bWVudCxqUXVlcnkpOyIsIi8vICoqKioqKiBiYXNpYyBjdXN0b20gc2VsZWN0IHRoYXQgdXNlcyBtb2JpbGUgc2VsZWN0IGtleWJvYXJkICoqKioqKlxyXG5sZXQgZHJvcGRvd25NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5qcy1kcm9wZG93blwiKTtcclxuXHJcbmlmKG51bGwgIT09IGRyb3Bkb3duTWVudSl7XHJcblxyXG4gIGxldCBsZW5ndGggPSBkcm9wZG93bk1lbnUubGVuZ3RoO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrICkge1xyXG4gICAgbGV0IHBhcmVudEVsID0gZHJvcGRvd25NZW51W2ldLFxyXG4gICAgICAgIHNlbGVjdEVsID0gcGFyZW50RWwucXVlcnlTZWxlY3RvcihcIi5qcy1kcm9wZG93bi1zZWxlY3RcIiksXHJcbiAgICAgICAgbGluayA9IHBhcmVudEVsLnF1ZXJ5U2VsZWN0b3IoXCIuanMtZHJvcGRvd24tbGlua1wiKVxyXG5cclxuICAgIGlmKG51bGwgPT09IHNlbGVjdEVsIHx8IG51bGwgPT09IGxpbmspIHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0RWwub25jaGFuZ2UgPSBmdW5jdGlvbigpIHtcclxuICAgICAgbGV0IGVsZW0gPSAodHlwZW9mIHRoaXMuc2VsZWN0ZWRJbmRleCA9PT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy5ldmVudC5zcmNFbGVtZW50IDogdGhpcyk7XHJcbiAgICAgIGxpbmsuaW5uZXJUZXh0ID0gZWxlbS50ZXh0IHx8IGVsZW0ub3B0aW9uc1tlbGVtLnNlbGVjdGVkSW5kZXhdLnRleHQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBjb29raWUgICBmcm9tIFwiLi4vaGVscGVycy9jb29raWVzLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAod2luZG93LGRvY3VtZW50LCQsdW5kZWZpbmVkKSB7XHJcblxyXG4gICQoJy5qcy1lbWVyZ2VuY3ktYWxlcnRzJykuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgbGV0ICRlbCA9ICQodGhpcyksXHJcbiAgICAgICAgb3BlbiA9IHRydWUsXHJcbiAgICAgICAgaWQgPSAkZWwuZGF0YSgnaWQnKSxcclxuICAgICAgICBjb29raWVOYW1lID0gJ2VtZXJnZW5jeS1hbGVydHMnICsgaWQsXHJcbiAgICAgICAgY29va2llVmFsdWUgPSBjb29raWUuZ2V0Q29va2llKGNvb2tpZU5hbWUpO1xyXG5cclxuICAgIGlmKHR5cGVvZihjb29raWVWYWx1ZSkgIT0gJ3VuZGVmaW5lZCcgJiYgY29va2llVmFsdWUgPT09ICdmYWxzZScpIHtcclxuICAgICAgLy8gY29va2llVmFsdWUgaXMgYSBzdHJpbmcgc28gd2UgY2FuJ3QgdXNlIHRoZSB2YWx1ZSBkaXJlY3RseVxyXG4gICAgICBvcGVuID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZihvcGVuKSB7XHJcbiAgICAgIC8vIGV4cGFuZCB0aGUgbWVudVxyXG4gICAgICAkZWwuZmluZCgnLmpzLWFjY29yZGlvbi1saW5rJykudHJpZ2dlcignY2xpY2snKTtcclxuICAgIH1cclxuXHJcbiAgICAkZWwub24oJ2NsaWNrJywnLmpzLWFjY29yZGlvbi1saW5rJyxmdW5jdGlvbigpe1xyXG4gICAgICAvLyB0b2dnbGUgdGhlIGN1cnJlbnQgc3RhdGVcclxuICAgICAgb3BlbiA9ICFvcGVuO1xyXG4gICAgICAvLyB1cGRhdGUgb3Blbi9jbG9zZSBzdGF0ZSBjb29raWUgXHJcbiAgICAgIC8vIGxlYXZlIG9mZiB0aGlyZCBhcmd1bWVudCB0byBtYWtlIGl0IGV4cGlyZSBvbiBzZXNzaW9uXHJcbiAgICAgIGNvb2tpZS5zZXRDb29raWUoY29va2llTmFtZSxvcGVuKTtcclxuICAgIH0pO1xyXG5cclxuICB9KTtcclxuXHJcbn0od2luZG93LGRvY3VtZW50LGpRdWVyeSk7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHdpbmRvdyxkb2N1bWVudCwkLHVuZGVmaW5lZCkge1xyXG5cclxuICAkKCdmb3JtJykuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgbGV0ICRmb3JtID0gJCh0aGlzKSxcclxuICAgICAgICByZXF1aXJlZEZpZWxkcyA9IFtdO1xyXG5cclxuICAgIC8vIGZpbmQgYWxsIHJlcXVpcmVkIGZpZWxkc1xyXG4gICAgJCgnLmpzLWlzLXJlcXVpcmVkJykuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICBsZXQgJGZpZWxkID0gJCh0aGlzKSxcclxuICAgICAgICAgIHR5cGUgPSAkZmllbGQuZGF0YSgndHlwZScpLFxyXG4gICAgICAgICAgdmFsdWUgPSAkZmllbGQudmFsKCksXHJcbiAgICAgICAgICB2YWxpZCA9IHZhbGlkYXRlKHZhbHVlLHR5cGUpO1xyXG5cclxuICAgICAgcmVxdWlyZWRGaWVsZHMucHVzaCh7dHlwZSx2YWxpZCwkZWw6JGZpZWxkfSk7XHJcblxyXG4gICAgICAkKHRoaXMpLmRhdGEoJ2luZGV4JyxyZXF1aXJlZEZpZWxkcy5sZW5ndGgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gaWYgdGhlcmUgYXJlbid0IGFueSByZXF1aXJlZCBmaWVsZHMsIGRvbid0IGRvIGFueXRoaW5nXHJcbiAgICBpZihyZXF1aXJlZEZpZWxkcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgICRmb3JtLm9uKCdzdWJtaXQnLCBmdW5jdGlvbihlKXtcclxuICAgICAgbGV0IHN1Ym1pdEZvcm0gPSB0cnVlO1xyXG5cclxuICAgICAgLy8gdmFsaWRhdGUgZWFjaCByZXF1aXJlZCBmaWVsZFxyXG4gICAgICByZXF1aXJlZEZpZWxkcy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICBsZXQgdmFsdWUgPSBpdGVtLiRlbC52YWwoKTtcclxuXHJcbiAgICAgICAgaXRlbS52YWxpZCA9IHZhbGlkYXRlKHZhbHVlLGl0ZW0udHlwZSk7XHJcblxyXG4gICAgICAgIGlmKGl0ZW0udmFsaWQpIHtcclxuICAgICAgICAgIGl0ZW0uJGVsLmF0dHIoJ2RhdGEtdmFsaWQnLCdpcy12YWxpZCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzdWJtaXRGb3JtID0gZmFsc2U7XHJcbiAgICAgICAgICBpdGVtLiRlbC5hdHRyKCdkYXRhLXZhbGlkJywnaXMtaW52YWxpZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZighc3VibWl0Rm9ybSkge1xyXG4gICAgICAgIC8vIHByZXZlbnQgdGhlIGZvcm0gZnJvbSBzdWJtaXR0aW5nXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIC8vIHNob3cgdGhlIGZvcm0gZXJyb3IgbWVzc2FnZSBcclxuICAgICAgICAvLyBvciBibGluayB0aGUgbWVzc2FnZSBpZiBpdCBpcyBhbHJlYWR5IHZpc2libGVcclxuICAgICAgICAkZm9ybS5maW5kKCcuanMtZXJyb3ItbXNnJylcclxuICAgICAgICAgIC5hdHRyKCdoaWRkZW4nLHRydWUpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAkZm9ybS5maW5kKCcuanMtZXJyb3ItbXNnJylcclxuICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgfSwxMDApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gdmFsaWRhdGUodmFsdWUsdHlwZT0ndGV4dCcpe1xyXG4gICAgbGV0IHZhbGlkID0gZmFsc2U7XHJcblxyXG4gICAgc3dpdGNoKHR5cGUpIHtcclxuICAgICAgY2FzZSAnZW1haWwnOlxyXG4gICAgICAgIHZhbGlkID0gISEodmFsdWUubWF0Y2goL1tBLVowLTkuXyUrLV0rQFtBLVowLTkuLV0rXFwuW0EtWl0rL2kpKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICB2YWxpZCA9IHZhbHVlLmxlbmd0aCAhPT0gMDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdmFsaWQ7XHJcbiAgfVxyXG5cclxufSh3aW5kb3csZG9jdW1lbnQsalF1ZXJ5KTtcclxuIiwiaW1wb3J0IGdldFRlbXBsYXRlIGZyb20gXCIuLi9oZWxwZXJzL2dldEhhbmRsZWJhclRlbXBsYXRlLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAod2luZG93LGRvY3VtZW50LCQsdW5kZWZpbmVkKSB7XHJcblxyXG4gIC8vIG9ubHkgcnVuIHRoaXMgY29kZSBpZiB0aGVyZSBpcyBhIGdvb2dsZSBtYXAgY29tcG9uZW50IG9uIHRoZSBwYWdlXHJcbiAgaWYoISQoJy5qcy1nb29nbGUtbWFwJykubGVuZ3RoIHx8IHR5cGVvZiBnb29nbGVNYXBEYXRhID09PSAndW5kZWZpbmVkJyl7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBsZXQgY29tcGlsZWRUZW1wbGF0ZSA9IGdldFRlbXBsYXRlKCdnb29nbGVNYXBJbmZvJyk7XHJcblxyXG4gIC8vIGFmdGVyIHRoZSBhcGkgaXMgbG9hZGVkIHRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkXHJcbiAgd2luZG93LmluaXRNYXAgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAkKFwiLmpzLWdvb2dsZS1tYXBcIikuZWFjaChmdW5jdGlvbihpKSB7XHJcbiAgICAgIGNvbnN0ICRlbCA9ICQodGhpcyk7XHJcblxyXG4gICAgICAvLyBnZXQgdGhlIG1hcHMgZGF0YVxyXG4gICAgICAvLyB0aGlzIGNvdWxkIGJlIHJlcGxhY2VkIHdpdGggYW4gYXBpXHJcbiAgICAgIGNvbnN0IHJhd0RhdGEgPSBnb29nbGVNYXBEYXRhW2ldO1xyXG4gICAgICBcclxuICAgICAgLy8gKioqIENyZWF0ZSB0aGUgTWFwICoqKiAvL1xyXG4gICAgICAvLyBtYXAgZGVmYXVsdHNcclxuICAgICAgY29uc3QgaW5pdE1hcERhdGEgPSB7XHJcbiAgICAgICAgc2Nyb2xsd2hlZWw6IGZhbHNlXHJcbiAgICAgIH1cclxuICAgICAgLy8gY3JlYXRlIG1hcCBEYXRhIGJ5IGNvbWJpbmluZyB0aGUgcmF3RGF0YSB3aXRoIHRoZSBkZWZhdWx0c1xyXG4gICAgICBjb25zdCBtYXBEYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgcmF3RGF0YS5tYXAsIGluaXRNYXBEYXRhKTtcclxuXHJcbiAgICAgIGNvbnN0IG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAodGhpcywgbWFwRGF0YSk7XHJcblxyXG4gICAgICBsZXQgbWFya2VycyA9IFtdO1xyXG5cclxuICAgICAgLy8gKioqIEFkZCBNYXJrZXJzIHdpdGggcG9wdXBzICoqKiAvL1xyXG4gICAgICByYXdEYXRhLm1hcmtlcnMuZm9yRWFjaChmdW5jdGlvbihkLGkpe1xyXG4gICAgICAgIGxldCBtYXJrZXJEYXRhID0gT2JqZWN0LmFzc2lnbih7bWFwfSxkKTtcclxuXHJcbiAgICAgICAgbGV0IG1hcmtlciA9ICBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKG1hcmtlckRhdGEpO1xyXG5cclxuICAgICAgICBsZXQgaW5mb0RhdGEgPSBpbmZvVHJhbnNmb3JtKG1hcmtlckRhdGEuaW5mb1dpbmRvdyk7XHJcbiAgICAgICAgbGV0IHRlbXBsYXRlID0gY29tcGlsZWRUZW1wbGF0ZShpbmZvRGF0YSk7XHJcbiAgICAgICAgbGV0IGluZm9XaW5kb3cgPSBuZXcgZ29vZ2xlLm1hcHMuSW5mb1dpbmRvdyh7XHJcbiAgICAgICAgICBjb250ZW50OiB0ZW1wbGF0ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBtYXJrZXIuYWRkTGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgIGluZm9XaW5kb3cub3BlbihtYXAsIG1hcmtlcik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG1hcmtlci5zaG93SW5mbyA9ICgpID0+IHtcclxuICAgICAgICAgIGluZm9XaW5kb3cub3BlbihtYXAsIG1hcmtlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtYXJrZXJzLnB1c2gobWFya2VyKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBsaXN0ZW4gZm9yIHJlY2VudGVyIGNvbW1hbmRcclxuICAgICAgJGVsLm9uKCBcInJlY2VudGVyXCIsIGZ1bmN0aW9uKCBldmVudCwgbWFya2VySW5kZXggKSB7XHJcbiAgICAgICAgaWYodHlwZW9mIG1hcmtlcnNbbWFya2VySW5kZXhdID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1hcC5zZXRDZW50ZXIobWFya2Vyc1ttYXJrZXJJbmRleF0uZ2V0UG9zaXRpb24oKSk7XHJcbiAgICAgICAgbWFya2Vyc1ttYXJrZXJJbmRleF0uc2hvd0luZm8oKTsgICAgICAgIFxyXG4gICAgICB9KTsgICAgXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGluZm9UcmFuc2Zvcm0oZGF0YSkge1xyXG4gICAgbGV0IGluZm9EYXRhID0ge1xyXG4gICAgICBwaG9uZUZvcm1hdHRlZDogZm9ybWF0UGhvbmUoZGF0YS5waG9uZSksXHJcbiAgICAgIGZheEZvcm1hdHRlZDogZm9ybWF0UGhvbmUoZGF0YS5mYXgpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSxkYXRhLGluZm9EYXRhKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGZvcm1hdFBob25lKHBob25lKSB7XHJcbiAgICBsZXQgcGhvbmVUZW1wID0gcGhvbmVbMF0gPT09ICcxJyA/IHBob25lLnN1YnN0cmluZygxKSA6IHBob25lO1xyXG4gICAgcmV0dXJuIHBob25lVGVtcC5yZXBsYWNlKC8oXFxkezN9KShcXGR7M30pKFxcZHs0fSkvLCAnKCQxKSAkMi0kMycpO1xyXG4gIH1cclxuXHJcbiAgLy8gbG9hZCBHb29nbGUncyBhcGlcclxuICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICBzY3JpcHQuc3JjID0gXCIvL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanM/a2V5PUFJemFTeUMtV0lvTmZTNmZoN1RPdE9xcERFZ0tTVC1XX05CZWJUayZjYWxsYmFjaz1pbml0TWFwXCI7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcblxyXG5cclxufSh3aW5kb3csZG9jdW1lbnQsalF1ZXJ5KTtcclxuIiwiaW1wb3J0IGNvb2tpZXMgZnJvbSBcIi4uL2hlbHBlcnMvY29va2llcy5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHdpbmRvdyxkb2N1bWVudCwkLHVuZGVmaW5lZCkge1xyXG5cclxuICAkKCcuanMtaGVhZGVyLWFsZXJ0JykuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgbGV0ICRlbCA9ICQodGhpcyksXHJcbiAgICAgICAgJGxpbmsgPSAkZWwuZmluZCgnLmpzLWhlYWRlci1hbGVydC1saW5rJyksXHJcbiAgICAgICAgaWQgPSAkZWwuZGF0YSgnaWQnKSxcclxuICAgICAgICBjb29raWVOYW1lID0gXCJBbGVydFwiICsgaWQsXHJcbiAgICAgICAgY29va2llRXhwaXJlcyA9IDM2NSxcclxuICAgICAgICBjb29raWVWYWx1ZSA9IGNvb2tpZXMuZ2V0Q29va2llKGNvb2tpZU5hbWUpO1xyXG5cclxuICAgIC8vIHNob3cgYWxlcnQgaWYgY29va2llIGRvZXNuJ3QgZXhpc3RcclxuICAgIGlmKGNvb2tpZVZhbHVlICE9PSBcImhpZGVcIikge1xyXG4gICAgICAkZWwuZmFkZUluKCkuZmFkZU91dCgnZmFzdCcpLmZhZGVJbignc2xvdycpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGhpZGUgdGhlIGFsZXJ0XHJcbiAgICAkbGluay5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbiAgICAgIGNvb2tpZXMuc2V0Q29va2llKGNvb2tpZU5hbWUsXCJoaWRlXCIsY29va2llRXhwaXJlcyk7XHJcbiAgICAgICRlbC5zdG9wKHRydWUsdHJ1ZSkuZmFkZU91dCgpO1xyXG4gICAgfSlcclxuICB9KTtcclxufSh3aW5kb3csZG9jdW1lbnQsalF1ZXJ5KTtcclxuXHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh3aW5kb3csZG9jdW1lbnQsJCx1bmRlZmluZWQpIHtcclxuXHJcbiAgJCgnLmpzLWtleXdvcmQtc2VhcmNoJykuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgbGV0ICRlbCA9ICQodGhpcyksXHJcbiAgICAgICAgJGZvcm0gPSAkZWwuZmluZCgnZm9ybScpO1xyXG5cclxuICAgICRmb3JtLm9uKCdzdWJtaXQnLGZ1bmN0aW9uKGUpe1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICRlbC5hZGRDbGFzcygnaXMtZGlydHknKVxyXG4gICAgfSk7XHJcblxyXG4gICAgJGZvcm0ub24oJ3Jlc2V0JyxmdW5jdGlvbigpe1xyXG4gICAgICAkZWwucmVtb3ZlQ2xhc3MoJ2lzLWRpcnR5JylcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxufSh3aW5kb3csZG9jdW1lbnQsalF1ZXJ5KTtcclxuIiwiaW1wb3J0IHN0aWNreSBmcm9tIFwiLi4vaGVscGVycy9zdGlja3kuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh3aW5kb3csZG9jdW1lbnQsJCx1bmRlZmluZWQpIHtcclxuXHJcbiAgJCgnLmpzLWxvY2F0aW9uLWxpc3RpbmcnKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICBsZXQgJGVsID0gJCh0aGlzKSxcclxuICAgICAgJG1hcCA9ICRlbC5maW5kKCcuanMtbG9jYXRpb24tbGlzdGluZy1tYXAnKTtcclxuXHJcbiAgICBzdGlja3kuaW5pdCgkbWFwKTtcclxuXHJcbiAgICAvLyBmaW5kIHRoZSBsb2NhdGlvbiBsaW5rXHJcbiAgICAkZWwuZmluZCgnLmpzLWxvY2F0aW9uLWxpc3RpbmctbGluaycpLmVhY2goZnVuY3Rpb24oaW5kZXgpIHtcclxuICAgICAgbGV0ICRsaW5rID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICRsaW5rLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAvLyB3aGVuIGxpbmsgaXMgY2xpY2tlZCBcclxuICAgICAgICAvLyB0cmlnZ2VyIG1hcCB0byByZWNlbnRlciBvbiB0aGlzIGl0ZW0gYmFzZWQgb24gaXQncyBpbmRleC5cclxuICAgICAgICBsZXQgJG1hcCA9ICRlbC5maW5kKCcuanMtZ29vZ2xlLW1hcCcpLFxyXG4gICAgICAgICAgcG9zaXRpb24gPSAkbWFwLm9mZnNldCgpLnRvcDtcclxuXHJcbiAgICAgICAgJG1hcC50cmlnZ2VyKCdyZWNlbnRlcicsaW5kZXgpO1xyXG4gICAgICAgIC8vIGZvY3VzIG9uIHRoZSBtYXBcclxuICAgICAgICAkKFwiaHRtbCxib2R5XCIpLnN0b3AodHJ1ZSx0cnVlKS5hbmltYXRlKHtzY3JvbGxUb3A6cG9zaXRpb259LCAnNzUwJyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gIH0pO1xyXG59KHdpbmRvdyxkb2N1bWVudCxqUXVlcnkpO1xyXG5cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHdpbmRvdyxkb2N1bWVudCwkLHVuZGVmaW5lZCkge1xyXG5cclxuICBsZXQgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHJcbiAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpe1xyXG4gICAgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICB9KTtcclxuXHJcbiAgJCgnLmpzLW1haW4tbmF2JykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgIGxldCBvcGVuQ2xhc3MgPSBcImlzLW9wZW5cIixcclxuICAgICAgICBjbG9zZUNsYXNzID0gXCJpcy1jbG9zZWRcIixcclxuICAgICAgICBzdWJtZW51Q2xhc3MgPSBcInNob3ctc3VibWVudVwiLFxyXG4gICAgICAgICRwYXJlbnQgPSAkKHRoaXMpLFxyXG4gICAgICAgICRtYWluTmF2VG9nZ2xlID0gJHBhcmVudC5maW5kKCcuanMtbWFpbi1uYXYtdG9nZ2xlJyksXHJcbiAgICAgICAgJG1haW5OYXZJdGVtcyA9ICRwYXJlbnQuZmluZCgnLmpzLW1haW4tbmF2LXRvZ2dsZSwgLmpzLW1haW4tbmF2LXRvcC1saW5rJyksXHJcbiAgICAgICAgcHJldmlvdXNLZXkgPSBudWxsLFxyXG4gICAgICAgIGJyZWFrcG9pbnQgPSA4MDA7IC8vIG1hdGNoZXMgQ1NTIGJyZWFrcG9pbnQgZm9yIE1haW4gTmF2XHJcblxyXG4gICAgJG1haW5OYXZJdGVtcy5vbigna2V5ZG93bicsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgaWYod2luZG93V2lkdGggPD0gYnJlYWtwb2ludCkge1xyXG4gICAgICAgIC8vIG9ubHkgZm9yIGRlc2t0b3BcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEdyYWIgYWxsIHRoZSBET00gaW5mbyB3ZSBuZWVkLi4uXHJcbiAgICAgIGxldCAkbGluayA9ICQodGhpcyksXHJcbiAgICAgICAgICAkdG9wTGV2ZWxMaW5rcyA9ICRwYXJlbnQuZmluZCgnLm1hX19tYWluLW5hdl9fdG9wLWxpbmsnKSxcclxuICAgICAgICAgIG9wZW4gPSAkbGluay5oYXNDbGFzcyhvcGVuQ2xhc3MpLFxyXG4gICAgICAgICAgJG9wZW5Db250ZW50ID0gJHBhcmVudC5maW5kKCcuanMtbWFpbi1uYXYtY29udGVudC4nICsgb3BlbkNsYXNzKSxcclxuICAgICAgICAgICRmb2N1c2VkRWxlbWVudCA9ICQoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCksXHJcbiAgICAgIC8vIHJlbGV2YW50IGlmIG9wZW4uLlxyXG4gICAgICAgICAgJHRvcExldmVsSXRlbSA9ICRmb2N1c2VkRWxlbWVudC5wYXJlbnRzKCcubWFfX21haW4tbmF2X19pdGVtJyksXHJcbiAgICAgICAgICAkdG9wTGV2ZWxMaW5rID0gJHRvcExldmVsSXRlbS5maW5kKCcubWFfX21haW4tbmF2X190b3AtbGluaycpLFxyXG4gICAgICAgICAgJGRyb3Bkb3duTGlua3MgPSAkbGluay5maW5kKCcubWFfX21haW4tbmF2X19zdWJpdGVtIC5tYV9fbWFpbi1uYXZfX2xpbmsnKSxcclxuICAgICAgICAgIGZvY3VzSW5kZXhJbkRyb3Bkb3duID0gJGRyb3Bkb3duTGlua3MuaW5kZXgoJGZvY3VzZWRFbGVtZW50KSxcclxuICAgICAgICAgIGlzU2hpZnQgPSAhIWUuc2hpZnRLZXk7IC8vIHR5cGVjYXN0IHRvIGJvb2xlYW5cclxuXHJcbiAgICAgIC8vIGRvd24gYXJyb3cgb3IgdGFiIGtleVxyXG4gICAgICBpZigoZS5rZXlDb2RlID09PSA0MCkgfHwgKGUua2V5Q29kZSA9PT0gOSAmJiAhaXNTaGlmdCkpIHtcclxuICAgICAgICAvLyBoaWRlIGNvbnRlbnRcclxuICAgICAgICAvLyBJZiBtZW51YmFyIGZvY3VzXHJcbiAgICAgICAgLy8gIC0gT3BlbiBwdWxsIGRvd24gbWVudSBhbmQgc2VsZWN0IGZpcnN0IG1lbnUgaXRlbVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gSWYgZHJvcGRvd24gZm9jdXNcclxuICAgICAgICAvLyAgLSBTZWxlY3QgbmV4dCBtZW51IGl0ZW1cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYob3Blbikge1xyXG4gICAgICAgICAgaWYoZm9jdXNJbmRleEluRHJvcGRvd24gPT09ICgkZHJvcGRvd25MaW5rcy5sZW5ndGgtMSkgKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmKGZvY3VzSW5kZXhJbkRyb3Bkb3duID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICRkcm9wZG93bkxpbmtzWzFdLmZvY3VzKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgJGRyb3Bkb3duTGlua3NbZm9jdXNJbmRleEluRHJvcGRvd24rMV0uZm9jdXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNob3coJHRvcExldmVsSXRlbS5maW5kKCcuanMtbWFpbi1uYXYtY29udGVudCcpKTtcclxuICAgICAgICAgICR0b3BMZXZlbExpbmsuYXR0cignYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XHJcbiAgICAgICAgICAkbGluay5hZGRDbGFzcyhvcGVuQ2xhc3MpO1xyXG4gICAgICAgICAgaWYoJGRyb3Bkb3duTGlua3NbMV0pIHtcclxuICAgICAgICAgICAgJGRyb3Bkb3duTGlua3NbMV0uZm9jdXMoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICAvLyB1cCBhcnJvdyBvciBzaGlmdCt0YWIga2V5c1xyXG4gICAgICAgaWYoKGUua2V5Q29kZSA9PT0gMzgpIHx8IChlLmtleUNvZGUgPT09IDkgJiYgaXNTaGlmdCkpIHtcclxuICAgICAgICAvLyBoaWRlIGNvbnRlbnRcclxuICAgICAgICAvLyBJZiBtZW51YmFyIGZvY3VzXHJcbiAgICAgICAgLy8gIC0gT3BlbiBwdWxsIGRvd24gbWVudSBhbmQgc2VsZWN0IGZpcnN0IG1lbnUgaXRlbVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gSWYgZHJvcGRvd24gZm9jdXNcclxuICAgICAgICAvLyAgLSBTZWxlY3QgcHJldmlvdXMgbWVudSBpdGVtXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKG9wZW4pIHtcclxuICAgICAgICAgIGlmKGZvY3VzSW5kZXhJbkRyb3Bkb3duIDw9IDEgKSB7IC8vIG5vdCAwIGJjIG9mIGhpZGRlbiBmaXJzdCBsaW5rXHJcbiAgICAgICAgICAgIGhpZGUoJG9wZW5Db250ZW50KTtcclxuICAgICAgICAgICAgJHRvcExldmVsTGluay5mb2N1cygpLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJGRyb3Bkb3duTGlua3NbZm9jdXNJbmRleEluRHJvcGRvd24tMV0uZm9jdXMoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzaG93KCR0b3BMZXZlbEl0ZW0uZmluZCgnLmpzLW1haW4tbmF2LWNvbnRlbnQnKSk7XHJcbiAgICAgICAgICAkdG9wTGV2ZWxMaW5rLmZvY3VzKCkuYXR0cignYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XHJcbiAgICAgICAgICAkbGluay5hZGRDbGFzcyhvcGVuQ2xhc3MpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gZXNjIGtleVxyXG4gICAgICBpZihlLmtleUNvZGUgPT09IDI3KSB7XHJcbiAgICAgICAgLy8gQ2xvc2UgbWVudSBhbmQgcmV0dXJuIGZvY3VzIHRvIG1lbnViYXJcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaGlkZSgkb3BlbkNvbnRlbnQpO1xyXG4gICAgICAgICRsaW5rLnJlbW92ZUNsYXNzKG9wZW5DbGFzcyk7XHJcbiAgICAgICAgJHRvcExldmVsTGluay5mb2N1cygpLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCdmYWxzZScpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gbGVmdCBhcnJvdyBrZXlcclxuICAgICAgaWYoZS5rZXlDb2RlID09PSAzNykge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAvLyBoaWRlIGNvbnRlbnRcclxuICAgICAgICAvLyBJZiBtZW51YmFyIGZvY3VzXHJcbiAgICAgICAgLy8gIC0gUHJldmlvdXMgbWVudWJhciBpdGVtXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBJZiBkcm9wZG93biBmb2N1c1xyXG4gICAgICAgIC8vICAtIE9wZW4gcHJldmlvdXMgcHVsbCBkb3duIG1lbnUgYW5kIHNlbGVjdCBmaXJzdCBpdGVtXHJcbiAgICAgICAgaGlkZSgkb3BlbkNvbnRlbnQpO1xyXG4gICAgICAgICR0b3BMZXZlbExpbmsuYXR0cignYXJpYS1leHBhbmRlZCcsJ2ZhbHNlJyk7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gJHRvcExldmVsTGlua3MuaW5kZXgoJHRvcExldmVsTGluayktMTtcclxuICAgICAgICBpZigkdG9wTGV2ZWxMaW5rc1tpbmRleF0pIHtcclxuICAgICAgICAgICR0b3BMZXZlbExpbmtzW2luZGV4XS5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICB9XHJcbiAgICAgIC8vIHJpZ2h0IGFycm93IGtleVxyXG4gICAgICBpZihlLmtleUNvZGUgPT09IDM5KSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIC8vIGhpZGUgY29udGVudFxyXG4gICAgICAgIC8vIElmIG1lbnViYXIgZm9jdXNcclxuICAgICAgICAvLyAgLSBOZXh0IG1lbnViYXIgaXRlbVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gSWYgZHJvcGRvd24gZm9jdXNcclxuICAgICAgICAvLyAgLSBPcGVuIG5leHQgcHVsbCBtZW51IGFuZCBzZWxlY3QgZmlyc3QgaXRlbVxyXG4gICAgICAgIGhpZGUoJG9wZW5Db250ZW50KTtcclxuICAgICAgICAkdG9wTGV2ZWxMaW5rLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCdmYWxzZScpO1xyXG4gICAgICAgIGxldCBpbmRleCA9ICR0b3BMZXZlbExpbmtzLmluZGV4KCR0b3BMZXZlbExpbmspKzE7XHJcbiAgICAgICAgaWYoJHRvcExldmVsTGlua3NbaW5kZXhdKSB7XHJcbiAgICAgICAgICAkdG9wTGV2ZWxMaW5rc1tpbmRleF0uZm9jdXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBrZXkgY29kZSA5IGlzIHRoZSB0YWIga2V5XHJcbiAgICAgIGlmKG9wZW4gfHwgKHR5cGVvZihlLmtleWNvZGUpICE9PSBcInVuZGVmaW5lZFwiICYmIGUua2V5Y29kZSAhPT0gOSkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuICAgICRtYWluTmF2SXRlbXMub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICQodGhpcykuY2hpbGRyZW4oJ2J1dHRvbicpLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsXCJ0cnVlXCIpO1xyXG5cclxuICAgICAgaWYod2luZG93V2lkdGggPiBicmVha3BvaW50KSB7XHJcbiAgICAgICAgbGV0ICRvcGVuQ29udGVudCA9ICQodGhpcykuZmluZCgnLmpzLW1haW4tbmF2LWNvbnRlbnQnKTtcclxuICAgICAgICBzaG93KCRvcGVuQ29udGVudCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgJG1haW5OYXZJdGVtcy5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgJCh0aGlzKS5jaGlsZHJlbignYnV0dG9uJykuYXR0cihcImFyaWEtZXhwYW5kZWRcIixcImZhbHNlXCIpO1xyXG5cclxuICAgICAgaWYod2luZG93V2lkdGggPiBicmVha3BvaW50KSB7XHJcbiAgICAgICAgbGV0ICRvcGVuQ29udGVudCA9ICQodGhpcykuZmluZCgnLmpzLW1haW4tbmF2LWNvbnRlbnQnKTtcclxuICAgICAgICBoaWRlKCRvcGVuQ29udGVudCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgJG1haW5OYXZUb2dnbGUuY2hpbGRyZW4oJ2J1dHRvbiwgYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgbGV0ICRlbCA9ICQodGhpcyk7XHJcbiAgICAgIGxldCAkZWxQYXJlbnQgPSAkKHRoaXMpLnBhcmVudCgpO1xyXG4gICAgICBsZXQgJGNvbnRlbnQgPSAkZWxQYXJlbnQuZmluZCgnLmpzLW1haW4tbmF2LWNvbnRlbnQnKTtcclxuICAgICAgbGV0ICRvcGVuQ29udGVudCA9ICRwYXJlbnQuZmluZCgnLmpzLW1haW4tbmF2LWNvbnRlbnQuJyArIG9wZW5DbGFzcyk7XHJcbiAgICAgIGxldCBpc09wZW4gPSAkY29udGVudC5oYXNDbGFzcyhvcGVuQ2xhc3MpO1xyXG5cclxuICAgICAgLy8gbW9iaWxlXHJcbiAgICAgIGlmKHdpbmRvd1dpZHRoIDw9IGJyZWFrcG9pbnQpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy8gYWRkIG9wZW4gY2xhc3MgdG8gdGhpcyBpdGVtXHJcbiAgICAgICAgJGVsUGFyZW50LmFkZENsYXNzKG9wZW5DbGFzcyk7XHJcbiAgICAgICAgc2hvdygkY29udGVudCk7XHJcbiAgICAgICAgJGVsLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGhpZGUoJG9wZW5Db250ZW50KTtcclxuICAgICAgICAkZWwuYXR0cignYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xyXG5cclxuICAgICAgICBpZighaXNPcGVuKSB7XHJcbiAgICAgICAgICBzaG93KCRjb250ZW50KTtcclxuICAgICAgICAgICRlbC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgJG1haW5OYXZUb2dnbGUubGFzdCgpXHJcbiAgICAgIC5maW5kKCcuanMtbWFpbi1uYXYtY29udGVudCBsaScpXHJcbiAgICAgICAgLmxhc3QoKVxyXG4gICAgICAgICAgLmZpbmQoJ2EnKS5vbigna2V5ZG93bicsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgLy8gcHJldmlvdXMga2V5IHdhcyBub3QgYSBzaGlmdFxyXG4gICAgICAgICAgICBpZihlLmtleUNvZGUgPT09IDkgJiYgcHJldmlvdXNLZXkgIT09IDE2KSB7ICAvLyB0YWIgYXJyb3dcXFxyXG4gICAgICAgICAgICAgIGxldCAkb3BlbkNvbnRlbnQgPSAkcGFyZW50LmZpbmQoJy5qcy1tYWluLW5hdi1jb250ZW50LicgKyBvcGVuQ2xhc3MpO1xyXG4gICAgICAgICAgICAgIGhpZGUoJG9wZW5Db250ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwcmV2aW91c0tleSA9IGUua2V5Q29kZTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgJCgnLmpzLWNsb3NlLXN1Yi1uYXYnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICBsZXQgJG9wZW5Db250ZW50ID0gJHBhcmVudC5maW5kKCcuanMtbWFpbi1uYXYtY29udGVudC4nICsgb3BlbkNsYXNzKTtcclxuICAgICAgaGlkZSgkb3BlbkNvbnRlbnQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gSGlkZSBhbnkgb3BlbiBzdWJtZW51IGNvbnRlbnQgd2hlbiB0aGUgc2lkZWJhciBtZW51IGlzIGNsb3NlZFxyXG4gICAgJCgnLmpzLWhlYWRlci1tZW51LWJ1dHRvbicpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICBsZXQgJG9wZW5Db250ZW50ID0gJHBhcmVudC5maW5kKCcuanMtbWFpbi1uYXYtY29udGVudC4nICsgb3BlbkNsYXNzKTtcclxuICAgICAgaGlkZSgkb3BlbkNvbnRlbnQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gaGlkZSgkY29udGVudCkge1xyXG4gICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3Moc3VibWVudUNsYXNzKTtcclxuICAgICAgJHBhcmVudC5maW5kKFwiLlwiICsgb3BlbkNsYXNzKS5yZW1vdmVDbGFzcyhvcGVuQ2xhc3MpO1xyXG5cclxuICAgICAgaWYod2luZG93V2lkdGggPD0gYnJlYWtwb2ludCkge1xyXG4gICAgICAgICRjb250ZW50LmFkZENsYXNzKGNsb3NlQ2xhc3MpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICRjb250ZW50XHJcbiAgICAgICAgLnN0b3AoIHRydWUsIHRydWUgKVxyXG4gICAgICAgIC5zbGlkZVVwKCdmYXN0JyxmdW5jdGlvbigpIHtcclxuICAgICAgICAgICRjb250ZW50XHJcbiAgICAgICAgICAgIC5hZGRDbGFzcyhjbG9zZUNsYXNzKVxyXG4gICAgICAgICAgICAuc2xpZGVEb3duKDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2hvdygkY29udGVudCkge1xyXG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3Moc3VibWVudUNsYXNzKTtcclxuICAgICAgaWYod2luZG93V2lkdGggPD0gYnJlYWtwb2ludCkge1xyXG4gICAgICAgICRjb250ZW50XHJcbiAgICAgICAgICAuYWRkQ2xhc3Mob3BlbkNsYXNzKVxyXG4gICAgICAgICAgLnJlbW92ZUNsYXNzKGNsb3NlQ2xhc3MpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICRjb250ZW50XHJcbiAgICAgICAgICAuc3RvcCggdHJ1ZSwgdHJ1ZSApXHJcbiAgICAgICAgICAuZGVsYXkoIDIwMCApXHJcbiAgICAgICAgICAuc2xpZGVVcCgwLGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkY29udGVudFxyXG4gICAgICAgICAgICAgIC5hZGRDbGFzcyhvcGVuQ2xhc3MpXHJcbiAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKGNsb3NlQ2xhc3MpXHJcbiAgICAgICAgICAgICAgLnNsaWRlRG93bignZmFzdCcpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gIH0pO1xyXG5cclxufSh3aW5kb3csZG9jdW1lbnQsalF1ZXJ5KTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHdpbmRvdyxkb2N1bWVudCwkLHVuZGVmaW5lZCkge1xuXG4gICQoJy5qcy1tYWluLW5hdicpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgbGV0ICRwYXJlbnQgPSAkKHRoaXMpLFxuICAgICAgJG1haW5OYXZUb2dnbGUgPSAkcGFyZW50LmZpbmQoJy5qcy1tYWluLW5hdi10b2dnbGUnKTtcblxuICAgIC8vIG1ha2Ugcm9vdCB0b3AtbGV2ZWwgbGlua3MgaW5lcnQgZm9yIHBpbG90XG4gICAgJG1haW5OYXZUb2dnbGUuY2hpbGRyZW4oJ2EnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG5cbiAgICAvLyBFbnN1cmUgdG9wLWxldmVsIGxpbmtzIHRoYXQgYXJlIHBvdGVudGlhbCBhbmNob3IgbGlua3MgY2xvc2UgdGhlIHNpZGViYXIgb24gbW9iaWxlXG4gICAgJHBhcmVudC5maW5kKCcuanMtbWFpbi1uYXYtdG9wLWxpbmsnKS5maW5kKCdhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAkKCcuanMtaGVhZGVyLW1lbnUtYnV0dG9uJykudHJpZ2dlcignY2xpY2snKTtcbiAgICB9KTtcblxuICB9KTtcblxufSh3aW5kb3csZG9jdW1lbnQsalF1ZXJ5KTtcblxuIiwiLy8gKioqKioqIE1lbnUgYnV0dG9uICoqKioqKlxyXG5sZXQgbWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtaGVhZGVyLW1lbnUtYnV0dG9uXCIpO1xyXG5cclxuaWYobnVsbCAhPT0gbWVudUJ1dHRvbil7XHJcbiAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5jbGFzc0xpc3QudG9nZ2xlKFwic2hvdy1tZW51XCIpO1xyXG4gIH0pO1xyXG59XHJcblxyXG4vLyAqKioqKiogTWFpbiBIZWFkZXIgU2VhcmNoIGJ1dHRvbiBvbiBtb2JpbGUgc2hvdWxkIG9wZW4gdGhlIG1vYmlsZSBtZW51ICAqKioqKipcclxubGV0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWhlYWRlci1zZWFyY2gtbWVudSAuanMtaGVhZGVyLXNlYXJjaC1mb3JtXCIpO1xyXG5cclxuaWYobnVsbCAhPT0gc2VhcmNoRm9ybSl7XHJcbiAgc2VhcmNoRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA+IDYyMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuY2xhc3NMaXN0LnRvZ2dsZShcInNob3ctbWVudVwiKTtcclxuICB9KTtcclxufVxyXG5cclxuXHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh3aW5kb3csZG9jdW1lbnQsJCx1bmRlZmluZWQpIHtcblxuICAkKCcuanMtbWEtcmVzcG9uc2l2ZS12aWRlbycpLmZpdFZpZHMoKTtcblxufSh3aW5kb3csZG9jdW1lbnQsalF1ZXJ5KTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAod2luZG93LGRvY3VtZW50LCQsdW5kZWZpbmVkKSB7XHJcblxyXG4gICQoJy5qcy1tYS1yaWNoLXRleHQgdGFibGUnKS53cmFwKCBcIjxkaXYgY2xhc3M9J21hX19yaWNoLXRleHRfX3RhYmxlLXdyYXBwZXInPjwvZGl2PlwiICk7XHJcblxyXG4gIC8vIGdldCB0aGUgZXh0ZXJuYWwgU1ZHIGxpbmsgY29kZVxyXG4gIGZldGNoKHRoZW1lUGF0aCArICcvaW1hZ2VzL3N2Zy1pY29ucy9hcnJvdy5zdmcnLCB7XHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgaGVhZGVyczogbmV3IEhlYWRlcnMoe1xyXG4gICAgICAnQ29udGVudC1UeXBlJzogJ3RleHQvcGxhaW4nXHJcbiAgICB9KVxyXG4gIH0pLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgIHJldHVybiByZXNwb25zZS50ZXh0KCk7XHJcbiAgfSkudGhlbihmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAvLyBmaW5kIGFsbCBleHRlcm5hbCBsaW5rcyB0aGF0IG5lZWQgYW4gaWNvblxyXG4gICAgJCgnLmpzLW1hLXJpY2gtdGV4dCBhJykuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICBsZXQgJGVsID0gJCh0aGlzKTtcclxuXHJcbiAgICAgIGlmKCRlbC5jaGlsZHJlbigpLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gd3JhcCB0aGUgbGluayBpbiBhIHNwYW4gdGFnXHJcbiAgICAgICRlbC53cmFwKCc8c3BhbiBjbGFzcz1cIm1hX19kZWNvcmF0aXZlLWxpbmtcIj48L3NwYW4+Jyk7XHJcbiAgICAgIC8vIGFwcGVuZCB0aGUgU1ZHIHRvIHRoZSBsaW5rXHJcbiAgICAgICRlbC5hcHBlbmQoJyZuYnNwOycgKyBkYXRhKTtcclxuICAgIH0pO1xyXG4gIH0pLmNhdGNoKGZ1bmN0aW9uKGUpe1xyXG4gICAgY29uc29sZS5lcnJvcignZmFpbGVkIHRvIHN0eWxlIHJpY2ggdGV4dCBsaW5rJyk7XHJcbiAgfSk7XHJcblxyXG59KHdpbmRvdyxkb2N1bWVudCxqUXVlcnkpOyIsImltcG9ydCBjaGVja01vYmlsZSBmcm9tIFwiLi4vaGVscGVycy9jc3NDb250cm9sQ29kZS5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHdpbmRvdyxkb2N1bWVudCwkLHVuZGVmaW5lZCkge1xyXG5cclxuICAkKFwiLmpzLXNjcm9sbC1hbmNob3JzXCIpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICBsZXQgJGVsID0gJCh0aGlzKSxcclxuICAgICAgICAkZWxQYXJlbnQgPSAkZWwucGFyZW50KCkuY3NzKCdwb3NpdGlvbicpID09PSAncmVsYXRpdmUnID8gJGVsLnBhcmVudCgpIDogJGVsLnBhcmVudCgpLm9mZnNldFBhcmVudCgpLFxyXG4gICAgICAgICRsaW5rcyA9ICRlbC5maW5kKCcuanMtc2Nyb2xsLWFuY2hvcnMtbGluaycpLFxyXG4gICAgICAgIGVsSGVpZ2h0LFxyXG4gICAgICAgIGhlYWRlckJ1ZmZlciA9IDAsXHJcbiAgICAgICAgbG93ZXJMaW1pdCxcclxuICAgICAgICB1cHBlckxpbWl0LFxyXG4gICAgICAgIGRlYm91bmNlVGltZXIsXHJcbiAgICAgICAgYWN0aXZlQ2xhc3MgPSBcImlzLWFjdGl2ZVwiLFxyXG4gICAgICAgIGFjdGl2ZUFuY2hvckluZGV4ID0gMCxcclxuICAgICAgICBhbmNob3JzID0gW10sXHJcbiAgICAgICAgbnVtQW5jaG9ycyA9IDAsXHJcbiAgICAgICAgaXNNb2JpbGUgPSBmYWxzZSxcclxuICAgICAgICBsaW5rU2Nyb2xsaW5nID0gZmFsc2U7XHJcblxyXG4gICAgc2V0VmFyaWFibGVzKCk7XHJcblxyXG4gICAgLy8gZGVmYXVsdCBhc3N1bXB0aW9uIGFzIHRvIHdoZXJlIHRoZSBzY3JlZW4gd2lsbCBsb2FkXHJcbiAgICAkZWwuYXR0cignZGF0YS1zdGlja3knLCd0b3AnKTtcclxuXHJcbiAgICAvLyB1cGRhdGUgdmFyaWFibGVzIG9uZSBtb3JlIHRpbWUgdG8gY2F0Y2ggYW55IHBvc3QgcGFnZSBsb2FkIGNoYW5nZXNcclxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgIHNldFZhcmlhYmxlcygpO1xyXG4gICAgfSwxMDAwKTtcclxuXHJcbiAgICAkbGlua3Mub24oJ2NsaWNrJyxmdW5jdGlvbihlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIC8vIGlzIHRoZSBtZW51IGNsb3NlZCBvbiBtb2JpbGVcclxuICAgICAgaWYoISRlbC5oYXNDbGFzcygnaXMtb3BlbicpICYmIGlzTW9iaWxlKSB7ICAgICBcclxuICAgICAgICAvLyBqdXN0IHNob3cgdGhlIG1lbnVcclxuICAgICAgICAkZWwuYWRkQ2xhc3MoJ2lzLW9wZW4nKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICBhY3RpdmVBbmNob3JJbmRleCA9ICQodGhpcykuZGF0YSgnaW5kZXgnKTtcclxuICAgICAgLy8gZmluZCB0aGUgbG9jYXRpb24gb2YgdGhlIGRlc2lyZWQgbGluayBhbmQgc2Nyb2xsIHRoZSBwYWdlXHJcbiAgICAgIGxldCBwb3NpdGlvbiA9IGFuY2hvcnNbYWN0aXZlQW5jaG9ySW5kZXhdLnBvc2l0aW9uO1xyXG4gICAgICAvLyBjbG9zZSB0aGUgbWVudVxyXG4gICAgICAkZWwucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKTtcclxuICAgICAgLy8gcmVtb3ZlIGFjdGl2ZSBmbGFnIGZyb20gb3RoZXIgbGlua3NcclxuICAgICAgJGVsLmZpbmQoJy4nICsgYWN0aXZlQ2xhc3MpLnJlbW92ZUNsYXNzKGFjdGl2ZUNsYXNzKTtcclxuICAgICAgLy8gbWFyayB0aGlzIGxpbmsgYXMgYWN0aXZlXHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoYWN0aXZlQ2xhc3MpO1xyXG4gICAgICAvLyBwcmV2ZW50IHRoZSBzY3JvbGwgZXZlbnQgZnJvbSB1cGRhdGluZyBhY3RpdmUgbGlua3NcclxuICAgICAgbGlua1Njcm9sbGluZyA9IHRydWU7XHJcblxyXG4gICAgICAkKFwiaHRtbCxib2R5XCIpLnN0b3AodHJ1ZSx0cnVlKS5hbmltYXRlKHtzY3JvbGxUb3A6cG9zaXRpb259LCAnNzUwJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBsaW5rU2Nyb2xsaW5nID0gZmFsc2U7XHJcbiAgICAgICAgLy8gR2V0IHRoZSBsaW5rIGhhc2ggdGFyZ2V0IHNvIHdlIGNhbiBicmluZyBmb2N1cyB0byBpdFxyXG4gICAgICAgIGxldCBoYXNoID0gYW5jaG9yc1thY3RpdmVBbmNob3JJbmRleF0uaGFzaDtcclxuICAgICAgICAvLyBicmluZyBmb2N1cyB0byB0aGUgaXRlbSB3ZSBqdXN0IHNjcm9sbGVkIHRvXHJcbiAgICAgICAgJChoYXNoKS5mb2N1cygpO1xyXG4gICAgICB9KTtcclxuICAgICAgXHJcbiAgICB9KTtcclxuXHJcbiAgICAkZWwuZmluZChcIi5qcy1zY3JvbGwtYW5jaG9ycy10b2dnbGVcIikub24oJ2NsaWNrJyxmdW5jdGlvbigpIHtcclxuICAgICAgJGVsLnRvZ2dsZUNsYXNzKCdpcy1vcGVuJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBtYWtlIHRoZSBsaW5rcyBzdGlja3lcclxuICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmKHR5cGVvZiBkZWJvdW5jZVRpbWVyID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgd2luZG93LmNsZWFyVGltZW91dChkZWJvdW5jZVRpbWVyKTtcclxuICAgICAgfVxyXG4gICAgICBkZWJvdW5jZVRpbWVyID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICBzZXRWYXJpYWJsZXMoKTtcclxuICAgICAgICBzZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIGFjdGl2YXRlTGluaygpO1xyXG4gICAgICB9LDMwMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgc2V0UG9zaXRpb24oKTtcclxuICAgICAgYWN0aXZhdGVMaW5rKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBzZXRWYXJpYWJsZXMoKSB7XHJcbiAgICAgIGxldCB0b3BPZmZzZXQgPSAwO1xyXG5cclxuICAgICAgaGVhZGVyQnVmZmVyID0gMDtcclxuICAgICAgZWxIZWlnaHQgPSAkZWwuaGVpZ2h0KCk7XHJcbiAgICAgIHVwcGVyTGltaXQgPSAkZWxQYXJlbnQub2Zmc2V0KCkudG9wO1xyXG4gICAgICBpc01vYmlsZSA9IGNoZWNrTW9iaWxlKCRlbCk7XHJcblxyXG4gICAgICBpZigkZWxQYXJlbnRbMF0uaGFzQXR0cmlidXRlKFwic3R5bGVcIikgJiYgIWlzTW9iaWxlKSB7XHJcbiAgICAgICAgJGVsUGFyZW50LnJlbW92ZUF0dHIoJ3N0eWxlJyk7XHJcbiAgICAgIH1cclxuIFxyXG4gICAgICBpZihpc01vYmlsZSkge1xyXG4gICAgICAgIGhlYWRlckJ1ZmZlciA9ICQoJy5qcy1zdGlja3ktaGVhZGVyJykuaGVpZ2h0KCkgfHwgMDtcclxuICAgICAgICB1cHBlckxpbWl0IC09IGhlYWRlckJ1ZmZlcjtcclxuICAgICAgICB0b3BPZmZzZXQgPSBlbEhlaWdodDtcclxuICAgICAgfVxyXG5cclxuICAgICAgbG93ZXJMaW1pdCA9IHVwcGVyTGltaXQgKyAkZWxQYXJlbnQub3V0ZXJIZWlnaHQodHJ1ZSkgLSAkZWwuaGVpZ2h0KCk7XHJcblxyXG4gICAgICAvLyBsb2NhdGUgdGhlIHBvc2l0aW9uIG9mIGFsbCBvZiB0aGUgYW5jaG9yIHRhcmdldHNcclxuICAgICAgYW5jaG9ycyA9IG5ldyBBcnJheTtcclxuICAgICAgJGxpbmtzLmVhY2goZnVuY3Rpb24oaSxlKXtcclxuICAgICAgICBsZXQgJGVsID0gJCh0aGlzKSxcclxuICAgICAgICAgICRsaW5rID0gJGVsLmlzKCdhJykgPyAkZWwgOiAkZWwuZmluZCgnYScpLFxyXG4gICAgICAgICAgaGFzaCA9ICRsaW5rWzBdLmhhc2gsXHJcbiAgICAgICAgICBwb3NpdGlvbiA9ICQoaGFzaCkub2Zmc2V0KCkgPyAkKGhhc2gpLm9mZnNldCgpLnRvcCAtIGhlYWRlckJ1ZmZlciAtIHRvcE9mZnNldCA6IHVwcGVyTGltaXQ7XHJcblxyXG4gICAgICAgIGFuY2hvcnNbaV0gPSB7IGhhc2gsIHBvc2l0aW9uIH07XHJcblxyXG4gICAgICAgICRlbC5kYXRhKCdpbmRleCcsaSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gcmVjb3JkIHRoZSBudW1iZXIgb2YgYW5jaG9ycyBmb3IgcGVyZm9ybWFuY2VcclxuICAgICAgbnVtQW5jaG9ycyA9IGFuY2hvcnMubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldFBvc2l0aW9uKCkge1xyXG4gICAgICBsZXQgd2luZG93VG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpLFxyXG4gICAgICAgICAgYXR0ciA9ICRlbC5hdHRyKCdkYXRhLXN0aWNreScpLFxyXG4gICAgICAgICAgdG9wID0gYXR0ciAhPT0gJ3RvcCcgJiYgd2luZG93VG9wIDw9IHVwcGVyTGltaXQsIFxyXG4gICAgICAgICAgbWlkZGxlID0gYXR0ciAhPT0gJ21pZGRsZScgJiYgd2luZG93VG9wIDwgbG93ZXJMaW1pdCAmJiB3aW5kb3dUb3AgPiB1cHBlckxpbWl0LFxyXG4gICAgICAgICAgYm90dG9tID0gYXR0ciAhPT0gJ2JvdHRvbScgJiYgd2luZG93VG9wID49IGxvd2VyTGltaXQ7XHJcbiAgICAgIFxyXG4gICAgICBpZigkZWxQYXJlbnRbMF0uaGFzQXR0cmlidXRlKFwic3R5bGVcIikgJiYgIWlzTW9iaWxlKSB7XHJcbiAgICAgICAgJGVsUGFyZW50LnJlbW92ZUF0dHIoJ3N0eWxlJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKCEkZWxQYXJlbnRbMF0uaGFzQXR0cmlidXRlKFwic3R5bGVcIikgJiYgaXNNb2JpbGUgJiYgYXR0ciA9PT0gJ21pZGRsZScpIHtcclxuICAgICAgICAkZWxQYXJlbnQuY3NzKHsncGFkZGluZ1RvcCc6ZWxIZWlnaHR9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYodG9wKSB7XHJcbiAgICAgICAgJGVsLmF0dHIoJ2RhdGEtc3RpY2t5JywndG9wJyk7XHJcblxyXG4gICAgICAgIGlmKGlzTW9iaWxlKXtcclxuICAgICAgICAgICRlbFBhcmVudC5yZW1vdmVBdHRyKCdzdHlsZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBcclxuICAgICAgZWxzZSBpZiAobWlkZGxlKSB7XHJcbiAgICAgICAgJGVsLmF0dHIoJ2RhdGEtc3RpY2t5JywnbWlkZGxlJyk7XHJcblxyXG4gICAgICAgIGlmKGlzTW9iaWxlKXtcclxuICAgICAgICAgICRlbFBhcmVudC5jc3MoeydwYWRkaW5nVG9wJzplbEhlaWdodH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBcclxuICAgICAgZWxzZSBpZiAoYm90dG9tKSB7XHJcbiAgICAgICAgJGVsLmF0dHIoJ2RhdGEtc3RpY2t5JywnYm90dG9tJyk7XHJcblxyXG4gICAgICAgIGlmKGlzTW9iaWxlKXtcclxuICAgICAgICAgICRlbFBhcmVudC5yZW1vdmVBdHRyKCdzdHlsZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFjdGl2YXRlTGluaygpIHtcclxuICAgICAgLy8gZG8gd2UgaGF2ZSBtb3JlIHRoYW4gb25lIGFuY2hvclxyXG4gICAgICBpZihudW1BbmNob3JzIDwgMiB8fCBsaW5rU2Nyb2xsaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBnZXQgdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uIGFuZCBvZmZzZXQgYnkgaGFsZiB0aGUgdmlldyBwb3J0XHJcbiAgICAgIGxldCB3aW5kb3dUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCkgKyAod2luZG93LmlubmVySGVpZ2h0LzIpLFxyXG4gICAgICAgICAgY3VycmVudEFuY2hvciA9IGFjdGl2ZUFuY2hvckluZGV4O1xyXG4gICAgICBcclxuICAgICAgLy8gaXMgdGhlcmUgYSBwcmV2IHRhcmdldFxyXG4gICAgICAvLyBhbmQgXHJcbiAgICAgIC8vIGlzIHRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbiBhYm92ZSB0aGUgY3VycmVudCB0YXJnZXRcclxuICAgICAgaWYoY3VycmVudEFuY2hvciA+IDAgJiYgd2luZG93VG9wIDwgYW5jaG9yc1thY3RpdmVBbmNob3JJbmRleF0ucG9zaXRpb24pIHsgXHJcbiAgICAgICAgLy8gbWFrZSB0aGUgcHJldiBsaW5rIGFjdGl2ZVxyXG4gICAgICAgIC0tYWN0aXZlQW5jaG9ySW5kZXg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGlzIHRoZXJlIGEgbmV4dCB0YXJnZXRcclxuICAgICAgLy8gYW5kXHJcbiAgICAgIC8vIGlzIHRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbiBiZWxvdyB0aGUgbmV4dCB0YXJnZXRcclxuICAgICAgZWxzZSBpZihjdXJyZW50QW5jaG9yIDwgbnVtQW5jaG9ycy0xICYmIHdpbmRvd1RvcCA+IGFuY2hvcnNbYWN0aXZlQW5jaG9ySW5kZXgrMV0ucG9zaXRpb24pIHsgXHJcbiAgICAgICAgLy8gbWFrZSB0aGUgbmV4dCBsaW5rIGFjdGl2ZVxyXG4gICAgICAgICsrYWN0aXZlQW5jaG9ySW5kZXg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChjdXJyZW50QW5jaG9yICE9PSBhY3RpdmVBbmNob3JJbmRleCkge1xyXG4gICAgICAgIC8vIG1vdmUgdGhlIGFjdGl2ZSBmbGFnXHJcbiAgICAgICAgJGVsLmZpbmQoJy4nICsgYWN0aXZlQ2xhc3MpLnJlbW92ZUNsYXNzKGFjdGl2ZUNsYXNzKTtcclxuICAgICAgICAkbGlua3MuZXEoYWN0aXZlQW5jaG9ySW5kZXgpLmFkZENsYXNzKGFjdGl2ZUNsYXNzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9KTtcclxuXHJcbn0od2luZG93LGRvY3VtZW50LGpRdWVyeSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh3aW5kb3csZG9jdW1lbnQsJCx1bmRlZmluZWQpIHtcclxuXHJcbiAgJCgnLmpzLXV0aWwtbmF2JykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgIGxldCBvcGVuQ2xhc3MgPSBcImlzLW9wZW5cIixcclxuICAgICAgICBjbG9zZUNsYXNzID0gXCJpcy1jbG9zZWRcIixcclxuICAgICAgICBzdWJtZW51Q2xhc3MgPSBcInNob3ctdXRpbG1lbnVcIixcclxuICAgICAgICAkcGFyZW50ID0gJCh0aGlzKSxcclxuICAgICAgICB3YWl0Rm9ySXQgPSBudWxsO1xyXG5cclxuICAgICQoJy5qcy1jbG9zZS1zdWItbmF2Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgbGV0ICRvcGVuQ29udGVudCA9ICRwYXJlbnQuZmluZCgnLmpzLXV0aWwtbmF2LWNvbnRlbnQuJyArIG9wZW5DbGFzcyk7XHJcbiAgICAgIGhpZGUoJG9wZW5Db250ZW50KTtcclxuICAgIH0pO1xyXG5cclxuICAgICRwYXJlbnQuZmluZCgnLmpzLXV0aWwtbmF2LXRvZ2dsZSA+IGEnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgIGUucHJldmVudGRlZmF1bHQ7XHJcblxyXG4gICAgICBsZXQgb3BlbiA9ICQodGhpcykuaGFzQ2xhc3Mob3BlbkNsYXNzKSxcclxuICAgICAgICAkY29udGVudCA9ICQodGhpcykubmV4dCgnLmpzLXV0aWwtbmF2LWNvbnRlbnQnKSxcclxuICAgICAgICAkb3BlbkNvbnRlbnQgPSAkcGFyZW50LmZpbmQoJy5qcy11dGlsLW5hdi1jb250ZW50LicgKyBvcGVuQ2xhc3MpO1xyXG5cclxuICAgICAgLy8gaGlkZSBvdGhlciBjb250ZW50XHJcbiAgICAgIGhpZGUoJG9wZW5Db250ZW50KTtcclxuICAgICAgXHJcbiAgICAgIGlmKG9wZW4pIHsgXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIGFkZCBvcGVuIGNsYXNzIHRvIHRoaXMgaXRlbVxyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKG9wZW5DbGFzcyk7XHJcbiAgICAgIC8vIGFkZCBvcGVuIGNsYXNzIHRvIHRoZSBjb3JyZWN0IGNvbnRlbnQgYmFzZWQgb24gaW5kZXhcclxuICAgICAgJGNvbnRlbnQuYXR0cihcImFyaWEtaGlkZGVuXCIsXCJmYWxzZVwiKTtcclxuXHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAkY29udGVudFxyXG4gICAgICAgICAgLnJlbW92ZUNsYXNzKGNsb3NlQ2xhc3MpXHJcbiAgICAgICAgICAuYWRkQ2xhc3Mob3BlbkNsYXNzKTtcclxuICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3Moc3VibWVudUNsYXNzKVxyXG4gICAgICB9LCAuMSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkcGFyZW50LmZpbmQoJy5qcy1jbG9zZS11dGlsLW5hdicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0O1xyXG5cclxuICAgICAgaGlkZSggJCh0aGlzKS5jbG9zZXN0KCcuanMtdXRpbC1uYXYtY29udGVudCcpICk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuanMtY2xvc2Utc3ViLW5hdicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgIGxldCAkb3BlbkNvbnRlbnQgPSAkcGFyZW50LmZpbmQoJy5qcy11dGlsLW5hdi1jb250ZW50LicgKyBvcGVuQ2xhc3MpO1xyXG4gICAgICBoaWRlKCRvcGVuQ29udGVudCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBoaWRlKCRjb250ZW50KSB7XHJcbiAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcyhzdWJtZW51Q2xhc3MpXHJcbiAgICAgICRwYXJlbnQuZmluZChcIi5cIiArIG9wZW5DbGFzcykucmVtb3ZlQ2xhc3Mob3BlbkNsYXNzKTtcclxuICAgICAgJGNvbnRlbnRcclxuICAgICAgICAucmVtb3ZlQ2xhc3Mob3BlbkNsYXNzKVxyXG4gICAgICAgIC5hZGRDbGFzcyhjbG9zZUNsYXNzKTtcclxuXHJcbiAgICAgIGlmKHdhaXRGb3JJdCkge1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh3YWl0Rm9ySXQpO1xyXG4gICAgICB9XHJcbiAgICAgIHdhaXRGb3JJdCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAkY29udGVudC5hdHRyKFwiYXJpYS1oaWRkZW5cIixcInRydWVcIik7XHJcbiAgICAgIH0sIDEwMDApO1xyXG4gICAgfVxyXG5cclxuICB9KTtcclxuXHJcbn0od2luZG93LGRvY3VtZW50LGpRdWVyeSk7XHJcbiJdfQ==