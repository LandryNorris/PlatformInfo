package com.landry.platforminfo

sealed class Arch {
    /**
     * A common superclass for [Arm32] and [Arm64]
     */
    open class Arm: Arch()
    object Arm32: Arm()
    object Arm64: Arm()

    /**
     * A common superclass for [X86_32] and [X64]
     */
    open class X86: Arch()
    @Suppress("ClassName")
    object X86_32: X86()
    object X64: X86()

    /**
     * JVM bitcode virtual architecture
     */
    object Jvm: Arch()

    /**
     * JS code-based virtual architecture
     */
    object JS: Arch()
}