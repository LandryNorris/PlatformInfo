package io.github.landrynorris.platform.info

/**
 * Checks whether the current JVM program is running on Android specifically.
 */
val isRunningOnAndroid by lazy {
    System.getProperty("java.specification.vendor").contains("Android") ||
            System.getProperty("java.vendor.url").contains("Android") ||
            System.getProperty("java.vendor").contains("Android") ||
            System.getProperty("java.vm.vendor").contains("Android")
}

internal actual val platform: Platform = if(isRunningOnAndroid) Platform.Android else Platform.JVM
internal actual val arch: Arch = Arch.Jvm
