import React, { useState, KeyboardEvent } from "react";
import { Container, Input, Content } from "./QueryInput.styles";
import location from "location";
import Button from "components/Button/Button";
import { create } from "services/crawl.service";

export default function QueryInput() {
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

  async function handleSubmit() {
    const query = await create({keyword: key});
    console.log(query);
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
