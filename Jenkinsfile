stage('Install Dependencies') {
    steps {
        // O 'npm ci' instala os pacotes, o 'cypress install' garante o executável
        sh 'npm ci'
        sh 'npx cypress install'
    }
}