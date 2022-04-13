package com.landry.platforminfo

actual class PlatformInfo {
    actual companion object {
        actual val platform = Platform.Android
        actual val arch: Arch = Arch.Arm64
    }
}