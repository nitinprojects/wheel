import React, { useState } from "react";

import { Search, Settings, Plus } from "neetoicons";
import { Typography } from "neetoui";
import { MenuBar } from "neetoui/layouts";

const ContactsMenuBar = ({ showMenu }) => {
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(true);
  const [isTagsSearchCollapsed, setIsTagsSearchCollapsed] = useState(true);

  return (
    <MenuBar showMenu={showMenu} title="Contacts">
      <MenuBar.Block active count={0} label="All" />
      <MenuBar.Block count={0} label="Archived" />
      <MenuBar.Block count={0} label="Completed" />
      <MenuBar.Block count={4} label="Phase 2" />
      <MenuBar.SubTitle
        iconProps={[
          {
            icon: Search,
            onClick: () =>
              setIsSearchCollapsed(isSearchCollapsed => !isSearchCollapsed),
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
      <MenuBar.Search
        collapse={isSearchCollapsed}
        onCollapse={() => setIsSearchCollapsed(true)}
      />
      <MenuBar.SubTitle
        iconProps={[
          {
            icon: Settings,
          },
          {
            icon: Plus,
          },
          {
            icon: Search,
            onClick: () =>
              setIsTagsSearchCollapsed(
                isTagsSearchCollapsed => !isTagsSearchCollapsed
              ),
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
      <MenuBar.Search
        collapse={isTagsSearchCollapsed}
        onCollapse={() => setIsTagsSearchCollapsed(true)}
      />
    </MenuBar>
  );
};

export default ContactsMenuBar;
