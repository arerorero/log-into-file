# log-into-file

## Install

```bash
$ npm i log-into-file
```

## Usage

### just log

```js
import log from "log-into-file";

log("whatever! i love nimrod");

// saves a log like this -> whatever! i love nimrod - 16:29:22
```

### log but with tag

```js
import log from "log-into-file";

log("i'm in search of a job", "help");

// saves a log like this -> [HELP] i'm in search of a job - 16:29:51
```

## Author

Filippo Grassano
@arerorero
