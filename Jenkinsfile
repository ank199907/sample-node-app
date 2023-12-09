pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/main']], userRemoteConfigs: [[url: 'https://github.com/ank199907/sample-node-app.git']]])
            }
        }

        stage('Build and Run') {
            steps {
                script {
                    docker.build('node-app:latest')
                    docker.image('node-app:latest').run("--name my-container -d -p 8081:3000")
                }
            }
        }
    }
}

