(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin_kotlin.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin_kotlin.js'));
  else {
    if (typeof kotlin_kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin_kotlin_test'. Its dependency 'kotlin_kotlin' was not found. Please, check whether 'kotlin_kotlin' is loaded prior to 'kotlin_kotlin_test'.");
    }
    root.kotlin_kotlin_test = factory(typeof kotlin_kotlin_test === 'undefined' ? {} : kotlin_kotlin_test, kotlin_kotlin);
  }
}(this, function (_, kotlin_kotlin) {
  //region block: imports
  var toString = kotlin_kotlin.$crossModule$.toString;
  var equals = kotlin_kotlin.$crossModule$.equals;
  var THROW_CCE = kotlin_kotlin.$crossModule$.THROW_CCE;
  var Annotation = kotlin_kotlin.$crossModule$.Annotation;
  var AssertionError_init_$Create$ = kotlin_kotlin.$crossModule$.AssertionError_init_$Create$;
  var Unit_getInstance = kotlin_kotlin.$crossModule$.Unit_getInstance;
  var to = kotlin_kotlin.$crossModule$.to;
  var mapOf = kotlin_kotlin.$crossModule$.mapOf;
  //endregion
  'use strict';
  //region block: pre-declaration
  function assertTrue(lazyMessage, actual) {
    if (!actual) {
      this.fail_o1oiv2_k$(lazyMessage());
    }
  }
  function assertTrue_0(message, actual) {
    this.assertTrue_5alkc2_k$(Asserter$assertTrue$lambda(message), actual);
  }
  function assertEquals(message, expected, actual) {
    this.assertTrue_5alkc2_k$(Asserter$assertEquals$lambda(message, expected, actual), equals(actual, expected));
  }
  function assertNotEquals(message, illegal, actual) {
    this.assertTrue_5alkc2_k$(Asserter$assertNotEquals$lambda(message, actual), !equals(actual, illegal));
  }
  function assertSame(message, expected, actual) {
    this.assertTrue_5alkc2_k$(Asserter$assertSame$lambda(message, expected, actual), actual === expected);
  }
  function assertNotSame(message, illegal, actual) {
    this.assertTrue_5alkc2_k$(Asserter$assertNotSame$lambda(message, actual), !(actual === illegal));
  }
  function assertNull(message, actual) {
    this.assertTrue_5alkc2_k$(Asserter$assertNull$lambda(message, actual), actual == null);
  }
  function assertNotNull(message, actual) {
    this.assertTrue_5alkc2_k$(Asserter$assertNotNull$lambda(message), !(actual == null));
  }
  //endregion
  function _set__asserter__1040934963(_set____804775014) {
    _asserter = _set____804775014;
  }
  function _get__asserter__2812671167() {
    return _asserter;
  }
  var _asserter;
  function Asserter$assertTrue$lambda($message) {
    return function () {
      return $message;
    };
  }
  function Asserter$assertEquals$lambda($message, $expected, $actual) {
    return function () {
      return messagePrefix($message) + ('Expected <' + toString($expected) + '>, actual <' + toString($actual) + '>.');
    };
  }
  function Asserter$assertNotEquals$lambda($message, $actual) {
    return function () {
      return messagePrefix($message) + ('Illegal value: <' + toString($actual) + '>.');
    };
  }
  function Asserter$assertSame$lambda($message, $expected, $actual) {
    return function () {
      return messagePrefix($message) + ('Expected <' + toString($expected) + '>, actual <' + toString($actual) + '> is not same.');
    };
  }
  function Asserter$assertNotSame$lambda($message, $actual) {
    return function () {
      return messagePrefix($message) + ('Expected not same as <' + toString($actual) + '>.');
    };
  }
  function Asserter$assertNull$lambda($message, $actual) {
    return function () {
      return messagePrefix($message) + ('Expected value to be null, but was: <' + toString($actual) + '>.');
    };
  }
  function Asserter$assertNotNull$lambda($message) {
    return function () {
      return messagePrefix($message) + 'Expected value to be not null.';
    };
  }
  function Asserter() {
  }
  Asserter.$metadata$ = {
    simpleName: 'Asserter',
    kind: 'interface',
    interfaces: []
  };
  function assertTrue_1(actual, message) {
    {
    }
    var tmp = _get_asserter__2796226488();
    var tmp0_elvis_lhs = message;
    return tmp.assertTrue_1hd403_k$(tmp0_elvis_lhs == null ? 'Expected value to be true.' : tmp0_elvis_lhs, actual);
  }
  function assertTrue$default(actual, message, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      message = null;
    return assertTrue_1(actual, message);
  }
  function _get_asserter__2796226488() {
    var tmp0_elvis_lhs = _asserter;
    return tmp0_elvis_lhs == null ? lookupAsserter() : tmp0_elvis_lhs;
  }
  function assertEquals_0(expected, actual, message) {
    _get_asserter__2796226488().assertEquals_f41q5w_k$(message, expected, actual);
  }
  function assertEquals$default(expected, actual, message, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      message = null;
    return assertEquals_0(expected, actual, message);
  }
  function messagePrefix(message) {
    return message == null ? '' : '' + message + '. ';
  }
  function Test() {
  }
  Test.prototype.equals = function (other) {
    if (!(other instanceof Test))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof Test ? other : THROW_CCE();
    return true;
  };
  Test.prototype.hashCode = function () {
    return 0;
  };
  Test.prototype.toString = function () {
    return '@kotlin.test.Test()';
  };
  Test.$metadata$ = {
    simpleName: 'Test',
    kind: 'class',
    interfaces: [Annotation]
  };
  function _set_assertHook__3703026478(_set____804775014) {
    init_properties_DefaultJsAsserter_kt_1991978711();
    assertHook = _set____804775014;
  }
  function _get_assertHook__2792273954() {
    init_properties_DefaultJsAsserter_kt_1991978711();
    return assertHook;
  }
  var assertHook;
  function _set_e__804776192($this, _set____804775014) {
    $this.e_1 = _set____804775014;
  }
  function _get_e__461226380($this) {
    return $this.e_1;
  }
  function _set_a__804776068($this, _set____804775014) {
    $this.a_1 = _set____804775014;
  }
  function _get_a__461226256($this) {
    return $this.a_1;
  }
  function failWithMessage($this, lazyMessage, cause) {
    var message = lazyMessage();
    invokeHook($this, false, DefaultJsAsserter$failWithMessage$lambda(message));
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = AssertionError_init_$Create$(message, cause);
      break $l$block;
    }
    throw tmp$ret$0;
  }
  function invokeHook($this, result, lazyMessage) {
    try {
      var tmp = _get_assertHook__2792273954();
      tmp(new DefaultJsAsserter$invokeHook$1(result, lazyMessage));
    }finally {
      $this.e_1 = undefined;
      $this.a_1 = undefined;
    }
  }
  function DefaultJsAsserter$assertTrue$lambda($message_1) {
    return function () {
      return $message_1;
    };
  }
  function DefaultJsAsserter$assertTrue$lambda_0($message) {
    return function () {
      return $message;
    };
  }
  function DefaultJsAsserter$fail$lambda($message_1) {
    return function () {
      return $message_1;
    };
  }
  function DefaultJsAsserter$failWithMessage$lambda($message) {
    return function () {
      return $message;
    };
  }
  function DefaultJsAsserter$invokeHook$1($result, $lazyMessage) {
    this.result_1 = $result;
    this.expected_1 = DefaultJsAsserter_getInstance().e_1;
    this.actual_1 = DefaultJsAsserter_getInstance().a_1;
    this.lazyMessage_1 = $lazyMessage;
  }
  DefaultJsAsserter$invokeHook$1.prototype._get_result__3382885006_f31376_k$ = function () {
    return this.result_1;
  };
  DefaultJsAsserter$invokeHook$1.prototype._get_expected__1604096019_qj1cer_k$ = function () {
    return this.expected_1;
  };
  DefaultJsAsserter$invokeHook$1.prototype._get_actual__1123878717_il4md9_k$ = function () {
    return this.actual_1;
  };
  DefaultJsAsserter$invokeHook$1.prototype._get_lazyMessage__1943666174_w57if2_k$ = function () {
    return this.lazyMessage_1;
  };
  DefaultJsAsserter$invokeHook$1.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(DefaultJsAsserter$invokeHook$1.prototype, 'result', {
    configurable: true,
    get: function () {
      return this._get_result__3382885006_f31376_k$();
    }
  });
  Object.defineProperty(DefaultJsAsserter$invokeHook$1.prototype, 'expected', {
    configurable: true,
    get: function () {
      return this._get_expected__1604096019_qj1cer_k$();
    }
  });
  Object.defineProperty(DefaultJsAsserter$invokeHook$1.prototype, 'actual', {
    configurable: true,
    get: function () {
      return this._get_actual__1123878717_il4md9_k$();
    }
  });
  Object.defineProperty(DefaultJsAsserter$invokeHook$1.prototype, 'lazyMessage', {
    configurable: true,
    get: function () {
      return this._get_lazyMessage__1943666174_w57if2_k$();
    }
  });
  function DefaultJsAsserter() {
    DefaultJsAsserter_instance = this;
    this.e_1 = undefined;
    this.a_1 = undefined;
  }
  DefaultJsAsserter.prototype.assertEquals_f41q5w_k$ = function (message, expected, actual) {
    this.e_1 = expected;
    this.a_1 = actual;
    assertEquals.call(this, message, expected, actual);
  };
  DefaultJsAsserter.prototype.assertNotEquals_93hflx_k$ = function (message, illegal, actual) {
    this.e_1 = illegal;
    this.a_1 = actual;
    assertNotEquals.call(this, message, illegal, actual);
  };
  DefaultJsAsserter.prototype.assertSame_gvak3p_k$ = function (message, expected, actual) {
    this.e_1 = expected;
    this.a_1 = actual;
    assertSame.call(this, message, expected, actual);
  };
  DefaultJsAsserter.prototype.assertNotSame_6wzam6_k$ = function (message, illegal, actual) {
    this.e_1 = illegal;
    this.a_1 = actual;
    assertNotSame.call(this, message, illegal, actual);
  };
  DefaultJsAsserter.prototype.assertNull_e5yf43_k$ = function (message, actual) {
    this.a_1 = actual;
    assertNull.call(this, message, actual);
  };
  DefaultJsAsserter.prototype.assertNotNull_wuch1g_k$ = function (message, actual) {
    this.a_1 = actual;
    assertNotNull.call(this, message, actual);
  };
  DefaultJsAsserter.prototype.assertTrue_5alkc2_k$ = function (lazyMessage, actual) {
    if (!actual) {
      {
        var message_1 = lazyMessage();
        invokeHook(this, false, DefaultJsAsserter$assertTrue$lambda(message_1));
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = AssertionError_init_$Create$(message_1, null);
          break $l$block;
        }
        throw tmp$ret$0;
      }
    } else {
      invokeHook(this, true, lazyMessage);
    }
  };
  DefaultJsAsserter.prototype.assertTrue_1hd403_k$ = function (message, actual) {
    this.assertTrue_5alkc2_k$(DefaultJsAsserter$assertTrue$lambda_0(message), actual);
  };
  DefaultJsAsserter.prototype.fail_o1oiv2_k$ = function (message) {
    this.fail_hhp8kv_k$(message, null);
  };
  DefaultJsAsserter.prototype.fail_hhp8kv_k$ = function (message, cause) {
    {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = message;
        break $l$block;
      }
      var message_1 = tmp$ret$0;
      invokeHook(this, false, DefaultJsAsserter$fail$lambda(message_1));
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = AssertionError_init_$Create$(message_1, cause);
        break $l$block_0;
      }
      throw tmp$ret$1;
    }
  };
  DefaultJsAsserter.$metadata$ = {
    simpleName: 'DefaultJsAsserter',
    kind: 'object',
    interfaces: [Asserter]
  };
  var DefaultJsAsserter_instance;
  function DefaultJsAsserter_getInstance() {
    if (DefaultJsAsserter_instance == null)
      new DefaultJsAsserter();
    return DefaultJsAsserter_instance;
  }
  function assertHook$lambda() {
    return function (_anonymous_parameter_0__2695192052) {
      return Unit_getInstance();
    };
  }
  var properties_initialized_DefaultJsAsserter_kt_1183946803;
  function init_properties_DefaultJsAsserter_kt_1991978711() {
    if (!properties_initialized_DefaultJsAsserter_kt_1183946803) {
      properties_initialized_DefaultJsAsserter_kt_1183946803 = true;
      assertHook = assertHook$lambda();
    }
  }
  function lookupAsserter() {
    return DefaultJsAsserter_getInstance();
  }
  function AssertionErrorWithCause(message, cause) {
    return AssertionError_init_$Create$(message, cause);
  }
  function _set_currentAdapter__2803652161(_set____804775014) {
    init_properties_TestApi_kt_3149124364();
    currentAdapter = _set____804775014;
  }
  function _get_currentAdapter__52412725() {
    init_properties_TestApi_kt_3149124364();
    return currentAdapter;
  }
  var currentAdapter;
  function _get_NAME_TO_ADAPTER__1294444626() {
    init_properties_TestApi_kt_3149124364();
    return NAME_TO_ADAPTER;
  }
  var NAME_TO_ADAPTER;
  function detectAdapter() {
    init_properties_TestApi_kt_3149124364();
    var frameworkAdapter = isQUnit() ? new QUnitAdapter() : isJasmine() ? new JasmineLikeAdapter() : new BareAdapter();
    var tmp;
    if (!(typeof kotlinTest === 'undefined')) {
      var adapterTransform = kotlinTest.adapterTransformer;
      var tmp_0;
      if (!(adapterTransform === null)) {
        tmp_0 = adapterTransform(frameworkAdapter);
      } else {
        tmp_0 = frameworkAdapter;
      }
      tmp = tmp_0;
    } else {
      tmp = frameworkAdapter;
    }
    return tmp;
  }
  function suite(name, ignored, suiteFn) {
    init_properties_TestApi_kt_3149124364();
    adapter().suite(name, ignored, suiteFn);
  }
  function adapter() {
    init_properties_TestApi_kt_3149124364();
    var tmp0_elvis_lhs = _get_currentAdapter__52412725();
    var result = tmp0_elvis_lhs == null ? detectAdapter() : tmp0_elvis_lhs;
    _set_currentAdapter__2803652161(result);
    return result;
  }
  function test(name, ignored, testFn) {
    init_properties_TestApi_kt_3149124364();
    adapter().test(name, ignored, testFn);
  }
  function QUnitAdapter$_init_$ref_4083883563() {
    var l = function () {
      return new QUnitAdapter();
    };
    l.callableName = '<init>';
    return l;
  }
  function JasmineLikeAdapter$_init_$ref_3248253692() {
    var l = function () {
      return new JasmineLikeAdapter();
    };
    l.callableName = '<init>';
    return l;
  }
  function JasmineLikeAdapter$_init_$ref_3248253692_0() {
    var l = function () {
      return new JasmineLikeAdapter();
    };
    l.callableName = '<init>';
    return l;
  }
  function JasmineLikeAdapter$_init_$ref_3248253692_1() {
    var l = function () {
      return new JasmineLikeAdapter();
    };
    l.callableName = '<init>';
    return l;
  }
  function detectAdapter$ref() {
    var l = function () {
      return detectAdapter();
    };
    l.callableName = 'detectAdapter';
    return l;
  }
  var properties_initialized_TestApi_kt_249626472;
  function init_properties_TestApi_kt_3149124364() {
    if (!properties_initialized_TestApi_kt_249626472) {
      properties_initialized_TestApi_kt_249626472 = true;
      currentAdapter = null;
      var tmp = to('qunit', QUnitAdapter$_init_$ref_4083883563());
      var tmp_0 = to('jasmine', JasmineLikeAdapter$_init_$ref_3248253692());
      var tmp_1 = to('mocha', JasmineLikeAdapter$_init_$ref_3248253692_0());
      var tmp_2 = to('jest', JasmineLikeAdapter$_init_$ref_3248253692_1());
      NAME_TO_ADAPTER = mapOf([tmp, tmp_0, tmp_1, tmp_2, to('auto', detectAdapter$ref())]);
    }
  }
  function BareAdapter() {
  }
  BareAdapter.prototype.suite_9kwwb5_k$ = function (name, ignored, suiteFn) {
    if (!ignored) {
      suiteFn();
    }
  };
  BareAdapter.prototype.suite = function (name, ignored, suiteFn) {
    return this.suite_9kwwb5_k$(name, ignored, suiteFn);
  };
  BareAdapter.prototype.test_3wfk20_k$ = function (name, ignored, testFn) {
    if (!ignored) {
      testFn();
      Unit_getInstance();
    }
  };
  BareAdapter.prototype.test = function (name, ignored, testFn) {
    return this.test_3wfk20_k$(name, ignored, testFn);
  };
  BareAdapter.$metadata$ = {
    simpleName: 'BareAdapter',
    kind: 'class',
    interfaces: []
  };
  function isQUnit() {
    return typeof QUnit !== 'undefined';
  }
  function isJasmine() {
    return typeof describe === 'function' && typeof it === 'function';
  }
  function JasmineLikeAdapter() {
  }
  JasmineLikeAdapter.prototype.suite_9kwwb5_k$ = function (name, ignored, suiteFn) {
    if (ignored) {
      xdescribe(name, suiteFn);
    } else {
      describe(name, suiteFn);
    }
  };
  JasmineLikeAdapter.prototype.suite = function (name, ignored, suiteFn) {
    return this.suite_9kwwb5_k$(name, ignored, suiteFn);
  };
  JasmineLikeAdapter.prototype.test_3wfk20_k$ = function (name, ignored, testFn) {
    if (ignored) {
      xit(name, testFn);
    } else {
      it(name, testFn);
    }
  };
  JasmineLikeAdapter.prototype.test = function (name, ignored, testFn) {
    return this.test_3wfk20_k$(name, ignored, testFn);
  };
  JasmineLikeAdapter.$metadata$ = {
    simpleName: 'JasmineLikeAdapter',
    kind: 'class',
    interfaces: []
  };
  function wrapTest($this, testFn) {
    return QUnitAdapter$wrapTest$lambda(testFn);
  }
  function QUnitAdapter$wrapTest$lambda$lambda($assertionsHappened, $assert) {
    return function (testResult) {
      $assertionsHappened._v = true;
      $assert.ok(testResult.result, testResult.lazyMessage());
    };
  }
  function QUnitAdapter$wrapTest$lambda($testFn) {
    return function (assert) {
      var assertionsHappened = {_v: false};
      Unit_getInstance();
      _set_assertHook__3703026478(QUnitAdapter$wrapTest$lambda$lambda(assertionsHappened, assert));
      var possiblePromise = $testFn();
      Unit_getInstance();
      var tmp;
      if (!assertionsHappened._v) {
        tmp = assertTrue_1(true, 'A test with no assertions is considered successful');
      }
      return possiblePromise;
    };
  }
  function QUnitAdapter() {
    this.ignoredSuite_1 = false;
  }
  QUnitAdapter.prototype._set_ignoredSuite__3410797777_zen20o_k$ = function (_set____804775014) {
    this.ignoredSuite_1 = _set____804775014;
  };
  QUnitAdapter.prototype._get_ignoredSuite__55983301_xbwzp_k$ = function () {
    return this.ignoredSuite_1;
  };
  QUnitAdapter.prototype.suite_9kwwb5_k$ = function (name, ignored, suiteFn) {
    var prevIgnore = this.ignoredSuite_1;
    this.ignoredSuite_1 = !!(this.ignoredSuite_1 | ignored);
    QUnit.module(name, suiteFn);
    this.ignoredSuite_1 = prevIgnore;
  };
  QUnitAdapter.prototype.suite = function (name, ignored, suiteFn) {
    return this.suite_9kwwb5_k$(name, ignored, suiteFn);
  };
  QUnitAdapter.prototype.test_3wfk20_k$ = function (name, ignored, testFn) {
    if (!!(ignored | this.ignoredSuite_1)) {
      QUnit.skip(name, wrapTest(this, testFn));
    } else {
      QUnit.test(name, wrapTest(this, testFn));
    }
  };
  QUnitAdapter.prototype.test = function (name, ignored, testFn) {
    return this.test_3wfk20_k$(name, ignored, testFn);
  };
  QUnitAdapter.$metadata$ = {
    simpleName: 'QUnitAdapter',
    kind: 'class',
    interfaces: []
  };
  //region block: init
  _asserter = null;
  //endregion
  //region block: exports
  _.$crossModule$ = _.$crossModule$ || {};
  _.$crossModule$.assertEquals$default = assertEquals$default;
  _.$crossModule$.assertTrue$default = assertTrue$default;
  _.$crossModule$.suite = suite;
  _.$crossModule$.test = test;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin_kotlin_test.js.map