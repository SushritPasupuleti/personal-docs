---
sidebar_position: 1
---

# OWASP API Security Top 10 - 2023

Common API security risks and vulnerabilities along with the best practices to secure APIs against them.

## API01:2023 Broken Object Level Authorization (BOLA)

**Premise**: API users should only be able to access the resources they are authorized to access.

**Problem**: APIs often fail to enforce object level authorization checks when performing requests. This allows attackers to access unauthorized resources.

**Example**: Assume a Google Drive API that allows users to access their files. The API should enforce authorization checks to ensure that a user can only access their own files. If the API fails to enforce these checks, an attacker can access files of other users.

The API to return files of a user with `ID` `123` may look like this:

```http
GET /api/v1/files/123 HTTP/1.1
```

This endpoint could be vulnerable to BOLA if it does not enforce authorization checks. A malicious actor may change the `ID` to `456` to access files of another user:

```http
GET /api/v1/files/456 HTTP/1.1
```

**Prevention**: Proper authorization checks should be enforced for all requests. This includes checking the user's identity and the requested resource. The API should also ensure that the user is authorized to perform the requested action on the resource. Some implementations can include:

- JWTs with claims for authorization
- OAuth scopes
- Key-based authorization
- RBAC and ABAC
- Use less predictable identifiers for resources (like UUIDs instead of sequential IDs)

**Resources**:

