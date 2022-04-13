#ifndef KONAN_LIBPLATFORMINFO2_H
#define KONAN_LIBPLATFORMINFO2_H
#ifdef __cplusplus
extern "C" {
#endif
#ifdef __cplusplus
typedef bool            libPlatformInfo2_KBoolean;
#else
typedef _Bool           libPlatformInfo2_KBoolean;
#endif
typedef unsigned short     libPlatformInfo2_KChar;
typedef signed char        libPlatformInfo2_KByte;
typedef short              libPlatformInfo2_KShort;
typedef int                libPlatformInfo2_KInt;
typedef long long          libPlatformInfo2_KLong;
typedef unsigned char      libPlatformInfo2_KUByte;
typedef unsigned short     libPlatformInfo2_KUShort;
typedef unsigned int       libPlatformInfo2_KUInt;
typedef unsigned long long libPlatformInfo2_KULong;
typedef float              libPlatformInfo2_KFloat;
typedef double             libPlatformInfo2_KDouble;
typedef float __attribute__ ((__vector_size__ (16))) libPlatformInfo2_KVector128;
typedef void*              libPlatformInfo2_KNativePtr;
struct libPlatformInfo2_KType;
typedef struct libPlatformInfo2_KType libPlatformInfo2_KType;

typedef struct {
  libPlatformInfo2_KNativePtr pinned;
} libPlatformInfo2_kref_kotlin_Byte;
typedef struct {
  libPlatformInfo2_KNativePtr pinned;
} libPlatformInfo2_kref_kotlin_Short;
typedef struct {
  libPlatformInfo2_KNativePtr pinned;
} libPlatformInfo2_kref_kotlin_Int;
typedef struct {
  libPlatformInfo2_KNativePtr pinned;
} libPlatformInfo2_kref_kotlin_Long;
typedef struct {
  libPlatformInfo2_KNativePtr pinned;
} libPlatformInfo2_kref_kotlin_Float;
typedef struct {
  libPlatformInfo2_KNativePtr pinned;
} libPlatformInfo2_kref_kotlin_Double;
typedef struct {
  libPlatformInfo2_KNativePtr pinned;
} libPlatformInfo2_kref_kotlin_Char;
typedef struct {
  libPlatformInfo2_KNativePtr pinned;
} libPlatformInfo2_kref_kotlin_Boolean;
typedef struct {
  libPlatformInfo2_KNativePtr pinned;
} libPlatformInfo2_kref_kotlin_Unit;
typedef struct {
  libPlatformInfo2_KNativePtr pinned;
} libPlatformInfo2_kref_com_landry_platforminfo_Arch;
typedef struct {
  libPlatformInfo2_KNativePtr pinned;
} libPlatformInfo2_kref_com_landry_platforminfo_Arch_Arm;
typedef struct {
  libPlatformInfo2_KNativePtr pinned;
} libPlatformInfo2_kref_com_landry_platforminfo_Arch_Arm32;
typedef struct {
  libPlatformInfo2_KNativePtr pinned;
} libPlatformInfo2_kref_com_landry_platforminfo_Arch_Arm64;
typedef struct {
  libPlatformInfo2_KNativePtr pinned;
} libPlatformInfo2_kref_com_landry_platforminfo_Arch_Js;
typedef struct {
  libPlatformInfo2_KNativePtr pinned;
} libPlatformInfo2_kref_com_landry_platforminfo_Arch_Jvm;
typedef struct {
  libPlatformInfo2_KNativePtr pinned;
} libPlatformInfo2_kref_com_landry_platforminfo_Arch_X64;
typedef struct {
  libPlatformInfo2_KNativePtr pinned;
} libPlatformInfo2_kref_com_landry_platforminfo_Arch_X86;
typedef struct {
  libPlatformInfo2_KNativePtr pinned;
} libPlatformInfo2_kref_com_landry_platforminfo_Platform;
typedef struct {
  libPlatformInfo2_KNativePtr pinned;
} libPlatformInfo2_kref_com_landry_platforminfo_Platform_Android;
typedef struct {
  libPlatformInfo2_KNativePtr pinned;
} libPlatformInfo2_kref_com_landry_platforminfo_Platform_IOS;
typedef struct {
  libPlatformInfo2_KNativePtr pinned;
} libPlatformInfo2_kref_com_landry_platforminfo_Platform_JS;
typedef struct {
  libPlatformInfo2_KNativePtr pinned;
} libPlatformInfo2_kref_com_landry_platforminfo_Platform_JVM;
typedef struct {
  libPlatformInfo2_KNativePtr pinned;
} libPlatformInfo2_kref_com_landry_platforminfo_Platform_LINUX;
typedef struct {
  libPlatformInfo2_KNativePtr pinned;
} libPlatformInfo2_kref_com_landry_platforminfo_Platform_MAC;
typedef struct {
  libPlatformInfo2_KNativePtr pinned;
} libPlatformInfo2_kref_com_landry_platforminfo_Platform_WINDOWS;
typedef struct {
  libPlatformInfo2_KNativePtr pinned;
} libPlatformInfo2_kref_com_landry_platforminfo_Platform_ZEPHYR;
typedef struct {
  libPlatformInfo2_KNativePtr pinned;
} libPlatformInfo2_kref_com_landry_platforminfo_PlatformInfo;


typedef struct {
  /* Service functions. */
  void (*DisposeStablePointer)(libPlatformInfo2_KNativePtr ptr);
  void (*DisposeString)(const char* string);
  libPlatformInfo2_KBoolean (*IsInstance)(libPlatformInfo2_KNativePtr ref, const libPlatformInfo2_KType* type);
  libPlatformInfo2_kref_kotlin_Byte (*createNullableByte)(libPlatformInfo2_KByte);
  libPlatformInfo2_kref_kotlin_Short (*createNullableShort)(libPlatformInfo2_KShort);
  libPlatformInfo2_kref_kotlin_Int (*createNullableInt)(libPlatformInfo2_KInt);
  libPlatformInfo2_kref_kotlin_Long (*createNullableLong)(libPlatformInfo2_KLong);
  libPlatformInfo2_kref_kotlin_Float (*createNullableFloat)(libPlatformInfo2_KFloat);
  libPlatformInfo2_kref_kotlin_Double (*createNullableDouble)(libPlatformInfo2_KDouble);
  libPlatformInfo2_kref_kotlin_Char (*createNullableChar)(libPlatformInfo2_KChar);
  libPlatformInfo2_kref_kotlin_Boolean (*createNullableBoolean)(libPlatformInfo2_KBoolean);
  libPlatformInfo2_kref_kotlin_Unit (*createNullableUnit)(void);

  /* User functions. */
  struct {
    struct {
      struct {
        struct {
          struct {
            struct {
              libPlatformInfo2_KType* (*_type)(void);
              libPlatformInfo2_kref_com_landry_platforminfo_Arch (*Arch)();
              struct {
                libPlatformInfo2_KType* (*_type)(void);
                libPlatformInfo2_kref_com_landry_platforminfo_Arch_Arm (*Arm)();
              } Arm;
              struct {
                libPlatformInfo2_KType* (*_type)(void);
                libPlatformInfo2_kref_com_landry_platforminfo_Arch_Arm32 (*_instance)();
              } Arm32;
              struct {
                libPlatformInfo2_KType* (*_type)(void);
                libPlatformInfo2_kref_com_landry_platforminfo_Arch_Arm64 (*_instance)();
              } Arm64;
              struct {
                libPlatformInfo2_KType* (*_type)(void);
                libPlatformInfo2_kref_com_landry_platforminfo_Arch_Js (*_instance)();
              } Js;
              struct {
                libPlatformInfo2_KType* (*_type)(void);
                libPlatformInfo2_kref_com_landry_platforminfo_Arch_Jvm (*_instance)();
              } Jvm;
              struct {
                libPlatformInfo2_KType* (*_type)(void);
                libPlatformInfo2_kref_com_landry_platforminfo_Arch_X64 (*_instance)();
              } X64;
              struct {
                libPlatformInfo2_KType* (*_type)(void);
                libPlatformInfo2_kref_com_landry_platforminfo_Arch_X86 (*_instance)();
              } X86;
            } Arch;
            struct {
              libPlatformInfo2_KType* (*_type)(void);
              libPlatformInfo2_kref_com_landry_platforminfo_Platform (*Platform)();
              struct {
                libPlatformInfo2_KType* (*_type)(void);
                libPlatformInfo2_kref_com_landry_platforminfo_Platform_Android (*_instance)();
              } Android;
              struct {
                libPlatformInfo2_KType* (*_type)(void);
                libPlatformInfo2_kref_com_landry_platforminfo_Platform_IOS (*_instance)();
              } IOS;
              struct {
                libPlatformInfo2_KType* (*_type)(void);
                libPlatformInfo2_kref_com_landry_platforminfo_Platform_JS (*_instance)();
              } JS;
              struct {
                libPlatformInfo2_KType* (*_type)(void);
                libPlatformInfo2_kref_com_landry_platforminfo_Platform_JVM (*_instance)();
              } JVM;
              struct {
                libPlatformInfo2_KType* (*_type)(void);
                libPlatformInfo2_kref_com_landry_platforminfo_Platform_LINUX (*_instance)();
              } LINUX;
              struct {
                libPlatformInfo2_KType* (*_type)(void);
                libPlatformInfo2_kref_com_landry_platforminfo_Platform_MAC (*_instance)();
              } MAC;
              struct {
                libPlatformInfo2_KType* (*_type)(void);
                libPlatformInfo2_kref_com_landry_platforminfo_Platform_WINDOWS (*_instance)();
              } WINDOWS;
              struct {
                libPlatformInfo2_KType* (*_type)(void);
                libPlatformInfo2_kref_com_landry_platforminfo_Platform_ZEPHYR (*_instance)();
              } ZEPHYR;
            } Platform;
            struct {
              libPlatformInfo2_KType* (*_type)(void);
              libPlatformInfo2_kref_com_landry_platforminfo_PlatformInfo (*_instance)();
              libPlatformInfo2_kref_com_landry_platforminfo_Arch (*get_arch)(libPlatformInfo2_kref_com_landry_platforminfo_PlatformInfo thiz);
              libPlatformInfo2_KBoolean (*get_isDesktopNative)(libPlatformInfo2_kref_com_landry_platforminfo_PlatformInfo thiz);
              libPlatformInfo2_KBoolean (*get_isEmbedded)(libPlatformInfo2_kref_com_landry_platforminfo_PlatformInfo thiz);
              libPlatformInfo2_KBoolean (*get_isMobile)(libPlatformInfo2_kref_com_landry_platforminfo_PlatformInfo thiz);
              libPlatformInfo2_kref_com_landry_platforminfo_Platform (*get_platform)(libPlatformInfo2_kref_com_landry_platforminfo_PlatformInfo thiz);
            } PlatformInfo;
          } platforminfo;
        } landry;
      } com;
    } root;
  } kotlin;
} libPlatformInfo2_ExportedSymbols;
extern libPlatformInfo2_ExportedSymbols* libPlatformInfo2_symbols(void);
#ifdef __cplusplus
}  /* extern "C" */
#endif
#endif  /* KONAN_LIBPLATFORMINFO2_H */
