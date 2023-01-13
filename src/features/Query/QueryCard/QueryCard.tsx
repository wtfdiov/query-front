import { QueryData, QueryStatus } from "interfaces/QueryData";
import location from "location";
import { useEffect, useState } from "react";
import { getById } from "services/crawl.service";
import { useQuery } from "../Query.context";

import Button from "components/Button/Button";
import { Container, Id, Info, Status } from "./QueryCard.styles";

interface Props {
  query: QueryData;
  openInfo: (arg1: string[]) => void;
}

export default function QueryCard({ query, openInfo }: Props) {
  const { dispatch } = useQuery();
  const [isLoading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    if (query.status !== QueryStatus.Done) {
      const pool = setInterval(async () => {
        setLoading(true);
        const data = await getById(query.id);
        dispatch({ type: "update", payload: data });
        if (data.status === QueryStatus.Done) {
          clearInterval(pool);
        }
        setLoading(false);
      }, 3000);
    }
  }, [dispatch, query.id, query.status]);

  const qty = Math.max(query.urls.length - 1, 0);

  return (
    <Container>
      <Id>{query.id}</Id>
      <Info>
        <div>
          {location.searchedTerm} {query.key}
        </div>{" "}
        <div>
          {location.ocurrencies} {qty}
        </div>
      </Info>
      <Button onClick={() => openInfo(query.urls)}>{location.inspect}</Button>
      <Status status={query.status}>
        {isLoading ? "Loading" : query.status}
      </Status>
    </Container>
  );
}
