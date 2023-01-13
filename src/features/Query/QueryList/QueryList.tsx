import { useState } from "react";
import { useQuery } from "../Query.context";
import Modal from "components/Modal/Modal";
import QueryCard from "../QueryCard/QueryCard";
import { ListContainer, EmptyMessage } from "./QueryList.styles";
import URLInspect from "../URLInspect/URLInspect";
import { QueryData } from "interfaces/QueryData";
import location from "location";

export default function QueryList() {
  const { state } = useQuery();
  const [isModalOpen, setModalOpen] = useState(false);
  const [listURL, setList] = useState<string[]>([]);

  function openInfo(urls: string[]) {
    setList(urls);
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  function renderList() {
    if (state.length > 0) {
      return state.map((query: QueryData) => (
        <QueryCard key={query.id} query={query} openInfo={openInfo} />
      ));
    }
    return <EmptyMessage>{location.emptyList}</EmptyMessage>;
  }

  return (
    <>
      <ListContainer>{renderList()}</ListContainer>
      <Modal isOpen={isModalOpen} handleClose={closeModal}>
        <URLInspect list={listURL} />
      </Modal>
    </>
  );
}
