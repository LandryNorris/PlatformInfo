package com.platform.info.test

import io.github.landrynorris.platform.info.Arch
import kotlin.test.Test
import kotlin.test.assertTrue

class ArchitectureTests {
    @Test
    fun testArmSubtypes() {
        assertTrue(Arch.Arm32 is Arch.Arm)
        assertTrue(Arch.Arm64 is Arch.Arm)
    }

    @Test
    fun testX86Subtypes() {
        assertTrue(Arch.X64 is Arch.X86)
        assertTrue(Arch.X86_32 is Arch.X86)
    }
}