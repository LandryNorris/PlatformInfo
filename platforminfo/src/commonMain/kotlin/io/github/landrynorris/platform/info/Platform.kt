package io.github.landrynorris.platform.info

sealed class Platform {
    object JVM: Platform()
    object Android: Platform()
    object IOS: Platform()
    object WINDOWS: Platform()
    object MAC: Platform()
    object LINUX: Platform()
    object JS: Platform()
    object ZEPHYR: Platform()
}