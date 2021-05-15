### Volumes

- No data persistence out of the box
- Storage must be avail for all nodes
- Storage must survive even if the whole cluster crashes
- Use case for persistent storage => dbs, file system etc

### Persistent Volumes

- A cluster resource just like RAM or CPU
- Created via yml file. kind: PersistentVolume
- Takes storage from physical space
- We manage storage => remote or physical
- Not a namespace => so, accessible throughout the cluster

### Local VS Remote Volume Types

- Local volumes violates the following 2 rules of data persistence
  - Not being tied to 1 specific node
  - Must survive cluster crashes scenario

### Persistent Volume Claim (pvc)

- Claims the volume with certain storage size or capacity and permissions like access etc
- Pod requests the volume through PV claim
- Claim tries to find a volume in the cluster
- Volume has the actual storage backend
- Claims must exist in the same namepsace as the pods using it
- Once pod's claim is accepted => volume is mounted to the pod and eventually to the pod's container(s)
- When pod dies and new pod gets created, it will have access to the vol and all the changes prev pod made

### ConfigMap & Secret

- Both are local volumes, and not created my pv and pvc
- Managed by K8s

### Storage Class

- Provisions persistent vols dynamically, when pvc claims it (demand and supply)
