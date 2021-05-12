### Get Nodes

```sh
kubectl get nodes
```

### Get Services

```sh
kubectl get services
```

### Create Deployment

- You don't create **Pods**, you create **Deployment** which is an abstraction layer over **Pods**

```sh
kubectl create deployment mynginx-deployment --image=nginx
```

### Get Deployment

```sh
kubectl get deployment
kubectl get pod
```

- Deployment will be ready when Pod is created
- Check status of Pod creation via get pod

### Get Replicaset

```sh
kubectl get replicaset
```

- Deployment manages a replicaset
- replicaset manages pods
- We interact with deployment
