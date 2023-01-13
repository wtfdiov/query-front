import { useQuery } from "../Query.context";
import QueryCard from "../QueryCard/QueryCard";
import { ListContainer, EmptyMessage } from "./QueryList.styles";
import { QueryData } from "interfaces/QueryData";
import location from "location";

export default function QueryList() {
  const { state } = useQuery();

  function renderList() {
    if (state.length > 0) {
        return state.map((query: QueryData) => (
            <QueryCard key={query.id} query={query} />
          ))
    }
    return <EmptyMessage>{location.emptyList}</EmptyMessage>;
  }

  return (
    <>
      <ListContainer>
        {renderList()}
      </ListContainer>
    </>
  );
}
