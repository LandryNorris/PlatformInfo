(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin_kotlin.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin_kotlin.js'));
  else {
    if (typeof kotlin_kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin_me_landrynorris_platforminfo'. Its dependency 'kotlin_kotlin' was not found. Please, check whether 'kotlin_kotlin' is loaded prior to 'kotlin_me_landrynorris_platforminfo'.");
    }
    root.kotlin_me_landrynorris_platforminfo = factory(typeof kotlin_me_landrynorris_platforminfo === 'undefined' ? {} : kotlin_me_landrynorris_platforminfo, kotlin_kotlin);
  }
}(this, function (_, kotlin_kotlin) {
  //region block: imports
  var equals = kotlin_kotlin.$crossModule$.equals;
  //endregion
  'use strict';
  //region block: pre-declaration
  Arm.prototype = Object.create(Arch.prototype);
  Arm.prototype.constructor = Arm;
  Arm32.prototype = Object.create(Arm.prototype);
  Arm32.prototype.constructor = Arm32;
  Arm64.prototype = Object.create(Arm.prototype);
  Arm64.prototype.constructor = Arm64;
  X86.prototype = Object.create(Arch.prototype);
  X86.prototype.constructor = X86;
  X86_32.prototype = Object.create(X86.prototype);
  X86_32.prototype.constructor = X86_32;
  X64.prototype = Object.create(X86.prototype);
  X64.prototype.constructor = X64;
  Jvm.prototype = Object.create(Arch.prototype);
  Jvm.prototype.constructor = Jvm;
  JS.prototype = Object.create(Arch.prototype);
  JS.prototype.constructor = JS;
  JVM.prototype = Object.create(Platform.prototype);
  JVM.prototype.constructor = JVM;
  Android.prototype = Object.create(Platform.prototype);
  Android.prototype.constructor = Android;
  IOS.prototype = Object.create(Platform.prototype);
  IOS.prototype.constructor = IOS;
  WINDOWS.prototype = Object.create(Platform.prototype);
  WINDOWS.prototype.constructor = WINDOWS;
  MAC.prototype = Object.create(Platform.prototype);
  MAC.prototype.constructor = MAC;
  LINUX.prototype = Object.create(Platform.prototype);
  LINUX.prototype.constructor = LINUX;
  JS_0.prototype = Object.create(Platform.prototype);
  JS_0.prototype.constructor = JS_0;
  ZEPHYR.prototype = Object.create(Platform.prototype);
  ZEPHYR.prototype.constructor = ZEPHYR;
  //endregion
  function Arm() {
    Arch.call(this);
  }
  Arm.$metadata$ = {
    simpleName: 'Arm',
    kind: 'class',
    interfaces: []
  };
  function Arm32() {
    Arm32_instance = this;
    Arm.call(this);
  }
  Arm32.$metadata$ = {
    simpleName: 'Arm32',
    kind: 'object',
    interfaces: []
  };
  var Arm32_instance;
  function Arm32_getInstance() {
    if (Arm32_instance == null)
      new Arm32();
    return Arm32_instance;
  }
  function Arm64() {
    Arm64_instance = this;
    Arm.call(this);
  }
  Arm64.$metadata$ = {
    simpleName: 'Arm64',
    kind: 'object',
    interfaces: []
  };
  var Arm64_instance;
  function Arm64_getInstance() {
    if (Arm64_instance == null)
      new Arm64();
    return Arm64_instance;
  }
  function X86() {
    Arch.call(this);
  }
  X86.$metadata$ = {
    simpleName: 'X86',
    kind: 'class',
    interfaces: []
  };
  function X86_32() {
    X86_32_instance = this;
    X86.call(this);
  }
  X86_32.$metadata$ = {
    simpleName: 'X86_32',
    kind: 'object',
    interfaces: []
  };
  var X86_32_instance;
  function X86_32_getInstance() {
    if (X86_32_instance == null)
      new X86_32();
    return X86_32_instance;
  }
  function X64() {
    X64_instance = this;
    X86.call(this);
  }
  X64.$metadata$ = {
    simpleName: 'X64',
    kind: 'object',
    interfaces: []
  };
  var X64_instance;
  function X64_getInstance() {
    if (X64_instance == null)
      new X64();
    return X64_instance;
  }
  function Jvm() {
    Jvm_instance = this;
    Arch.call(this);
  }
  Jvm.$metadata$ = {
    simpleName: 'Jvm',
    kind: 'object',
    interfaces: []
  };
  var Jvm_instance;
  function Jvm_getInstance() {
    if (Jvm_instance == null)
      new Jvm();
    return Jvm_instance;
  }
  function JS() {
    JS_instance = this;
    Arch.call(this);
  }
  JS.$metadata$ = {
    simpleName: 'JS',
    kind: 'object',
    interfaces: []
  };
  var JS_instance;
  function JS_getInstance() {
    if (JS_instance == null)
      new JS();
    return JS_instance;
  }
  function Arch() {
  }
  Arch.$metadata$ = {
    simpleName: 'Arch',
    kind: 'class',
    interfaces: []
  };
  function JVM() {
    JVM_instance = this;
    Platform.call(this);
  }
  JVM.$metadata$ = {
    simpleName: 'JVM',
    kind: 'object',
    interfaces: []
  };
  var JVM_instance;
  function JVM_getInstance() {
    if (JVM_instance == null)
      new JVM();
    return JVM_instance;
  }
  function Android() {
    Android_instance = this;
    Platform.call(this);
  }
  Android.$metadata$ = {
    simpleName: 'Android',
    kind: 'object',
    interfaces: []
  };
  var Android_instance;
  function Android_getInstance() {
    if (Android_instance == null)
      new Android();
    return Android_instance;
  }
  function IOS() {
    IOS_instance = this;
    Platform.call(this);
  }
  IOS.$metadata$ = {
    simpleName: 'IOS',
    kind: 'object',
    interfaces: []
  };
  var IOS_instance;
  function IOS_getInstance() {
    if (IOS_instance == null)
      new IOS();
    return IOS_instance;
  }
  function WINDOWS() {
    WINDOWS_instance = this;
    Platform.call(this);
  }
  WINDOWS.$metadata$ = {
    simpleName: 'WINDOWS',
    kind: 'object',
    interfaces: []
  };
  var WINDOWS_instance;
  function WINDOWS_getInstance() {
    if (WINDOWS_instance == null)
      new WINDOWS();
    return WINDOWS_instance;
  }
  function MAC() {
    MAC_instance = this;
    Platform.call(this);
  }
  MAC.$metadata$ = {
    simpleName: 'MAC',
    kind: 'object',
    interfaces: []
  };
  var MAC_instance;
  function MAC_getInstance() {
    if (MAC_instance == null)
      new MAC();
    return MAC_instance;
  }
  function LINUX() {
    LINUX_instance = this;
    Platform.call(this);
  }
  LINUX.$metadata$ = {
    simpleName: 'LINUX',
    kind: 'object',
    interfaces: []
  };
  var LINUX_instance;
  function LINUX_getInstance() {
    if (LINUX_instance == null)
      new LINUX();
    return LINUX_instance;
  }
  function JS_0() {
    JS_instance_0 = this;
    Platform.call(this);
  }
  JS_0.$metadata$ = {
    simpleName: 'JS',
    kind: 'object',
    interfaces: []
  };
  var JS_instance_0;
  function JS_getInstance_0() {
    if (JS_instance_0 == null)
      new JS_0();
    return JS_instance_0;
  }
  function ZEPHYR() {
    ZEPHYR_instance = this;
    Platform.call(this);
  }
  ZEPHYR.$metadata$ = {
    simpleName: 'ZEPHYR',
    kind: 'object',
    interfaces: []
  };
  var ZEPHYR_instance;
  function ZEPHYR_getInstance() {
    if (ZEPHYR_instance == null)
      new ZEPHYR();
    return ZEPHYR_instance;
  }
  function Platform() {
  }
  Platform.$metadata$ = {
    simpleName: 'Platform',
    kind: 'class',
    interfaces: []
  };
  function PlatformInfo() {
    PlatformInfo_instance = this;
    this.platform_1 = _get_platform__3762464184();
    this.arch_1 = _get_arch__792660149();
  }
  PlatformInfo.prototype._get_platform__3762464184_8t1e14_k$ = function () {
    return this.platform_1;
  };
  PlatformInfo.prototype._get_arch__792660149_d3xghh_k$ = function () {
    return this.arch_1;
  };
  PlatformInfo.prototype._get_isMobile__2127284959_z6j3kv_k$ = function () {
    return equals(this.platform_1, Android_getInstance()) ? true : equals(this.platform_1, IOS_getInstance());
  };
  PlatformInfo.prototype._get_isDesktopNative__1832977128_ubb27c_k$ = function () {
    return (equals(this.platform_1, WINDOWS_getInstance()) ? true : equals(this.platform_1, MAC_getInstance())) ? true : equals(this.platform_1, LINUX_getInstance());
  };
  PlatformInfo.prototype._get_isEmbedded__2178599223_z01421_k$ = function () {
    return equals(this.platform_1, ZEPHYR_getInstance());
  };
  PlatformInfo.$metadata$ = {
    simpleName: 'PlatformInfo',
    kind: 'object',
    interfaces: []
  };
  var PlatformInfo_instance;
  function PlatformInfo_getInstance() {
    if (PlatformInfo_instance == null)
      new PlatformInfo();
    return PlatformInfo_instance;
  }
  function _get_platform__3762464184() {
    init_properties_PlatformInfo_kt_204769977();
    return platform;
  }
  var platform;
  function _get_arch__792660149() {
    init_properties_PlatformInfo_kt_204769977();
    return arch;
  }
  var arch;
  var properties_initialized_PlatformInfo_kt_1600174045;
  function init_properties_PlatformInfo_kt_204769977() {
    if (!properties_initialized_PlatformInfo_kt_1600174045) {
      properties_initialized_PlatformInfo_kt_1600174045 = true;
      platform = JS_getInstance_0();
      arch = JS_getInstance();
    }
  }
  //region block: exports
  _.$crossModule$ = _.$crossModule$ || {};
  _.$crossModule$.Arm = Arm;
  _.$crossModule$.X86 = X86;
  _.$crossModule$.Arm32_getInstance = Arm32_getInstance;
  _.$crossModule$.Arm64_getInstance = Arm64_getInstance;
  _.$crossModule$.JS_getInstance = JS_getInstance;
  _.$crossModule$.X64_getInstance = X64_getInstance;
  _.$crossModule$.X86_32_getInstance = X86_32_getInstance;
  _.$crossModule$.JS_getInstance_1 = JS_getInstance_0;
  _.$crossModule$.PlatformInfo_getInstance = PlatformInfo_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin_me_landrynorris_platforminfo.js.map