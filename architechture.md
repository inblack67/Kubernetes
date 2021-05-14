### K8s Architecture

- Master and worker nodes
- Each node needs to have 3 process installed
  - **Container Runtime** (docker)
  - **Kubelet** => manages pods and their containers
  - **Kube Proxy** => intelligent forwarding request (minimal overheads)

### Master Nodes

- Less load of work than worker nodes
- 4 process run on master node => which controls everything else
  - **API server** => The only entrypoint to cluster => gatekeeper of auth and other interactions => root
  - **Scheduler** => Decides the resources (wokrer nodes, pods, services) accordingly (cpu, ram etc)
    - **Kubelet** => Executes what scheduler decides
  - **Controller Manager** => detects state changes => pods die on any node => detect and restart
  - **etcd** => brain of the cluster => key value store => every change in the cluster gets stored in the etcd
  - Cluster state data is stored in etcd
- In production multiple master nodes are there with sync storage in etcd and load balanced API server

### Add new Master/Node server

- Get new server
- Install all the master/node process
- Add it to the cluster thus, infinite scaling
