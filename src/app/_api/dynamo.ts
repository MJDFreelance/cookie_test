import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { awsCredentialsProvider } from '@vercel/functions/oidc';
import {DynamoDBDocumentClient, GetCommand} from "@aws-sdk/lib-dynamodb";

const AWS_REGION = process.env.AWS_REGION!;
const AWS_ROLE_ARN = process.env.AWS_ROLE_ARN!;

// Initialize the S3 Client
const client = new DynamoDBClient({
    region: AWS_REGION,
    // Use the Vercel AWS SDK credentials provider
    credentials: awsCredentialsProvider({
        roleArn: AWS_ROLE_ARN,
    }),
});

const ddbDocClient = DynamoDBDocumentClient.from(client);

export const get = async () => {
    const params = new GetCommand({
        TableName: 'lh_web_tutors',
        Key: {
            id: 'f6b232f4-5041-7029-46a2-bf7baaa5c30b',
        },
    })

    const response = await ddbDocClient.send(params);

    return response.Item;
}