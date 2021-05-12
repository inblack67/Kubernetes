- Virtualization is needed to run Kubernetes on local computer

```sh
brew install hyperkit
```

- Minikube => runs master and pod process in one node => for local purposes
- Docker is pre-installed in Minikube cluster

```sh
brew install minikube
```

- Minikube has a dependency of **kubectl** so it will install **kubectl** on its own
- **kubectl** is a command line tool used to interact with Kubernetes cluster.

- Start Kubernetes cluster
  - Use hyperkit as the hypervisor (VM)

```sh
minikube start --vm-driver=hyperkit
```

- Get status of nodes of the Kubernetes Cluster

```sh
kubectl get nodes
```

- Check **minikube** status

```sh
minikube status
```

- kubelet => service which runs the pods using container runtime

- Check client and server version of Kubernetes

```sh
kubectl version
```

- Delete **minikube** cluster

```sh
minikube delete
```

### External IP to service

```sh
minikube service mongo-express-service
```
