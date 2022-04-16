package com.platform.info.test

import com.landry.platforminfo.Arch
import com.landry.platforminfo.Platform
import com.landry.platforminfo.PlatformInfo
import kotlin.test.Test
import kotlin.test.assertEquals

class TestPlatformInfo {
    @Test
    fun testPlatformInfo() {
        assertEquals(Platform.IOS, PlatformInfo.platform)
        assertEquals(Arch.Arm32, PlatformInfo.arch)
    }
}