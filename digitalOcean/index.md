### Connect to Digital Ocean Cluster

```sh
doctl kubernetes cluster kubeconfig save $clusterName
```

### Bitnami

```sh
helm repo add bitnami https://charts.bitnami.com/bitnami
```

### Search mongo

```sh
helm search repo bitnami/mongodb
```

### Stateful Set (MongoDB)

- Helm will connect to default kubernetes cluster
- **values** flag takes a yml file as an arg which would have the info of the variables you want to override

```sh
helm install mymongodb --values $filepath bitnami/mongodb
```
