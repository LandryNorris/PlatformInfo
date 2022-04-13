package com.landry.platforminfo

object PlatformInfo {
    val platform: Platform =  com.landry.platforminfo.platform
    val arch = com.landry.platforminfo.arch
    
    val isMobile get() = platform == Platform.Android || platform == Platform.IOS
    val isDesktopNative 
        get() = platform == Platform.WINDOWS || platform == Platform.MAC || platform == Platform.LINUX
    val isEmbedded get() = platform == Platform.ZEPHYR
}

internal expect val platform: Platform
internal expect val arch: Arch
