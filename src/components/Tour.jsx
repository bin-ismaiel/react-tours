import { useState } from "react";

export default function Tour({ name, info, image, price, id, onDelete }) {
  let desc;
  const [showMore, setShowMore] = useState(false);
  if (!showMore) {
    desc = info.slice(0, 250) + "...";
  } else {
    desc = info;
  }
  return (
    <article>
      <div>
        <img src={image} width="100px" />
        <span>${price}</span>
      </div>

      <div>
        <h3>{name}</h3>
        <div>
          <p>{desc}</p>

          {
            <button
              onClick={() => {
                setShowMore(!showMore);
              }}
            >
              {showMore ? "Show Less" : "Read More"}
            </button>
          }
        </div>
        <button onClick={() => onDelete(id)}>Not Interested</button>
      </div>
    </article>
  );
}
