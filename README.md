I undertook this small project to deepen my understanding of AWS cloud operations, following the completion of the AWS Solutions Architect Associate certification. The project, originally conceived by Forrest Brazeal, serves as a practical application of AWS services.

The Cloud Resume Challenge: https://cloudresumechallenge.dev/

AWS Services Utilized:

    S3: Hosting the website.
    CloudFront: Efficient traffic flow with Origin Access Identity (OAC) enabled.
    Route 53: Domain registration.
    Certificate Manager (ACM): Creation and maintenance of SSL/TLS certificates for the domain.
    Lambda: Python script employed to update the website's visitor count value.
    API Gateway: Acting as a secure bridge between the website and the Lambda function for API communication.
    DynamoDB: Storage and retrieval of the website's visitor count value.

Source Control:

Leveraging GitHub Actions to automate the process of updating and deploying code changes.
