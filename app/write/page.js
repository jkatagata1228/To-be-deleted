const Write = () => {
  return (
    <div className="p-20">
      <h4>Write</h4>
      <form action="/api/post/new" method="POST">
        <input name="title" placeholder="title"></input>
        <input name="content" placeholder="content"></input>
        <button type="submit">作成</button>
      </form>
    </div>
  );
};

export default Write;
