plugins {
    kotlin("multiplatform") version "1.6.20"
}

group = "me.landrynorris"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
}

kotlin {
    jvm {
        compilations.all {
            kotlinOptions.jvmTarget = "1.8"
        }
        withJava()
        testRuns["test"].executionTask.configure {
            useJUnitPlatform()
        }
    }

    js(BOTH) {
        browser {
            commonWebpackConfig {
                cssSupport.enabled = true
            }
        }
    }

    val desktopTargets = listOf(macosArm64(), macosX64(), linuxArm32Hfp("linuxArm32"), linuxX64(), linuxArm64(),
        mingwX64(), mingwX86())
    val iosTargets = listOf(iosArm32(), iosArm64(), iosX64(), iosSimulatorArm64())
    val ndkTargets = listOf(androidNativeArm32(), androidNativeArm64(), androidNativeX64(), androidNativeX86())

    iosTargets.forEach {
        it.binaries {
            sharedLib()
        }
    }
    ndkTargets.forEach {
        it.binaries {
            sharedLib()
        }
    }
    desktopTargets.forEach {
        it.binaries {
            sharedLib()
        }
    }

    sourceSets {
        val commonMain by getting
        val commonTest by getting {
            dependencies {
                implementation(kotlin("test"))
            }
        }
    }
}
