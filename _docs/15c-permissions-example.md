---
title: Permissions example
permalink: /guide/permissions/example/
---

{% include base_path %} {% include toc %}

# Overview

In this section you gonna see the creation of an Ontimize application from cero using permissions on backend and frontend.

# Creation of the application

## First steps

To start the project we begin from a totally new Ontimize application. To see the complete example finished click the [following link](https://github.com/ontimize/ontimize-examples/tree/boot-web-permissions){:target="_blank"}.

## Configuring the backend

### Candidate entity creation

First we gonna do is to add an entity called Candidate and add it's service and rest controller as you can see [here](https://www.ontimize.com/xwiki/bin/view/Ontimize+Boot+Training/Creating+DAO%2C+Service%2C+Controller){:target="_blank"}. Then we gonna add records to our table candidate on the database.
Once we got the previus steps we gonna create the user *candidate* on the database and  define his permissions as you can see [here](https://ontimize.github.io/ontimize-boot/basics/security/){:target="_blank"}. In this example also you can see the tags that we use to secure the application and the methods. We use `@EnableAspectJAutoProxy(proxyTargetClass = false)` once on the `ServerAplication` class and `@Secured({ PermissionsProviderSecured.SECURED })` on all methods that you wanna define permissions.

```java
@SpringBootApplication
@EnableAspectJAutoProxy(proxyTargetClass = false)
public class ServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(ServerApplication.class, args);
	}

}
```

```java
@Override
@Secured({ PermissionsProviderSecured.SECURED })
public EntityResult candidateQuery(Map<String, Object> keyMap, List<String> attrList)
        throws OntimizeJEERuntimeException {
    return this.daoHelper.query(this.candidateDao, keyMap, attrList);
}
```