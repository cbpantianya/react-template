import { useParams } from "react-router-dom";

export default function HelloView() {
  // 获取路由参数
  const { name } = useParams();
  return (
    <div>
      <span>Hello, {name}</span>
    </div>
  );
}
