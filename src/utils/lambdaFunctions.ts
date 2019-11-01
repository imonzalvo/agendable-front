import AWS, { Lambda } from 'aws-sdk';

export const invokeLambda = (lambda: Lambda, params: Lambda.Types.InvocationRequest) =>
  new Promise((resolve, reject) => {
    lambda.invoke(params, (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });

export const checkUsername = async (email: string) => {
  AWS.config.update({
    accessKeyId: 'AKIAU7ZI4HCKNTFQZHXN',
    secretAccessKey: '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',
    region: 'us-west-2',
  });

  const lambda = new AWS.Lambda();

  const params = {
    FunctionName: 'checkUsername',
    Payload: JSON.stringify({
      username: email,
    }),
  };

  return invokeLambda(lambda, params);
};
