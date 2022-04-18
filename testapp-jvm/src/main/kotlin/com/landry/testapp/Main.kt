package com.landry.testapp

import io.github.landrynorris.platform.info.PlatformInfo

fun main() {
    println("Platform info is platform=${PlatformInfo.platform}, arch=${PlatformInfo.arch}, " +
            "isMobile=${PlatformInfo.isMobile}")
}