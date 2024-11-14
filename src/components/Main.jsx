function Main({ data }) {
  return (
    <main className="main-content">
      <div className="image-container">
        <img 
          src={data.url} 
          alt={data.title} 
          className="nasa-image"
        />
      </div>
      <div className="description">
        <h2>{data.title}</h2>
        <p>{data.explanation}</p>
        <p className="date">Date: {data.date}</p>
      </div>
    </main>
  )
}

export default Main