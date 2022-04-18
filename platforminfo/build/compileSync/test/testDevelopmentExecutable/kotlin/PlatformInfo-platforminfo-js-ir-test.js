(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin_io_github_landrynorris_platforminfo.js', './kotlin_kotlin_test.js', './kotlin_kotlin.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin_io_github_landrynorris_platforminfo.js'), require('./kotlin_kotlin_test.js'), require('./kotlin_kotlin.js'));
  else {
    if (typeof kotlin_io_github_landrynorris_platforminfo === 'undefined') {
      throw new Error("Error loading module 'PlatformInfo-platforminfo-js-ir-test'. Its dependency 'kotlin_io_github_landrynorris_platforminfo' was not found. Please, check whether 'kotlin_io_github_landrynorris_platforminfo' is loaded prior to 'PlatformInfo-platforminfo-js-ir-test'.");
    }
    if (typeof kotlin_kotlin_test === 'undefined') {
      throw new Error("Error loading module 'PlatformInfo-platforminfo-js-ir-test'. Its dependency 'kotlin_kotlin_test' was not found. Please, check whether 'kotlin_kotlin_test' is loaded prior to 'PlatformInfo-platforminfo-js-ir-test'.");
    }
    if (typeof kotlin_kotlin === 'undefined') {
      throw new Error("Error loading module 'PlatformInfo-platforminfo-js-ir-test'. Its dependency 'kotlin_kotlin' was not found. Please, check whether 'kotlin_kotlin' is loaded prior to 'PlatformInfo-platforminfo-js-ir-test'.");
    }
    root['PlatformInfo-platforminfo-js-ir-test'] = factory(typeof this['PlatformInfo-platforminfo-js-ir-test'] === 'undefined' ? {} : this['PlatformInfo-platforminfo-js-ir-test'], kotlin_io_github_landrynorris_platforminfo, kotlin_kotlin_test, kotlin_kotlin);
  }
}(this, function (_, kotlin_io_github_landrynorris_platforminfo, kotlin_kotlin_test, kotlin_kotlin) {
  //region block: imports
  var Arm32_getInstance = kotlin_io_github_landrynorris_platforminfo.$crossModule$.Arm32_getInstance;
  var Arm = kotlin_io_github_landrynorris_platforminfo.$crossModule$.Arm;
  var assertTrue$default = kotlin_kotlin_test.$crossModule$.assertTrue$default;
  var Arm64_getInstance = kotlin_io_github_landrynorris_platforminfo.$crossModule$.Arm64_getInstance;
  var X64_getInstance = kotlin_io_github_landrynorris_platforminfo.$crossModule$.X64_getInstance;
  var X86 = kotlin_io_github_landrynorris_platforminfo.$crossModule$.X86;
  var X86_32_getInstance = kotlin_io_github_landrynorris_platforminfo.$crossModule$.X86_32_getInstance;
  var suite = kotlin_kotlin_test.$crossModule$.suite;
  var Unit_getInstance = kotlin_kotlin.$crossModule$.Unit_getInstance;
  var test = kotlin_kotlin_test.$crossModule$.test;
  var JS_getInstance = kotlin_io_github_landrynorris_platforminfo.$crossModule$.JS_getInstance_1;
  var PlatformInfo_getInstance = kotlin_io_github_landrynorris_platforminfo.$crossModule$.PlatformInfo_getInstance;
  var assertEquals$default = kotlin_kotlin_test.$crossModule$.assertEquals$default;
  var JS_getInstance_0 = kotlin_io_github_landrynorris_platforminfo.$crossModule$.JS_getInstance;
  //endregion
  'use strict';
  //region block: pre-declaration
  //endregion
  function ArchitectureTests() {
  }
  ArchitectureTests.prototype.testArmSubtypes_iekrym_k$ = function () {
    var tmp = Arm32_getInstance();
    var tmp_0 = tmp instanceof Arm;
    assertTrue$default(tmp_0, null, 2, null);
    var tmp_1 = Arm64_getInstance();
    var tmp_2 = tmp_1 instanceof Arm;
    assertTrue$default(tmp_2, null, 2, null);
  };
  ArchitectureTests.prototype.testX86Subtypes_535hu4_k$ = function () {
    var tmp = X64_getInstance();
    var tmp_0 = tmp instanceof X86;
    assertTrue$default(tmp_0, null, 2, null);
    var tmp_1 = X86_32_getInstance();
    var tmp_2 = tmp_1 instanceof X86;
    assertTrue$default(tmp_2, null, 2, null);
  };
  ArchitectureTests.$metadata$ = {
    simpleName: 'ArchitectureTests',
    kind: 'class',
    interfaces: []
  };
  function test_fun_3146630385() {
    suite('ArchitectureTests', false, test_fun$ArchitectureTests_test_fun_4173281270());
  }
  function test_fun$ArchitectureTests_test_fun$testArmSubtypes_test_fun_2727326876() {
    return function () {
      var tmp = new ArchitectureTests();
      Unit_getInstance();
      tmp.testArmSubtypes_iekrym_k$();
      return Unit_getInstance();
      $unreachable();
    };
  }
  function test_fun$ArchitectureTests_test_fun$testX86Subtypes_test_fun_2653437122() {
    return function () {
      var tmp = new ArchitectureTests();
      Unit_getInstance();
      tmp.testX86Subtypes_535hu4_k$();
      return Unit_getInstance();
      $unreachable();
    };
  }
  function test_fun$ArchitectureTests_test_fun_4173281270() {
    return function () {
      test('testArmSubtypes', false, test_fun$ArchitectureTests_test_fun$testArmSubtypes_test_fun_2727326876());
      test('testX86Subtypes', false, test_fun$ArchitectureTests_test_fun$testX86Subtypes_test_fun_2653437122());
    };
  }
  function TestPlatformInfo() {
  }
  TestPlatformInfo.prototype.testPlatformInfo_ciqvj6_k$ = function () {
    var tmp = JS_getInstance();
    var tmp_0 = PlatformInfo_getInstance()._get_platform__3762464184_8t1e14_k$();
    assertEquals$default(tmp, tmp_0, null, 4, null);
    var tmp_1 = JS_getInstance_0();
    var tmp_2 = PlatformInfo_getInstance()._get_arch__792660149_d3xghh_k$();
    assertEquals$default(tmp_1, tmp_2, null, 4, null);
  };
  TestPlatformInfo.$metadata$ = {
    simpleName: 'TestPlatformInfo',
    kind: 'class',
    interfaces: []
  };
  function test_fun_3146630385_0() {
    suite('TestPlatformInfo', false, test_fun$TestPlatformInfo_test_fun_820744939());
  }
  function test_fun$TestPlatformInfo_test_fun$testPlatformInfo_test_fun_3852934277() {
    return function () {
      var tmp = new TestPlatformInfo();
      Unit_getInstance();
      tmp.testPlatformInfo_ciqvj6_k$();
      return Unit_getInstance();
      $unreachable();
    };
  }
  function test_fun$TestPlatformInfo_test_fun_820744939() {
    return function () {
      test('testPlatformInfo', false, test_fun$TestPlatformInfo_test_fun$testPlatformInfo_test_fun_3852934277());
    };
  }
  //region block: tests
  (function () {
    suite('com.platform.info.test', false, function () {
      test_fun_3146630385();
      test_fun_3146630385_0();
    });
  }());
  //endregion
  return _;
}));

//# sourceMappingURL=PlatformInfo-platforminfo-js-ir-test.js.map