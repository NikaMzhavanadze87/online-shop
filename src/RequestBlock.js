import "./RequestBlock.css";

function RequestBlock() {
  return (
    <div
      className="request-container"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/photos/image102.png)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        isolation: "isolate",
      }}
    >
      <div className="request-advertise">
        <h2>An easy way to send requests to all suppliers</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt.
        </p>
      </div>
      <div className="form-container">
        <form className="form">
          <h4>Send quote to suppliers</h4>
          <input
            type="text"
            placeholder="What item you need?"
            className="request-product"
          />
          <textarea
            placeholder="Type more details"
            className="message"
          ></textarea>
          <div className="input-select-container">
            <input
              type="text"
              placeholder="Quantity"
              className="product-quantity"
            />
            <select>
              <option value="">Pcs</option>
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
              <option value="category3">Category 3</option>
            </select>
          </div>
          <button type="submit" className="btn-inquiry">
            Send inquiry
          </button>
        </form>
      </div>
    </div>
  );
}

export default RequestBlock;
