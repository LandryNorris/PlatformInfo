package com.platform.info.test

import io.github.landrynorris.platform.info.Arch
import io.github.landrynorris.platform.info.Platform
import io.github.landrynorris.platform.info.PlatformInfo
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse

class TestPlatformInfo {
    @Test
    fun testPlatformInfo() {
        assertEquals(Platform.JVM, PlatformInfo.platform)
        assertEquals(Arch.Jvm, PlatformInfo.arch)

        assertFalse(PlatformInfo.isMobile)
    }
}