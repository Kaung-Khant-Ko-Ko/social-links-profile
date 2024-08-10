import Image from "./Image.js";
import Button from "./Button.js";

function Card() {
  return (
    <div className="card">
      <Image />
      <h1 className="name text">Kaung Khant Ko Ko</h1>
      <h2 className="location text">Bangkok, Thailand</h2>
      <p className="text">"Front-end developer and avid reader."</p>
      <Button name="GitHub" link="https://github.com/Kaung-Khant-Ko-Ko" />
      <Button
        name="Frontend Mentor"
        link="https://www.frontendmentor.io/profile/Kaung-Khant-Ko-Ko"
      />
      <Button
        name="LinkedIn"
        link="https://www.linkedin.com/in/kaung-khant-ko-ko/"
      />
      <Button name="Kaggle" link="https://www.kaggle.com/kaungkhantkoko" />
      <Button
        name="HackerRank"
        link="https://www.hackerrank.com/profile/kaungkhantkoko"
      />
    </div>
  );
}

export default Card;
