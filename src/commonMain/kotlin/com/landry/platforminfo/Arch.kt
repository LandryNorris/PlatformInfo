package com.landry.platforminfo

sealed class Arch {
    open class Arm: Arch()
    object Arm32: Arm()
    object Arm64: Arm()
    object X86: Arch()
    object X64: Arch()
    object Jvm: Arch()
    object Js: Arch()
}