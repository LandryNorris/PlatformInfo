package com.landry.platforminfo

actual class PlatformInfo {
    actual companion object {
        actual val platform = Platform.JS
        actual val arch = Arch.JS
    }
}
