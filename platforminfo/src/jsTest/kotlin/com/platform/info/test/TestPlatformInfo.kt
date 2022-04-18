package com.platform.info.test

import io.github.landrynorris.platform.info.Arch
import io.github.landrynorris.platform.info.Platform
import io.github.landrynorris.platform.info.PlatformInfo
import kotlin.test.Test
import kotlin.test.assertEquals

class TestPlatformInfo {
    @Test
    fun testPlatformInfo() {
        assertEquals(Platform.JS, PlatformInfo.platform)
        assertEquals(Arch.JS, PlatformInfo.arch)
    }
}