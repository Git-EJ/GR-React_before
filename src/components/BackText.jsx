// ==================== INSERT TEXT FOR CARD BACK ==================== 

function InsertBackText({ txt, isLast }) {
    return isLast ? <p>{txt}</p> : <div><p>{txt}</p><hr /></div>
}


function CardBackText({ backtext1, backtext2, backtext3, backtext4, }) {
    const bts = [backtext1, backtext2];
    if (backtext3 !== null) {
        bts.push(backtext3);
    }
    if (backtext4 !== null) {
        bts.push(backtext4);
    }
    return (
        <div className="card-back">
            <div className="card-back-text">
                {bts.map((bt, i) => <InsertBackText key={`${bt}-${i}`} txt={bt} isLast={i === bts.length - 1} />)}
            </div>
        </div>
    );
}

export default CardBackText;
























