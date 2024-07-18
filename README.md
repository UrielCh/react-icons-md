# Material Design icons icons for preact

[![JSR](https://jsr.io/badges/@preact-icons/md)](https://jsr.io/@preact-icons/md)

**License** [Apache License Version 2.0](https://github.com/google/material-design-icons/blob/master/LICENSE)

**Project** [http://google.github.io/material-design-icons/](http://google.github.io/material-design-icons/)

[See available icons here](https://react-icons.deno.dev/md)

## install the module

```bash
deno add @preact-icons/md
dnpx jsr add @preact-icons/md
pnpm dlx jsr add @preact-icons/md
bunx jsr add @preact-icons/md
```

You may need to update your preact mapping to avoid mixing JSR and http import:
Currently Deno fresh import preact using https://esm.sh/preact http import can not be mixed with JSR package, so you may need to update your preact mapping:
```json
{
 "preact": "npm:preact@10.22.1",
 "preact/jsx-runtime": "npm:preact@10.22.1/jsx-runtime",
 "preact/hooks": "npm:preact@10.22.1/hooks",
}
```

## import an icon from all icons

```ts
import { Md123 } from "@preact-icons/md"
```

## import a single icon, downloading just one icon

```ts
import { Md123 } from "react-icons/md/Md123"
```

or using default export

```ts
import Md123 from "react-icons/md/Md123.ts"
```
