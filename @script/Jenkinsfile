#!groovy
node {
    stage ('Downloading') {
        checkout scm
        bat 'cd jenkins_electron'
        echo 'Yay!'
        load "package-properties.txt"
    }
}