package com.landry.platforminfo

actual class PlatformInfo {
    actual companion object {
        actual val platform = Platform.MAC
        actual val arch: Arch = Arch.X64
    }
}