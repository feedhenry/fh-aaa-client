#!groovy

// https://github.com/feedhenry/fh-pipeline-library
@Library('fh-pipeline-library') _

stage('Trust') {
    enforceTrustedApproval()
}

fhBuildNode([labels: ['nodejs6']]) {
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
