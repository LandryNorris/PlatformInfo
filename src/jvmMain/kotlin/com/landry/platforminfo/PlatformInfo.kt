package com.landry.platforminfo

actual class PlatformInfo {
    actual companion object {
        actual val platform = Platform.JVM
        actual val arch: Arch = Arch.Jvm
    }
}