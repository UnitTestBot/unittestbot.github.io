---
name: FAQ
route: /docs/cpp/faq
parent: Documentation
description: In case you've faced some issues, we may have already detected them. This page describes all known problems with corresponding solutions. 
---

import CertificatesIssuePng from '/resources/images/CertificatesIssue.png';


# FAQ


## Docker complains about Harbor certificates identity during installation

### Issue Description

You may face such errors while installing the UnitTestBot C++ docker image on a target host:

<img src={CertificatesIssuePng} className="demoPng"/>

### Solution

> 📝 **Note**
>
> Only **sudo**ers can make this change.


You need to add a Harbor certificate to `/etc/docker/cert.d` folder like it is shown below:

```sh
$ ls -lah /etc/docker/certs.d/docker-hub.tools.huawei.com/cacert.crt
-rw-r--r-- 1 root root 4.7K Nov 26 18:16 /etc/docker/certs.d/docker-hub.tools.huawei.com/cacert.crt
$ ls -lah /etc/docker/certs.d/10.116.240.150/cacert.crt
-rw-r--r-- 1 root root 4.7K Nov 26 18:16 /etc/docker/certs.d/10.116.240.150/cacert.crt
```

...and add the corresponding insecure-registries parameter to /etc/docker/daemon.json configuration file (create one if it doesn't exist):

```sh
$ cat /etc/docker/daemon.json
{
  "insecure-registries" : ["docker-hub.tools.huawei.com"],
  "data-root": "/mnt/docker-data",
  "storage-driver": "overlay"
}
```

> 📝 **Note**
>
> Each zone (Green/Yellow/Red) has its own Docker hub, please check the exact URL with system administrator.