# Material Design icons icons for deno / Preact

**License** [Apache License Version 2.0](https://github.com/google/material-design-icons/blob/master/LICENSE)

**Project** [http://google.github.io/material-design-icons/](http://google.github.io/material-design-icons/)

[See available icons here](https://react-icons.deno.dev/md)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "preact":  "https://esm.sh/preact@10.22.1",
    "preact/": "https://esm.sh/preact@10.22.1/",
    "react-icons/md":  "https://cdn.jsdelivr.net/gh/urielch/react-icons-md@1.0.10/mod.ts",
    "react-icons/md/": "https://cdn.jsdelivr.net/gh/urielch/react-icons-md@1.0.10/ico/",
  }
}
```

## Import an icon without import_map by and afer loading all icons from the lib md

```ts
import { Md123 } from "https://deno.land/x/react_icons_md@1.0.10/mod.ts"
```

## import_map import an icon from all icons

```ts
import { Md123 } from "react-icons/md"
```

## import a single icon, downloading just one icon

```ts
import { Md123 } from "react-icons/md/Md123.ts"
```

or using default export

```ts
import Md123 from "react-icons/md/Md123.ts"
```

