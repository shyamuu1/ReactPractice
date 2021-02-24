export type GameContainerProps = {
    children:React.ReactNode;
}

export type BoardProps = {
    squares:string[];
    clicked: (index:any) =>  void;
}

export type SquareProps = {
    clicked: (index: any) => void;
    value:string;
    current:any;
}

export type TurnlistProps = {
    move: number;
    Jump: (val:any) => void;
}