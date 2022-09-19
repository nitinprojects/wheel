import React, { useState, useEffect } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Button, PageLoader } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import EmptyState from "components/Common/EmptyState";

import { NOTES_LIST_DATA } from "./constants";
import NotesList from "./NoteList";
import NotesMenuBar from "./NotesMenuBar";

const Notes = () => {
  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    setNotes(NOTES_LIST_DATA);
    setLoading(false);
  }, []);

  if (loading) {
    return <PageLoader />;
  }

  return (
    <>
      <NotesMenuBar showMenu={showMenu} />
      <Container>
        <Header
          menuBarToggle={() => setShowMenu(showMenu => !showMenu)}
          title="All Notes"
          actionBlock={
            <Button
              icon="ri-add-line"
              label="Add New Note"
              onClick={() => {}}
            />
          }
          searchProps={{
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
          }}
        />
        {notes.length ? (
          <NotesList data={notes} />
        ) : (
          <EmptyState
            image={EmptyNotesListImage}
            primaryAction={() => {}}
            primaryActionLabel="Add New Note"
            subtitle="Add your notes to send customized emails to them."
            title="Looks like you don't have any notes!"
          />
        )}
      </Container>
    </>
  );
};

export default Notes;
