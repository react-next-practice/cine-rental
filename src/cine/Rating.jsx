import Star from "../assets/star.svg";

export default function Rating( { rating } ) {
    const stars = Array(rating).fill(Star);
  return (
    <>
        {
            stars.map((Star, index) => (
                <img key={index} src={Star} width="14" height="14" alt="star" />
            ))
        }
    </>
  )
}
