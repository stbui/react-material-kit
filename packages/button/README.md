# Button

npx react-docgen ./packages/button/src/button.tsx -o ./packages/button/src/docgen.json --pretty

# 示例

### 基本用法

<!--demo-->

```jsx
import { Button } from 'stbui';

class Demo extends React.Component {
  render() {
    return (
      <div>
        <Button>base</Button>
        <Button color="primary">primary</Button>
        <Button color="accent">accent</Button>
        <Button color="warn">warn</Button>
        <br />
        <Button raised>raised</Button>
        <Button raised color="primary">primary</Button>
        <Button raised color="accent">accent</Button>
        <Button raised color="warn">warn</Button>
        <br />
        <Button stroked>stroked</Button>
        <Button stroked color="primary">primary</Button>
        <Button stroked color="accent">accent</Button>
        <Button stroked color="warn">warn</Button>
        <br />
        <Button fab>fab</Button>
        <Button fab color="primary">primary</Button>
        <Button fab color="accent">accent</Button>
        <Button fab color="warn">warn</Button>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```

<!--:::-->

# API

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :----- | :----------- | :--- |

