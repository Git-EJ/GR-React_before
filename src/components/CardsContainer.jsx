import {dataCard} from '../data/DataCard'
import Cards from './Cards'


function CardsContainer() {
    return (
        
        <section className="cards-container">

            <h2 className="reno">—————— RENOVATION INTERIEURE ——————</h2>

            <div className="left-column">

                {dataCard
                    .filter(({isLeft}) => isLeft)
                    .map(({ metier, id, dot, color, background, backtext1, backtext2, backtext3, backtext4 }) => (
                        <Cards key={id}
                            metier={metier}
                            id={id}
                            dot={dot}
                            color={color}
                            background={background}
                            backtext1={backtext1}
                            backtext2={backtext2}
                            backtext3={backtext3}
                            backtext4={backtext4}
                        />
                    ))
                }

            </div>

            <div className="right-column">

                {dataCard
                    .filter(({isLeft}) => !isLeft)
                    .map(({ metier, id, dot, color, background, backtext1, backtext2, backtext3, backtext4 }) => (
                        <Cards key={id}
                            metier={metier}
                            id={id}
                            dot={dot}
                            color={color}
                            background={background}
                            backtext1={backtext1}
                            backtext2={backtext2}
                            backtext3={backtext3}
                            backtext4={backtext4}
                        />
                    ))
                }
            </div>

        </section>
    )
}

export default CardsContainer;

