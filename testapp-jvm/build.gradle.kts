
plugins {
    kotlin("jvm")
    application
}

repositories {
    mavenCentral()
    google()
}

kotlin {
    dependencies {
        implementation("io.github.landrynorris:platform-info:1.0")
    }
}