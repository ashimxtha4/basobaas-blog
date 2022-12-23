pipeline{
    agent any
    stages{
        stage("Build"){
            steps{ 
                echo "Building CICD pipeline"
            }
        }
        stage("Deploy"){
            steps{
                sshagent(['root-asterdio']) {
                    // some block
                    sh "ssh -o StrictHostKeyChecking=no root@157.245.204.135 /deploy/basobaas_blog.sh"
                }
            }
        }
    }
        post {
            success {
                slackSend (color: "good", message:"Build deployed successfully, took ${currentBuild.durationString}  - ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>")
         }
            failure {
                slackSend (color: "bad", message:"Build failed, took ${currentBuild.durationString}  - ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)")
            }
        }
}
