### StatefulSet

- **Stateless** apps are deployed using **Deployment** component
- **Stateful** apps are deployed using **StatefulSet** component
- Deployment's replica pods are addressed randomly, whether deleting or load balancing the requests
- But in stateful apps like dbs => pods cannot be deleted or created with random addressing
- Each pod has its own identity in stateful set, they are not interchangeable => persistent identifier
- So if a pod dies and gets replaced by new pod => new pod will keep the old pod's identity

### Scaling Database Apps

- Not all pod replicasets can write
- Only one will write => **Master** and others will read **Slaves**
- So not all pods are same in stateful set
- They do not use the same physical storage => each one has their own replica of volume. And they sync their data, continuously.
- So, master changes it's data and all slaves update their data
- **Cluster Mechanism** ensures all this sync of data b/w pod replicas of a stateful set
- New pod replica joins => it first clones the data from prev pod and starts cont sync
- We can have temp storage in stateful set, and not persist the data at all by relying on the data replication but if all the pods die (including master) => all the data will be lost
- So persistent component needs to be there and if all pods are wiped out or even all deployments and stateful set, persisted vol will still be there as it's lifecycle is not connected to other components like deployments and stateful set
- Each pod has it's own data persistent storage (vol) along with the pod's state (master or slave and other chars) => when pod dies, persistent pod identifier makes sures that the persistent vol reattached to the replaced pod (new pod)
- For this reattachment to work, storage must be remote. Because if pod needs to be scheduled from one to other node, prev storage will be avail on the other node as well. But in local storage, vols are tied to a specific node

### Pod Identifier

- Fixed ordered names
- First one is master, synchronous creation (await) => if first replica is not created, second wont be either
- Deletion will start from last pod => and until its not deleted, second last wont be touched for deletion
- Individual DNS names for each pod in stateful set so when pod restarts, ip will change but endpoint wont, so sticky identity pods in the stateful set

- Containerization is best suited for stateless apps
