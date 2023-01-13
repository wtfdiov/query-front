import React, { useState, KeyboardEvent } from "react";
import { Container, Input, Content } from "./QueryInput.styles";
import location from "location";
import Button from "components/Button/Button";
import { create } from "services/crawl.service";
import { useQuery } from "../Query.context";
import { QueryStatus } from "interfaces/QueryData";

export default function QueryInput() {

  const { dispatch } = useQuery();
  const [key, setKey] = useState("");

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
      handleSubmit();
    }
  }

  async function handleKey(e: React.ChangeEvent<HTMLInputElement>) {
    setKey(e.currentTarget.value);
  }

  async function performQuery(keyword: string) {
    return create({ keyword });
  }

  function validateLength(toValidate: string) {
    if (toValidate.length < 3) {
      return false;
    }
    return true;
  }

  async function handleSubmit() {
    if (!validateLength(key)) {
      return
    }
    const query = await performQuery(key);
    dispatch({
      type: "add",
      payload: {
        id: query.id,
        status: QueryStatus.New,
        key,
        urls: [],
      },
    });
    setKey("");
  }

  return (
    <Container>
      <Content>
      <Input value={key} onChange={handleKey} onKeyDown={handleKeyDown} placeholder={location.searchPlaceholder} />
      <Button onClick={handleSubmit}>{location.search}</Button>
      </Content>
    </Container>
  );
}
