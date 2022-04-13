package com.landry.platforminfo

actual class PlatformInfo {
    actual companion object {
        actual val platform = Platform.WINDOWS
        actual val arch: Arch = Arch.X64
    }
}