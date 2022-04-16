package com.platform.info.test

import com.landry.platforminfo.Arch
import com.landry.platforminfo.Platform
import com.landry.platforminfo.PlatformInfo
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

class TestPlatformInfo {
    @Test
    fun testPlatformInfo() {
        assertEquals(Platform.Android, PlatformInfo.platform)
        assertEquals(Arch.Arm64, PlatformInfo.arch)
        assertTrue(PlatformInfo.isMobile)
    }
}