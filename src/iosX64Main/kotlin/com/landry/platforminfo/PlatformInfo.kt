package com.landry.platforminfo

actual class PlatformInfo {
    actual companion object {
        actual val platform = Platform.IOS
        actual val arch: Arch = Arch.X64
    }
}