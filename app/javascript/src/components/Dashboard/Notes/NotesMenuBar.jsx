import React from "react";

import { Settings, Plus, Search } from "@bigbinary/neeto-icons";
import { MenuBar } from "@bigbinary/neetoui/layouts";
import { Typography } from "neetoui";

const NotesMenuBar = ({ showMenu }) => (
  <MenuBar showMenu={showMenu} title="Notes">
    <MenuBar.Block active count={200} label="All" />
    <MenuBar.Block count={80} label="Users" />
    <MenuBar.Block count={60} label="Leads" />
    <MenuBar.Block count={60} label="Visitors" />
    <MenuBar.SubTitle
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
    </MenuBar.SubTitle>
    <MenuBar.Block count={80} label="Europe" />
    <MenuBar.Block count={60} label="Middle-East" />
    <MenuBar.Block count={60} label="Asia" />
    <MenuBar.SubTitle
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
    </MenuBar.SubTitle>
    <MenuBar.Block count={80} label="Sales" />
    <MenuBar.Block count={60} label="Finance" />
    <MenuBar.Block count={60} label="User Experience" />
  </MenuBar>
);

export default NotesMenuBar;
