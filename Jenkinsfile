pipeline {
    agent any

    triggers {
        // This triggers the pipeline on push events from github repo
        githubPush() 
    }

    environment {
        REPO_URL = 'https://github.com/Ayan0420/webportfolio-nextjs.git'
        IMAGE_NAME = 'webportfolio-image'
        CONTAINER_NAME = 'webportfolio'
        SERVER_PORT = '4201'
        APP_PORT = '3000'  // The port your app exposes
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: "${REPO_URL}"
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${IMAGE_NAME}")
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    // Stop and remove existing container if running
                    sh """
                    if [ \$(docker ps -aq -f name=${CONTAINER_NAME}) ]; then
                        docker stop ${CONTAINER_NAME} || true
                        docker rm ${CONTAINER_NAME} || true
                    fi
                    """
                    // Run new container
                    sh """
                    docker run -d --name ${CONTAINER_NAME} \
                    -p ${SERVER_PORT}:${APP_PORT} \
                    --restart always \
                    ${IMAGE_NAME}
                    """
                }   
            }
        }
    }

    post {
        success {
            echo 'Deployment successful!'
        }
        failure {
            echo 'Deployment failed!'
        }
    }
}
