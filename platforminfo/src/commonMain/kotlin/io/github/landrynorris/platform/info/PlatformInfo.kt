package io.github.landrynorris.platform.info

object PlatformInfo {
    /**
     * The current [Platform] that this program is running on.
     */
    val platform: Platform =  io.github.landrynorris.platform.info.platform

    /**
     * The current device architecture this program is running on.
     */
    val arch: Arch = io.github.landrynorris.platform.info.arch

    /**
     * Checks whether the current platform is [Platform.Android] or [Platform.IOS].
     * Mobile Linux is not currently supported and will be treated as Desktop Native.
     */
    val isMobile get() = platform == Platform.Android || platform == Platform.IOS

    /**
     * Checks whether the current platform is [Platform.LINUX] or [Platform.MAC] or [Platform.WINDOWS]
     */
    val isDesktopNative 
        get() = platform == Platform.WINDOWS || platform == Platform.MAC || platform == Platform.LINUX

    /**
     * Checks whether the current platform is [Platform.ZEPHYR]
     */
    val isEmbedded get() = platform == Platform.ZEPHYR
}

internal expect val platform: Platform
internal expect val arch: Arch
