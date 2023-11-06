/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface Some {
  title: string;
}
class Component<T> {
  constructor(public props: T) {}
}

class Page extends Component<Some> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
