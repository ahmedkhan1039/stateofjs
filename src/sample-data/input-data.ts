
type NodeType = "Category" | "Works On" | "Interests" | "Is Happy"

interface Edge {
  id: string,
  source: string,
  target: string,
  weight: number,
}

interface Node {
  id: string;
  type: NodeType;
  label: string;
}

interface CountryData {
  nodes: Node[],
  edges: Edge[],
}

interface OutputData {
  [country: string]: CountryData
}