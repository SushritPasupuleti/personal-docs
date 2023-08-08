# AWS ECR

Container registry for AWS.

## Setup System

> Ensure `aws-cli` is installed and configured.

Authenticate with AWS ECR:

```bash
aws ecr get-login-password --region <region> | docker login --username AWS --password-stdin <account-id>.dkr.ecr.<region>.amazonaws.com
```

- `<region>`: AWS region
- `<account-id>`: AWS account ID

**Note**: Ensure that the username is `AWS`.

The configuration will be stored in `~/.docker/config.json`.

