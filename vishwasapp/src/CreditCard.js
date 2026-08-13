import "./CreditCard.css";

function CreditCard({
  name,
  number,
  expMonth,
  expYear,
  cvc
}) {
  return (
    <div className="card-preview">

      {/* FRONT OF CARD */}
      <div className="card card-front">

        <div className="card-chip">
          <span className="chip-circle"></span>
          <span className="chip-ring"></span>
        </div>

        <p className="card-number">
          {number || "0000 0000 0000 0000"}
        </p>

        <div className="card-bottom-row">

          <span className="card-name">
            {name ? name.toUpperCase() : "JANE APPLESEED"}
          </span>

          <span className="card-expiry">
            {expMonth || "00"}/{expYear || "00"}
          </span>

        </div>

      </div>

      {/* BACK OF CARD */}
      <div className="card card-back">

        <div className="card-stripe"></div>

        <div className="card-cvc-strip">

          <span className="card-cvc-placeholder"></span>

          <span className="card-cvc">
            {cvc || "000"}
          </span>

        </div>

      </div>

    </div>
  );
}

export default CreditCard;