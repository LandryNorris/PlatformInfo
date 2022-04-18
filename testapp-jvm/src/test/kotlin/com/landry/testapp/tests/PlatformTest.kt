package com.landry.testapp.tests

import io.github.landrynorris.platform.info.Platform
import io.github.landrynorris.platform.info.PlatformInfo
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse

class PlatformTest {
    @Test
    fun testPlatform() {
        assertEquals(Platform.JVM, PlatformInfo.platform)
        assertFalse(PlatformInfo.isMobile)
    }
}