import * as AWS from 'aws-sdk';

const config = {
    region: 'us-east-1',
    secretAccessKey: '8sqUYPqR6ocwRCTpxmmxEdYKtRdXPRws1HeMrbhf',
    accessKeyId:'AKIAWDC5T3KQNKXSBIHV'
}

AWS.config.update(config);

const table = 'reservations'; 

const dynamo = new AWS.DynamoDB.DocumentClient();
export const addReservation = async(data) =>{
    const params = {
        TableName: table,
        Item: data
    }

    const response = await dynamo.put(params).promise
    console.log(response.$response.httpResponse); 
}