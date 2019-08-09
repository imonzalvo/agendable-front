import { AUTH_TYPE } from 'aws-appsync';
import { Auth } from 'aws-amplify';

export const cognitoAuth = {
  type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
  jwtToken: async () => (await Auth.currentSession()).getIdToken().getJwtToken(),
};

export const iamAuth = {
  type: AUTH_TYPE.AWS_IAM,
  credentials: () => Auth.currentCredentials(),
};
