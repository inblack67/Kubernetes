### Ingress

- Service can directly be accessed by Service ip and port but that is out of the question in production
- Only **ingress** service will be opened to the outside world
- Request will come from browser to ingress and then ingress will forward that to service/pod accodingly

### Ingress Controller

- Evaluate all the rules defined
- Manage redirections
- Entry point => ingress controller => ingress => ...
- Third party ingress controllers
  - K8s **NGINX** Ingress Controller

### Proxy Server

- Bare Metal
- Outside the K8s cluster => the main entrypoint for the cluster

### Install Ingress

```sh
minikube addons enable ingress
```

- Minikube will configer NGINX ingress controller out of the box
- Check:-

```sh
kubectl get ingress -n kube-system
```

### Default Backend

- When a request comes inside cluster and ingress cannot find the route defined => it redirects the req to default backend, which gives the response (error) accordingly
- To customize messages, create a service and pod with a same name
