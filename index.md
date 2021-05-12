## Kubernetes

- Opensource container orchestration tool
- Dev by Google
- Manage applications with hundreds of thousands containers in different envs

#### Features

- Zero Downtime
- High Availability
- Scalability
- Disaster Recovery

#### Basic Architechture

- Master Node
- And Worker Nodes where each node has **kublet** process running on it. **kublet** helps clusters talk to each other
- Worker nodes are where the actual work is happening
- Master node runs several Kubernetes processes that manage cluster properties.

#### Master Node

- Entrypoint to Kubernetes cluster
- API server => we talk to it
- Controller manager => process which keeps track of what's happening in the cluster => a container died => it needs to be restarted
- Scheduler => intelligent process which decides on which worker node the next container should be scheduled on based on the available resources and load
- **etcd** => holds the current state of cluster (snapshots)
- Virtual Network => makes it possible to all nodes talk to each other => master and worker
- Our apps run on worker nodes => so worker nodes have high load
- Master only runs the master processes
- But if master node goes down, we'd not be able to talk to the cluster so in production, even master node has it's backup => at least 2 master nodes

#### Pods

- Smallest unit we interact with in Kubernetes
- Each worker node has multiple **Pods** and each pod has multiple containers
- One **Pod** per application => db, server etc.
- Each **Pod** is a self container server with it's own IP Address
- They communicate each other using internal IPs
- If a container dies => **Pod** will spin up a new container
- If a **Pod** dies => new **Pod** will be spinned up too
- If a **Pod** gets restarted or recreated => it's IP Address changes => inconvinient

#### Services

- Sitting in front of each **Pod** that talks to each other
- Permanent IPs
- Pod behind a service dies and recreated => service stays in place => services' lifecycles are not tied to each other
- Service is also a load balancer

#### Configurations

- All clients (curl, scripts, kubectl, GUI etc) all talks to API server of Kubernetes
- Yaml Format Conf
