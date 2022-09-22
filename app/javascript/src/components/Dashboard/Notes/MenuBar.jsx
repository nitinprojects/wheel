import React from "react";

import { Settings, Plus, Search } from "neetoicons";
import { Typography } from "neetoui";
import { MenuBar as NeetoUIMenubar } from "neetoui/layouts";

const MenuBar = ({ showMenu }) => (
  <NeetoUIMenubar showMenu={showMenu} title="Notes">
    <NeetoUIMenubar.Block active count={200} label="All" />
    <NeetoUIMenubar.Block count={80} label="Users" />
    <NeetoUIMenubar.Block count={60} label="Leads" />
    <NeetoUIMenubar.Block count={60} label="Visitors" />
    <NeetoUIMenubar.SubTitle
      iconProps={[
        {
          icon: Search,
        },
      ]}
    >
      <Typography
        component="h4"
        style="h5"
        textTransform="uppercase"
        weight="bold"
      >
        Segments
      </Typography>
    </NeetoUIMenubar.SubTitle>
    <NeetoUIMenubar.Block count={80} label="Europe" />
    <NeetoUIMenubar.Block count={60} label="Middle-East" />
    <NeetoUIMenubar.Block count={60} label="Asia" />
    <NeetoUIMenubar.SubTitle
      iconProps={[
        {
          icon: Search,
        },
        {
          icon: Plus,
        },
        {
          icon: Settings,
        },
      ]}
    >
      <Typography
        component="h4"
        style="h5"
        textTransform="uppercase"
        weight="bold"
      >
        Tags
      </Typography>
    </NeetoUIMenubar.SubTitle>
    <NeetoUIMenubar.Block count={80} label="Sales" />
    <NeetoUIMenubar.Block count={60} label="Finance" />
    <NeetoUIMenubar.Block count={60} label="User Experience" />
  </NeetoUIMenubar>
);

export default MenuBar;
