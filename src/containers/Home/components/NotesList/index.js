import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { loadNotes } from "../../../../services/notes";
import { onError } from "../../../../libs/errorLib";
import {
  buttonTransitionOut,
  buttonTransitionIn
} from "../../../../styles/buttons";
import { colors as c } from "../../../../styles/color";

import Note from "./components/Note";

const NotesListContainer = styled.div`
  margin-top: 60px;
  width: 100%;

  h1 {
    font-weight: 600;
  }
`;

const Notes = styled.div`
  margin-top: 30px;
  width: 100%;
`;

const AddNote = styled.div`
  align-items: center;
  background: none;
  border: 1px solid ${c.gray.medium};
  border-radius: 5px 5px 0 0;
  display: flex;
  height: 35px;
  margin-top: 10px;
  padding: 10px;
  width: 100%;
  transition: ${buttonTransitionOut};

  &:hover {
    border: 1px solid ${c.gray.dark};
    transition: ${buttonTransitionIn};
  }

  b {
    padding: 0 5px;
  }
`;

const NotesList = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    async function getNotes() {
      try {
        const notes = await loadNotes();
        setNotes(notes);
      } catch (e) {
        onError(e);
      }
    }

    getNotes();
  }, []);

  const notenote = [...Array(2)];

  return (
    <NotesListContainer>
      <h1>Your Notes</h1>
      <Notes>
        <AddNote>
          <b>{"\uFF0B"}</b> Create a new note
        </AddNote>
        {notenote.map((note, currentIndex) => (
          <Note lastItem={currentIndex === notenote.length - 1} />
        ))}
      </Notes>
    </NotesListContainer>
  );
};

export default NotesList;
