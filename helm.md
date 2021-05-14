### Helm

- Package manager for kubernetes cluster

### Helm Charts

- Bundle of yml files => commonly used

```sh
helm search $registryName
```

- Private charts repos are also avail
- Define common blue print of yml files where placeholders can be passed from outside => image tag version etc => so no need to duplicate yml files for versioning and other little stuff
- So just 1 yml file for many microservices
- Used in CI/CD => replace values in your build pipeline => on the fly
- Deploying Cluster in multiple envs prod dev test stage => package yml files to make their own chart

### Helm Version 2 & 3

- **V2** had **Tiller** (Helm server which used to inside the cluster). Helm would send yml files and **Tiller** would store them for future refs, so upgrade, rollbacks were possible but tiller had too many prmissions so due to security issues tiller was removed in **V3**
