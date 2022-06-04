# reachability
A package for ionic based apps to determine a device's connection to the internet

### Installation
Install reachability from npm:
```bash
npm install reachability --save
```


### Usage
```Typescript
import { check } from 'reachability';

check().then((online: boolean) => {
	console.log("Online", online);
});