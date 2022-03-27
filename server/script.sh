EMAIL_KEY=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

curl -H 'api-key:'$EMAIL_KEY \
-X POST -d '{ \
# Define the campaign settings \
"name":"Campaign sent via the API", \
"subject":"My subject", \
"sender": { "name": "From name", "email":"noah@intelligent-learning.tech" }, \
"type": "classic", \
# Content that will be sent \
"htmlContent": "Congratulations! You successfully sent this example campaign via the Sendinblue API.", \
# Select the recipients\
"recipients": { "listIds": [2,7] }, \
# Schedule the sending in one hour\
"scheduledAt": "2018-01-01 00:00:01", \
}'
'https://api.sendinblue.com/v3/emailCampaigns'

EMAIL_KEY=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
curl --request POST \
  --url https://api.sendinblue.com/v3/smtp/email \
  --'api-key:'$EMAIL_KEY \
  --header 'accept: application/json' \
  --header 'api-key:'$EMAIL_KEY \
  --header 'content-type: application/json' \
  --data '{  
   "sender":{  
      "name":"Sender Alex",
      "email":"senderalex@example.com"
   },
   "to":[  
      {  
         "email":"testmail@example.com",
         "name":"John Doe"
      }
   ],
   "subject":"Hello world",
   "htmlContent":"<html><head></head><body><p>Hello,</p>This is my first transactional email sent from Sendinblue.</p></body></html>"
}'