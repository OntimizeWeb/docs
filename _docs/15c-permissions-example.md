---
title: Permissions example
permalink: /guide/permissions/example/
---

{% include base_path %} {% include toc %}

# Overview

In this section you are going to see the creation of an Ontimize application from cero using permissions on backend and frontend.

# Creation of the application

## First steps

To start the project we begin from a totally new Ontimize application. To see the complete example finished click the [following link](https://github.com/ontimize/ontimize-examples/tree/boot-web-permissions){:target="_blank"}.

## Configuring the backend

### Candidate entity creation

First we are goint to do is to add an entity called Candidate and add it's service and rest controller as you can see [here](https://www.ontimize.com/xwiki/bin/view/Ontimize+Boot+Training/Creating+DAO%2C+Service%2C+Controller){:target="_blank"}. Then we will add records to our table candidate on the database.
Once we got the previus steps we will create the user *candidate* on the database and  define his permissions and the admin permissions as you can see [here](https://ontimize.github.io/ontimize-boot/basics/security/){:target="_blank"}. In this example also you can see the tags that we use to secure the application and the methods. We use `@EnableAspectJAutoProxy(proxyTargetClass = false)` once on the `ServerAplication` class and `@Secured({ PermissionsProviderSecured.SECURED })` on all methods that you wanna protect.

`com.ontimize.projectwiki.ServerApplication`:
```java
@SpringBootApplication
@EnableAspectJAutoProxy(proxyTargetClass = false)
public class ServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(ServerApplication.class, args);
	}

}
```

`com.ontimize.projectwiki.model.core.service.CandidateService`:
```java
@Override
@Secured({ PermissionsProviderSecured.SECURED })
public EntityResult candidateQuery(Map<String, Object> keyMap, List<String> attrList)
        throws OntimizeJEERuntimeException {
    return this.daoHelper.query(this.candidateDao, keyMap, attrList);
}
```

### Database records

Here are the rows that we added to our database on each table.

`TUSER table:`
![TUSER table]({{ base_path }}/images/permissions/database_tuser.png){: .align-center}

`TUSER_ROLE table`:
![TUSER table]({{ base_path }}/images/permissions/database_tuser_role.png){: .align-center}

`TROLE table:`
![TROLE table]({{ base_path }}/images/permissions/database_trole.png){: .align-center}

`TSERVER_PERMISSION table:`
![TSERVER_PERMISSION table]({{ base_path }}/images/permissions/database_tserver_permission.png){: .align-center}

`TROLE_SERVER_PERMISSION table:`
![TROLE_SERVER_PERMISSION table]({{ base_path }}/images/permissions/database_trole_server_permission.png){: .align-center}

As we can see on the last screenshot the only user that have access to the CRUD operations on the table is the `demo` user.

### Server permissions

Now it's time to define the server permissions. In our application we got two users, Demo and Candidate. The only user that we want to have permission to access the candidates table it's the demo user so we will need to define it's permissions.

#### Creating the permission service

Previous to define our permissions we need to create a rest controller with it's service to provide the permissions to the frontend.

`com.ontimize.projectwiki.ws.core.rest.PermissionRestController`:
```java
@RestController
@RequestMapping("/permissions")
public class PermissionRestController extends ORestController<IPermissionService> {

    @Autowired
    private IPermissionService permissionService;

    @Override
    public IPermissionService getService() {
        return this.permissionService;
    }
}
```

`com.ontimize.projectwiki.model.core.service.PermissionService`:
```java
@Service("PermissionService")
@Lazy

public class PermissionService implements IPermissionService {

    public static final String CANDIDATE_PERMISSION;
    public static final String DEMO_PERMISSION;

    static {
        try {
            CANDIDATE_PERMISSION = FileUtils.readFileToString(new File("projectwiki-model/src/main/resources/candidate_permissions.json"), StandardCharsets.UTF_8);
            DEMO_PERMISSION = FileUtils.readFileToString(new File("projectwiki-model/src/main/resources/demo_permissions.json"), StandardCharsets.UTF_8);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public EntityResult permissionQuery(Map<String, Object> keyMap, List<String> attrList)
            throws OntimizeJEERuntimeException {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        EntityResult e = new EntityResultMapImpl();
        Map<String, String> map = new HashMap<>();
        String role = authentication.getAuthorities().toArray()[0].toString();
        if (role.equals("candidate role")) {
            map.put("permission", PermissionService.CANDIDATE_PERMISSION);
        }
        else if (role.equals("admin")) {
            map.put("permission", PermissionService.DEMO_PERMISSION);
        }
        e.addRecord(map);
        return e;
    }
}
```

#### Defining our server permissions

Once we create the service we can add our JSON permission files. We can see more examples of this files [here](https://ontimizeweb.github.io/docs/v8/guide/permissions/#permissions-definition-example){:target="_blank"}.

`candidate_permissions.json`:
```json
{
  "menu": [
    {
      "attr": "candidates",
      "visible": false,
      "enabled": false
    }
  ],
  "routes": [
    {
      "permissionId": "candidates-table-route",
      "enabled": false
    }
  ]
}
```

`demo_permissions.json`:
```json
{
  "menu": [
    {
      "attr": "candidates",
      "visible": true,
      "enabled": true
    }
  ],
  "routes": [
    {
      "permissionId": "candidates-table-route",
      "enabled": true
    }
  ]
}
```

With this permissions if we log into the application with the candidate user we will see the application like this:

![candidate home]({{ base_path }}/images/permissions/candidate_home.png){: .align-center}

And if we log with de demo user we gonna see a different menu:

![demo home]({{ base_path }}/images/permissions/demo_home.png){: .align-center}

## Configuring the frontend

First file we need to configure on our frontend it's the `app.config.ts`, inside we need to define the type of permission we wanna use (see [here](https://ontimizeweb.github.io/docs/v8/guide/appconfig/#permissions-configuration){:target="_blank"} for the different types) and the service used to get the server permissions.

`app.config.ts`:
```javascript
export const CONFIG: Config = {

...

  permissionsServiceType: 'OntimizeEEPermissions',

  permissionsConfiguration: {
    service: 'permissions'
  }

};
```

Then we need to define our service on the `app.services.config.ts`. In our application we only got two services as we can see below.

`app.services.config.ts`:
```javascript
export const SERVICE_CONFIG: Object = {
  'candidates': {
    'path': '/candidates'
  },
  'permissions': {
    'path': '/permissions/permission'
  }
};
```

