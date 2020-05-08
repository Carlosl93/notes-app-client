import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { API } from "aws-amplify";

import { onError } from "../../libs/errorLib";

export default function Notes() {
  const [note, setNote] = useState(null);
  const [content, setContent] = useState(null);

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    function loadNote() {
      return API.get("notes", `/notes/${id}`);
    }

    async function onLoad() {
      try {
        const note = await loadNote();
        const { content } = note;

        setNote(note);
        setContent(content);
      } catch (e) {
        onError(e);
      }
    }

    onLoad();
  }, [id]);

  return <div className="Notes"></div>;
}
