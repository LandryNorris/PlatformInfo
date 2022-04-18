import java.util.Properties

plugins {
    kotlin("multiplatform")
    id("org.jetbrains.kotlinx.kover") version "0.5.0"
    id("maven-publish")
    id("signing")
}

group = "io.github.landrynorris"
version = "1.0.1"

val properties by lazy {
    Properties().also { it.load(project.rootProject.file("local.properties").inputStream()) }
}

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

publishing {
    publications {
        create<MavenPublication>("release") {
            groupId = "io.github.landrynorris"
            artifactId = "platform-info"
            from(components["kotlin"])
            //from(components["java"])
            pom {
                name.set("platform-info")
                description.set("Kotlin Multiplatform Library providing platform info")
                url.set("https://github.com/LandryNorris/PlatformInfo")
                licenses {
                    license {
                        name.set("The MIT License")
                        url.set("https://opensource.org/licenses/MIT")

                    }
                }
                scm {
                    connection.set("https://github.com/LandryNorris/PlatformInfo.git")
                    developerConnection.set("https://github.com/LandryNorris/PlatformInfo")
                    url.set("https://github.com/LandryNorris/PlatformInfo")
                }
                developers {
                    developer {
                        id.set("landrynorris")
                        name.set("Landry Norris")
                        email.set("landry.norris0@gmail.com")
                    }
                }
            }
        }
    }

    repositories {
        maven {
            name = "sonatypeRepository"
            url = uri("https://s01.oss.sonatype.org/service/local/staging/deploy/maven2/")

            credentials {
                username = getProperty("sonatype.username")
                password = getProperty("sonatype.password")
            }
        }
    }
}

project.signing {
    val secretKeyFile = getProperty("signing.secretKeyRingFile") ?: error("No key file found")
    val secretKey = File(secretKeyFile).readText()
    val signingPassword = getProperty("signing.password")
    useInMemoryPgpKeys(secretKey, signingPassword)
    sign(project.publishing.publications)
}

fun getProperty(name: String): String? {
    return System.getProperty(name) ?: properties.getProperty(name)
}
