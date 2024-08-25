const PaymentMode = () => {
  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-lg-12">
          <div className="box-shadow">
            <p>
              <b>Payment Mode</b>
            </p>
            <div className="row justify-content-start">
              <div className="col-lg-6">
                <ul className="list-style-none">
                  <li><i class="fa-solid fa-check"></i> Deposit to Account</li>
                  <li><i class="fa-solid fa-check"></i> Credit Card/Debit Card</li>
                  <li><i class="fa-solid fa-check"></i> Wallets (PayTM/PhonePe/Amazon etc.)</li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul className="list-style-none">
                  <li><i class="fa-solid fa-check"></i> Net Banking</li>
                  <li><i class="fa-solid fa-check"></i> UPI</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMode;
