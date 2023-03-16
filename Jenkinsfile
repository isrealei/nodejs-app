pipeline {
 
 agent any
 
 environment{
    registry = "isrealurephu/lifedelight-app"
    registryCredentials = "dockerhub"
 }

 stages{
    stage ("Build nodejs app image") {
        steps{
            script{
                dockerImage = docker.build registry + ":V$BUILD_NUMBER"
            }
            
        }

    }

    stage ("Upload image to dockerhub") {
        steps{
          script {
            docker.withRegistry ( '', registryCredential) {
                dockerImage.push ("V$BUILD_NUMBER")
                dockerImage.push ("latest")
            }
         }
      }
    }

    stage ('Remove unused docker images') {
          steps {
            sh "docker rmi $registry:V$BUILD_NUMBER"
          }
        }


}

}