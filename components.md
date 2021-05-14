### Node & Pod

- **Node** => Worker node => Simple server, physical or virtual m/c
- **Pod** => Smallest unit of K8s
- Abstraction over containers
- Pod is meant to run one container inside but you can run multiple too
- Usually 1 app 1 Pod => DB, Cache, Server => 3 Pods
- You only need to interact with pods and above => not the low level docker itself
- Each Pod gets its own IP address (internal) and Pods can communicate using this IP
- When Container dies => Pod dies => new pod created => with new IP
- So another component **Service** is used

### Service

- Service is static IP attached to each POD
- Lifecycles of service and pod are not connected
- **External** service opens connection from external sources (clients)
- But DB, cache need not be external so **Internal** service is used for them

### Ingress

- External service by default has Node IP and port => not fancy
- **Ingress** => before service request goes to ingress and then it forwads it to service => fancy url etc

### ConfigMap and Secrets

- **ConfigMap** and **Secret** => they live in the K8s cluster
  - Usecases => secrets, db username/password etc

### Volumes

- Persistent data even if the container is gone
- Attaches a physical (remote or local) storage to your pod
- External HDrive plugged in K8s cluster

### Deployment & Stateful Set

- Pod dies => downtime => **Replicasets**
- **Service** is also a **Load Balancer** if one pod is busy it can forward the request to another => replicaset
- **Deployment** => scale up/down of replcas of pods
- In practice we work with **Deployment** and deployment manages pods
- DBs => replicas => deployment cant handle this because db replicas would need to access the same storage
- **Stateful Set** => meant specifically for apps like dbs => ensures data consistency
- Stateful set works like deployment but it makes sures of sync dbs write and read
- Dbs in K8s cluster are tedious => so common practice to host stateful apps outside of the cluster so that cluster can remain stateless and scale up or down easily

### Output

- Robust architechture => even if one worker node dies, we would not have the downtime
