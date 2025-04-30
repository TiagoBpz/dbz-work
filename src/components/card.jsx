// components/card.jsx
import style from "./card.module.css";

export const Card = ({ img, text, race, planet, ki, maxKi, sexo }) => {
    return (
        <section className={style.carta}>
            <div className={style.wrapCard}>
                <img className={style.img} src={img} alt={text} />
            </div>

            <div className={style.texto}>
                <h3>{text}</h3>

                {race && (
                    <p>
                        <strong>Raça:</strong> {race}
                    </p>
                )}

                {planet && (
                    <p>
                        <strong>Planeta:</strong> {planet}
                    </p>
                )}

                {sexo && (
                    <p>
                        <strong>Sexo:</strong> {sexo}
                    </p>
                )}

                {ki !== undefined && (
                    <p>
                        <strong>Ki:</strong> {ki}
                    </p>
                )}

                {maxKi !== undefined && (
                    <p>
                        <strong>Ki Máximo:</strong> {maxKi}
                    </p>
                )}
            </div>
        </section>
    );
};
