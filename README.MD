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

this is a visual application to see all the logs that are stored in the log folder, you can actualy manually add logs there if you have any and want to check how it works.

### how to run

when running the the log command for the first time it will add in your package.json file a script

```json
"scripts": {
    "log-page": "node node_modules/log-into-file/paginator.js"
}
```

the default will be 'log-page' and you can run it on your terminal

```bash
$ npm run log-page
```

if you want to change the default just run

```js
log("your_text", "your_tag", "your_function_name");

// you can set your tag to undefined too!
```

then you can run

```bash
$ npm run your-function-name
```

# Author

Filippo Grassano
@arerorero

for any tips -> [Github](https://github.com/arerorero/log-into-file)
