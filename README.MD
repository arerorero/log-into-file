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

log("this is a file with a tag (better)", "help");

// saves a log like this -> [HELP] this is a file with a tag (better) - 16:29:51
```

## Log Viewer

### how to run

```js
import { create_page } from "log-into-file";

create_page();

// this will create a desktop application to show all your logs
// for now its very very ugly, i'll redo it later this week
```

### customize your tags

```js
import log, { create_page } from "log-into-file";

log("this is a test log", "tests");

create_page();

// whatever you put into the tag will be added on the html as a class
// this way you can personalize the way you view your logs!
// for now i it just works with 'error', 'success', 'default'(this will be default if you do not put any tag) and 'tag'(this will be default if you put another tag)
```

## Author

Filippo Grassano
@arerorero
