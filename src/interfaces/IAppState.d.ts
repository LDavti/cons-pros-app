
interface IAppState {
  cons: IElement[];
  pros: IElement[];
}

interface IElement {
  index: number;
  value: string;
}

type Parts = "cons" | "pros";
