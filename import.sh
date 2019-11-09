#!/bin/bash
set -e
IFS='|'

AWSCLOUDFORMATIONCONFIG="{\
\"Region\": \"us-west-2\",\
\"DeploymentBucketName\": \"amplify-agendabledevelop-develop-201150-deployment\",\
\"UnauthRoleName\": \"amplify-agendabledevelop-develop-201150-unauthRole\",\
\"StackName\": \"amplify-agendabledevelop-develop-201150\",\
\"StackId\": \"arn:aws:cloudformation:us-west-2:343146248340:stack/amplify-agendabledevelop-develop-201150/5117bf40-fe8f-11e9-aa53-0aa7561f3002\",\
\"AuthRoleName\": \"amplify-agendabledevelop-develop-201150-authRole\",\
\"UnauthRoleArn\": \"arn:aws:iam::343146248340:role/amplify-agendabledevelop-develop-201150-unauthRole\",\
\"AuthRoleArn\": \"arn:aws:iam::343146248340:role/amplify-agendabledevelop-develop-201150-authRole\"\
}"
PROVIDER_CONFIG="{\
\"awscloudformation\":$AWSCLOUDFORMATIONCONFIG\
}"


AWS_CONFIG="{\
\"configLevel\":\"project\",\
\"useProfile\":true,\
\"profileName\":\"default\"\
}"

amplify env import \
--name dev \
--config $PROVIDER_CONFIG \
--awsInfo $AWS_CONFIG \
--yes