# Card

# 示例

### 基本用法

<!--demo-->

```jsx
import { Card, CardTitle, CardText, CardMedia, CardActions } from 'stbui';

class Demo extends React.Component {
  render() {
    const style = { maxWidth: 344, marginLeft: 'auto', marginRight: 'auto' };

    return (
      <Card style={style}>
        <CardTitle>title</CardTitle>
        <CardActions>
          <Button>Action 1</Button>
          <Button>Action 2</Button>
        </CardActions>
      </Card>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```

<!--:::-->

# API

#### Card

| 属性      | 类型   | 默认值 | 可选值／参数 | 说明 |
| :-------- | :----- | :----- | :----------- | :--- |
| children  | node   | -      | -            |      |
| className | string | -      | -            |      |

#### CardTitle

| 属性      | 类型   | 默认值 | 可选值／参数 | 说明 |
| :-------- | :----- | :----- | :----------- | :--- |
| children  | node   | -      | -            |      |
| className | string | -      | -            |      |

#### CardText

| 属性      | 类型   | 默认值 | 可选值／参数 | 说明 |
| :-------- | :----- | :----- | :----------- | :--- |
| children  | node   | -      | -            |      |
| className | string | -      | -            |      |

#### CardMedia

| 属性      | 类型   | 默认值 | 可选值／参数 | 说明 |
| :-------- | :----- | :----- | :----------- | :--- |
| children  | node   | -      | -            |      |
| className | string | -      | -            |      |

#### CardActions

| 属性      | 类型   | 默认值 | 可选值／参数 | 说明 |
| :-------- | :----- | :----- | :----------- | :--- |
| children  | node   | -      | -            |      |
| className | string | -      | -            |      |
