import React, { useState } from "react";

import { Search, Settings, Plus } from "neetoicons";
import { Typography } from "neetoui";
import { MenuBar as NeetoUIMenubar } from "neetoui/layouts";

const MenuBar = ({ showMenu }) => {
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(true);
  const [isTagsSearchCollapsed, setIsTagsSearchCollapsed] = useState(true);

  return (
    <NeetoUIMenubar showMenu={showMenu} title="Contacts">
      <NeetoUIMenubar.Block active count={0} label="All" />
      <NeetoUIMenubar.Block count={0} label="Archived" />
      <NeetoUIMenubar.Block count={0} label="Completed" />
      <NeetoUIMenubar.Block count={4} label="Phase 2" />
      <NeetoUIMenubar.SubTitle
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
      </NeetoUIMenubar.SubTitle>
      <NeetoUIMenubar.Search
        collapse={isSearchCollapsed}
        onCollapse={() => setIsSearchCollapsed(true)}
      />
      <NeetoUIMenubar.SubTitle
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
      </NeetoUIMenubar.SubTitle>
      <NeetoUIMenubar.Search
        collapse={isTagsSearchCollapsed}
        onCollapse={() => setIsTagsSearchCollapsed(true)}
      />
    </NeetoUIMenubar>
  );
};

export default MenuBar;
