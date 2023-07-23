const Write = () => {
  return (
    <div className="write-container">
      <h4>作成ページ</h4>
      <form action="/api/post/new" method="POST">
        <input name="title" placeholder="title"></input>
        <input name="content" placeholder="content"></input>
        <button type="submit">作成</button>
      </form>
    </div>
  );
};

export default Write;
