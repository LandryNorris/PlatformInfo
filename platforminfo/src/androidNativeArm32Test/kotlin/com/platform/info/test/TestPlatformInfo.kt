package com.platform.info.test

import io.github.landrynorris.platform.info.Arch
import io.github.landrynorris.platform.info.Platform
import io.github.landrynorris.platform.info.PlatformInfo
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

class TestPlatformInfo {
    @Test
    fun testPlatformInfo() {
        assertEquals(Platform.Android, PlatformInfo.platform)
        assertEquals(Arch.Arm32, PlatformInfo.arch)
        assertTrue(PlatformInfo.isMobile)
    }
}