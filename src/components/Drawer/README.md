# Drawer

# 示例

### 基本用法

<!--demo-->

```jsx
import { Drawer } from 'stbui';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  render() {
    return (
      <div>
        <Button
          onClick={() => {
            this.setState({ active: !this.state.active });
          }}
        >
          open drawer
        </Button>
        <Drawer active={this.state.active}>drawer show</Drawer>
        <Drawer active={true} position="end">
          right
        </Drawer>
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

