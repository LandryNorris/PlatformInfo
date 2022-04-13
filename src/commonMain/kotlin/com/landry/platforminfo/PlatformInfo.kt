package com.landry.platforminfo

expect class PlatformInfo {
    companion object {
        val platform: Platform
        val arch: Arch
    }
}