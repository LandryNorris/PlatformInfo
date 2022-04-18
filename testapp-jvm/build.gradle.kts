
plugins {
    kotlin("jvm")
    application
}

repositories {
    //mavenLocal()
    mavenCentral()
    google()
}

kotlin {
    dependencies {
        implementation("io.github.landrynorris:platforminfo:1.0.4")

        testImplementation(kotlin("test"))
    }
}