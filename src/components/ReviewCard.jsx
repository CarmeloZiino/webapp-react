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
                    <span className="voteRev">Voto: {vote}</span>
                </div>
            </div>
        </>
    )
}