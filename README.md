# Material Design icons icons for deno / Preact

**License** [Apache License Version 2.0](https://github.com/google/material-design-icons/blob/master/LICENSE)

**Project** [http://google.github.io/material-design-icons/](http://google.github.io/material-design-icons/)

[See available icons here](https://react-icons.github.io/react-icons/icons?name=md)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "preact":  "https://esm.sh/preact@10.15.1",
    "preact/": "https://esm.sh/preact@10.15.1/",
    "react-icons/md":  "https://cdn.jsdelivr.net/gh/urielch/react-icons-md@1.0.4/mod.ts",
    "react-icons/md/": "https://cdn.jsdelivr.net/gh/urielch/react-icons-md@1.0.4/ico/",
  }
}
```

## Direct import sample

```ts
import { Md123 } from "https://deno.land/x/react_icons_md@1.0.4/mod.ts"
```

## import_map import sample

```ts
import { Md123 } from "react-icons/md"
```

## minimal import

```ts
import { Md123 } from "react-icons/md/Md123.ts"
```

## minimal import using default export

```ts
import Md123 from "react-icons/md/Md123.ts"
```

