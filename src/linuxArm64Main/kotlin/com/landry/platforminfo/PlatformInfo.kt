package com.landry.platforminfo

actual class PlatformInfo {
    actual companion object {
        actual val platform = Platform.LINUX
        actual val arch: Arch = Arch.Arm64
    }
}