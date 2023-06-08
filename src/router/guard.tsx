// 路由守卫
export default function Guard({ element }: { element: JSX.Element }) {

    // 检测是否存在token
    if (!localStorage.getItem("token")) {
        setTimeout(() => {
            window.location.href = "/login";
        }, 1000);
        return <div>请先登录</div>;
    }

  return (
    <div>
      <span>Guard</span>
      {element}
    </div>
  );
}
