#ifndef KONAN_PLATFORMINFO2_H
#define KONAN_PLATFORMINFO2_H
#ifdef __cplusplus
extern "C" {
#endif
#ifdef __cplusplus
typedef bool            PlatformInfo2_KBoolean;
#else
typedef _Bool           PlatformInfo2_KBoolean;
#endif
typedef unsigned short     PlatformInfo2_KChar;
typedef signed char        PlatformInfo2_KByte;
typedef short              PlatformInfo2_KShort;
typedef int                PlatformInfo2_KInt;
typedef long long          PlatformInfo2_KLong;
typedef unsigned char      PlatformInfo2_KUByte;
typedef unsigned short     PlatformInfo2_KUShort;
typedef unsigned int       PlatformInfo2_KUInt;
typedef unsigned long long PlatformInfo2_KULong;
typedef float              PlatformInfo2_KFloat;
typedef double             PlatformInfo2_KDouble;
#ifndef _MSC_VER
typedef float __attribute__ ((__vector_size__ (16))) PlatformInfo2_KVector128;
#else
#include <xmmintrin.h>
typedef __m128 PlatformInfo2_KVector128;
#endif
typedef void*              PlatformInfo2_KNativePtr;
struct PlatformInfo2_KType;
typedef struct PlatformInfo2_KType PlatformInfo2_KType;

typedef struct {
  PlatformInfo2_KNativePtr pinned;
} PlatformInfo2_kref_kotlin_Byte;
typedef struct {
  PlatformInfo2_KNativePtr pinned;
} PlatformInfo2_kref_kotlin_Short;
typedef struct {
  PlatformInfo2_KNativePtr pinned;
} PlatformInfo2_kref_kotlin_Int;
typedef struct {
  PlatformInfo2_KNativePtr pinned;
} PlatformInfo2_kref_kotlin_Long;
typedef struct {
  PlatformInfo2_KNativePtr pinned;
} PlatformInfo2_kref_kotlin_Float;
typedef struct {
  PlatformInfo2_KNativePtr pinned;
} PlatformInfo2_kref_kotlin_Double;
typedef struct {
  PlatformInfo2_KNativePtr pinned;
} PlatformInfo2_kref_kotlin_Char;
typedef struct {
  PlatformInfo2_KNativePtr pinned;
} PlatformInfo2_kref_kotlin_Boolean;
typedef struct {
  PlatformInfo2_KNativePtr pinned;
} PlatformInfo2_kref_kotlin_Unit;
typedef struct {
  PlatformInfo2_KNativePtr pinned;
} PlatformInfo2_kref_com_landry_platforminfo_Arch;
typedef struct {
  PlatformInfo2_KNativePtr pinned;
} PlatformInfo2_kref_com_landry_platforminfo_Arch_Arm;
typedef struct {
  PlatformInfo2_KNativePtr pinned;
} PlatformInfo2_kref_com_landry_platforminfo_Arch_Arm32;
typedef struct {
  PlatformInfo2_KNativePtr pinned;
} PlatformInfo2_kref_com_landry_platforminfo_Arch_Arm64;
typedef struct {
  PlatformInfo2_KNativePtr pinned;
} PlatformInfo2_kref_com_landry_platforminfo_Arch_Js;
typedef struct {
  PlatformInfo2_KNativePtr pinned;
} PlatformInfo2_kref_com_landry_platforminfo_Arch_Jvm;
typedef struct {
  PlatformInfo2_KNativePtr pinned;
} PlatformInfo2_kref_com_landry_platforminfo_Arch_X64;
typedef struct {
  PlatformInfo2_KNativePtr pinned;
} PlatformInfo2_kref_com_landry_platforminfo_Arch_X86;
typedef struct {
  PlatformInfo2_KNativePtr pinned;
} PlatformInfo2_kref_com_landry_platforminfo_Platform;
typedef struct {
  PlatformInfo2_KNativePtr pinned;
} PlatformInfo2_kref_com_landry_platforminfo_Platform_Android;
typedef struct {
  PlatformInfo2_KNativePtr pinned;
} PlatformInfo2_kref_com_landry_platforminfo_Platform_IOS;
typedef struct {
  PlatformInfo2_KNativePtr pinned;
} PlatformInfo2_kref_com_landry_platforminfo_Platform_JS;
typedef struct {
  PlatformInfo2_KNativePtr pinned;
} PlatformInfo2_kref_com_landry_platforminfo_Platform_JVM;
typedef struct {
  PlatformInfo2_KNativePtr pinned;
} PlatformInfo2_kref_com_landry_platforminfo_Platform_LINUX;
typedef struct {
  PlatformInfo2_KNativePtr pinned;
} PlatformInfo2_kref_com_landry_platforminfo_Platform_MAC;
typedef struct {
  PlatformInfo2_KNativePtr pinned;
} PlatformInfo2_kref_com_landry_platforminfo_Platform_WINDOWS;
typedef struct {
  PlatformInfo2_KNativePtr pinned;
} PlatformInfo2_kref_com_landry_platforminfo_Platform_ZEPHYR;
typedef struct {
  PlatformInfo2_KNativePtr pinned;
} PlatformInfo2_kref_com_landry_platforminfo_PlatformInfo;


typedef struct {
  /* Service functions. */
  void (*DisposeStablePointer)(PlatformInfo2_KNativePtr ptr);
  void (*DisposeString)(const char* string);
  PlatformInfo2_KBoolean (*IsInstance)(PlatformInfo2_KNativePtr ref, const PlatformInfo2_KType* type);
  PlatformInfo2_kref_kotlin_Byte (*createNullableByte)(PlatformInfo2_KByte);
  PlatformInfo2_kref_kotlin_Short (*createNullableShort)(PlatformInfo2_KShort);
  PlatformInfo2_kref_kotlin_Int (*createNullableInt)(PlatformInfo2_KInt);
  PlatformInfo2_kref_kotlin_Long (*createNullableLong)(PlatformInfo2_KLong);
  PlatformInfo2_kref_kotlin_Float (*createNullableFloat)(PlatformInfo2_KFloat);
  PlatformInfo2_kref_kotlin_Double (*createNullableDouble)(PlatformInfo2_KDouble);
  PlatformInfo2_kref_kotlin_Char (*createNullableChar)(PlatformInfo2_KChar);
  PlatformInfo2_kref_kotlin_Boolean (*createNullableBoolean)(PlatformInfo2_KBoolean);
  PlatformInfo2_kref_kotlin_Unit (*createNullableUnit)(void);

  /* User functions. */
  struct {
    struct {
      struct {
        struct {
          struct {
            struct {
              PlatformInfo2_KType* (*_type)(void);
              PlatformInfo2_kref_com_landry_platforminfo_Arch (*Arch)();
              struct {
                PlatformInfo2_KType* (*_type)(void);
                PlatformInfo2_kref_com_landry_platforminfo_Arch_Arm (*Arm)();
              } Arm;
              struct {
                PlatformInfo2_KType* (*_type)(void);
                PlatformInfo2_kref_com_landry_platforminfo_Arch_Arm32 (*_instance)();
              } Arm32;
              struct {
                PlatformInfo2_KType* (*_type)(void);
                PlatformInfo2_kref_com_landry_platforminfo_Arch_Arm64 (*_instance)();
              } Arm64;
              struct {
                PlatformInfo2_KType* (*_type)(void);
                PlatformInfo2_kref_com_landry_platforminfo_Arch_Js (*_instance)();
              } Js;
              struct {
                PlatformInfo2_KType* (*_type)(void);
                PlatformInfo2_kref_com_landry_platforminfo_Arch_Jvm (*_instance)();
              } Jvm;
              struct {
                PlatformInfo2_KType* (*_type)(void);
                PlatformInfo2_kref_com_landry_platforminfo_Arch_X64 (*_instance)();
              } X64;
              struct {
                PlatformInfo2_KType* (*_type)(void);
                PlatformInfo2_kref_com_landry_platforminfo_Arch_X86 (*_instance)();
              } X86;
            } Arch;
            struct {
              PlatformInfo2_KType* (*_type)(void);
              PlatformInfo2_kref_com_landry_platforminfo_Platform (*Platform)();
              struct {
                PlatformInfo2_KType* (*_type)(void);
                PlatformInfo2_kref_com_landry_platforminfo_Platform_Android (*_instance)();
              } Android;
              struct {
                PlatformInfo2_KType* (*_type)(void);
                PlatformInfo2_kref_com_landry_platforminfo_Platform_IOS (*_instance)();
              } IOS;
              struct {
                PlatformInfo2_KType* (*_type)(void);
                PlatformInfo2_kref_com_landry_platforminfo_Platform_JS (*_instance)();
              } JS;
              struct {
                PlatformInfo2_KType* (*_type)(void);
                PlatformInfo2_kref_com_landry_platforminfo_Platform_JVM (*_instance)();
              } JVM;
              struct {
                PlatformInfo2_KType* (*_type)(void);
                PlatformInfo2_kref_com_landry_platforminfo_Platform_LINUX (*_instance)();
              } LINUX;
              struct {
                PlatformInfo2_KType* (*_type)(void);
                PlatformInfo2_kref_com_landry_platforminfo_Platform_MAC (*_instance)();
              } MAC;
              struct {
                PlatformInfo2_KType* (*_type)(void);
                PlatformInfo2_kref_com_landry_platforminfo_Platform_WINDOWS (*_instance)();
              } WINDOWS;
              struct {
                PlatformInfo2_KType* (*_type)(void);
                PlatformInfo2_kref_com_landry_platforminfo_Platform_ZEPHYR (*_instance)();
              } ZEPHYR;
            } Platform;
            struct {
              PlatformInfo2_KType* (*_type)(void);
              PlatformInfo2_kref_com_landry_platforminfo_PlatformInfo (*_instance)();
              PlatformInfo2_kref_com_landry_platforminfo_Arch (*get_arch)(PlatformInfo2_kref_com_landry_platforminfo_PlatformInfo thiz);
              PlatformInfo2_KBoolean (*get_isDesktopNative)(PlatformInfo2_kref_com_landry_platforminfo_PlatformInfo thiz);
              PlatformInfo2_KBoolean (*get_isEmbedded)(PlatformInfo2_kref_com_landry_platforminfo_PlatformInfo thiz);
              PlatformInfo2_KBoolean (*get_isMobile)(PlatformInfo2_kref_com_landry_platforminfo_PlatformInfo thiz);
              PlatformInfo2_kref_com_landry_platforminfo_Platform (*get_platform)(PlatformInfo2_kref_com_landry_platforminfo_PlatformInfo thiz);
            } PlatformInfo;
          } platforminfo;
        } landry;
      } com;
    } root;
  } kotlin;
} PlatformInfo2_ExportedSymbols;
extern PlatformInfo2_ExportedSymbols* PlatformInfo2_symbols(void);
#ifdef __cplusplus
}  /* extern "C" */
#endif
#endif  /* KONAN_PLATFORMINFO2_H */
