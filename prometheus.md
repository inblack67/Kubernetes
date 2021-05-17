### Prometheus

- Modern monitoring tool for highly dynamic container envs
- But can also be used for non containerized envs
- Constantly monitor all services and alert when one service crashes
- Identify problems beforehand
  - CPU usage over 70% => notify admin etc.
  - Logs => disk space run out... => if logs are important, alert when 50% storage is consumed
- Detects n/w load

### Prometheus Architechture

#### Prometheus Server

- Does the actual monitoring work
- Made up of 3 components
  - **Time Series Database** => metrics data (cpu usage, exceptions)
  - **Data Retrieval Worker** => pull mertrics from apps and stores them in db
  - **Web Server** => accepts queries, display data and statistics etc
- Apps prometheus monitor are called **Targets** and unit, you'd like to monitor for a specific target is called a metric and metrics are saved in prometheus db

#### Metric Types

- **Counter** => how many times, something happened?
- **Gauge** => up or down => cpu usage etc
- **Histogram** => how long something took or how large the size was, of the request

#### Collecting Metrics from Targets

- Pulls metric data from targets over http endpoint **ip/metrics**
- So target must expose **/metrics** endpoint and data at this endpoint must be compatible to promethus understanding

#### Export

- Provides data to promethus on **/metrics** endpoint
- MySQL, elastic search have exporters prometheus
- Also available as docker images

#### Monitoring your own apps

- Client libraries for nodejs, go etc
- Shortlived scripts can push their data to prometheus using **Pushgateway** as they might not run long enough for prometheus to scrape them
- Stores data in **timeseries** format thus, cant be inserted to relational dbs for eg.
- **PromQL** => query data from promethues
- **Grafana** => GUI tool

#### Advantage

- Reliable
- Stand alone and self containing
- Works, even if other parts of infrastructures are broken
- No extensive set up needed

#### Disadv

- Difficult to scale => multiple prometheus server for multiple microservices
- Limits monitoring

