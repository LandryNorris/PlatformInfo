
plugins {
    kotlin("multiplatform")
    id("org.jetbrains.kotlinx.kover") version "0.5.0"
}

group = "me.landrynorris"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
    google()
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

tasks.koverMergedHtmlReport {
    isEnabled = true                        // false to disable report generation
    htmlReportDir.set(layout.buildDirectory.dir("my-merged-report/html-result"))

    includes = listOf("*")            // inclusion rules for classes
}

tasks.koverMergedXmlReport {
    isEnabled = true                        // false to disable report generation
    xmlReportFile.set(layout.buildDirectory.file("my-merged-report/result.xml"))

    includes = listOf("com.platform.info.test.*")            // inclusion rules for classes
}

kover {
    isDisabled = false
    coverageEngine.set(kotlinx.kover.api.CoverageEngine.INTELLIJ)
    generateReportOnCheck = true
}