- [OWASP API Security Top 10 - 2021: API01:2021 Broken Object Level Authorization (BOLA)](https://owasp.org/API-Security/editions/2023/en/0xa1-broken-object-level-authorization/)
- [Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html)
- [Authorization Testing Automation Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Testing_Automation_Cheat_Sheet.html)

## API02:2023 Broken Authentication

**Premise**: API users should be authenticated before accessing protected resources.

**Problem**: APIs often fail to enforce authentication checks when performing requests. This allows attackers to access protected resources without authentication. If the authentication mechanism isn't robust enough, it leads to the same problem. These include:

- Weak passwords
- No rate limiting on authentication requests
- No multi-factor authentication
- No account lockout
- No password reset policy
- No session expiration
- Disclosing tokens/credentials in logs or URLs
- GraphQL batching exploits
- Not enforcing authentication for all requests
- Misconfigured JWTs:
    - Provider accepts unsigned JWTs
    - Provider accepts JWTs with weak algorithms
    - Provider does not check expiration
    - Disclosure of private/sensitive information within JWT payload
    - Weak secret key used to sign JWTs

**Prevention**: Make sure that all requests are authenticated. Use strong authentication mechanisms and implement best practices for authentication. 

**Resources**:

- [OWASP API Security Top 10 - 2021: API02:2021 Broken Authentication](https://owasp.org/API-Security/editions/2023/en/0xa2-broken-authentication/)
- [Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)
- [Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html)

## API03:2023 Broken Object Property Level Authorization - BOPLA

**Premise**: API users should only be able to access the properties of resources they are authorized to access. Some properties of a resource may be more sensitive than others and thus may warrant finer Authorization.

**Problem**: APIs often fail to enforce object property level authorization checks when performing requests. This allows attackers to access unauthorized properties of resources. These include: 

- Excessive Data Exposure where more than the necessary amount of information is returned by the endpoint.
- Mass Assignment where the API allows users to update properties that they shouldn't be able to update.

**Example**: Assume a Facebook API that allows users to access their profile information. The API should enforce authorization checks to ensure that a user can only access their own profile information. If the API fails to enforce these checks, an attacker can access profile information of other users.

For a user with `ID` `123`, the API to return profile information may look like this:

```http
GET /api/v1/users/123 HTTP/1.1
```

This may return the following response:

```json
{
    "id": 123,
    "name": "John Doe",
    "email": "john@doe.com",
    "ssn": "123-45-6789"
}
```

This endpoint may be returning the entire User Object, and thus returns the `ssn` field, which shouldn't be accessible without proper authorization.

**Prevention**: Proper authorization checks should be enforced for all requests. This includes checking the user's identity and the requested resource. The API should also ensure that the user is authorized to perform the requested action on the resource. Some implementations can include:

- JWTs with claims for authorization
- Avoid using generic endpoints that return entire objects
- Avoid using generic endpoints that update entire objects
- Implement response validation to ensure that only the necessary fields are returned
- Define and enforce a schema for the request body
- Return/Update only the necessary fields for the request

**Resources**:

- [OWASP API Security Top 10 - 2021: API03:2021 Broken Object Property Level Authorization - BOPLA](https://owasp.org/API-Security/editions/2023/en/0xa3-broken-object-property-level-authorization/)
- [Mass Assignment Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Mass_Assignment_Cheat_Sheet.html)

## API04:2023 Unrestricted Resource Consumption

**Premise**: API users should not be able to consume more resources than they are authorized to consume and the API should not allow users to consume more resources than it can handle.

**Problem**: APIs often fail to enforce resource consumption checks when performing requests. This allows attackers to consume more resources than they are authorized to consume. These include:

- Denial of Service (DoS) attacks
- Distributed Denial of Service (DDoS) attacks
- Cost Explosions

**Prevention**: Proper resource consumption checks should be enforced for all requests. This includes checking the user's identity and the requested resource. The API should also ensure that the user is authorized to perform the requested action on the resource. Some implementations can include:

- Rate limiting
- Throttling
- Quotas
- Caching
- Pagination
- Max payload size
- Max request size
- Max response size
- Spending limits

**Resources**:

- [OWASP API Security Top 10 - 2021: API04:2021 Unrestricted Resource Consumption](https://owasp.org/API-Security/editions/2023/en/0xa4-unrestricted-resource-consumption/)
- [Availability Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Web_Service_Security_Cheat_Sheet.html#availability)
- [GraphQL Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/GraphQL_Cheat_Sheet.html#dos-prevention)
- [Mitigating Batching Attacks](https://cheatsheetseries.owasp.org/cheatsheets/GraphQL_Cheat_Sheet.html#mitigating-batching-attacks)

## API05:2023 Broken Function Level Authorization - BFLA

**Premise**: API users should only be able to access the functions they are authorized to access.

**Problem**: APIs often fail to enforce function level authorization checks when performing requests. This allows attackers to access unauthorized functions. These include:

- Accessing functions that are not available to the user
- Performing functions that the user is not authorized to perform
- Performing actions while posing as another user
- Using a different HTTP method to perform an action

**Example**: Assume a Google Drive API that allows users to upload/update files:

```http
PUT /api/v1/files HTTP/1.1
```

This endpoint could be vulnerable to BFLA if it does not enforce authorization checks. A malicious actor may change the HTTP method to `DELETE` to delete files of other users:

```http
DELETE /api/v1/files HTTP/1.1
```

**Prevention**: Proper authorization checks should be enforced for all requests. This includes checking the user's identity and the requested resource. The API should also ensure that the user is authorized to perform the requested action on the resource. Some implementations can include:

- Require claims for all requests
- Enforce authorization checks for all requests
- Enforce proper RBAC and ABAC policies

**Resources**:

- [OWASP API Security Top 10 - 2021: API05:2021 Broken Function Level Authorization - BFLA](https://owasp.org/API-Security/editions/2023/en/0xa5-broken-function-level-authorization/)
- [Forced Browsing Cheat Sheet](https://owasp.org/www-community/attacks/Forced_browsing)
- [Access Control Cheat Sheet](https://owasp.org/www-community/Access_Control)

## API06:2023 Unrestricted Access to Sensitive Business Flows

**Premise**: API users should only be able to access the sensitive business flows they are authorized to access and in the intended flow.

**Problem**: APIs often fail to enforce authorization checks when performing requests. This allows attackers to access unauthorized sensitive business flows. These include:

- Automating business flows that are not intended to be automated
- Accessing business flows that are not intended to be accessed
- Abusing flaws in the business flow to gain unauthorized access or perform unauthorized actions
- Scalping
- Spamming
- Scraping

**Example**: Assume an E-Commerce API that allows users to purchase items:

```http
POST /api/v1/purchase HTTP/1.1
```

This endpoint could be vulnerable to unrestricted access to sensitive business flows if it does not enforce authorization checks. A malicious actor may automate the purchase flow to purchase items without paying or spam it.

**Prevention**: Proper authorization checks should be enforced for all requests. This includes checking the user's identity and the requested resource. The API should also ensure that the user is authorized to perform the requested action on the resource. Some implementations can include:

- Require claims for all requests
- Device fingerprinting
- Bot detection
- IP reputation/blocking
- Layer wise security
    - Business - Identify the business flows that might harm the business if automated
    - Engineering - Choose the right protection mechanism for the business flows

**Resources**:

- [OWASP API Security Top 10 - 2021: API06:2021 Unrestricted Access to Sensitive Business Flows](https://owasp.org/API-Security/editions/2023/en/0xa6-unrestricted-access-to-sensitive-business-flows/)
- [Automated Threats to Web Applications](https://owasp.org/www-project-automated-threats-to-web-applications/)

## API07:2023 Server Side Request Forgery - SSRF

**Premise**: API users should not be able to perform requests to control remote resources with their own URLs.

**Problem**: APIs often fail to enforce authorization checks when performing requests. These include:

- Performing requests to internal resources
- Remote Code Execution (RCE)
- Denial of Service (DoS)

**Example**: Assume an endpoint that allows users to upload files:

```http
POST /api/v1/upload HTTP/1.1
```

This may retun the URL of the uploaded file hosted on the CDN. (Ex: `S3`), the attacker may use the URL to perform requests to internal resources based on the CDN's API instead of your own.

Or they may pass a URL that points to a malicious file that may be downloaded to the server and potentially executed (in the case of URL based File Uploads, where user provides the URL to their asset). This could even end up with the server performing a `GET` request on the supplied URL.

**Prevention**:

- Isolate the resource fetching mechanism in your network
    - Use Allowlists to allow only the necessary resources
    - Use Denylists to block known malicious resources
    - Use URL schemes, ports
    - Accepted protocols, headers, methods
- Disable HTTP redirects
- Use URL parsers
- Sanitize user input
- Do not return raw responses from internal resources

**Resources**:

- [OWASP API Security Top 10 - 2021: API07:2021 Server Side Request Forgery - SSRF](https://owasp.org/API-Security/editions/2023/en/0xa7-server-side-request-forgery/)
- [Server Side Request Forgery Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Server_Side_Request_Forgery_Prevention_Cheat_Sheet.html)

## API08:2023 Security Misconfiguration

**Premise**: API users should not be able to access sensitive information or perform unauthorized actions due to misconfigurations in the components of the API.

**Problem**: APIs often fail to enforce authorization checks when performing requests. These include:

- Missing security headers
- Missing CORS headers
- Missing CSRF tokens
- Unnecessary features enabled
- Lack of TLS
- Improper configuration of Routers, Firewalls, Load Balancers, etc.

**Example**:

- `X-Powered-By` header may disclose the technology stack used by the API
- `X-XSS-Protection` header may be disabled
- `ping` or `metrics` endpoints may be abused to perform DoS attacks

**Prevention**:

- Use a secure default configuration
- Validate and vet all configurations
- Use a configuration management tool
- Use a secure deployment pipeline
- Use a secure build pipeline
- Define and enforce a security policy
- Audit configurations regularly
- Use Configuration Scanners

**Resources**:

- [OWASP API Security Top 10 - 2021: API08:2021 Security Misconfiguration](https://owasp.org/API-Security/editions/2023/en/0xa8-security-misconfiguration/)
- [Configuration and Deployment Management Testing](https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/02-Configuration_and_Deployment_Management_Testing/README)
- [Testing for Error Handling](https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/08-Testing_for_Error_Handling/README)
- [Testing for CSRF](https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/06-Session_Management_Testing/05-Testing_for_Cross_Site_Request_Forgery)

## API09:2023 Improper Inventory Management

**Premise**: API users should not be able to access older versions of the API that may be vulnerable.

**Problem**: APIs often leave older versions of the API running that may be vulnerable to ensure backward compatibility. These include:

- `v1` of the API may be vulnerable to BOLA, but `v2` may not be
- May not implement proper RBAC and ABAC policies for older versions of the API
- May not use the latest security features for older versions of the API

**Prevention**:

- Document all versions of the API and their support status
- Deprecate older versions of the API as soon as possible
- When newer versions are patched with security fixes, backport them to older versions

**Resources**:

- [OWASP API Security Top 10 - 2021: API09:2021 Improper Inventory Management](https://owasp.org/API-Security/editions/2023/en/0xa9-improper-inventory-management/)

## API10:2023 Unsafe Consumption of APIs

**Premise**: 3rd Party API consumers should be treated with limited trust.

**Problem**: 3rd Party consumers may be malicious or may be compromised. These can lead to:

- Data breaches
- May lead to the compromise of the API provider
- May lead to the compromise of other consumers

**Prevention**:
- Secure all APIs
- Validate and sanitize all inputs
- Maintain allowlists and denylists

**Resources**:
- [OWASP API Security Top 10 - 2021: API10:2021 Unsafe Consumption of APIs](https://owasp.org/API-Security/editions/2023/en/0xaa-unsafe-consumption-of-apis/)
- [Web Service Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Web_Service_Security_Cheat_Sheet.html)
- [Input validation](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html)

## Injections

Attackers may exploit lack of monitoring/logging to abuse systems.

Types of injections:

- OS Command Injection
- SQL Injection
- XSS

**Prevention**:

- Validate and sanitize all inputs
- Apply least previlege
    - Run the application with the exact permissions it needs
- Handle errors and exceptions
- Use a secure deployment pipeline
- Actively monitor and log all requests
    - Use robust logging mechanisms that cannot be tampered with
