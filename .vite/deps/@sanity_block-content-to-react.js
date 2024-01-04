import {
  require_image_url_umd
} from "./chunk-27I7EFQB.js";
import {
  require_react
} from "./chunk-UM3JHGVO.js";
import {
  __commonJS
} from "./chunk-CEQRFMJQ.js";

// node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }
      return to;
    };
  }
});

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "node_modules/prop-types/lib/has.js"(exports, module) {
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    var printWarning = function() {
    };
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has();
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error(
                  (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
              );
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module.exports = checkPropTypes;
  }
});

// node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    var ReactIs = require_react_is();
    var assign = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (true) {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function(isValidElement, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        } else {
          return x !== x && y !== y;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3) {
                printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
              { expectedType }
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning(
                "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              );
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker2 = arrayOfTypeCheckers[i2];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError(
          (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/prop-types/index.js"(exports, module) {
    if (true) {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// node_modules/@sanity/generate-help-url/index.js
var require_generate_help_url = __commonJS({
  "node_modules/@sanity/generate-help-url/index.js"(exports, module) {
    var baseUrl = "https://docs.sanity.io/help/";
    module.exports = function generateHelpUrl(slug) {
      return baseUrl + slug;
    };
  }
});

// node_modules/@sanity/block-content-to-hyperscript/lib/getImageUrl.js
var require_getImageUrl = __commonJS({
  "node_modules/@sanity/block-content-to-hyperscript/lib/getImageUrl.js"(exports, module) {
    "use strict";
    var generateHelpUrl = require_generate_help_url();
    var urlBuilder = require_image_url_umd();
    var objectAssign = require_object_assign();
    var enc = encodeURIComponent;
    var materializeError = "You must either:\n  - Pass `projectId` and `dataset` to the block renderer\n  - Materialize images to include the `url` field.\n\nFor more information, see ".concat(generateHelpUrl("block-content-image-materializing"));
    var getQueryString = function getQueryString2(options) {
      var query = options.imageOptions;
      var keys = Object.keys(query);
      if (!keys.length) {
        return "";
      }
      var params = keys.map(function(key) {
        return "".concat(enc(key), "=").concat(enc(query[key]));
      });
      return "?".concat(params.join("&"));
    };
    var buildUrl = function buildUrl2(props) {
      var node = props.node, options = props.options;
      var projectId = options.projectId, dataset = options.dataset;
      var asset = node.asset;
      if (!asset) {
        throw new Error("Image does not have required `asset` property");
      }
      if (asset.url) {
        return asset.url + getQueryString(options);
      }
      if (!projectId || !dataset) {
        throw new Error(materializeError);
      }
      var ref = asset._ref;
      if (!ref) {
        throw new Error("Invalid image reference in block, no `_ref` found on `asset`");
      }
      return urlBuilder(objectAssign({
        projectId,
        dataset
      }, options.imageOptions || {})).image(node).toString();
    };
    module.exports = buildUrl;
  }
});

// node_modules/@sanity/block-content-to-hyperscript/lib/serializers.js
var require_serializers = __commonJS({
  "node_modules/@sanity/block-content-to-hyperscript/lib/serializers.js"(exports, module) {
    "use strict";
    var objectAssign = require_object_assign();
    var getImageUrl = require_getImageUrl();
    module.exports = function(h, serializerOpts) {
      var serializeOptions = serializerOpts || {
        useDashedStyles: false
      };
      function BlockSerializer(props) {
        var node = props.node, serializers = props.serializers, options = props.options, isInline = props.isInline, children = props.children;
        var blockType = node._type;
        var serializer = serializers.types[blockType];
        if (!serializer) {
          if (options.ignoreUnknownTypes) {
            console.warn('Unknown block type "'.concat(blockType, '", please specify a serializer for it in the `serializers.types` prop'));
            return h(serializers.unknownType, {
              node,
              options,
              isInline
            }, children);
          }
          throw new Error('Unknown block type "'.concat(blockType, '", please specify a serializer for it in the `serializers.types` prop'));
        }
        return h(serializer, {
          node,
          options,
          isInline
        }, children);
      }
      function SpanSerializer(props) {
        var _props$node = props.node, mark = _props$node.mark, children = _props$node.children;
        var isPlain = typeof mark === "string";
        var markType = isPlain ? mark : mark._type;
        var serializer = props.serializers.marks[markType];
        if (!serializer) {
          console.warn('Unknown mark type "'.concat(markType, '", please specify a serializer for it in the `serializers.marks` prop'));
          return h(props.serializers.unknownMark, null, children);
        }
        return h(serializer, props.node, children);
      }
      function ListSerializer(props) {
        var tag = props.type === "bullet" ? "ul" : "ol";
        return h(tag, null, props.children);
      }
      function ListItemSerializer(props) {
        var children = !props.node.style || props.node.style === "normal" ? (
          // Don't wrap plain text in paragraphs inside of a list item
          props.children
        ) : (
          // But wrap any other style in whatever the block serializer says to use
          h(props.serializers.types.block, props, props.children)
        );
        return h("li", null, children);
      }
      function DefaultUnknownTypeSerializer(props) {
        return h("div", {
          style: {
            display: "none"
          }
        }, 'Unknown block type "'.concat(props.node._type, '", please specify a serializer for it in the `serializers.types` prop'));
      }
      function BlockTypeSerializer(props) {
        var style = props.node.style || "normal";
        if (/^h\d/.test(style)) {
          return h(style, null, props.children);
        }
        return style === "blockquote" ? h("blockquote", null, props.children) : h("p", null, props.children);
      }
      function RawMarkSerializer(tag, props) {
        return h(tag, null, props.children);
      }
      function UnderlineSerializer(props) {
        var style = serializeOptions.useDashedStyles ? {
          "text-decoration": "underline"
        } : {
          textDecoration: "underline"
        };
        return h("span", {
          style
        }, props.children);
      }
      function StrikeThroughSerializer(props) {
        return h("del", null, props.children);
      }
      function LinkSerializer(props) {
        return h("a", {
          href: props.mark.href
        }, props.children);
      }
      function ImageSerializer(props) {
        if (!props.node.asset) {
          return null;
        }
        var img = h("img", {
          src: getImageUrl(props)
        });
        return props.isInline ? img : h("figure", null, img);
      }
      function serializeSpan(span, serializers, index, options) {
        if (span === "\n" && serializers.hardBreak) {
          return h(serializers.hardBreak, {
            key: "hb-".concat(index)
          });
        }
        if (typeof span === "string") {
          return serializers.text ? h(serializers.text, {
            key: "text-".concat(index)
          }, span) : span;
        }
        var children;
        if (span.children) {
          children = {
            children: span.children.map(function(child, i) {
              return options.serializeNode(child, i, span.children, true);
            })
          };
        }
        var serializedNode = objectAssign({}, span, children);
        return h(serializers.span, {
          key: span._key || "span-".concat(index),
          node: serializedNode,
          serializers
        });
      }
      var HardBreakSerializer = function HardBreakSerializer2() {
        return h("br");
      };
      var defaultMarkSerializers = {
        strong: RawMarkSerializer.bind(null, "strong"),
        em: RawMarkSerializer.bind(null, "em"),
        code: RawMarkSerializer.bind(null, "code"),
        underline: UnderlineSerializer,
        "strike-through": StrikeThroughSerializer,
        link: LinkSerializer
      };
      var defaultSerializers = {
        // Common overrides
        types: {
          block: BlockTypeSerializer,
          image: ImageSerializer
        },
        marks: defaultMarkSerializers,
        // Less common overrides
        list: ListSerializer,
        listItem: ListItemSerializer,
        block: BlockSerializer,
        span: SpanSerializer,
        hardBreak: HardBreakSerializer,
        unknownType: DefaultUnknownTypeSerializer,
        unknownMark: "span",
        // Container element
        container: "div",
        // Allow overriding text renderer, but leave undefined to just use plain strings by default
        text: void 0,
        // Empty nodes (React uses null, hyperscript with empty strings)
        empty: ""
      };
      return {
        defaultSerializers,
        serializeSpan
      };
    };
  }
});

// node_modules/@sanity/block-content-to-hyperscript/lib/buildMarksTree.js
var require_buildMarksTree = __commonJS({
  "node_modules/@sanity/block-content-to-hyperscript/lib/buildMarksTree.js"(exports, module) {
    "use strict";
    var defaultMarks = ["strong", "em", "code", "underline", "strike-through"];
    var buildMarksTree = function buildMarksTree2(block) {
      var children = block.children, markDefs = block.markDefs;
      if (!children || !children.length) {
        return [];
      }
      var sortedMarks = children.map(sortMarksByOccurences);
      var rootNode = {
        _type: "span",
        children: []
      };
      var nodeStack = [rootNode];
      children.forEach(function(span, i) {
        var marksNeeded = sortedMarks[i];
        if (!marksNeeded) {
          var lastNode = nodeStack[nodeStack.length - 1];
          lastNode.children.push(span);
          return;
        }
        var pos = 1;
        if (nodeStack.length > 1) {
          for (pos; pos < nodeStack.length; pos++) {
            var mark = nodeStack[pos].markKey;
            var index = marksNeeded.indexOf(mark);
            if (index === -1) {
              break;
            }
            marksNeeded.splice(index, 1);
          }
        }
        nodeStack = nodeStack.slice(0, pos);
        var currentNode = findLastParentNode(nodeStack);
        marksNeeded.forEach(function(mark2) {
          var node = {
            _type: "span",
            _key: span._key,
            children: [],
            mark: markDefs.find(function(def) {
              return def._key === mark2;
            }) || mark2,
            markKey: mark2
          };
          currentNode.children.push(node);
          nodeStack.push(node);
          currentNode = node;
        });
        if (isTextSpan(span)) {
          var lines = span.text.split("\n");
          for (var line = lines.length; line-- > 1; ) {
            lines.splice(line, 0, "\n");
          }
          currentNode.children = currentNode.children.concat(lines);
        } else {
          currentNode.children = currentNode.children.concat(span);
        }
      });
      return rootNode.children;
    };
    function sortMarksByOccurences(span, i, spans) {
      if (!span.marks || span.marks.length === 0) {
        return span.marks || [];
      }
      var markOccurences = span.marks.reduce(function(occurences, mark) {
        occurences[mark] = occurences[mark] ? occurences[mark] + 1 : 1;
        for (var siblingIndex = i + 1; siblingIndex < spans.length; siblingIndex++) {
          var sibling = spans[siblingIndex];
          if (sibling.marks && Array.isArray(sibling.marks) && sibling.marks.indexOf(mark) !== -1) {
            occurences[mark]++;
          } else {
            break;
          }
        }
        return occurences;
      }, {});
      var sortByOccurence = sortMarks.bind(null, markOccurences);
      return span.marks.slice().sort(sortByOccurence);
    }
    function sortMarks(occurences, markA, markB) {
      var aOccurences = occurences[markA] || 0;
      var bOccurences = occurences[markB] || 0;
      if (aOccurences !== bOccurences) {
        return bOccurences - aOccurences;
      }
      var aDefaultPos = defaultMarks.indexOf(markA);
      var bDefaultPos = defaultMarks.indexOf(markB);
      if (aDefaultPos !== bDefaultPos) {
        return aDefaultPos - bDefaultPos;
      }
      if (markA < markB) {
        return -1;
      } else if (markA > markB) {
        return 1;
      }
      return 0;
    }
    function isTextSpan(node) {
      return node._type === "span" && typeof node.text === "string" && (Array.isArray(node.marks) || typeof node.marks === "undefined");
    }
    function findLastParentNode(nodes) {
      for (var i = nodes.length - 1; i >= 0; i--) {
        var node = nodes[i];
        if (node._type === "span" && node.children) {
          return node;
        }
      }
      return void 0;
    }
    module.exports = buildMarksTree;
  }
});

// node_modules/@sanity/block-content-to-hyperscript/lib/nestLists.js
var require_nestLists = __commonJS({
  "node_modules/@sanity/block-content-to-hyperscript/lib/nestLists.js"(exports, module) {
    "use strict";
    var objectAssign = require_object_assign();
    function nestLists(blocks) {
      var mode = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "html";
      var tree = [];
      var currentList;
      for (var i = 0; i < blocks.length; i++) {
        var block = blocks[i];
        if (!isListBlock(block)) {
          tree.push(block);
          currentList = null;
          continue;
        }
        if (!currentList) {
          currentList = listFromBlock(block);
          tree.push(currentList);
          continue;
        }
        if (blockMatchesList(block, currentList)) {
          currentList.children.push(block);
          continue;
        }
        if (block.level > currentList.level) {
          var newList = listFromBlock(block);
          if (mode === "html") {
            var lastListItem = lastChild(currentList);
            var newLastChild = objectAssign({}, lastListItem, {
              children: lastListItem.children.concat(newList)
            });
            currentList.children[currentList.children.length - 1] = newLastChild;
          } else {
            currentList.children.push(newList);
          }
          currentList = newList;
          continue;
        }
        if (block.level < currentList.level) {
          var match = findListMatching(tree[tree.length - 1], block);
          if (match) {
            currentList = match;
            currentList.children.push(block);
            continue;
          }
          currentList = listFromBlock(block);
          tree.push(currentList);
          continue;
        }
        if (block.listItem !== currentList.listItem) {
          var _match = findListMatching(tree[tree.length - 1], {
            level: block.level
          });
          if (_match && _match.listItem === block.listItem) {
            currentList = _match;
            currentList.children.push(block);
            continue;
          } else {
            currentList = listFromBlock(block);
            tree.push(currentList);
            continue;
          }
        }
        console.warn("Unknown state encountered for block", block);
        tree.push(block);
      }
      return tree;
    }
    function isListBlock(block) {
      return Boolean(block.listItem);
    }
    function blockMatchesList(block, list) {
      return block.level === list.level && block.listItem === list.listItem;
    }
    function listFromBlock(block) {
      return {
        _type: "list",
        _key: "".concat(block._key, "-parent"),
        level: block.level,
        listItem: block.listItem,
        children: [block]
      };
    }
    function lastChild(block) {
      return block.children && block.children[block.children.length - 1];
    }
    function findListMatching(rootNode, matching) {
      var filterOnType = typeof matching.listItem === "string";
      if (rootNode._type === "list" && rootNode.level === matching.level && filterOnType && rootNode.listItem === matching.listItem) {
        return rootNode;
      }
      var node = lastChild(rootNode);
      if (!node) {
        return false;
      }
      return findListMatching(node, matching);
    }
    module.exports = nestLists;
  }
});

// node_modules/@sanity/block-content-to-hyperscript/lib/generateKeys.js
var require_generateKeys = __commonJS({
  "node_modules/@sanity/block-content-to-hyperscript/lib/generateKeys.js"(exports, module) {
    "use strict";
    var objectAssign = require_object_assign();
    module.exports = function(blocks) {
      return blocks.map(function(block) {
        if (block._key) {
          return block;
        }
        return objectAssign({
          _key: getStaticKey(block)
        }, block);
      });
    };
    function getStaticKey(item) {
      return checksum(JSON.stringify(item)).toString(36).replace(/[^A-Za-z0-9]/g, "");
    }
    function checksum(str) {
      var hash = 0;
      var strlen = str.length;
      if (strlen === 0) {
        return hash;
      }
      for (var i = 0; i < strlen; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash &= hash;
      }
      return hash;
    }
  }
});

// node_modules/@sanity/block-content-to-hyperscript/lib/mergeSerializers.js
var require_mergeSerializers = __commonJS({
  "node_modules/@sanity/block-content-to-hyperscript/lib/mergeSerializers.js"(exports, module) {
    "use strict";
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    var objectAssign = require_object_assign();
    var isDefined = function isDefined2(val) {
      return typeof val !== "undefined";
    };
    module.exports = function mergeSerializers(defaultSerializers, userSerializers) {
      return Object.keys(defaultSerializers).reduce(function(acc, key) {
        var type = _typeof(defaultSerializers[key]);
        if (type === "function") {
          acc[key] = isDefined(userSerializers[key]) ? userSerializers[key] : defaultSerializers[key];
        } else if (type === "object") {
          acc[key] = objectAssign({}, defaultSerializers[key], userSerializers[key]);
        } else {
          acc[key] = typeof userSerializers[key] === "undefined" ? defaultSerializers[key] : userSerializers[key];
        }
        return acc;
      }, {});
    };
  }
});

// node_modules/@sanity/block-content-to-hyperscript/lib/blocksToNodes.js
var require_blocksToNodes = __commonJS({
  "node_modules/@sanity/block-content-to-hyperscript/lib/blocksToNodes.js"(exports, module) {
    "use strict";
    var objectAssign = require_object_assign();
    var buildMarksTree = require_buildMarksTree();
    var nestLists = require_nestLists();
    var generateKeys = require_generateKeys();
    var mergeSerializers = require_mergeSerializers();
    var optionProps = ["projectId", "dataset", "imageOptions", "ignoreUnknownTypes"];
    var isDefined = function isDefined2(val) {
      return typeof val !== "undefined";
    };
    var defaults = {
      imageOptions: {},
      ignoreUnknownTypes: true
    };
    function blocksToNodes(h, properties, defaultSerializers, serializeSpan) {
      var props = objectAssign({}, defaults, properties);
      var rawBlocks = Array.isArray(props.blocks) ? props.blocks : [props.blocks];
      var keyedBlocks = generateKeys(rawBlocks);
      var blocks = nestLists(keyedBlocks, props.listNestMode);
      var serializers = mergeSerializers(defaultSerializers, props.serializers || {});
      var options = optionProps.reduce(function(opts, key) {
        var value = props[key];
        if (isDefined(value)) {
          opts[key] = value;
        }
        return opts;
      }, {});
      function serializeNode(node, index, siblings, isInline) {
        if (isList(node)) {
          return serializeList(node);
        }
        if (isListItem(node)) {
          return serializeListItem(node, findListItemIndex(node, siblings));
        }
        if (isSpan(node)) {
          return serializeSpan(node, serializers, index, {
            serializeNode
          });
        }
        return serializeBlock(node, index, isInline);
      }
      function findListItemIndex(node, siblings) {
        var index = 0;
        for (var i = 0; i < siblings.length; i++) {
          if (siblings[i] === node) {
            return index;
          }
          if (!isListItem(siblings[i])) {
            continue;
          }
          index++;
        }
        return index;
      }
      function serializeBlock(block, index, isInline) {
        var tree = buildMarksTree(block);
        var children = tree.map(function(node, i, siblings) {
          return serializeNode(node, i, siblings, true);
        });
        var blockProps = {
          key: block._key || "block-".concat(index),
          node: block,
          isInline,
          serializers,
          options
        };
        return h(serializers.block, blockProps, children);
      }
      function serializeListItem(block, index) {
        var key = block._key;
        var tree = buildMarksTree(block);
        var children = tree.map(serializeNode);
        return h(serializers.listItem, {
          node: block,
          serializers,
          index,
          key,
          options
        }, children);
      }
      function serializeList(list) {
        var type = list.listItem;
        var level = list.level;
        var key = list._key;
        var children = list.children.map(serializeNode);
        return h(serializers.list, {
          key,
          level,
          type,
          options
        }, children);
      }
      var renderContainerOnSingleChild = Boolean(props.renderContainerOnSingleChild);
      var nodes = blocks.map(serializeNode);
      if (renderContainerOnSingleChild || nodes.length > 1) {
        var containerProps = props.className ? {
          className: props.className
        } : {};
        return h(serializers.container, containerProps, nodes);
      }
      if (nodes[0]) {
        return nodes[0];
      }
      return typeof serializers.empty === "function" ? h(serializers.empty) : serializers.empty;
    }
    function isList(block) {
      return block._type === "list" && block.listItem;
    }
    function isListItem(block) {
      return block._type === "block" && block.listItem;
    }
    function isSpan(block) {
      return typeof block === "string" || block.marks || block._type === "span";
    }
    module.exports = blocksToNodes;
  }
});

// node_modules/@sanity/block-content-to-hyperscript/lib/internals.js
var require_internals = __commonJS({
  "node_modules/@sanity/block-content-to-hyperscript/lib/internals.js"(exports, module) {
    "use strict";
    var getSerializers = require_serializers();
    var _blocksToNodes = require_blocksToNodes();
    var getImageUrl = require_getImageUrl();
    var mergeSerializers = require_mergeSerializers();
    module.exports = {
      blocksToNodes: function blocksToNodes(renderNode, props, defaultSerializers, serializeSpan) {
        if (defaultSerializers) {
          return _blocksToNodes(renderNode, props, defaultSerializers, serializeSpan);
        }
        var serializers = getSerializers(renderNode);
        return _blocksToNodes(renderNode, props, serializers.defaultSerializers, serializers.serializeSpan);
      },
      getSerializers,
      getImageUrl,
      mergeSerializers
    };
  }
});

// node_modules/@sanity/block-content-to-hyperscript/internals.js
var require_internals2 = __commonJS({
  "node_modules/@sanity/block-content-to-hyperscript/internals.js"(exports, module) {
    module.exports = require_internals();
  }
});

// node_modules/@sanity/block-content-to-react/lib/targets/dom.js
var require_dom = __commonJS({
  "node_modules/@sanity/block-content-to-react/lib/targets/dom.js"(exports, module) {
    "use strict";
    var React = require_react();
    var _require = require_internals2();
    var getSerializers = _require.getSerializers;
    var renderNode = React.createElement;
    var _getSerializers = getSerializers(renderNode);
    var defaultSerializers = _getSerializers.defaultSerializers;
    var serializeSpan = _getSerializers.serializeSpan;
    module.exports = {
      serializeSpan,
      serializers: defaultSerializers,
      renderProps: { nestMarks: true }
    };
  }
});

// node_modules/@sanity/block-content-to-react/lib/BlockContent.js
var require_BlockContent = __commonJS({
  "node_modules/@sanity/block-content-to-react/lib/BlockContent.js"(exports, module) {
    var React = require_react();
    var PropTypes = require_prop_types();
    var internals = require_internals2();
    var _require = require_dom();
    var serializers = _require.serializers;
    var serializeSpan = _require.serializeSpan;
    var renderProps = _require.renderProps;
    var getImageUrl = internals.getImageUrl;
    var blocksToNodes = internals.blocksToNodes;
    var mergeSerializers = internals.mergeSerializers;
    var renderNode = React.createElement;
    var SanityBlockContent = function SanityBlockContent2(props) {
      var customSerializers = mergeSerializers(SanityBlockContent2.defaultSerializers, props.serializers);
      var blockProps = Object.assign({}, renderProps, props, {
        serializers: customSerializers,
        blocks: props.blocks || []
      });
      return blocksToNodes(renderNode, blockProps, serializers, serializeSpan);
    };
    SanityBlockContent.defaultSerializers = serializers;
    SanityBlockContent.getImageUrl = getImageUrl;
    SanityBlockContent.propTypes = {
      className: PropTypes.string,
      renderContainerOnSingleChild: PropTypes.bool,
      ignoreUnknownTypes: PropTypes.bool,
      // When rendering images, we need project id and dataset, unless images are materialized
      projectId: PropTypes.string,
      dataset: PropTypes.string,
      imageOptions: PropTypes.object,
      serializers: PropTypes.shape({
        // Common overrides
        types: PropTypes.object,
        marks: PropTypes.object,
        // Less common overrides
        list: PropTypes.func,
        listItem: PropTypes.func,
        // Low-level serializers
        block: PropTypes.func,
        span: PropTypes.func
      }),
      blocks: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.shape({
        _type: PropTypes.string.isRequired
      })), PropTypes.shape({
        _type: PropTypes.string.isRequired
      })]).isRequired
    };
    SanityBlockContent.defaultProps = {
      ignoreUnknownTypes: true,
      renderContainerOnSingleChild: false,
      serializers: {},
      imageOptions: {}
    };
    module.exports = SanityBlockContent;
  }
});
export default require_BlockContent();
/*! Bundled license information:

react-is/cjs/react-is.development.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)
*/
//# sourceMappingURL=@sanity_block-content-to-react.js.map
