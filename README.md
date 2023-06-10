# Material UI Context Menu

install

```cli
npm i mui-context-menu
```

```cli
yarn add mui-context-menu
```

## Features

- free to use anything you want for context children
- customize your animation
- **support light and dark mode**
- compatible with your **material ui theme**

### Usage and Types

```jsx

import { ListItemButton, Typography } from "@mui/material";
import MuiContextMenu from "mui-context-menu"


const YourContextMenu = () => {

  const data = /*your date */

  return (
    <>
      {data.map((item) => (
        <ListItemButton
          key={item.id}
          sx={{ p: 2 }}
          onClick={() => {
            item.callback();
          }}
        >
          {item.Icon}
          <Typography sx={{ mx: 1 }}>
            {item.label}
          </Typography>
        </ListItemButton>
      ))}
    </>
  );
}


const YourComponent = () => {

    return <MuiContextMenu menuItems={<YourContextMenu />}>
        <button>Open Context</button>
    </MuiContextMenu>

};

```
