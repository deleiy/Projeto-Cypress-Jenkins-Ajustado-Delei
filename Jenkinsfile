stage('Install Dependencies') {
    steps {
        bat 'npm ci'
        bat 'npx cypress install'
    }
}
stage('Run Cypress Tests') {
    steps {
        bat 'npx cypress run --browser electron --headless'
    }
}