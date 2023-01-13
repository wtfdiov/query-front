import { URLItem } from "./URLInspect.styles";

type URLInspectProps = {
    list: string[]
}

export default function URLInspect({ list }: URLInspectProps) {
    return <div>{list.map(url => <URLItem>{url}</URLItem>)}</div>;
}