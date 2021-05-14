### Namespace

- Organize resources in namespaces
- It is a virtual cluster inside a cluster
- Kubernetes gives you namespaces by default => when you create a cluster

```sh
kubectl get namespaces
```

- **kubernetes-dashboard** => specifically to **minikube** cluster
- **kube-system** => not for our use
- **kube-public** => for public info
- **kube-node-lease** => heartbeats of nodes
- **default**

### Create Namespace

- Via conf file or kubectl

```sh
kubectl create namespace my-namespace
```

### Usage

- Group resources => seperation of concerns
- DB, Cache, Servers etc
- Each team can work in it's own namespace
- Same namespace and deployment name => overrid => **disaster**
- **Blue/Green Deployment** => versions of production => active and next candidates if the active one goes down
- Namespace accesses can be given to a perticular team
- Limit each namespace with resources
- Resource limit per namespace

### Points to remember

- You can't access most of the resources of another namespace in yours => eg => config map => duplicate needs to be created
- Same applies to secrets
- Services can be shared

### Not limited to namespaces

- **Volumes**, **node** => live globally => accessible throughout the cluster

### List resources based on namespaces or not

```sh
kubectl api-resources --namespaced=false
kubectl api-resources --namespaced=true
```

- ConfiMap created without namespace goes to **default** namespace
- Create with namespace:-

```sh
kubectl apply -f my-config.yml --namespace=my-name
```

- Or in conf file under metadata => namespace: my-name
- But to get configmap from namespace other than default:-

```sh
kubectl get configmap -n my-name
```
