### Get All Clusters

```sh
kubectl get all
```

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
kubectl get pod --watch
kubectl get service
```

- Deployment will be ready when Pod is created
- Check status of Pod creation via get pod

### Restart Deployment

```sh
kubectl rollout restart deployment my-deployment
```

### Get Replicaset

```sh
kubectl get replicaset
```

- Deployment manages a replicaset
- replicaset manages pods
- We interact with deployment

### Edit deployment conf

```sh
kubectl edit deployment mynginx-deployment
```

- Old **Pod** deleted and new one will be created

### Debugging Pods

```sh
kubectl logs **PodName**
kubectl logs **mynginx-kube-123**
```

#### Enter into the container's terminal shell

```sh
kubectl **exec** -it **$podName** -- bin/bash

```

- exit => to leave the container's shell

### Delete Deployment

```sh
kubectl delete deployment mynginx-deployment
```

- All the underneath **pods** and **replicasets** will be deleted

### Conf File

- File path

```sh
kubctl apply -f mynginx-deployment.yaml
```

- Kubernetes knows when to create or update deployment

### Ip address etc of the pods

```sh
kubectl get pod -o wide
```

### Service details

```sh
kubectl describe service
```

### Metadata

- Added by kubernetes => creationTimestamp, replicaset etc

```sh
kubectl get deployment nginx-deployment -o yaml > result.yaml
```

### Delete from files

```sh
kubectl delete -f mynginx-deployment.yaml
```

- Deloyment will be deleted
- Same goes for service

### Get Secret

```sh
kubectl get secret
```
