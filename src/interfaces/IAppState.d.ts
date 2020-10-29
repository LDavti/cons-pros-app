
interface IAppState {
  pros: IElement[];
  cons: IElement[];
}

interface IElement {
  index: number;
  value: string;
}

type Parts = "cons" | "pros";
