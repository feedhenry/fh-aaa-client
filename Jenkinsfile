#!groovy

// https://github.com/feedhenry/fh-pipeline-library
@Library('fh-pipeline-library') _

fhBuildNode {
    stage('Install Dependencies') {
        npmInstall {}
    }

    stage('Lint') {
        sh 'grunt eslint'
    }

    stage('Unit Tests') {
        sh 'grunt test'
    }

    stage('Build') {
        gruntBuild {
            name = 'fh-aaa-client'
        }
    }
}
