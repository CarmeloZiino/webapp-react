import StarRating from "./StarRating"


export default function ReviewCard({review}){

    const {id, name, vote, text} = review

    return(
        <>
            <div key={id} className="">
                <div className="section-details-rev">
                    <h5 className="titleRev">{name}</h5>
                    <p className="movieRev">
                        {text}
                    </p>
                    <span className="voteRev">Voto: <StarRating vote={vote}/> {vote} / 5</span>

                </div>
            </div>
        </>
    )
}