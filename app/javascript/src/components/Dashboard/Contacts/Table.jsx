import React from "react";

import { Table as NeetoUITable } from "neetoui";

import { buildContactColumnData, CONTACTS_DATA } from "./constants";

const Table = ({ setShowDeleteAlert, setDeleteContactName }) => (
  <NeetoUITable
    currentPageNumber={1}
    defaultPageSize={8}
    handlePageChange={() => {}}
    rowData={CONTACTS_DATA}
    columnData={buildContactColumnData(
      setShowDeleteAlert,
      setDeleteContactName
    )}
    onRowClick={() => {}}
    onRowSelect={() => {}}
  />
);

export default Table;
